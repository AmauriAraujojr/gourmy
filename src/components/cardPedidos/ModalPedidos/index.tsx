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


  let index: number = 0;
  if (Number(currentPedido?.index)) {
    index = Number(currentPedido?.index)+1;
  }
  return (
    <StyledNewModalBox>
      <div role="dialog" className="modal">
<div className="box_one">
<Body700 >Pedido Nº {index}</Body700>
        <button className="closeButton" onClick={()=>setOpenPedido(false)}>x</button>

</div>
{currentPedido!.pizzaOption.length>0? currentPedido?.pizzaOption.map(pizzaO=>{
   return <div className="pizza_options">
    <Body700>Pizza</Body700>
  <Body500>-{pizzaO.pizza.name}</Body500>
  <Body500>{pizzaO.pizza.description}</Body500>
  <Body500>-{pizzaO.halfOptions}</Body500>
  <Body500>R$ {Number(pizzaO.price).toFixed(2)}</Body500>
</div>}):null}


{currentPedido!.products.length>0? currentPedido?.products.map(product=>{
   return <div className="products_options">
    <Body700>Produtos</Body700>
  <Body500>-{product.name}</Body500>

  <Body500>R$ {Number(product.price).toFixed(2)}</Body500>
</div>}):null}

<Body500 >{currentPedido?.type}</Body500>
{currentPedido?.type=="Entrega"?<Body500>Taxa de entrega: R$ {Number(currentPedido.taxa).toFixed(2)}</Body500>:null}
<Body700>Total: R$ {sum()}</Body700>
      <Body500>Cliente: {currentPedido?.client.name}</Body500>
<Body500>Telefone: {currentPedido?.client.phoneNumber}</Body500>
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
