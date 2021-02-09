import React from "react";
import { View } from "react-native";
//
import Button from "../../components/Button";
import { useAuth } from "../../context/authContext";

const Dashboard: React.FC = () => {
  const { signOut } = useAuth();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        paddingHorizontal: 20,
        backgroundColor: "#3e3f41",
      }}
    >
      <Button onPress={signOut}>Sair</Button>
    </View>
  );
};

export default Dashboard;
