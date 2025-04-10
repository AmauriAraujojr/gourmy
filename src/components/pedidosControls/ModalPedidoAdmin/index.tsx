import { useContext, useEffect } from "react";
import { PizzaContext } from "../../../providers/pizza.context";
import { HeadingOne700 } from "../../../styles/tiphograpy";
import { StyledModalAdmin } from "./styles";
import { PizzaOptionForm } from "../../forms/pizzaOptionForm";
import { IPizza } from "../../../providers/login.context";
import { Cart } from "../../cart";
import { PedidosContext } from "../../../providers/pedidos.context";

export const ModalAdminPedidos=()=>{

    const {pizzas,setOpenMPizza,setCurrentPizza,modalPizza,setModalPizza,getAllPizzas}=useContext(PizzaContext)
    const{setCart}=useContext(PedidosContext)
    useEffect(()=>{

getAllPizzas()

    },[])

    const closeAndSetCart=()=>{
        setOpenMPizza(false)
        setCart([])
    }

    const setPizzaOpenModal=(pizza:IPizza)=>{
        setCurrentPizza(pizza)
        setModalPizza(true)
    }
    return (
        <StyledModalAdmin>

      <div role="dialog" className="modal">
        <button className="closeButton " onClick={()=>closeAndSetCart()}>X</button>
                <Cart/>
        <div className="modal_content">
            
            <HeadingOne700>Pizzas</HeadingOne700>

            <ul className="pizza_box">
                {
                    pizzas?.map((pizza:IPizza)=>{
                        return <li className="pizza" key={pizza.id} onClick={()=>setPizzaOpenModal(pizza)}>{pizza.name}</li>
                    })
                }
            </ul>

            <HeadingOne700>Bebidas</HeadingOne700>

            <ul className="pizza_box">
                {
                    pizzas?.map((pizza:IPizza)=>{
                        return <li className="pizza" key={pizza.id} onClick={()=>setPizzaOpenModal(pizza)}>{pizza.name}</li>
                    })
                }
            </ul>
        </div>
        {
            modalPizza? <PizzaOptionForm/>
:null
        }

      </div>
        </StyledModalAdmin>
    );
}