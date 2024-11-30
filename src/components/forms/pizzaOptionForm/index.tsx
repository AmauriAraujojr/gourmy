import { useContext, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { PedidosContext } from "../../../providers/pedidos.context";
import { Input } from "../../../fragments/inputs";
import { IPizza } from "../../../providers/login.context";
import { PizzaContext } from "../../../providers/pizza.context";

export interface IPizzaOptionFormData {
size: string;
halfAndHalf:boolean
pizza:IPizza
}


export const PizzaOptionForm = () => {
  const { register, handleSubmit } = useForm<IPizzaOptionFormData>({
    defaultValues: {
     size: "", 
    },
  });

  const{currentPizza}=useContext(PizzaContext)

  // Função para envio do formulário
  const[openSelect,setOpenSelect]=useState(false)
  console.log(openSelect)
  const submit: SubmitHandler<IPizzaOptionFormData> = (formData) => {

    formData.pizza=currentPizza!
 console.log(formData)
  };

  return (
    <div>
      <form onSubmit={handleSubmit(submit)}>

        <div {...register("pizza")}>
        
        </div>
            <Input
              type="radio"
              value="Grande"
              {...register("size")} //
            />
            Grande
            <Input
              type="radio"
              value="Média"
              {...register("size")}
            />
            Média
            <Input
              type="radio"
              value="Pequena"
              {...register("size")}
            />
            Pequena

            <Input onClick={()=>setOpenSelect(true)}
              type="checkbox"
              {...register("halfAndHalf")}
            />
            Meio a Meio?

           
          <button type="submit">Enviar</button>
      </form>
    </div>
  );
};
