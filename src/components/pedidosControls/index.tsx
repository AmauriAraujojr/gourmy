import { useContext, useEffect } from "react";
import { CardPedidos } from "../cardPedidos";
import { StyledPedidosControls } from "./styles";
import { IPedidos, LoginContext } from "../../providers/login.context";
import { HeadingTwo700 } from "../../styles/tiphograpy";

export const PedidosControls = () => {
  const { company } = useContext(LoginContext);

  const getDates = (timestamp: string) => {
    const data = new Date(timestamp);

    // Subtrair 3 horas
    data.setHours(data.getHours() - 3);

    // Verificar se a data mudou para o dia anterior
    const day = data.getDate();
    const month = data.getMonth();
    const year = data.getFullYear();

    // Formatar a data como DD-MM-YYYY
    const formattedDate = `${String(day).padStart(2, "0")}-${String(
      month + 1
    ).padStart(2, "0")}-${String(year)}`;

    // Retornar a data formatada
    return formattedDate;
  };

  // Filtrar os pedidos do dia
  const pedidosOnDay = company?.pedidos
    .filter((pedidos: IPedidos) => {
      let today = new Date();
      let formatToday = `${String(today.getDate()).padStart(2, "0")}-${String(
        today.getMonth() + 1
      ).padStart(2, "0")}-${String(today.getFullYear())}`;

      let created = getDates(String(pedidos.createdAt));

      return created == formatToday;
    })
    .map((pedido: IPedidos, index: number) => ({
      ...pedido,
      index: String(index), // Adiciona o índice original ao pedido
    }));

  // Criação de arrays filtrados por status, mantendo o índice original
  const pend = pedidosOnDay?.filter(
    (pedidos: IPedidos) => pedidos.status === "Pendente"
  );
  const acept = pedidosOnDay?.filter(
    (pedidos: IPedidos) => pedidos.status === "Aceito"
  );
  const concl = pedidosOnDay?.filter(
    (pedidos: IPedidos) => pedidos.status === "Concluído"
  );

  useEffect(() => {}, [company]);

  return (
    <StyledPedidosControls>
      <ul className="pedidos_box pend">
        <div className="title">
          <HeadingTwo700>Novos pedidos</HeadingTwo700>
        </div>
        {pend?.reverse().map((pedido: IPedidos) => {
          // Usando o índice original calculado ao filtrar os pedidos
          return (
            <CardPedidos
              key={pedido.id}
              pedido={pedido}
              index={pedido.index} // Passa o índice original do pedido
            />
          );
        })}
      </ul>

      <ul className="pedidos_box acept">
        <div className="title">
          <HeadingTwo700>Pedidos aceitos</HeadingTwo700>
        </div>
        {acept?.reverse().map((pedido: IPedidos) => {
          // Usando o índice original calculado ao filtrar os pedidos
          return (
            <CardPedidos
              key={pedido.id}
              pedido={pedido}
              index={pedido.index} // Passa o índice original do pedido
            />
          );
        })}
      </ul>

      <ul className="pedidos_box concl">
        <div className="title">
          <HeadingTwo700>Pedidos concluídos</HeadingTwo700>
        </div>
        {concl?.reverse().map((pedido: IPedidos) => {
          // Usando o índice original calculado ao filtrar os pedidos
          return (
            <CardPedidos
              key={pedido.id}
              pedido={pedido}
              index={pedido.index} // Passa o índice original do pedido
            />
          );
        })}
      </ul>
    </StyledPedidosControls>
  );
};