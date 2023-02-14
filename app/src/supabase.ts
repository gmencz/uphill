import AsyncStorage from "@react-native-async-storage/async-storage";
import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  "https://hjboghbtfzspfdlhpytc.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhqYm9naGJ0ZnpzcGZkbGhweXRjIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzQ1NTU2ODksImV4cCI6MTk5MDEzMTY4OX0.RUvK2wXydeGwDgom7I_e8Tw1-QvshoG7M1km5P89TKI",
  {
    auth: {
      storage: AsyncStorage,
      autoRefreshToken: true,
      persistSession: true,
      detectSessionInUrl: false,
    },
  }
);
