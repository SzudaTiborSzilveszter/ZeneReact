import Zene from "./Zene";
import {type ZeneTipus} from '../adat';
interface ZeneListaProps{
    lista: ZeneTipus[]
}

export default function Zenek({lista}:ZeneListaProps){
    return(
        <>
        {
            lista.map((e,i)=>{
                return <Zene Zenem={e} key={i}/>
            })
        }
        </>
    )
}