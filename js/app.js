// Secret Santa Application Logic

// Session Management
function getSessionId() {
    let sessionId = localStorage.getItem('secret_santa_session');
    if (!sessionId) {
        sessionId = crypto.randomUUID();
        localStorage.setItem('secret_santa_session', sessionId);
    }
    return sessionId;
}

// Create a new Secret Santa group
async function createGroup({ occasionName, customMessage, budgetLimit, participants, groupLifetime }) {
    const expiresAt = new Date();
    expiresAt.setDate(expiresAt.getDate() + groupLifetime);

    const { data, error } = await supabase
        .from('groups')
        .insert([{
            occasion_name: occasionName,
            custom_message: customMessage || null,
            budget_limit: budgetLimit || null,
            participants: participants,
            expires_at: expiresAt.toISOString()
        }])
        .select()
        .single();

    if (error) throw error;
    return data;
}

// Get group by ID
async function getGroup(groupId) {
    const { data, error } = await supabase
        .from('groups')
        .select('*')
        .eq('id', groupId)
        .gt('expires_at', new Date().toISOString())
        .single();

    if (error) {
        if (error.code === 'PGRST116') return null; // Not found
        throw error;
    }
    return data;
}

// Get all participants for a group
async function getGroupParticipants(groupId) {
    const { data, error } = await supabase
        .from('participants')
        .select('*')
        .eq('group_id', groupId)
        .order('joined_at', { ascending: true });

    if (error) throw error;
    return data || [];
}

// Get participant by session ID
async function getParticipantBySession(groupId, sessionId) {
    const { data, error } = await supabase
        .from('participants')
        .select('*')
        .eq('group_id', groupId)
        .eq('session_id', sessionId)
        .single();

    if (error) {
        if (error.code === 'PGRST116') return null; // Not found
        throw error;
    }
    return data;
}

// Get participant by name
async function getParticipantByName(groupId, name) {
    const { data, error } = await supabase
        .from('participants')
        .select('*')
        .eq('group_id', groupId)
        .eq('name', name)
        .single();

    if (error) {
        if (error.code === 'PGRST116') return null; // Not found
        throw error;
    }
    return data;
}

// Secret Santa Assignment Algorithm
function assignSecretSanta(participants, allParticipantNames) {
    // Create a derangement (permutation where no element appears in its original position)
    // This ensures everyone gets someone else and forms a circle

    const names = [...allParticipantNames];
    const assignments = {};
    let attempts = 0;
    const maxAttempts = 100;

    while (attempts < maxAttempts) {
        attempts++;
        const shuffled = [...names].sort(() => Math.random() - 0.5);

        // Check if this is a valid derangement
        let valid = true;
        for (let i = 0; i < names.length; i++) {
            if (names[i] === shuffled[i]) {
                valid = false;
                break;
            }
        }

        if (valid) {
            // Create assignments
            for (let i = 0; i < names.length; i++) {
                assignments[names[i]] = shuffled[i];
            }
            return assignments;
        }
    }

    // Fallback: simple circular assignment
    for (let i = 0; i < names.length; i++) {
        assignments[names[i]] = names[(i + 1) % names.length];
    }
    return assignments;
}

// Join a group as a participant
async function joinGroup(groupId, name, sessionId) {
    // Get the group to access all participant names
    const group = await getGroup(groupId);
    if (!group) throw new Error('Group not found');

    // Get current participants
    const existingParticipants = await getGroupParticipants(groupId);
    const joinedNames = existingParticipants.map(p => p.name);

    // Check if this is the first participant or if we need to reassign
    let assignedTo = null;

    if (existingParticipants.length === 0) {
        // First participant - no assignment yet
        assignedTo = null;
    } else {
        // Generate new assignments including this person
        const allNames = [...joinedNames, name];
        const assignments = assignSecretSanta(allNames, allNames);

        // Update all existing participants with new assignments
        for (const participant of existingParticipants) {
            await supabase
                .from('participants')
                .update({ assigned_to: assignments[participant.name] })
                .eq('id', participant.id);
        }

        // Set assignment for new participant
        assignedTo = assignments[name];
    }

    // Insert new participant
    const { data, error } = await supabase
        .from('participants')
        .insert([{
            group_id: groupId,
            name: name,
            session_id: sessionId,
            assigned_to: assignedTo
        }])
        .select()
        .single();

    if (error) throw error;

    // If this is the second participant, we need to assign the first participant
    if (existingParticipants.length === 1) {
        const allNames = [existingParticipants[0].name, name];
        const assignments = assignSecretSanta(allNames, allNames);

        await supabase
            .from('participants')
            .update({ assigned_to: assignments[existingParticipants[0].name] })
            .eq('id', existingParticipants[0].id);

        // Update the current participant's assignment
        data.assigned_to = assignments[name];
        await supabase
            .from('participants')
            .update({ assigned_to: assignments[name] })
            .eq('id', data.id);
    }

    return data;
}

// Update participant's gift preferences
async function updatePreferences(participantId, preferences) {
    const { data, error } = await supabase
        .from('participants')
        .update({ gift_preferences: preferences })
        .eq('id', participantId)
        .select()
        .single();

    if (error) throw error;
    return data;
}

// Reroll all assignments for a group (admin only)
async function rerollGroupAssignments(groupId) {
    // Get all participants
    const participants = await getGroupParticipants(groupId);

    if (participants.length < 2) {
        throw new Error('Need at least 2 participants to assign Secret Santas');
    }

    // Get all names
    const names = participants.map(p => p.name);

    // Generate new assignments
    const assignments = assignSecretSanta(names, names);

    // Update all participants
    const updates = participants.map(participant => {
        return supabase
            .from('participants')
            .update({ assigned_to: assignments[participant.name] })
            .eq('id', participant.id);
    });

    await Promise.all(updates);
}
