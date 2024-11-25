import React, { createContext, useContext } from "react";
import { api } from "../services/api";
import { IStatusFormData } from "../components/forms/statusform";
import { LoginContext } from "./login.context";

interface IPedidosProvider {
  children: React.ReactNode;
}

interface IPedidoContext {
  updatePedido: (id: number, formdata: IStatusFormData) => Promise<void>

}

export const PedidosContext = createContext({} as IPedidoContext);

export const PedidosProvider = ({ children }: IPedidosProvider) => {
  const { autoLogin } = useContext(LoginContext);

  const updatePedido = async (id: number, formdata: IStatusFormData) => {
    const token: string | null = localStorage.getItem("@TOKEN")!;

    try {
      await api.patch(`/pedidos/${id}`, formdata);

    } catch (error) {
      console.log(error);

    } finally {
      autoLogin(token);

    }
  };
  return (
    <PedidosContext.Provider value={{updatePedido}}>{children}</PedidosContext.Provider>
  );
};
