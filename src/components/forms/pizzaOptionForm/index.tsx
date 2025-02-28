import { act, useContext, useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { IPizza } from "../../../providers/login.context";
import { PizzaContext } from "../../../providers/pizza.context";
import { StyledFormPizzaOption } from "./styles";
import { Body500, Body700, HeadingOne700h } from "../../../styles/tiphograpy";

export interface IPizzaOptionFormData {
  size: string;
  halfAndHalf: boolean;
  pizza: IPizza;
  halfOptions: IPizza;
  borda: any;
}

export const PizzaOptionForm = () => {
  const { register, handleSubmit,    formState: { errors }, } = useForm<IPizzaOptionFormData>({
    defaultValues: {
      size: "",
    },
  });
  const [isActive, setIsActive] = useState(false);
  const [isActiveHalf, setIsActiveHalf] = useState(false);
  const [error, setError] = useState("");

  const {
    currentPizza,
    createPizzaOption,
    setModalPizza,
    setPizzaOption,
    pizzaOption,
    pizzas,
  } = useContext(PizzaContext);

  const [openSelect, setOpenSelect] = useState(false);
  const [halfOptions, setHalfOptions] = useState<IPizza>();
  const [borda, setBorda] = useState({ sabor: "", price: "" });

  const setBordaActive = (borda:any) => {
    setIsActive(borda);

    setBorda(borda);
  }

  const setOptionsActive = (pizza:any) => {
    setIsActiveHalf(pizza);
    
    setHalfOptions(pizza);
  }

  let priceTotalG= "";
  let priceTotalM= "";
  let priceTotalP= "";

  if (halfOptions) {
    if (Number(currentPizza?.price_G) > Number(halfOptions.price_G)) {
      let sum = Number(currentPizza?.price_G) + Number(borda.price);
      priceTotalG = String(sum);
    } else if (Number(currentPizza?.price_G) < Number(halfOptions.price_G)) {
      let sum = Number(halfOptions.price_G) + Number(borda.price);

      priceTotalG = String(sum);
    } else {
      let sum = Number(currentPizza?.price_G) + Number(borda.price);

      priceTotalG = String(sum);
    }
  
      if (Number(currentPizza?.price_M) > Number(halfOptions.price_M)) {
        let sumM = Number(currentPizza?.price_M) + Number(borda.price);
        priceTotalM = String(sumM);
      } else if (Number(currentPizza?.price_M) < Number(halfOptions.price_M)) {
        let sumM = Number(halfOptions.price_M) + Number(borda.price);
        priceTotalM = String(sumM);
      } else {
        let sumM= Number(currentPizza?.price_M) + Number(borda.price);
        priceTotalM = String(sumM);
      }
      if (Number(currentPizza?.price_P) > Number(halfOptions.price_P)) {
        let sumP= Number(currentPizza?.price_P) + Number(borda.price);

        priceTotalP = String(sumP);
      } else if (Number(currentPizza?.price_P) < Number(halfOptions.price_P)) {
        let sumP = Number(halfOptions.price_P) + Number(borda.price);
        priceTotalP = String(sumP);
      } else {
        let sumP = Number(currentPizza?.price_P) + Number(borda.price);

        priceTotalP = String(sumP);
      }
    }
  else {
    let sum = Number(currentPizza?.price_G) + Number(borda.price);
    let sumM= Number(currentPizza?.price_M) + Number(borda.price);
    let sumP = Number(currentPizza?.price_P) + Number(borda.price);


    priceTotalG= String(sum);
    priceTotalM= String(sumM);
    priceTotalP= String(sumP);

  }

  const submit: SubmitHandler<IPizzaOptionFormData> = (formData) => {
    if (!isActive) {
      setError("Selecione uma borda antes de continuar.");
      return;
    }

    setError("");

    formData.pizza = currentPizza!;
    formData.halfOptions = halfOptions!;
    formData.borda = borda;

    createPizzaOption(formData, currentPizza!.id);

    setModalPizza(false);
  };
  const closeAndSetHalfOption = () => {
    setHalfOptions(undefined);
    setOpenSelect(!openSelect);
  };

  const closeAndSetPizzaOption = () => {
    setPizzaOption(undefined);
    setModalPizza(false);
  };
  useEffect(() => {
  }, [openSelect, pizzaOption]);

  return (
    <StyledFormPizzaOption>
      <div className="current_pizza">
        <HeadingOne700h>{currentPizza?.name}</HeadingOne700h>
        <Body500>{currentPizza?.description}</Body500>

        <form onSubmit={handleSubmit(submit)}>
          <div className="size_content">
            <Body700>Meio a Meio?</Body700>
            <input
              onClick={() => closeAndSetHalfOption()}
              type="checkbox"
              {...register("halfAndHalf")}
            />
          </div>

          <Body500 className="desc">
            Pizzas meio a meio será cobrado pelo valor maior!
          </Body500>

          {openSelect ? (
            <div className="half_options">
              <Body700>Escolha a segunda metade:</Body700>
              {pizzas?.filter(p=>p.name != currentPizza?.name).map((pizza: IPizza|any) => {
                return (
                  <div
                    key={pizza.id}
                    onClick={() => setOptionsActive(pizza)}
                    className={`half_pizza ${isActiveHalf=== pizza? "active" : ""}`}
                    tabIndex={0}                   
                    >
                    <Body500>1/2 {pizza.name} </Body500>
                    <Body500 className="desc">{pizza.description}</Body500>
                  </div>
                );
              })}
            </div>
          ) : null}

          <div className="borda_box">
            <Body700>Borda</Body700>
            <div className="borda_content">
            {currentPizza?.borda.map((borda: any) => {
              return (

                  
                <div onClick={() => setBordaActive(borda)} key={borda.name} className={`borda_select ${isActive === borda? "active" : ""}`} tabIndex={0} >
                  <Body500>{borda.sabor}: R$ {Number(borda.price).toFixed(2)}</Body500> <Body500></Body500>
                </div>
              );
            })}
            </div>
          </div>
          {error && <p style={{ color: "red" }}>{error}</p>}

          <div className="size_box">
            <div className="size_content">
              <Body700> Grande</Body700>
              <Body500>R$ {Number(priceTotalG).toFixed(2)}</Body500>

              <input
                type="radio"
                value="Grande"
                {...register("size", { required: "Selecione um tamanho" })} //
              />
            </div>

            <div className="size_content">
              <Body700> Média</Body700>
              <Body500>R$ {Number(priceTotalM).toFixed(2)}</Body500>

              <input type="radio" value="Média" {...register("size", { required: "Selecione um tamanho" })} />
            </div>
            <div className="size_content">
              <Body700>Pequena</Body700>
              <Body500>R$ {Number(priceTotalP).toFixed(2)}</Body500>

              <input type="radio" value="Pequena" {...register("size", { required: "Selecione um tamanho" })}/>
            </div>
          </div>
          {errors.size && <p style={{ color: "red" }}>{errors.size.message}</p>}
          <div className="box_button">
            <button>
              <Body700 onClick={() => closeAndSetPizzaOption()}>
                Cancelar
              </Body700>
            </button>
            <button type="submit">
              <Body700>Adicionar ao carrinho</Body700>{" "}
            </button>
          </div>
        </form>
      </div>
    </StyledFormPizzaOption>
  );
};
