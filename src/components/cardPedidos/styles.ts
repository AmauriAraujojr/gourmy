import styled from "styled-components";

export const StyledCardPedidos= styled.li`
    width:100%;
    display:flex;
    flex-direction:column;
    padding:20px ;
    gap:20px;
    background-color:var( --color-grey-8);
    border: 1px solid var( --color-grey-8);
    border-radius:5px;
.box_type{
    display:flex;
    align-items: center;
    justify-content: space-between;
    width:100%;
    .type_pedido{
        background: var(--color-brand2);
        padding:5px;
    }
}
.box_client{
    display:flex;
    align-items: center;
    justify-content: space-between;
    width:100%;
}
.box_address{
    display:flex;
    align-items: center;
    justify-content: space-between;
    width:100%;
}

select{
    background: none;
    padding:5px;
    
}

`