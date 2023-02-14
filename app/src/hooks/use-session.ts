import { useQuery } from "@tanstack/react-query";
import { supabase } from "~/supabase";

export function useSession() {
  const sessionQuery = useQuery({
    queryKey: ["session"],
    queryFn: async () => {
      const { data, error } = await supabase.auth.getSession();

      if (error) {
        throw error;
      }

      return data.session;
    },
  });

  return {
    isLoading: sessionQuery.isLoading,
    isError: sessionQuery.isError,
    session: sessionQuery.data,
  };
}
