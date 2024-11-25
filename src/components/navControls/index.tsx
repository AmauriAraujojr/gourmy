import { useNavigate } from "react-router-dom"
import { StyledNavControls } from "./styles"
import { HeadingTwo700 } from "../../styles/tiphograpy"

export const NavControlss = ()=>{

const navigate = useNavigate()
    return(
        <StyledNavControls>
            <li onClick={()=>{navigate("/admin")}}><HeadingTwo700>Empresa</HeadingTwo700></li>
            <li onClick={()=>{navigate("/pedidos")}}><HeadingTwo700>Pedidos</HeadingTwo700></li>
            <li onClick={()=>{navigate("/admin")}}><HeadingTwo700>Mesas</HeadingTwo700></li>
            <li onClick={()=>{navigate("/admin")}}><HeadingTwo700>Financeiro</HeadingTwo700></li>
            <li onClick={()=>{navigate("/admin")}}><HeadingTwo700>Estoque</HeadingTwo700></li>
            <li onClick={()=>{navigate("/admin")}}><HeadingTwo700>Clientes</HeadingTwo700></li>
            <li onClick={()=>{navigate("/admin")}}><HeadingTwo700>Cardápio</HeadingTwo700></li>
            <li onClick={()=>{navigate("/admin")}}><HeadingTwo700>Fidelidade</HeadingTwo700></li>
            <li onClick={()=>{navigate("/admin")}}><HeadingTwo700>Cupons</HeadingTwo700></li>
            <li onClick={()=>{navigate("/admin")}}><HeadingTwo700>Disparos</HeadingTwo700></li>
            <li onClick={()=>{navigate("/admin")}}><HeadingTwo700>Suporte</HeadingTwo700></li>

           
        </StyledNavControls>
    )
}