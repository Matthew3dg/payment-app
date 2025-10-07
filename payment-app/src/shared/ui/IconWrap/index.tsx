import { ReactNode } from "react";
import { View } from "react-native";
import { styles } from "./styles";

type Props = { children: ReactNode; focused: boolean };

export default function IconWrap({ children }: Props) {
  return <View style={styles.container}>{children}</View>;
}
