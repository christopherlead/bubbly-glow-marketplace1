// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://aovagxvorktggmidsbhe.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFvdmFneHZvcmt0Z2dtaWRzYmhlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzcwNDY1OTMsImV4cCI6MjA1MjYyMjU5M30.whSQ5Q_wpLqMKU3P8frV16F9-W4Vgiia441buqHBU0k";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);