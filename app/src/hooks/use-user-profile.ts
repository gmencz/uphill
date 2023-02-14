import { useQuery } from "@tanstack/react-query";
import { supabase } from "~/supabase";
import { useSession } from "./use-session";

export interface UserProfile {
  id: string;
  username: string;
  avatarURL: string;
}

export function useUserProfile() {
  const { session } = useSession();

  const profileQuery = useQuery({
    queryKey: ["profile"],
    queryFn: async () => {
      if (!session?.user) {
        return null;
      }

      const { data: profile, error: profileError } = await supabase
        .from("profiles")
        .select<string, UserProfile>("id, username, avatar_url as avatarURL")
        .eq("id", session.user.id)
        .single();

      if (profileError) {
        throw profileError;
      }

      return profile;
    },
  });

  return {
    isLoading: profileQuery.isLoading,
    isError: profileQuery.isError,
    profile: profileQuery.data,
  };
}
