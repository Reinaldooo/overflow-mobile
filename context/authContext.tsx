import React, { createContext, useContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-community/async-storage";
//
import api from "../services/api";

interface SignInCredentials {
  email: string;
  passwd: string;
}

interface AuthContextData {
  user: object;
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut(): void;
  loading: boolean;
}

interface AuthState {
  token: string;
  user: object;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState({} as AuthState);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      // Multiget returns an array containing arrays with key and value, thats
      // why i destructured the second item from the arrays [ [key, value] ]
      const [[, token], [, user]] = await AsyncStorage.multiGet([
        "@main:token",
        "@main:user",
      ]);
      if (token && user) {
        setData({ token, user: JSON.parse(user) });
      }
      setLoading(false);
    })();
  }, []);

  const signIn = async ({ email, passwd }: SignInCredentials) => {
    const res = await api.post("session", {
      email,
      passwd,
    });

    const { token, user } = res.data;

    await AsyncStorage.multiSet([
      ["@main:token", token],
      ["@main:user", JSON.stringify(user)],
    ]);

    setData({ token, user });
  };

  const signOut = async () => {
    await AsyncStorage.multiRemove(["@main:token", "@main:user"]);

    setData({} as AuthState);
  };

  return (
    <AuthContext.Provider value={{ user: data.user, signIn, signOut, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): AuthContextData {
  return useContext(AuthContext);
}

export { useAuth, AuthProvider };
