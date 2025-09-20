import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://ndzejmvauapcjjesrhiu.supabase.co";
const supabaseKey = process.env.SUPABASE_KEY;

if (!supabaseKey || !supabaseUrl) {
  throw new Error("missing supabase environment variables");
}

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
