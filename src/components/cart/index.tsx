import { useContext } from "react";
import {
  Body500,
  Button800,
  HeadingOne700,
  HeadingTwo700,
} from "../../styles/tiphograpy";
import { PedidosContext } from "../../providers/pedidos.context";
import { StyledCart } from "./styles";

export const Cart = () => {
  const { setOpenCart, cart, setCart } = useContext(PedidosContext);

  const getTotal = () => {
    return cart.reduce((acc, item) => acc + Number(item.price), 0);
  };

  const handleRemove = (index: number) => {
    const newCart = cart.filter((item, i) => i !== index);
    setCart(newCart);
  };

  return (
    <StyledCart className="cart_box">
      <HeadingOne700>Carrinho</HeadingOne700>
      {/* <button onClick={() => setOpenCart(false)} ></button> */}

      {cart.length >= 1 ? (
        <>
          <ul className="cart_content">
            {cart.map((item, index) => (
              <li key={index} className="cart_item">
                <Body500>Pizza</Body500>
                {item.halfOptions ? (
                  <div className="half">
                    <p className="desc">1/2 {item.pizza.name} </p>

                    <p className="desc">1/2 {item.halfOptions.name}</p>
                  </div>
                ) : (
                  <p className="desc">{item.pizza.name} </p>
                )}
                <p className="desc">R$ {Number(item.price).toFixed(2)}</p>
                {/* <div className="quantity"> */}
                {/* <button onClick={() => handleQuantity(index, "remove")}>
                    <MinusIcon />
                    </button>
                    <HeadingTwo400>{item.quantity}</HeadingTwo400>
                    <button onClick={() => handleQuantity(index, "add")}>
                    <PlusIcon />
                    </button>
                    </div> */}

                <button onClick={() => handleRemove(index)} className="remove">
                  {/* <TrashIcon /> */} #
                </button>
              </li>
            ))}
          </ul>

          <div className="total">
            <HeadingTwo700>Total: R$ {getTotal().toFixed(2)}</HeadingTwo700>
            <button className="finish">
              <Button800>Finalizar Pedido</Button800>
            </button>
          </div>
        </>
      ) : (
        <ul className="cart_content">
          <HeadingTwo700 className="vazio">Carrinho Vazio</HeadingTwo700>
        </ul>
      )}
    </StyledCart>
  );
};

//   const { cart, setCart } = useContext(CartContext);
//   const { openCart, setOpenCart } = useContext(CartContext);
//   const { openMPizza } = useContext(PizzaContext);

//   const getTotal = () => {
//     return cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
//   };

//   const handleRemove = (index: number) => {
//     const newCart = cart.filter((item, i) => i !== index);
//     setCart(newCart);
//   };

//   const handleQuantity = (index: number, action: "add" | "remove") => {
//     const newCart = cart.map((item, i) => {
//       if (i === index) {
//         if (action === "add") {
//           item.quantity++;
//         } else {
//           item.quantity--;
//         }
//       }
//       return item;
//     });

//     setCart(newCart);
//   };

//   return (
//     <StyledCart openCart={openCart}>
//       <div className="cart_box">
//         <div className="title">
//           <HeadingTwo700>Carrinho</HeadingTwo700>
//           <CloseButton onClick={() => setOpenCart(false)} />
//         </div>
//         <ul>
//           {cart.map((item, index) => (
//             <li key={index}>
//               <div className="item">
//                 <div className="info">
//                   <HeadingTwo400>{item.name}</HeadingTwo400>
//                   <HeadingTwo400>R$ {item.price}</HeadingTwo400>
//                 </div>
//                 <div className="quantity">
//                   <button onClick={() => handleQuantity(index, "remove")}>
//                     <MinusIcon />
//                   </button>
//                   <HeadingTwo400>{item.quantity}</HeadingTwo400>
//                   <button onClick={() => handleQuantity(index, "add")}>
//                     <PlusIcon />
//                   </button>
//                 </div>
//                 <button onClick={() => handleRemove(index)}>
//                   <TrashIcon />
//                 </button>
//               </div>
//             </li>
//           ))}
//         </ul>
//         <div className="total">
//           <HeadingTwo700>Total: R$ {getTotal()}</HeadingTwo700>
//         </div>
//         <div className="buttons">
//           <Button onClick={() => setOpenCart(false)}>Cancelar</Button>
//           <Button onClick={() => openMPizza()}>Finalizar</Button>
//         </div>
//       </div>
//     </StyledCart>
