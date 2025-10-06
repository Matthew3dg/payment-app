import { Link } from "expo-router";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";

const tabs = ["All", "Payments", "System", "Delivery", "Travel"] as const;

type NotificationItem = {
  id: string;
  title: string;
  subtitle?: string;
  amount?: string;
  card?: string;
  balance?: string;
  dateLabel: string;
  category: (typeof tabs)[number];
};

const notifications: NotificationItem[] = [
  {
    id: "n1",
    title: "Received from Anna",
    amount: "+$110",
    card: "Debit •• 4385",
    balance: "$4,098.12",
    dateLabel: "17 June 2025, 17:49 · Payments",
    category: "Payments",
  },
  {
    id: "n2",
    title: "See our limited offer!",
    subtitle: "Would you like to visit new countries? Maybe it’s your time!",
    dateLabel: "16 June 2025, 23:08 · Travel",
    category: "Travel",
  },
  {
    id: "n3",
    title: "Sent to •• 2041",
    amount: "-$14.62",
    card: "Debit •• 4385",
    balance: "$3,987.5",
    dateLabel: "16 June 2025, 06:18 · Payments",
    category: "Payments",
  },
  {
    id: "n4",
    title: "New login into account",
    subtitle: "You have logged in from a new location: iOS 26.0.1 · 109.255.84.7 · Spain",
    dateLabel: "24 March 2025, 15:44 · Security",
    category: "System",
  },
];

export default function NotificationsScreen() {
  const insets = useSafeAreaInsets();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#0F0F0F" }}>
      <View
        style={{ height: 56, flexDirection: "row", alignItems: "center", paddingHorizontal: 12 }}
      >
        <Link href="/(tabs)" asChild>
          <TouchableOpacity style={{ padding: 8, marginRight: 8 }}>
            <Text style={{ color: "#FFFFFF", fontSize: 18 }}>{"<"}</Text>
          </TouchableOpacity>
        </Link>
        <Text style={{ color: "#FFFFFF", fontSize: 20, fontWeight: "700" }}>Notifications</Text>
        <View style={{ marginLeft: "auto", padding: 8 }}>
          <Text style={{ color: "#FFFFFF" }}>☑︎</Text>
        </View>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ borderBottomWidth: 1, borderBottomColor: "#222" }}
        contentContainerStyle={{ paddingHorizontal: 12 }}
      >
        {tabs.map((t, idx) => (
          <View key={t} style={{ marginRight: 18, paddingVertical: 12 }}>
            <Text
              style={{
                color: idx === 0 ? "#FF6A00" : "#B5B5B5",
                fontWeight: idx === 0 ? "700" : "500",
              }}
            >
              {t}
            </Text>
            {idx === 0 ? (
              <View style={{ height: 2, backgroundColor: "#FF6A00", marginTop: 8 }} />
            ) : null}
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

function Section({ title, items }: { title: string; items: NotificationItem[] }) {
  return (
    <View>
      <Text
        style={{
          color: "#9A9A9A",
          fontSize: 12,
          paddingHorizontal: 12,
          paddingVertical: 10,
          fontWeight: "700",
        }}
      >
        {title.toUpperCase()}
      </Text>
      {items.map((n) => (
        <View
          key={n.id}
          style={{
            backgroundColor: "#1C1C1E",
            padding: 14,
            borderTopWidth: 1,
            borderTopColor: "#2A2A2A",
          }}
        >
          <View
            style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}
          >
            <View style={{ flex: 1, paddingRight: 12 }}>
              <Text style={{ color: "#FFFFFF", fontWeight: "700" }}>{n.title}</Text>
              {n.amount ? (
                <Text style={{ color: n.amount.startsWith("+") ? "#2FD06E" : "#FF6A00" }}>
                  {n.amount}
                </Text>
              ) : null}
              {n.card ? <Text style={{ color: "#B5B5B5", marginTop: 4 }}>{n.card}</Text> : null}
              {n.balance ? <Text style={{ color: "#B5B5B5" }}>{n.balance}</Text> : null}
              {n.subtitle ? (
                <Text style={{ color: "#D0D0D0", marginTop: 4 }}>{n.subtitle}</Text>
              ) : null}
              <Text style={{ color: "#7A7A7A", marginTop: 8 }}>{n.dateLabel}</Text>
            </View>
            <View style={{ width: 8, height: 8, borderRadius: 4, backgroundColor: "#FF6A00" }} />
          </View>
        </View>
      ))}
    </View>
  );
}
