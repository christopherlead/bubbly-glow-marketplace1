import { createClient } from '@supabase/supabase-js';

// Check if environment variables are available
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn('Supabase credentials are not configured. Please connect your Supabase project in the Lovable interface.');
}

// Create Supabase client with empty strings as fallback
export const supabase = createClient(
  supabaseUrl || '',
  supabaseAnonKey || ''
);