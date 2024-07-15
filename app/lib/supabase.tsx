import AsyncStorage from "@react-native-async-storage/async-storage";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://iayuoltoqhmlczbibmpg.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlheXVvbHRvcWhtbGN6YmlibXBnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjAyMzIyMDUsImV4cCI6MjAzNTgwODIwNX0.e1cTW6rk5bIlRg-3uxc6nyr8Ku6taQTEvUzXvdSFeFs";

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});
