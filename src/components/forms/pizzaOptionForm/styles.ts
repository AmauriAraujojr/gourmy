import styled from "styled-components";

export const StyledFormPizzaOption = styled.div`
  width: 100%;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--color-grey-6);
  position: absolute;
  height: 100%;
  left: 0;
  top: 0;

  .current_pizza {
    background-color: var(--color-grey-6);
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    border-radius: 10px;
    height: 100%;
    padding: 10px;
    text-align: center;
    border: 1px solid var(--color-brand2);
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 100%;
    background-color: var(--color-grey-6);
  }
  .size_box {
    display: flex;
    max-width: 100%;
  }
  .size_content {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    flex-direction: column;
  }
  .borda_box {
    display: flex;
    flex-direction: column;
    width: 100%;
    
    .borda_content {
      display: flex;
      width: 100%;
      overflow-x: auto;
      padding: 5px;
      justify-content: flex-start;

      .borda_select {
        cursor: pointer;
        min-width: 195px;

        &:hover {
          background-color: var(--color-brand1);
        }

        &:focus {
          background-color: var(--color-brand2);
        }
      }
      .borda_select.active {
        background-color: var(--color-brand2);
      }
    }
  }

  input {
    color: var(--color-brand1);
  }
  .box_button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    max-width: 100%;
    button {
      cursor: pointer;
      color: var(--color-brand1);
      background-color: transparent;

      border: none;
    }
  }

  .half_options {
    display: flex;
    flex-direction: column;
    padding: 5px;
    border: 1px solid var(--color-brand2);
    overflow: auto;
    height: 90px;
    gap: 5px;
    width: 100%;
  }
  .desc {
    font-size: 0.73rem;
    color: var(--color-grey-2);
  }
  .half_pizza {
    cursor: pointer;
    &:hover {
      background-color: var(--color-brand1);
      padding: 5px;
    }

    &:focus {
      background-color: var(--color-brand2);
    }
  }
  .half_pizza.active {
    background-color: var(--color-brand2);
  }
  @media (min-width: 768px) {
    padding: 30px;

    .current_pizza {
      padding: 15px;
      gap: 10px;
    }
    .size_content {
      flex-direction: row;
    }
  }
`;
