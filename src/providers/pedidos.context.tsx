import React, { createContext, useContext, useEffect, useState } from "react";
import { api } from "../services/api";
import { IStatusFormData } from "../components/forms/statusform";
import { IPedidos, IpizzaOption, IproductsSell, LoginContext } from "./login.context";

interface IPedidosProvider {
  children: React.ReactNode;
}

interface IPedidoContext {
  updatePedido: (id: number, formdata: IStatusFormData) => Promise<void>;
  pedidos: IPedidos[];
  currentPedido: IPedidos | undefined;
  setCurrentPedido: React.Dispatch<React.SetStateAction<IPedidos | undefined>>;
  openPedido: boolean;
  setOpenPedido: React.Dispatch<React.SetStateAction<boolean>>;
  openCart: boolean
  setOpenCart: React.Dispatch<React.SetStateAction<boolean>>
  cart: IpizzaOption[]
  setCart: React.Dispatch<React.SetStateAction< IpizzaOption[]>>
}

export const PedidosContext = createContext({} as IPedidoContext);

export const PedidosProvider = ({ children }: IPedidosProvider) => {
  const [pedidos, setPedidos] = useState<IPedidos[]>([]);
  const [currentPedido, setCurrentPedido] = useState<IPedidos>();
  const [openPedido, setOpenPedido] = useState(false);
  const [openCart, setOpenCart] = useState(false);
  const [cart, setCart] = useState<IpizzaOption[]>([]);



  const{company}=useContext(LoginContext)
 
  const getAllPedidos = async () => {

    try {
      const response = await api.get("/pedidos");

      const pedidosAll = response.data;
      const filteredCompanyPedidos = pedidosAll.filter((pedidos: IPedidos) => {
        return pedidos.company.id == company?.id;
      });

      setPedidos(filteredCompanyPedidos);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllPedidos();
  }, []);

  const updatePedido = async (id: number, formdata: IStatusFormData) => {
    try {
      await api.patch(`/pedidos/${id}`, formdata);
    } catch (error) {
      console.log(error);
    } finally {
      getAllPedidos();
    }
  };
  return (
    <PedidosContext.Provider
      value={{
        updatePedido,
        pedidos,
        currentPedido,
        setCurrentPedido,
        openPedido,
        setOpenPedido,
        openCart,
        setOpenCart,
        cart,
        setCart
      }}
    >
      {children}
    </PedidosContext.Provider>
  );
};
