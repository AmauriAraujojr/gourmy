import { Cart } from "../components/cart";
import { Control } from "../components/controll";
import { PedidosControls } from "../components/pedidosControls";

export const PedidosPage = () => {
  return (
    <div className="pedidosPage">
    <Control/>
    <PedidosControls />
    <Cart/>
    </div>
  );
};
