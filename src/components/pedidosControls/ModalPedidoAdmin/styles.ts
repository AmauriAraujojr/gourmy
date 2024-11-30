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
    max-width: 874px;
    background: var(--color-withe-fixed);
    padding: 16px;
    border-radius: 8px;
    top: 80px;
    overflow: auto;
    overflow-x: hidden;
    max-height: 60vh;
    display: flex;
    flex-direction: column;
    gap: 10px;
    color: var(--color-grey-1);
  
  }

  .pizza_box{
    display: flex;
    width:100%;
    flex-wrap: wrap;
    background-color:var(--color-grey-8);
    padding:5px;
    gap:10px;
    .pizza{
        padding:10px;
        width:260px;
        background-color:var(--color-alert-3);
        text-align:center;
        cursor:pointer;
        &:hover{
            background-color: var(--color-sucess-3);
        }
    }
  }
`;
