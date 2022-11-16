import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  containerTask: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    marginTop: 20,
    backgroundColor: "#262626",
    borderWidth: 0.2,
    borderColor: "#808080",
    borderRadius: 8,
    padding: 12,
  },
  textTask: {
    color: "#fff",
    lineHeight: 20,
  },
  checkbox: {
    width: "80%",
    flexDirection: "row",
    alignItems: "center",
  },
});
