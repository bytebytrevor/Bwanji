import { createClient } from '@supabase/supabase-js';

const url = import.meta.env.VITE_SUPABASE_URL ?? '';
const anonKey = import.meta.env.VITE_SUPABASE_ANON_KEY ?? '';

export const supabase = createClient(url || 'https://placeholder.supabase.co', anonKey || 'placeholder', {
  auth: { persistSession: false },
  global: { headers: { 'x-application': 'bwanji-web' } },
});

export const isSupabaseConfigured = !!url && !!anonKey;
