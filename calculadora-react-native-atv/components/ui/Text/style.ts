import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  titulo: {
    fontSize: 40,
    fontWeight: "bold",
    position: "absolute",
    top: "40%",  // Ajuste para ficar mais centralizado
    left: "50%",
    transform: [{ translateX: -120 }],  // Centraliza o título, ajustando o valor de acordo com o tamanho da fonte
  },
  subtitulo: {
    fontSize: 24,
    position: "absolute",
    top: "50%",  // Ajuste para que fique logo abaixo do título
    left: "50%",
    transform: [{ translateX: -80 }],
  },
});
