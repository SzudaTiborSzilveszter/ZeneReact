import './Zene.css'
import {type ZeneTipus} from '../adat';
interface ZeneProps{
    Zenem: ZeneTipus
}
export default function Zene({Zenem}:ZeneProps){

    return(
    <>
        <div className="Zene">
            <img className="Zene-kep" src={Zenem.kep} alt={Zenem.nev} />
            <h2 className="Eloado">{Zenem.nev}</h2>
            <p><span>Előadó neve:</span>{Zenem.nev}</p>
            <p><span>Szám címe:</span>{Zenem.cim}</p>
            <button>Album</button>
        </div>
    </>
    )
}
