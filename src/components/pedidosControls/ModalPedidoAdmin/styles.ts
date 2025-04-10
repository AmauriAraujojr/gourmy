import styled from "styled-components";

export const StyledModalAdmin = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1;
  display: flex;
  align-items: top;
  justify-content: center;

  .modal {
    position: relative;
    width: 100%;
    max-width: 1000px;
    background: var(--color-withe-fixed);
    padding: 16px;
    border-radius: 8px;
    top: 80px;
    overflow: auto;
    overflow-x: hidden;
    max-height: 60vh;
    display: flex;
    gap: 20px;
    color: var(--color-grey-1);
  }
  .closeButton {
      position: absolute;
      right: 10px;
      top: 10px;
      color: var(--color-withe-fixed);
      font-weight: 900;
      font-size: 1.125rem;
      padding: 5px 10px;
      border-radius: 100px;
      cursor: pointer;
      background-color: var(--color-brand1);
      border: 1px solid var(--color-brand1);
      :hover {
        opacity: 1;
      }
    }

    .modal_content{
    display: flex;
    flex-direction: column;
    gap: 20px;
        width: 70%;

    }
  .pizza_box {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    background-color: var(--color-grey-8);
    height: 40%;
    overflow: auto;
    gap: 10px;
    padding: 5px;
    align-content:start;
    justify-items:center;
;    .pizza {
      padding: 10px;
      width: 200px;
      height: 50px;
      background-color: var(--color-brand2);
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;

      cursor: pointer;
      &:hover {
        background-color: var(--color-sucess-1);
      }
    }
  }
`;
