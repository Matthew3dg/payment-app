import { Link } from "expo-router";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";
import UserAvatar from "@/assets/icons/user-avatar.svg";
import BackArrow from "@/assets/icons/back-arrow.svg";
import QrIcon from "@/assets/icons/Qr-Code.svg";
import { categories, transactionsToday, transactionsYesterday } from "./constants";
import { styles as staticStyles } from "./styles";
import Section from "./ui/Section";
import { useMemo } from "react";

export default function HomeScreen() {
  const insets = useSafeAreaInsets();
  const styles = staticStyles; // static styles
  const contentContainerStyle = useMemo(
    () => [{ ...styles.content, paddingBottom: Math.max(24, insets.bottom + 12) }],
    [insets.bottom]
  );
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.scroll} contentContainerStyle={contentContainerStyle}>
        <View style={styles.headerWrap}>
          <View style={styles.headerRow}>
            <Link href="/notifications" asChild>
              <TouchableOpacity style={styles.profileLink}>
                <View style={styles.profileIconWrap}>
                  <UserAvatar width={20} height={20} />
                </View>
                <Text style={styles.profileName}>Charlotte</Text>
                <BackArrow width={4} height={8} style={styles.profileArrow} />
              </TouchableOpacity>
            </Link>
            <View style={styles.qrWrap}>
              <QrIcon width={22} height={22} />
            </View>
          </View>
        </View>

        <View style={styles.categoriesWrap}>
          <View style={styles.categoriesRow}>
            {categories.map(({ key, label, Icon }) => (
              <View key={key} style={styles.category}>
                <View style={styles.categoryIconWrap}>
                  <Icon width={20} height={20} />
                </View>
                <Text style={styles.categoryLabel}>{label}</Text>
              </View>
            ))}
          </View>
        </View>

        <View style={styles.cardsWrap}>
          <View style={styles.cardsRow}>
            <View style={styles.cardPrimary}>
              <Text style={styles.cardPrimaryTitle}>$4,098.12</Text>
              <Text style={styles.cardPrimarySub}>Debit •• 4385</Text>
            </View>
            <View style={styles.cardSecondary}>
              <Text style={styles.cardSecondaryTitle}>$14.71</Text>
              <Text style={styles.cardSecondarySub}>Virtual •• 9081</Text>
            </View>
            <View style={styles.addCard}>
              <Text style={styles.addCardPlus}>+</Text>
            </View>
          </View>
        </View>

        <View style={styles.expensesWrap}>
          <View style={styles.expensesRow}>
            <Text style={styles.expensesTitle}>
              Expenses in <Text style={styles.expensesTitleHighlight}>June</Text>
            </Text>
            <Text style={styles.expensesSum}>$5,091</Text>
          </View>
          <View style={styles.expensesBars}>
            {["#FF6A00", "#FF6A00", "#FF6A00", "#FFD4A8"].map((c, idx) => (
              <View
                key={idx}
                style={[styles.bar, idx !== 3 ? styles.barSpacer : null, { backgroundColor: c }]}
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
