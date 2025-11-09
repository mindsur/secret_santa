// Supabase Configuration Example
//
// HOW TO USE:
// 1. Copy this file and rename it to config.js
// 2. Replace the placeholder values below with your actual Supabase credentials
// 3. Find your credentials at: https://app.supabase.com/project/YOUR_PROJECT/settings/api
//
// SECURITY NOTE:
// - Never commit config.js with real credentials to a public repository
// - The anon/public key is safe to use in client-side code
// - Supabase RLS policies protect your data

const SUPABASE_URL = 'YOUR_SUPABASE_URL'; // e.g., 'https://abcdefghijk.supabase.co'
const SUPABASE_ANON_KEY = 'YOUR_SUPABASE_ANON_KEY'; // Your project's anon/public key

// Initialize Supabase client
const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
