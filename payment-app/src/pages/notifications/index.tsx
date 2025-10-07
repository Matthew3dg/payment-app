import { Link } from "expo-router";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";
import BackArrow from "@/assets/icons/back-arrow.svg";
import CheckIcon from "@/assets/icons/Vector-notifications-header-ico.svg";
import { styles } from "./styles";
import { tabs, notifications } from "./constants";
import Section from "./ui/Section";

export default function NotificationsScreen() {
  const insets = useSafeAreaInsets();
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <Link href="/(tabs)" asChild>
          <TouchableOpacity style={styles.backBtn}>
            <BackArrow width={9} height={15} />
          </TouchableOpacity>
        </Link>
        <Text style={styles.headerTitle}>Notifications</Text>
        <View style={styles.headerRight}>
          <CheckIcon width={18} height={17} />
        </View>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.tabs}
        contentContainerStyle={styles.tabsContent}
      >
        {tabs.map((t, idx) => (
          <View key={t} style={styles.tabItem}>
            <Text style={idx === 0 ? styles.tabTextActive : styles.tabText}>{t}</Text>
            {idx === 0 ? <View style={styles.tabUnderline} /> : null}
          </View>
        ))}
      </ScrollView>

      <ScrollView contentContainerStyle={{ paddingBottom: Math.max(24, insets.bottom + 12) }}>
        <Section title="Today, 17 June" items={notifications.slice(0, 1)} />
        <Section title="Yesterday, 16 June" items={notifications.slice(1, 3)} />
        <Section title="24 March, 2025" items={notifications.slice(3)} />
      </ScrollView>
    </SafeAreaView>
  );
}
