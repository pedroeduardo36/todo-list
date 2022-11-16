import { Text, TouchableOpacity, View, Image } from "react-native";
import { styles } from "./styles";

type Props = {
  name: string;
  onRemove: () => void;
};

export function Task({ name, onRemove }: Props) {
  return (
    <View style={styles.containerTask}>
      <Text style={styles.textTask}>{name}</Text>
      <TouchableOpacity onPress={onRemove}>
        <Image source={require("../../assets/trash.png")} />
      </TouchableOpacity>
    </View>
  );
}
