import { useContext } from "react";
import { PizzaContext } from "../../../providers/pizza.context";
import { HeadingOne700 } from "../../../styles/tiphograpy";

export const ModalAdminPedidos=()=>{

    const {pizzas,setOpenMPizza}=useContext(PizzaContext)
console.log(pizzas)

    return (
      <div role="dialog" className="modal">
        <div className="box_one"></div>
        <button onClick={()=>setOpenMPizza(false)}>X</button>
        <div>
            <HeadingOne700>Pizzas</HeadingOne700>

            <ul>
                {
                    pizzas?.map(pizza=>{
                        return <li key={pizza.id}>{pizza.name}</li>
                    })
                }
            </ul>
        </div>

      </div>
    );
}