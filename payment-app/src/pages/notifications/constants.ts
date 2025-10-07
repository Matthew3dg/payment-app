export const tabs = ["All", "Payments", "System", "Delivery", "Travel"] as const;

export type NotificationItem = {
  id: string;
  title: string;
  subtitle?: string;
  amount?: string;
  card?: string;
  balance?: string;
  dateLabel: string;
  category: (typeof tabs)[number];
};

export const notifications: NotificationItem[] = [
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
