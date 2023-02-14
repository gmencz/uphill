import { useTheme } from "@rneui/themed";
import React from "react";
import { View, ActivityIndicator } from "react-native";
import { Layout } from "~/components/Layout";

export function Loading() {
  const { theme } = useTheme();

  return (
    <Layout>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <ActivityIndicator size="large" color={theme.colors.primary} />
      </View>
    </Layout>
  );
}
