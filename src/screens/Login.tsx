import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { ILoginProps, RootStackParamList, Email, Password } from "../types/type"; 
import { RouteProp, useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from "@react-navigation/stack/lib/typescript/src/types";


interface LoginProps {
  navigation: StackNavigationProp<RootStackParamList, "Login">;
}



const Login: React.FC<LoginProps> = ({ navigation }) => {
  const [email, setEmail] = useState<Email>("");
  const [password, setPassword] = useState<Password>("");

  const handleLogin = () => {
    navigation.navigate("Home");
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Haru</Text>
      <TextInput
        style={styles.input}
        placeholder="이메일"
        onChangeText={(text) => setEmail(text)}
        value={email}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="비밀번호"
        onChangeText={(text) => setPassword(text)}
        value={password}
        secureTextEntry={true}
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>로그인</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#007AFF",
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 90,
  },
  title: {
    fontSize: 32,
    color: "#FFFFFF",
    marginBottom: 32,
  },
  input: {
    width: "80%",
    height: 48,
    backgroundColor: "#FFFFFF",
    borderRadius: 4,
    paddingLeft: 16,
    marginBottom: 16,
  },
  button: {
    width: "80%",
    height: 48,
    backgroundColor: "#FFFFFF",
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontSize: 16,
    color: "#007AFF",
  },
});

export default Login;