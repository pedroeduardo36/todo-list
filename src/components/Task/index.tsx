import React, {useState} from "react";
import { TouchableOpacity, View, Image } from "react-native";
import { styles } from "./styles";
import BouncyCheckbox from "react-native-bouncy-checkbox";

const [isChecked] = useState(false)

type Props = {
  name: string;
  onRemove: () => void;
  onDone: () => void;
};
//TODO tentar fazer o isChecked com useState

export function Task({ name, onRemove, onDone }: Props) {
  return (
    <View style={styles.containerTask}>
      <BouncyCheckbox
        style={styles.checkbox}
        text={name}
        textStyle={styles.textTask}
        onPress={onDone}
        fillColor="#4EA8DE"
      />
      <TouchableOpacity onPress={onRemove}>
        <Image source={require("../../assets/trash.png")} />
      </TouchableOpacity>
    </View>
  );
}
