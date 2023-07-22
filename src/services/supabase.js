import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://scvafbafjneyrypgmtyw.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNjdmFmYmFmam5leXJ5cGdtdHl3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODkzMjE4MDcsImV4cCI6MjAwNDg5NzgwN30.P_InGFcxRD68syDVye1kPqnKpxJV86eoUwl_fv2TUCQ";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
