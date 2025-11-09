// Internationalization for Secret Santa App
// Supported languages: English (en), Lithuanian (lt)

const translations = {
    en: {
        // Common
        appTitle: "Secret Santa",
        loading: "Loading...",
        cancel: "Cancel",
        save: "Save",
        delete: "Delete",
        close: "Close",

        // Index page
        subtitle: "Organize your gift exchange easily!",
        createGroupTitle: "Create a Secret Santa Group",
        occasionLabel: "Occasion Name",
        occasionPlaceholder: "e.g., Office Christmas Party 2024",
        customMessageLabel: "Custom Message (Optional)",
        customMessagePlaceholder: "Add a festive message for your group...",
        budgetLabel: "Budget Limit (Optional)",
        budgetPlaceholder: "e.g., $25",
        participantsLabel: "Participants",
        participantsHelp: "Enter participant names (one per line)",
        participantsPlaceholder: "John Smith\nJane Doe\nBob Wilson\n...",
        groupLifetimeLabel: "Group Lifetime",
        groupLifetime30: "30 days",
        groupLifetime60: "60 days",
        groupLifetime90: "90 days",
        createButton: "Create Group",

        // Success modal
        successTitle: "Group Created!",
        successMessage: "Share these links with participants:",
        participantLink: "Participant Link:",
        participantLinkHelp: "Send this to all participants",
        adminLink: "Admin Link:",
        adminLinkHelp: "Keep this private - it allows you to manage the group",
        copyLink: "Copy Link",
        copiedSuccess: "Copied!",

        // Footer
        footerText: "No registration required • No cookies • Temporary storage only",

        // Group page
        joinGroupTitle: "Join Group",
        loadingGroup: "Loading group information...",
        errorTitle: "Oops!",
        whoAreYouLabel: "Who are you?",
        whoAreYouPlaceholder: "Select your name...",
        joinButton: "Join Group",
        joiningButton: "Joining...",
        allJoinedMessage: "All participants have joined",

        // Dashboard
        assignmentTitle: "Your Secret Santa Assignment",
        assignmentIntro: "You are Secret Santa for:",
        theirPreferencesTitle: "Their Gift Preferences:",
        noPreferences: "No preferences added yet",
        yourPreferencesTitle: "Your Gift Preferences",
        yourPreferencesIntro: "Let your Secret Santa know what you'd like:",
        preferencesPlaceholder: "E.g., I love books, especially fantasy novels. I also enjoy coffee and board games...",
        savePreferencesButton: "Save Preferences",
        savingButton: "Saving...",
        savedButton: "Saved!",
        preferencesHelp: "Your Secret Santa will see this message",
        groupStatusTitle: "Group Status",
        participantsJoined: "{count} of {total} participants joined",
        expiresIn: "Group expires in {days} days",
        budgetLabel: "Budget:",

        // Admin page
        adminTitle: "Admin Panel",
        adminSubtitle: "Manage Your Secret Santa Group",
        loadingAdmin: "Loading admin panel...",
        groupDetailsTitle: "Group Details",
        occasionTitle: "Occasion:",
        messageTitle: "Message:",
        budgetTitle: "Budget:",
        expiresTitle: "Expires:",
        totalParticipants: "Total Participants:",
        participantsListTitle: "Participants",
        notJoinedYet: "Not joined yet",
        joined: "Joined",
        giftPreferences: "Gift Preferences:",
        assignedTo: "Assigned to:",
        notAssignedYet: "Not assigned yet (need at least 2 participants)",
        rerollButton: "Reroll All Assignments",
        rerollingButton: "Rerolling...",
        rerollConfirm: "Are you sure you want to reroll all Secret Santa assignments? This will randomly reassign everyone.",
        rerollSuccess: "Assignments have been rerolled!",
        deleteButton: "Delete Participant",
        deleteConfirm: "Are you sure you want to remove {name} from the group? This will trigger new assignments for everyone.",
        invalidAdminCode: "Invalid admin code. You do not have permission to access this page.",
        hasPreferences: "has added gift preferences",
        noParticipantsYet: "No participants have joined yet.",

        // Errors
        invalidLink: "Invalid link. Please check your URL.",
        groupNotFound: "Group not found or has expired.",
        errorLoadingGroup: "Error loading group:",
        selectName: "Please select your name",
        errorJoiningGroup: "Error joining group:",
        errorSavingPreferences: "Error saving preferences:",
        errorRerolling: "Error rerolling assignments:",
        errorDeleting: "Error deleting participant:",
        errorCreatingGroup: "Error creating group:",
        needTwoParticipants: "Need at least 2 participants to assign Secret Santas",
        needThreeParticipants: "Please add at least 3 participants",
        duplicateNames: "Participant names must be unique",
        creatingButton: "Creating...",
        createAnotherGroup: "Create Another Group",

        // Language
        language: "Language",
        languageEN: "English",
        languageLT: "Lietuvių"
    },
    lt: {
        // Common
        appTitle: "Slaptas Kalėdų Senelis",
        loading: "Kraunama...",
        cancel: "Atšaukti",
        save: "Išsaugoti",
        delete: "Ištrinti",
        close: "Uždaryti",

        // Index page
        subtitle: "Organizuokite dovanų mainus lengvai!",
        createGroupTitle: "Sukurkite Slapto Kalėdų Senelio Grupę",
        occasionLabel: "Proga",
        occasionPlaceholder: "pvz., Biuro Kalėdų Vakarėlis 2024",
        customMessageLabel: "Asmeninis Pranešimas (Neprivaloma)",
        customMessagePlaceholder: "Pridėkite šventinį pranešimą savo grupei...",
        budgetLabel: "Biudžeto Limitas (Neprivaloma)",
        budgetPlaceholder: "pvz., 25 €",
        participantsLabel: "Dalyviai",
        participantsHelp: "Įveskite dalyvių vardus (po vieną eilutėje)",
        participantsPlaceholder: "Jonas Jonaitis\nPetra Petraitė\nAntanas Antanaitis\n...",
        groupLifetimeLabel: "Grupės Galiojimo Laikas",
        groupLifetime30: "30 dienų",
        groupLifetime60: "60 dienų",
        groupLifetime90: "90 dienų",
        createButton: "Sukurti Grupę",

        // Success modal
        successTitle: "Grupė Sukurta!",
        successMessage: "Pasidalinkite šiomis nuorodomis su dalyviais:",
        participantLink: "Dalyvių Nuoroda:",
        participantLinkHelp: "Išsiųskite šią nuorodą visiems dalyviams",
        adminLink: "Administratoriaus Nuoroda:",
        adminLinkHelp: "Laikykite ją privačią - ji leidžia valdyti grupę",
        copyLink: "Kopijuoti Nuorodą",
        copiedSuccess: "Nukopijuota!",

        // Footer
        footerText: "Nereikia registracijos • Be slapukų • Tik laikinas saugojimas",

        // Group page
        joinGroupTitle: "Prisijungti prie Grupės",
        loadingGroup: "Kraunama grupės informacija...",
        errorTitle: "Ups!",
        whoAreYouLabel: "Kas tu esi?",
        whoAreYouPlaceholder: "Pasirinkite savo vardą...",
        joinButton: "Prisijungti prie Grupės",
        joiningButton: "Prisijungiama...",
        allJoinedMessage: "Visi dalyviai prisijungė",

        // Dashboard
        assignmentTitle: "Jūsų Slapto Kalėdų Senelio Paskyrimas",
        assignmentIntro: "Jūs esate Slaptas Kalėdų Senelis:",
        theirPreferencesTitle: "Jų Dovanų Pageidavimai:",
        noPreferences: "Pageidavimai dar nepridėti",
        yourPreferencesTitle: "Jūsų Dovanų Pageidavimai",
        yourPreferencesIntro: "Pasakykite savo Slaptam Kalėdų Seneliui, ko norėtumėte:",
        preferencesPlaceholder: "Pvz., Mėgstu knygas, ypač fantastikos žanro. Taip pat mėgstu kavą ir stalo žaidimus...",
        savePreferencesButton: "Išsaugoti Pageidavimus",
        savingButton: "Išsaugoma...",
        savedButton: "Išsaugota!",
        preferencesHelp: "Jūsų Slaptas Kalėdų Senelis matys šį pranešimą",
        groupStatusTitle: "Grupės Būsena",
        participantsJoined: "{count} iš {total} dalyvių prisijungė",
        expiresIn: "Grupė galioja dar {days} d.",
        budgetLabel: "Biudžetas:",

        // Admin page
        adminTitle: "Administratoriaus Skydelis",
        adminSubtitle: "Valdykite Savo Slapto Kalėdų Senelio Grupę",
        loadingAdmin: "Kraunamas administratoriaus skydelis...",
        groupDetailsTitle: "Grupės Informacija",
        occasionTitle: "Proga:",
        messageTitle: "Pranešimas:",
        budgetTitle: "Biudžetas:",
        expiresTitle: "Galioja iki:",
        totalParticipants: "Viso Dalyvių:",
        participantsListTitle: "Dalyviai",
        notJoinedYet: "Dar neprisijungė",
        joined: "Prisijungė",
        giftPreferences: "Dovanų Pageidavimai:",
        assignedTo: "Paskirtas:",
        notAssignedYet: "Dar nepaskirtas (reikia bent 2 dalyvių)",
        rerollButton: "Perskirstyti Visus Paskyrimus",
        rerollingButton: "Perskirstoma...",
        rerollConfirm: "Ar tikrai norite perskirstyti visus Slapto Kalėdų Senelio paskyrimus? Tai atsitiktinai perskirstys visus.",
        rerollSuccess: "Paskyrima perskirstyti!",
        deleteButton: "Ištrinti Dalyvį",
        deleteConfirm: "Ar tikrai norite pašalinti {name} iš grupės? Tai sukels naujus paskyrimus visiems.",
        invalidAdminCode: "Neteisingas administratoriaus kodas. Jūs neturite leidimo pasiekti šį puslapį.",
        hasPreferences: "pridėjo dovanų pageidavimus",
        noParticipantsYet: "Dar neprisijungė nė vienas dalyvis.",

        // Errors
        invalidLink: "Netinkama nuoroda. Patikrinkite savo URL.",
        groupNotFound: "Grupė nerasta arba galiojimo laikas pasibaigė.",
        errorLoadingGroup: "Klaida įkeliant grupę:",
        selectName: "Prašome pasirinkti savo vardą",
        errorJoiningGroup: "Klaida prisijungiant prie grupės:",
        errorSavingPreferences: "Klaida išsaugant pageidavimus:",
        errorRerolling: "Klaida perskirstant paskyrimus:",
        errorDeleting: "Klaida trinant dalyvį:",
        errorCreatingGroup: "Klaida kuriant grupę:",
        needTwoParticipants: "Reikia bent 2 dalyvių, kad būtų paskirti Slapti Kalėdų Seneliai",
        needThreeParticipants: "Prašome pridėti bent 3 dalyvius",
        duplicateNames: "Dalyvių vardai turi būti unikalūs",
        creatingButton: "Kuriama...",
        createAnotherGroup: "Sukurti Kitą Grupę",

        // Language
        language: "Kalba",
        languageEN: "English",
        languageLT: "Lietuvių"
    }
};

// Language management
class I18n {
    constructor() {
        this.currentLanguage = this.getStoredLanguage() || this.detectLanguage();
        this.translations = translations;
    }

    getStoredLanguage() {
        return localStorage.getItem('secret_santa_language');
    }

    detectLanguage() {
        const browserLang = navigator.language || navigator.userLanguage;
        if (browserLang.startsWith('lt')) {
            return 'lt';
        }
        return 'en';
    }

    setLanguage(lang) {
        if (this.translations[lang]) {
            this.currentLanguage = lang;
            localStorage.setItem('secret_santa_language', lang);
            this.updatePage();
        }
    }

    t(key, params = {}) {
        let translation = this.translations[this.currentLanguage][key] || this.translations.en[key] || key;

        // Replace parameters like {count}, {total}, etc.
        Object.keys(params).forEach(param => {
            translation = translation.replace(new RegExp(`{${param}}`, 'g'), params[param]);
        });

        return translation;
    }

    updatePage() {
        // Update all elements with data-i18n attribute
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            element.textContent = this.t(key);
        });

        // Update all elements with data-i18n-placeholder attribute
        document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
            const key = element.getAttribute('data-i18n-placeholder');
            element.placeholder = this.t(key);
        });

        // Update page title
        document.title = this.t('appTitle');

        // Update language selector if it exists
        const langSelector = document.getElementById('languageSelector');
        if (langSelector) {
            langSelector.value = this.currentLanguage;
        }

        // Trigger custom event for pages that need additional updates
        document.dispatchEvent(new CustomEvent('languageChanged', { detail: { language: this.currentLanguage } }));
    }
}

// Initialize i18n
const i18n = new I18n();

// Wait for DOM to be ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => i18n.updatePage());
} else {
    i18n.updatePage();
}
