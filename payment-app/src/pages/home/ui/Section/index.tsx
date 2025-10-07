import { Image, Text, View } from "react-native";
import { styles } from "./styles";
import type { Transaction } from "../../types";

type Props = { title: string; data: Transaction[] };

export default function Section({ title, data }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>{title}</Text>
      {data.map((t) => (
        <View key={t.id} style={styles.item}>
          <View style={styles.itemLeft}>
            <View style={styles.avatarWrap}>
              {t.avatar ? (
                <Image source={t.avatar} style={styles.avatarImg} />
              ) : (
                <View style={styles.avatarPlaceholder} />
              )}
            </View>
            <View>
              <Text style={styles.itemTitle}>{t.name}</Text>
              <Text style={styles.itemSubtitle}>{t.subtitle}</Text>
            </View>
          </View>
          <View style={styles.itemRight}>
            <Text style={styles.amount}>${t.amount.toFixed(2)}</Text>
            <Text style={styles.date}>{t.datetime}</Text>
          </View>
        </View>
      ))}
    </View>
  );
}
