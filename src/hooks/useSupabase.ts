import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { useAuth } from '@clerk/nextjs';
import dotenv from 'dotenv';
import { useEffect, useState } from 'react';

dotenv.config();

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY;

export function useSupabase() {   
  const { getToken } = useAuth();
  const [supabase, setSupabase] = useState<SupabaseClient | null>(null);

  useEffect(() => {
    const initializeSupabase = async () => {
      try {
        const token = await getToken();
        
        if (!supabaseUrl || !supabaseKey) {
          throw new Error('Supabase URL ou Key não configurados');
        }

        const supabaseClient = createClient(supabaseUrl, supabaseKey, {
          global: {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        });

        if (token) {
          await supabaseClient.auth.setSession({ 
            access_token: token, 
            refresh_token: '' 
          });
        }

        setSupabase(supabaseClient);
      } catch (error) {
        console.error('Erro ao inicializar Supabase:', error);
      }
    };

    initializeSupabase();
  }, [getToken]);

  return { supabase };
}