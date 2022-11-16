import React, { useState } from "react";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
  Image,
  Alert,
} from "react-native";
import { styles } from "./styles";
import { Task } from "../components/Task";

export default function Home() {
  const [tasks, setTasks] = useState<string[]>([]);
  const [taskAdd, setTaskAdd] = useState("");

  function handleAddTask() {
    if (tasks.includes(taskAdd)) {
      return Alert.alert("Task existente", "Essa tarefa já existe. 🧐");
    }

    setTasks((prevState) => [...prevState, taskAdd]);
    setTaskAdd("");
  }
  function handleRemoveTask(name: string) {
    Alert.alert("Remover", "Deseja remover essa tarefa?", [
      {
        text: "Sim",
        onPress: () =>
          setTasks((prevState) => prevState.filter((Task) => Task !== name)),
      },
      {
        text: "Não",
        style: "cancel",
      },
    ]);
  }

  return (
    <View style={styles.container}>
      <View style={styles.containerRow}>
        <Image source={require("../assets/rocket.png")} />
        <Text style={styles.textTo}>to</Text>
        <Text style={styles.textDo}>do</Text>
      </View>

      <View style={styles.containerRow}>
        <TextInput
          style={styles.inputText}
          placeholder="Adicione uma nova tarefa"
          placeholderTextColor="#808080"
          onChangeText={setTaskAdd}
          value={taskAdd}
        />
        <TouchableOpacity onPress={handleAddTask} style={styles.button}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.containerCountSection}>
        <View style={styles.containerRow}>
          <Text style={styles.textCreate}>Criadas</Text>
          <View style={styles.containerCount}>
            <Text style={styles.textCount}>0</Text>
          </View>
        </View>
        <View style={styles.containerRow}>
          <Text style={styles.textDone}>Concluídas</Text>
          <View style={styles.containerCount}>
            <Text style={styles.textCount}>0</Text>
          </View>
        </View>
      </View>

      <FlatList
        style={styles.list}
        data={tasks}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Task
            key={item}
            name={item}
            onRemove={() => handleRemoveTask(item)}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <View style={styles.emptyList}>
            <Image source={require("../assets/Clipboard.png")} />
            <Text style={styles.emptyListText}>
              Você ainda não tem tarefas cadastradas.
            </Text>
            <Text style={styles.emptyListSubText}>
              Crie tarefas e organize seus itens a fazer 🤓
            </Text>
          </View>
        )}
      />
    </View>
  );
}
