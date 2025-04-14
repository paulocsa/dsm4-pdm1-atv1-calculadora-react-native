import { ScrollView, View, Text, StyleSheet } from "react-native";
import CustomButton from "../ui/buttons";
import CustomInput from "../ui/inputs";
import LayoutBotoesCalculadora from "../ui/layout/ButtonLayout";
import LayoutInputCalculadora from "../ui/layout/InputLayout";
import CustomTexto from "../ui/Text";
import { useState } from "react";

export default function ScreenCalculator() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");
  const [operator, setOperator] = useState("");

  function calculateResult() {
    const parts = input.split(operator);
    if (parts.length !== 2) {
      setResult("Valor inválido");
      return;
    }

    const num1 = parseFloat(parts[0]);
    const num2 = parseFloat(parts[1]);

    if (isNaN(num1) || isNaN(num2)) {
      setResult("Valores inválidos");
      return;
    }

    let res = 0;

    switch (operator) {
      case "+":
        res = num1 + num2;
        break;
      case "-":
        res = num1 - num2;
        break;
      case "*":
        res = num1 * num2;
        break;
      case "/":
        if (num2 === 0) {
          setResult("Divisão por zero");
          return;
        }
        res = num1 / num2;
        break;
      default:
        setResult("Escolha um operador");
        return;
    }

    setResult(res.toString());
    setInput("");
  }

  const handlePress = (value: string) => {
    if (value === "=") {
      calculateResult();
    } else if (["+", "-", "*", "/"].includes(value)) {
      if (!input.includes(value)) {
        setOperator(value);
        setInput(input + value);
      }
    } else {
      setInput(input + value);
    }
  };

  return (
    <ScrollView>
      <View>
        <CustomTexto type="titulo">Calculadora</CustomTexto>
      </View>

      <LayoutInputCalculadora>
        <View style={styles.inputContainer}>
          <CustomInput
            hint="Digite o valor"
            value={input}
            onChangeText={setInput}
          />
          <View style={styles.resultContainer}>
            <Text style={styles.resultText}>{result}</Text>
          </View>
        </View>
      </LayoutInputCalculadora>

      <LayoutBotoesCalculadora>
        <CustomButton onPress={() => handlePress("1")}>1</CustomButton>
        <CustomButton onPress={() => handlePress("2")}>2</CustomButton>
        <CustomButton onPress={() => handlePress("3")}>3</CustomButton>
        <CustomButton onPress={() => handlePress("4")}>4</CustomButton>
        <CustomButton onPress={() => handlePress("5")}>5</CustomButton>
        <CustomButton onPress={() => handlePress("6")}>6</CustomButton>
        <CustomButton onPress={() => handlePress("7")}>7</CustomButton>
        <CustomButton onPress={() => handlePress("8")}>8</CustomButton>
        <CustomButton onPress={() => handlePress("9")}>9</CustomButton>
        <CustomButton onPress={() => handlePress("0")}>0</CustomButton>
        <CustomButton onPress={() => handlePress("+")}>+</CustomButton>
        <CustomButton onPress={() => handlePress("-")}>-</CustomButton>
        <CustomButton onPress={() => handlePress("*")}>*</CustomButton>
        <CustomButton onPress={() => handlePress("/")}>/</CustomButton>
        <CustomButton onPress={() => handlePress("=")}>=</CustomButton>
        <CustomButton onPress={() => {
          setInput("");
          setResult("");
          setOperator("");
        }}>C</CustomButton>
      </LayoutBotoesCalculadora>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: "#f2f2f2", 
    borderRadius: 12, 
    padding: 15, 
    marginVertical: 15, 
    shadowColor: "#000", 
    shadowOffset: { width: 0, height: 2 }, 
    shadowOpacity: 0.2, 
    shadowRadius: 4, 
    elevation: 5,
  },
  resultContainer: {
    backgroundColor: "#282828", 
    padding: 15, 
    borderRadius: 10, 
    marginVertical: 10,
  },
  resultText: {
    color: "#fff", 
    fontSize: 30, 
    textAlign: "center", 
    fontWeight: "bold",
  },
});
