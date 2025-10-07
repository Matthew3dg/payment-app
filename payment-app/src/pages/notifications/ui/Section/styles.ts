import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  title: {
    color: "#9A9A9A",
    fontSize: 12,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontWeight: "700",
  },
  item: {
    backgroundColor: "#0F0F0F",
    padding: 14,
    borderTopWidth: 1,
    borderTopColor: "#2A2A2A",
  },
  rowBetween: { flexDirection: "row", alignItems: "flex-start", justifyContent: "space-between" },
  row: { flexDirection: "row", alignItems: "flex-start" },
  iconPlaceholder: { width: 42, height: 42, borderRadius: 16, backgroundColor: "#1E1E1E" },
  itemContent: { flex: 1, paddingLeft: 12 },
  headerRow: { flexDirection: "row", alignItems: "center" },
  itemHeader: { color: "#FFFFFF", fontWeight: "700", marginBottom: 4, flexShrink: 1 },
  amount: {
    color: "#FE5900",
    fontFamily: "Inter",
    fontSize: 21,
    fontStyle: "normal",
    fontWeight: "600",
    lineHeight: 21,
    marginTop: 4,
  },
  meta: { color: "#B5B5B5", marginTop: 4 },
  subtitle: { color: "#D0D0D0", marginTop: 4 },
  date: { color: "#7A7A7A", marginTop: 8 },
  dot: { width: 8, height: 8, borderRadius: 4, backgroundColor: "#FF6A00", marginLeft: "auto" },
});
