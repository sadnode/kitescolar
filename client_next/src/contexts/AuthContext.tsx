import { createContext, ReactNode, useState } from "react";
import Router from "next/router";
import { setCookie, parseCookies, destroyCookie } from "nookies";

import { api } from "../services/api";
import { useEffect } from "react";

import { Error } from "../components/Toast";

type User = {
  name: string;
  cpf: number;
}

type SignInCredentials = {
  cpf: number;
  ne: number;
}

type AuthContextData = {
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut(): void;
  isAuthenticated: boolean;
  user: User;
};

type AuthProviderPropd = {
  children: ReactNode;
};

export const AuthContext = createContext({} as AuthContextData);

export function signOut() {
  destroyCookie(undefined, "@KITFABER.TOKEN");
  destroyCookie(undefined, "@KITFABER.REFRESHTOKEN");

  Router.push("/");
}

export function AuthProvider({ children }: AuthProviderPropd) {
  const [user, setUser] = useState<User>(null);
  const isAuthenticated = !!user;

  useEffect(() => {
    const { "@KITFABER.TOKEN": token } = parseCookies();

    if (token) {
      api.get("/user/me").then(response => {
        const { name, cpf } = response.data;

        setUser({
          name,
          cpf
        });
      }).catch(() => {
        signOut();
      });
    }
  }, []);

  async function signIn({ cpf, ne }: SignInCredentials) {
    try {
      const response = await api.post("auth/login", {
        numcpf: Number(cpf),
        numcad: Number(ne)
      });

      const { access_token } = response.data;
      const { name } = response.data.user;

      setCookie(undefined, "@KITFABER.TOKEN", access_token, {
        maxAge: 60 * 60 * 24 * 30, // 30 days
        path: "/",
      });

      setUser({
        name,
        cpf: Number(cpf)
      });

      api.defaults.headers["Authorization"] = `Bearer ${access_token}`;

      Router.push("/dashboard")

    } catch (err) {
      Error("Credenciais Inválidas");
    } 
  }

  return (
    <AuthContext.Provider value={{ signIn, signOut, isAuthenticated, user }} >
      {children}
    </AuthContext.Provider>
  )
}
