import { NavigationContainer } from "@react-navigation/native";
import { useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";
import { supabase } from "~/supabase";
import { Main } from "./Main";

interface NavigationProps {
  onReady: VoidFunction;
}

export function Navigation({ onReady }: NavigationProps) {
  const queryClient = useQueryClient();

  useEffect(() => {
    supabase.auth.onAuthStateChange((event, updatedSession) => {
      queryClient.setQueryData(["session"], updatedSession);
      if (event === "SIGNED_OUT") {
        queryClient.clear();
      }
    });
  }, [queryClient]);

  return (
    <NavigationContainer onReady={onReady}>
      <Main />
    </NavigationContainer>
  );
}
