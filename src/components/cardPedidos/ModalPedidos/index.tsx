import { useContext } from "react";

import { PedidosContext } from "../../../providers/pedidos.context";
import { Body500, Body700 } from "../../../styles/tiphograpy";
import { StyledNewModalBox } from "./styles";


export const PedidosModal = () => {
  const { currentPedido, setOpenPedido } = useContext(PedidosContext);

console.log(currentPedido)
  const sum = () => {
    let totalPrice = 0;

    let pizzaOptionPrice = 0;

    if (currentPedido && currentPedido.products.length > 0) {
      totalPrice = currentPedido?.products
        .map((produto: any) => Number(produto.price))
        .reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    }

    if ( currentPedido && currentPedido.pizzaOption.length > 0) {
      pizzaOptionPrice = currentPedido?.pizzaOption
        .map((produto: any) => Number(produto.price))
        .reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    }

    let taxa = 0;
    if (currentPedido?.taxa) {
      taxa = Number(currentPedido?.taxa);
    }

    
    let total = totalPrice + pizzaOptionPrice + taxa;
    
  
    return total.toFixed(2);
  };


  let index = 0;
  if (currentPedido?.index) {
    index = Number(currentPedido?.index+1);
  }
  return (
    <StyledNewModalBox>
      <div role="dialog" className="modal">
        <button className="closeButton" onClick={()=>setOpenPedido(false)}>x</button>
<div>
<Body500 >{currentPedido?.type}</Body500>
<Body500 >Pedido Nº {index}</Body500>

</div>

      <Body700>Total: R$ {sum()}</Body700>
      <Body500>{currentPedido?.client.name}</Body500>
{currentPedido?.type == "Entrega" ?
      <div>

      <Body500>
          {currentPedido?.client.address.street}, {currentPedido?.client.address.number},{" "}
          {currentPedido?.client.address.neighborhood}
        </Body500>
      </div>
:null}

    </div>
    </StyledNewModalBox>
  );
};
