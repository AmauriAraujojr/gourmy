import React, { createContext, useContext, useEffect, useState } from "react";
import { IPizza, IpizzaOption, LoginContext } from "./login.context";
import { api } from "../services/api";
import { IPizzaOptionFormData } from "../components/forms/pizzaOptionForm";
import { PedidosContext } from "./pedidos.context";

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
  createPizzaOption: (formdata: IPizzaOptionFormData, id: number) => Promise<void>
  pizzaOption: IpizzaOption | undefined
  setPizzaOption: React.Dispatch<React.SetStateAction<IpizzaOption | undefined>>
    getAllPizzas: () => Promise<void>

}
export const PizzaContext = createContext({} as IPizzaContext);

export const PizzaProvider = ({ children }: IPizzaProvider) => {
  const [pizzas, setPizzas] = useState<IPizza[]>();
  const[openMPizza,setOpenMPizza]=useState(false)
const[currentPizza, setCurrentPizza]= useState<IPizza|null>(null)
const [modalPizza,setModalPizza]=useState(false)
const [pizzaOption,setPizzaOption]=useState<IpizzaOption>()

const{company}=useContext(LoginContext)
const{setCart}=useContext(PedidosContext)


  const getAllPizzas = async () => {

    try {
      const response = await api.get("/pizza");
     const companyPizzas=response.data.filter((pizza:IPizza)=>{
      return pizza.company.id == company?.id
     })
      setPizzas(companyPizzas);
    } catch (error) {
      console.log(error);
    }

  };

  const createPizzaOption=async(formdata:IPizzaOptionFormData, id:number)=>{

    try {

      const response=await api.post(`/pizzaOption/${id}`,formdata)
     
     
      setPizzaOption(response.data)
      setCart((prev)=>{
        return [...prev,response.data]

    })
    } catch (error) {
      console.error(error)
      
    }

  }
 

  return (
    <PizzaContext.Provider value={{ pizzas,openMPizza,setOpenMPizza,currentPizza,setCurrentPizza,modalPizza,setModalPizza,createPizzaOption,pizzaOption,setPizzaOption,getAllPizzas
    }}>{children}</PizzaContext.Provider>
  );
};
