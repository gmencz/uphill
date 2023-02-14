import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Text, useTheme } from "@rneui/themed";
import { TouchableOpacity, View } from "react-native";
import { Layout } from "~/components/Layout";
import { MainStackParamList } from "~/navigation/types";

export function Home({}: NativeStackScreenProps<MainStackParamList, "Home">) {
  const { theme } = useTheme();

  return (
    <Layout>
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          flex: 1,
          paddingHorizontal: 24,
        }}
      >
        <Text
          style={{
            fontFamily: "Inter-SemiBold",
            fontSize: 30,
          }}
        >
          Get started
        </Text>

        <TouchableOpacity
          style={{
            marginTop: theme.spacing.xl,
            backgroundColor: theme.colors.primary,
            borderRadius: 8,
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
            paddingVertical: theme.spacing.lg,
          }}
        >
          <Text style={{ fontFamily: "Inter-SemiBold", color: "#000" }}>
            Use a Template
          </Text>
        </TouchableOpacity>

        <Text
          style={{
            fontFamily: "Inter-SemiBold",
            marginVertical: theme.spacing.lg,
            fontSize: 20,
          }}
        >
          or
        </Text>

        <TouchableOpacity
          style={{
            backgroundColor: theme.colors.background,
            borderColor: theme.colors.black,
            borderWidth: 2,
            borderRadius: 8,
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
            paddingVertical: theme.spacing.lg,
          }}
        >
          <Text style={{ fontFamily: "Inter-SemiBold" }}>
            Start an Empty Workout
          </Text>
        </TouchableOpacity>
      </View>
    </Layout>
  );
}
