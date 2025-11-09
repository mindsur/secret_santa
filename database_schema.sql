-- Secret Santa Database Schema for Supabase

-- Groups table: stores Secret Santa group information
CREATE TABLE groups (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    admin_code UUID NOT NULL DEFAULT gen_random_uuid(),
    occasion_name TEXT NOT NULL,
    custom_message TEXT,
    budget_limit TEXT,
    participants JSONB NOT NULL, -- Array of participant names
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    expires_at TIMESTAMP WITH TIME ZONE NOT NULL
);

-- Participants table: tracks who joined, assignments, and preferences
CREATE TABLE participants (
    id SERIAL PRIMARY KEY,
    group_id UUID NOT NULL REFERENCES groups(id) ON DELETE CASCADE,
    name TEXT NOT NULL,
    session_id UUID NOT NULL, -- Stored in browser localStorage
    assigned_to TEXT, -- Name of person they're buying for
    gift_preferences TEXT, -- What gifts they want
    joined_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    UNIQUE(group_id, name), -- Each name can only be claimed once per group
    UNIQUE(group_id, session_id) -- Each session can only join once per group
);

-- Index for faster lookups
CREATE INDEX idx_groups_expires ON groups(expires_at);
CREATE INDEX idx_participants_group ON participants(group_id);
CREATE INDEX idx_participants_session ON participants(group_id, session_id);

-- Enable Row Level Security (RLS)
ALTER TABLE groups ENABLE ROW LEVEL SECURITY;
ALTER TABLE participants ENABLE ROW LEVEL SECURITY;

-- RLS Policies: Allow public access (since we don't have auth)
-- In production, you might want to add more restrictions
CREATE POLICY "Allow public read access to groups" ON groups
    FOR SELECT USING (expires_at > NOW());

CREATE POLICY "Allow public insert to groups" ON groups
    FOR INSERT WITH CHECK (true);

CREATE POLICY "Allow admin update to groups" ON groups
    FOR UPDATE USING (true);

CREATE POLICY "Allow public read access to participants" ON participants
    FOR SELECT USING (true);

CREATE POLICY "Allow public insert to participants" ON participants
    FOR INSERT WITH CHECK (true);

CREATE POLICY "Allow public update to participants" ON participants
    FOR UPDATE USING (true);

CREATE POLICY "Allow admin delete participants" ON participants
    FOR DELETE USING (true);

-- Function to clean up expired groups (optional, can be run via cron)
CREATE OR REPLACE FUNCTION cleanup_expired_groups()
RETURNS void AS $$
BEGIN
    DELETE FROM groups WHERE expires_at < NOW();
END;
$$ LANGUAGE plpgsql;
