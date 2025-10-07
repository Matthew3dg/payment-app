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
          <View style={styles.rowBetween}>
            <View style={styles.itemLeft}>
              <Text style={styles.itemHeader}>{n.title}</Text>
              {n.amount ? (
                <Text
                  style={[
                    styles.amount,
                    n.amount.startsWith("+") ? styles.amountPlus : styles.amountMinus,
                  ]}
                >
                  {n.amount}
                </Text>
              ) : null}
              {n.card ? <Text style={styles.meta}>{n.card}</Text> : null}
              {n.balance ? <Text style={styles.meta}>{n.balance}</Text> : null}
              {n.subtitle ? <Text style={styles.subtitle}>{n.subtitle}</Text> : null}
              <Text style={styles.date}>{n.dateLabel}</Text>
            </View>
            <View style={styles.dot} />
          </View>
        </View>
      ))}
    </View>
  );
}
