import { useContext, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { IPizza } from "../../../providers/login.context";
import { PizzaContext } from "../../../providers/pizza.context";
import { StyledFormPizzaOption } from "./styles";
import { Body500, Body700, HeadingOne700h } from "../../../styles/tiphograpy";

export interface IPizzaOptionFormData {
  size: string;
  halfAndHalf: boolean;
  pizza: IPizza;
  halfOptions:IPizza
}

export const PizzaOptionForm = () => {
  const { register, handleSubmit } = useForm<IPizzaOptionFormData>({
    defaultValues: {
      size: "",
    },
  });

  const { currentPizza, createPizzaOption,setModalPizza,setPizzaOption,pizzas} = useContext(PizzaContext);

  const [openSelect, setOpenSelect] = useState(false);
  console.log(openSelect);
  const submit: SubmitHandler<IPizzaOptionFormData> = (formData) => {
    formData.pizza = currentPizza!;
    // createPizzaOption(formData, currentPizza!.id);
    console.log(formData)
  };
const closeAndSetPizzaOption=()=>{
  setPizzaOption([])
  setModalPizza(false)
}
  return (
    <StyledFormPizzaOption>
      <div className="current_pizza">
        <HeadingOne700h>{currentPizza?.name}</HeadingOne700h>
        <Body500>{currentPizza?.description}</Body500>

        <form onSubmit={handleSubmit(submit)}>
          <div {...register("pizza")}></div>
          <div className="size_box">
            <div className="size_content">
              <Body700> Grande</Body700>
              <Body500>R$: {Number(currentPizza?.price_G).toFixed(2)}</Body500>

              <input
                type="radio"
                value="Grande"
                {...register("size")} //
              />
            </div>

            <div className="size_content">
              <Body700> Média</Body700>
              <Body500>R$: {Number(currentPizza?.price_M).toFixed(2)}</Body500>

              <input type="radio" value="Média" {...register("size")} />
            </div>
            <div className="size_content">
              <Body700>Pequena</Body700>
              <Body500>R$: {Number(currentPizza?.price_P).toFixed(2)}</Body500>

              <input type="radio" value="Pequena" {...register("size")} />
            </div>
          </div>
          <div className="size_content">

          <Body700>Meio a Meio?</Body700>
          <input
            onClick={() => setOpenSelect(true)}
            type="checkbox"
            {...register("halfAndHalf")}
          />

          <div>
            <select {...register("halfOptions")}>

              {pizzas?.map((pizza:IPizza)=>{
                return <option value={""}>
                    <Body700>{pizza.name}: </Body700>
                    <Body500>{pizza.description}</Body500>

                </option>
              })}
            </select>
          </div>
          </div>
          <div className="box_button">
<button> <Body700 onClick={()=>closeAndSetPizzaOption()}>Cancelar</Body700></button>
          <button type="submit"><Body700>Próximo</Body700> </button>
          </div>
        </form>
      </div>
    </StyledFormPizzaOption>
  );
};
