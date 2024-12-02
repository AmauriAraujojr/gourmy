import styled from "styled-components";

export const StyledFormPizzaOption = styled.div`
  width: 100%;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--color-grey-8);
  position:absolute;
  height:550px;
  left:0;
  top:0;
  padding:30px;
  
.current_pizza{
    background-color: var(--color-grey-7);
    width:100%;
    display:flex;
    flex-direction:column;
    align-items: center;
    justify-content:center;
    padding:30px;
    border: 1px solid var(--color-brand2);
    border-radius: 10px;
    gap:10px;
}
form{
    display:flex;
    flex-direction: column;
gap: 30px;

}
.size_box{
    display: flex;
    gap:20px;

}
.size_content{
    display:flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
}

input {
    color: var(--color-brand1)
}
.box_button{
    display: flex;
    align-items: center;
    justify-content:center;
    gap:20px;
    button{
        cursor: pointer;
        width:200px;
        padding:10px;
        color: var(--color-brand1);
        background-color:transparent;
        border:none;
    }
}
`;
