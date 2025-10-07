import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: "#0F0F0F" },
  header: { height: 56, flexDirection: "row", alignItems: "center", paddingHorizontal: 12 },
  backBtn: { padding: 8, marginRight: 8 },
  headerTitle: { color: "#FFFFFF", fontSize: 20, fontWeight: "700" },
  headerRight: { marginLeft: "auto", padding: 8 },
  tabs: { borderBottomWidth: 1, borderBottomColor: "#222" },
  tabsContent: { paddingHorizontal: 12 },
  tabItem: { marginRight: 18, paddingVertical: 12 },
  tabTextActive: { color: "#FF6A00", fontWeight: "700" },
  tabText: { color: "#B5B5B5", fontWeight: "500" },
  tabUnderline: { height: 2, backgroundColor: "#FF6A00", marginTop: 8 },
  checkmark: { color: "#FFFFFF" },
  backArrow: { color: "#FFFFFF", fontSize: 18 },
});
