import { Tabs } from "expo-router";
import IconWrap from "@/src/shared/ui/IconWrap";
import { styles } from "./styles";
import HomeIcon from "@/assets/icons/tabs-nav/Home-1--Streamline-Sharp.svg";
import PaymentsIcon from "@/assets/icons/tabs-nav/Investing-And-Banking--Streamline-Sharp.svg";
import HistoryIcon from "@/assets/icons/tabs-nav/Alarm-Clock--Streamline-Sharp.svg";
import AnalyticsIcon from "@/assets/icons/tabs-nav/Pie-Chart--Streamline-Sharp.svg";
import ChatsIcon from "@/assets/icons/tabs-nav/Chat-Two-Bubbles-Oval--Streamline-Sharp.svg";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#FE5900",
        tabBarInactiveTintColor: "#FFFFFF",
        tabBarStyle: styles.tabBar,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ focused, color }) => (
            <IconWrap focused={focused}>
              <HomeIcon width={22} height={22} fill={color} stroke={color} color={color} />
            </IconWrap>
          ),
        }}
      />
      <Tabs.Screen
        name="payments"
        options={{
          title: "Payments",
          tabBarIcon: ({ focused, color }) => (
            <IconWrap focused={focused}>
              <PaymentsIcon width={22} height={22} fill={color} stroke={color} color={color} />
            </IconWrap>
          ),
        }}
      />
      <Tabs.Screen
        name="history"
        options={{
          title: "History",
          tabBarIcon: ({ focused, color }) => (
            <IconWrap focused={focused}>
              <HistoryIcon width={22} height={22} fill={color} stroke={color} color={color} />
            </IconWrap>
          ),
        }}
      />
      <Tabs.Screen
        name="analytics"
        options={{
          title: "Analytics",
          tabBarIcon: ({ focused, color }) => (
            <IconWrap focused={focused}>
              <AnalyticsIcon width={22} height={22} fill={color} stroke={color} color={color} />
            </IconWrap>
          ),
        }}
      />
      <Tabs.Screen
        name="chats"
        options={{
          title: "Chats",
          tabBarIcon: ({ focused, color }) => (
            <IconWrap focused={focused}>
              <ChatsIcon width={22} height={22} fill={color} stroke={color} color={color} />
            </IconWrap>
          ),
        }}
      />
    </Tabs>
  );
}
