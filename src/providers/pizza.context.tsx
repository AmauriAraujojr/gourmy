import React, { createContext, useEffect, useState } from "react";
import { IPizza } from "./login.context";
import { api } from "../services/api";

interface IPizzaProvider {
  children: React.ReactNode;
}

interface IPizzaContext {
  pizzas: IPizza[] | undefined;
  openMPizza: boolean
  setOpenMPizza: React.Dispatch<React.SetStateAction<boolean>>
  currentPizza: IPizza | null
  setCurrentPizza: React.Dispatch<React.SetStateAction<IPizza | null>>
  modalPizza: boolean
  setModalPizza: React.Dispatch<React.SetStateAction<boolean>>
}
export const PizzaContext = createContext({} as IPizzaContext);

export const PizzaProvider = ({ children }: IPizzaProvider) => {
  const [pizzas, setPizzas] = useState<IPizza[]>();
  const[openMPizza,setOpenMPizza]=useState(false)
const[currentPizza, setCurrentPizza]= useState<IPizza|null>(null)
const [modalPizza,setModalPizza]=useState(false)

  const getAllPizzas = async () => {
    try {
      const response = await api.get("/pizza");
      setPizzas(response.data);
    } catch (error) {
      console.log(error);
    }

  };
  useEffect(() => {
    getAllPizzas();
  }, []);

  return (
    <PizzaContext.Provider value={{ pizzas,openMPizza,setOpenMPizza,currentPizza,setCurrentPizza,modalPizza,setModalPizza }}>{children}</PizzaContext.Provider>
  );
};
