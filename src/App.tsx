import './App.css'
import Zenek from './component/Zenek'
import { ZENELISTA } from "./adat";

function App() {

  return (
    <>
      <header>
        <h1>Zenék</h1>
      </header>
      <article>
        <Zenek lista={ZENELISTA}/>
      </article>
      <footer><p>Szuda Tibor Szilveszter</p></footer>
    </>
  )
}

export default App