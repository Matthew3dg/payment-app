import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: { paddingHorizontal: 16, marginTop: 22 },
  sectionTitle: { color: "#FFFFFF", fontSize: 16, fontWeight: "700", marginBottom: 10 },
  item: {
    backgroundColor: "#1C1C1E",
    borderRadius: 16,
    padding: 14,
    marginBottom: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  itemLeft: { flexDirection: "row", alignItems: "center" },
  avatarWrap: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: "#2A2A2A",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
    overflow: "hidden",
  },
  avatarImg: { width: 36, height: 36 },
  avatarPlaceholder: { width: 24, height: 24, borderRadius: 12, backgroundColor: "#111" },
  itemTitle: { color: "#FFFFFF", fontWeight: "600" },
  itemSubtitle: { color: "#A5A5A5", marginTop: 2 },
  itemRight: { alignItems: "flex-end" },
  amount: { color: "#FFFFFF", fontWeight: "600" },
  date: { color: "#A5A5A5", marginTop: 2 },
});
