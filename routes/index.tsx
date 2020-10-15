import React from "react";
import { ActivityIndicator, View } from "react-native";
//
import { useAuth } from "../context/authContext";
import AppRoutes from "./appRoutes";
import AuthRoutes from "./authRoutes";

const Routes: React.FC = () => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          backgroundColor: "#025aa2",
        }}
      >
        <ActivityIndicator size="large" color="white" />
      </View>
    );
  }

  return user ? <AppRoutes /> : <AuthRoutes />;
};

export default Routes;
