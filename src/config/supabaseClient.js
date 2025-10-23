// ...existing code...
import dotenv from "dotenv";
import { createClient } from "@supabase/supabase-js";

dotenv.config();

// ...existing code...
const supabaseUrl = process.env.SUPABASE_URL;
// { changed code }
const supabaseKey = process.env.SUPABASE_ANON_KEY || process.env.SUPABASE_KEY;

// ...existing code...
if (!supabaseUrl || !supabaseKey) {
  throw new Error("Missing SUPABASE_URL or SUPABASE_ANON_KEY in environment variables");
}

export const supabase = createClient(supabaseUrl, supabaseKey);
// ...existing code...