import "expo-dev-client";
import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, View } from "react-native";
import NetomiChat from "@netomi.com/netomi-chat-react-native";
import { useEffect } from "react";

const NETOMI_BOT_REF_ID = process.env.EXPO_PUBLIC_NETOMI_BOT_REF_ID;
const NETOMI_REGION = "eu";

export default function App() {
  useEffect(() => {
    NetomiChat.initialize(NETOMI_BOT_REF_ID, NETOMI_REGION);
  }, []);

  return (
    <View style={styles.container}>
      <Button title="Open Chat" onPress={() => NetomiChat.launch(null)} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
