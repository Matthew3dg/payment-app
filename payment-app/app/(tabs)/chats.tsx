import { View, Text } from "react-native";

export default function Chats() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#0F0F0F",
      }}
    >
      <Text style={{ color: "white", fontSize: 18 }}>Chats</Text>
    </View>
  );
}
