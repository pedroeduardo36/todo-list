import { Text, TouchableOpacity, View, Image } from "react-native";
import { styles } from "./styles";
import BouncyCheckbox from "react-native-bouncy-checkbox";

type Props = {
  name: string;
  onRemove: () => void;
};

export function Task({ name, onRemove }: Props) {
  return (
    <View style={styles.containerTask}>
      <BouncyCheckbox
        style={styles.checkbox}
        text={name}
        textStyle={styles.textTask}
        onPress={(isChecked: boolean) => {}}
        fillColor="#4EA8DE"
      ></BouncyCheckbox>
      <TouchableOpacity onPress={onRemove}>
        <Image source={require("../../assets/trash.png")} />
      </TouchableOpacity>
    </View>
  );
}
