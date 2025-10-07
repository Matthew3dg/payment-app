import { Text, View } from "react-native";
import { styles } from "./styles";
import type { NotificationItem } from "../../constants";

type Props = { title: string; items: NotificationItem[] };

export default function Section({ title, items }: Props) {
  return (
    <View>
      <Text style={styles.title}>{title.toUpperCase()}</Text>
      {items.map((n) => (
        <View key={n.id} style={styles.item}>
          <View style={{ flexDirection: "row", alignItems: "flex-start" }}>
            <View style={{ width: 42, height: 42, borderRadius: 16, backgroundColor: "#1E1E1E" }} />
            <View style={{ flex: 1, paddingLeft: 12 }}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Text style={styles.itemHeader}>{n.title}</Text>
                <View
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: 4,
                    backgroundColor: "#FF6A00",
                    marginLeft: "auto",
                  }}
                />
              </View>
              {n.amount ? <Text style={styles.amount}>{n.amount}</Text> : null}
              {n.card ? <Text style={styles.meta}>{n.card}</Text> : null}
              {n.balance ? <Text style={styles.meta}>{n.balance}</Text> : null}
              {n.subtitle ? <Text style={styles.subtitle}>{n.subtitle}</Text> : null}
              <Text style={styles.date}>{n.dateLabel}</Text>
            </View>
          </View>
        </View>
      ))}
    </View>
  );
}
