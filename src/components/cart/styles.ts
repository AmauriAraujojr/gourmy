import styled from "styled-components";

export const StyledCart = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;


  .cart_content {
    display: flex;
    flex-direction: column;
    gap: 10px;
    background-color: var(--color-grey-8);
    width: 100%;
    height: 100%;
    padding: 15px 5px;
    aling-items: flex-start;
    overflow: auto;

    .vazio{
    text-align: center;
    }

    .half {
      display: flex;
      flex-direction: column;
      padding: 5px;
    }
    .cart_item {
      display: flex;
      background-color: var(--color-brand3);
      justify-content: space-between;
      align-items: center;
      padding: 10px;
      border-radius: 5px;
      position: relative;
      top: -10px;
      gap: 5px;
      height: 50px;
      
    }
    .remove {
      position: absolute;
      right: 0;
      top:-5px;
      cursor: pointer;
    }

    .desc {
      font-size: 0.73rem;
      color: var(--color-grey-6);
    }
  }
    .total{
    background-color: var(--color-brand1);
    padding: 10px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    gap: 10px;
          color: var(--color-grey-6);


    .finish{
      padding: 10px;
      cursor: pointer;
      background-color: var(--color-brand2);
      border: none;
      border-radius: 5px;
      color: var(--color-withe-fixed);  
      &:hover{
        background-color: var(--color-grey-1);
      }
    }
`;
