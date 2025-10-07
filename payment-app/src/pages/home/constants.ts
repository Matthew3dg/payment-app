import UserAvatar from "@/assets/icons/user-avatar.svg";
import QrIcon from "@/assets/icons/Qr-Code.svg";
import TravelIcon from "@/assets/icons/Earth-2--Streamline-Sharp.svg";
import DeliveryIcon from "@/assets/icons/Transfer-Cart--Streamline-Sharp.svg";
import GiftIcon from "@/assets/icons/Gift-2--Streamline-Sharp.svg";
import SupportIcon from "@/assets/icons/Customer-Support-1--Streamline-Sharp.svg";

export const categories = [
  { key: "travel", label: "Travel", Icon: TravelIcon },
  { key: "delivery", label: "Delivery", Icon: DeliveryIcon },
  { key: "bonuses", label: "Bonuses", Icon: GiftIcon },
  { key: "support", label: "Support", Icon: SupportIcon },
];

export const transactionsToday = [
  {
    id: "1",
    name: "Matthew Billson",
    subtitle: "Money Transfer",
    amount: 56.19,
    datetime: "Jun 9, 12:08",
    avatar: require("@/assets/images/Avatar.png"),
  },
];

export const transactionsYesterday = [
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
