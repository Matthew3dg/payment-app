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
    backgroundColor: "#1C1C1E",
    padding: 14,
    borderTopWidth: 1,
    borderTopColor: "#2A2A2A",
  },
  rowBetween: { flexDirection: "row", alignItems: "center", justifyContent: "space-between" },
  itemLeft: { flex: 1, paddingRight: 12 },
  itemHeader: { color: "#FFFFFF", fontWeight: "700" },
  amount: {},
  amountPlus: { color: "#2FD06E" },
  amountMinus: { color: "#FF6A00" },
  meta: { color: "#B5B5B5", marginTop: 4 },
  subtitle: { color: "#D0D0D0", marginTop: 4 },
  date: { color: "#7A7A7A", marginTop: 8 },
  dot: { width: 8, height: 8, borderRadius: 4, backgroundColor: "#FF6A00" },
});
