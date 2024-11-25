import styled from "styled-components";


export const StyledNavControls = styled.ul`
display: flex;
flex-direction: column;
color: var(--color-grey-6);
font-size: 1.5rem;
padding:20px;
gap:30px;
li{
    cursor: pointer;
    width:100px;
            /* border-bottom:1px solid var(--color-brand2); */

    &:hover{
        color: var(--color-brand2);
        /* border-bottom:1px solid var(--color-brand2); */

    }
}

`