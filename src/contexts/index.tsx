import { useSupabase } from "@/hooks/useSupabase";
import { SupabaseClient } from "@supabase/supabase-js";
import { createContext, useMemo } from "react";

type IndexContextType = {
  supabase: SupabaseClient;
  jwtToken: string | null;
}

export const IndexContext = createContext<IndexContextType>({
  supabase: {} as SupabaseClient,
  jwtToken: null,
});


export const IndexProvider = ({ children }: { children: React.ReactNode }) => {
  const { supabase, jwtToken } = useSupabase()

  const value = useMemo(
    () => ({ 
      supabase: supabase as SupabaseClient,
      jwtToken 
    }), 
    [supabase, jwtToken]
  )

  return <IndexContext.Provider value={value}>{children}</IndexContext.Provider>
}