import { useContext } from "react";
import { PizzaContext } from "../../../providers/pizza.context";
import { HeadingOne700 } from "../../../styles/tiphograpy";
import { StyledModalAdmin } from "./styles";
import { PizzaOptionForm } from "../../forms/pizzaOptionForm";

export const ModalAdminPedidos=()=>{

    const {pizzas,setOpenMPizza}=useContext(PizzaContext)
const {setCurrentPizza}=useContext(PizzaContext)
    return (
        <StyledModalAdmin>

      <div role="dialog" className="modal">
        <button onClick={()=>setOpenMPizza(false)}>X</button>
        <div>
            
            <HeadingOne700>Pizzas</HeadingOne700>

            <ul className="pizza_box">
                {
                    pizzas?.map(pizza=>{
                        return <li className="pizza" key={pizza.id} onClick={()=>setCurrentPizza(pizza)}>{pizza.name}</li>
                    })
                }
            </ul>
        </div>
<PizzaOptionForm/>
      </div>
        </StyledModalAdmin>
    );
}