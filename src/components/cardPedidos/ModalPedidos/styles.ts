import styled from "styled-components";



export const StyledNewModalBox = styled.div`
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
    max-width: 574px;
    background: var(--color-withe-fixed);
    padding: 16px;
    border-radius: 8px;
    top: 80px;
    overflow: auto;
    overflow-x: hidden;
    max-height: 60vh;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
   

    .closeButton {
 
      color: var(--color-grey-4);
      font-weight: 900;
      font-size: 1.125rem;
      cursor: pointer;

      :hover {
        opacity: 1;
      }
    }

    .box_one{
      display: flex;
      width:100%;
      justify-content: space-between;
    }
  }

 
`;

