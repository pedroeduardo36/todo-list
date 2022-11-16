import {  StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1A1A1A",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: 100,
    padding: 24,
  },
  containerRow: {
    flexDirection: "row",
    marginBottom: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  textTo: {
    fontSize: 42,
    fontWeight: "bold",
    color: "#4EA8DE",
    marginLeft: 12,
  },
  textDo: {
    fontSize: 42,
    fontWeight: "bold",
    color: "#5E60CE",
  },
  inputText: {
    fontSize: 16,
    fontWeight: "300",
    color: "#fff",
    backgroundColor: "#262626",
    height: 54,
    flex: 1,
    padding: 16,
    borderRadius: 8,
    marginRight: 12,
  },
  button: {
    backgroundColor: "#1E6F9F",
    width: 52,
    height: 52,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 16,
  },
  list: {
    flex: 1,
    width: "100%",
    marginTop: 16,
  },
  emptyListText: {
    color: "#808080",
    textAlign: "center",
    fontWeight: "bold",
    marginTop: 24,
  },
  emptyListSubText: {
    color: "#808080",
    textAlign: "center",
    fontWeight: "400",
  },
  emptyList: {
    alignItems: "center",
    justifyContent: "center",
  },
  textCreate: {
    color: "#4EA8DE",
    fontWeight: "bold",
    marginRight: 12,
  },
  textDone: {
    color: "#5E60CE",
    fontWeight: "bold",
    marginRight: 12,
  },
  textCount: {
    color: "#FFF",
  },
  containerCount: {
    backgroundColor: "#333333",
    width: 28,
    height: 20,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 12,
  },

  containerCountSection: {
    flexDirection: 'row',
    alignContent: "center",
    justifyContent: "space-between",
    borderRadius: 12,
    borderBottomColor: '#333333',
    borderBottomWidth: 1,
    width: '100%'
  },
});
