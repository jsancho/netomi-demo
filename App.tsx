import "expo-dev-client";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import NetomiChat from "@netomi.com/netomi-chat-react-native";
import { useEffect } from "react";

const NETOMI_BOT_REF_ID = "REPLACE_WITH_BOT_REF_ID";
const region = "eu";

export default function App() {
  useEffect(() => {
    NetomiChat.initialize(NETOMI_BOT_REF_ID, region);
    NetomiChat.launch(null);
  }, []);
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
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
