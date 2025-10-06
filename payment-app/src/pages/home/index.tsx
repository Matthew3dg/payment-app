import { Link } from "expo-router";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";
import UserAvatar from "@/assets/icons/user-avatar.svg";
import QrIcon from "@/assets/icons/Qr-Code.svg";
import TravelIcon from "@/assets/icons/Earth-2--Streamline-Sharp.svg";
import DeliveryIcon from "@/assets/icons/Transfer-Cart--Streamline-Sharp.svg";
import GiftIcon from "@/assets/icons/Gift-2--Streamline-Sharp.svg";
import SupportIcon from "@/assets/icons/Customer-Support-1--Streamline-Sharp.svg";

const categories = [
  { key: "travel", label: "Travel", Icon: TravelIcon },
  { key: "delivery", label: "Delivery", Icon: DeliveryIcon },
  { key: "bonuses", label: "Bonuses", Icon: GiftIcon },
  { key: "support", label: "Support", Icon: SupportIcon },
];

const transactionsToday = [
  {
    id: "1",
    name: "Matthew Billson",
    subtitle: "Money Transfer",
    amount: 56.19,
    datetime: "Jun 9, 12:08",
    avatar: require("@/assets/images/Avatar.png"),
  },
];

const transactionsYesterday = [
  {
    id: "2",
    name: "Starbucks",
    subtitle: "Food",
    amount: 122.47,
    datetime: "Jun 8, 19:21",
    avatar: undefined,
  },
  {
    id: "3",
    name: "Netflix",
    subtitle: "Entertainment",
    amount: 13.17,
    datetime: "Jun 8, 08:53",
    avatar: undefined,
  },
];

export default function HomeScreen() {
  const insets = useSafeAreaInsets();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#0F0F0F" }}>
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{ paddingBottom: Math.max(24, insets.bottom + 12) }}
      >
        <View style={{ paddingHorizontal: 16, paddingTop: 18 }}>
          <View
            style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}
          >
            <Link href="/notifications" asChild>
              <TouchableOpacity style={{ flexDirection: "row", alignItems: "center" }}>
                <View
                  style={{
                    width: 32,
                    height: 32,
                    borderRadius: 16,
                    backgroundColor: "#1F1F1F",
                    alignItems: "center",
                    justifyContent: "center",
                    marginRight: 10,
                  }}
                >
                  <UserAvatar width={20} height={20} />
                </View>
                <Text style={{ color: "#FFFFFF", fontSize: 18, fontWeight: "600" }}>Charlotte</Text>
              </TouchableOpacity>
            </Link>
            <View style={{ width: 28, height: 28, alignItems: "center", justifyContent: "center" }}>
              <QrIcon width={22} height={22} />
            </View>
          </View>
        </View>

        <View style={{ paddingHorizontal: 16, marginTop: 18 }}>
          <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
            {categories.map(({ key, label, Icon }) => (
              <View key={key} style={{ alignItems: "center", width: "25%" }}>
                <View
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: 22,
                    backgroundColor: "#1F1F1F",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Icon width={20} height={20} />
                </View>
                <Text style={{ color: "#CECECE", marginTop: 6, fontSize: 12 }}>{label}</Text>
              </View>
            ))}
          </View>
        </View>

        <View style={{ paddingHorizontal: 16, marginTop: 18 }}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View
              style={{
                flex: 1,
                backgroundColor: "#FF6A00",
                borderRadius: 16,
                height: 120,
                padding: 16,
                marginRight: 12,
              }}
            >
              <Text style={{ color: "#FFFFFF", fontSize: 20, fontWeight: "700" }}>$4,098.12</Text>
              <Text style={{ color: "#FFFFFF", opacity: 0.8, marginTop: 6 }}>Debit •• 4385</Text>
            </View>
            <View
              style={{
                flex: 1,
                backgroundColor: "#D0D0D0",
                borderRadius: 16,
                height: 120,
                padding: 16,
              }}
            >
              <Text style={{ color: "#1A1A1A", fontSize: 20, fontWeight: "700" }}>$14.71</Text>
              <Text style={{ color: "#1A1A1A", opacity: 0.8, marginTop: 6 }}>Virtual •• 9081</Text>
            </View>
            <View
              style={{
                width: 44,
                height: 120,
                borderRadius: 16,
                backgroundColor: "#1F1F1F",
                alignItems: "center",
                justifyContent: "center",
                marginLeft: 12,
              }}
            >
              <Text style={{ color: "#FFFFFF", fontSize: 22 }}>+</Text>
            </View>
          </View>
        </View>

        <View style={{ paddingHorizontal: 16, marginTop: 22 }}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}
          >
            <Text style={{ color: "#FFFFFF", fontSize: 22, fontWeight: "700" }}>
              Expenses in <Text style={{ color: "#FF6A00" }}>June</Text>
            </Text>
            <Text style={{ color: "#CECECE" }}>$5,091</Text>
          </View>
          <View style={{ flexDirection: "row", marginTop: 12 }}>
            {["#FF6A00", "#FF6A00", "#FF6A00", "#FFD4A8"].map((c, idx) => (
              <View
                key={idx}
                style={{
                  flex: 1,
                  height: 8,
                  backgroundColor: c,
                  borderRadius: 4,
                  marginRight: idx !== 3 ? 8 : 0,
                }}
              />
            ))}
          </View>
        </View>

        <Section title="Today" data={transactionsToday} />
        <Section title="Yesterday" data={transactionsYesterday} />
      </ScrollView>
    </SafeAreaView>
  );
}

function Section({ title, data }: { title: string; data: typeof transactionsToday }) {
  return (
    <View style={{ paddingHorizontal: 16, marginTop: 22 }}>
      <Text style={{ color: "#FFFFFF", fontSize: 16, fontWeight: "700", marginBottom: 10 }}>
        {title}
      </Text>
      {data.map((t) => (
        <View
          key={t.id}
          style={{
            backgroundColor: "#1C1C1E",
            borderRadius: 16,
            padding: 14,
            marginBottom: 12,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View
              style={{
                width: 36,
                height: 36,
                borderRadius: 18,
                backgroundColor: "#2A2A2A",
                alignItems: "center",
                justifyContent: "center",
                marginRight: 12,
                overflow: "hidden",
              }}
            >
              {t.avatar ? (
                <Image source={t.avatar} style={{ width: 36, height: 36 }} />
              ) : (
                <View
                  style={{ width: 24, height: 24, borderRadius: 12, backgroundColor: "#111" }}
                />
              )}
            </View>
            <View>
              <Text style={{ color: "#FFFFFF", fontWeight: "600" }}>{t.name}</Text>
              <Text style={{ color: "#A5A5A5", marginTop: 2 }}>{t.subtitle}</Text>
            </View>
          </View>
          <View style={{ alignItems: "flex-end" }}>
            <Text style={{ color: "#FFFFFF", fontWeight: "600" }}>${t.amount.toFixed(2)}</Text>
            <Text style={{ color: "#A5A5A5", marginTop: 2 }}>{t.datetime}</Text>
          </View>
        </View>
      ))}
    </View>
  );
}
