import { useContext } from "react"
import { LoginContext } from "../providers/login.context"


export const AdminPage=()=>{

    const{company}=useContext(LoginContext)
    return(

        <>
        <h1>{company?.fantasyName}</h1>
        </>
    )
}