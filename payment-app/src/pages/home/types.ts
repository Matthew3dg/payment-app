export type Category = {
  key: string;
  label: string;
  Icon: React.ComponentType<{ width?: number; height?: number }>;
};

export type Transaction = {
  id: string;
  name: string;
  subtitle: string;
  amount: number;
  datetime: string;
  avatar?: any;
};
