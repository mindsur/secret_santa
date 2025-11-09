// Supabase Configuration
// Replace these values with your own Supabase project credentials
// You can find these in your Supabase project settings

const SUPABASE_URL = 'YOUR_SUPABASE_URL'; // e.g., 'https://abcdefgh.supabase.co'
const SUPABASE_ANON_KEY = 'YOUR_SUPABASE_ANON_KEY'; // Your public anon key

// Initialize Supabase client
const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
