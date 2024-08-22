type MeuNomeProps = {
  name: string;
  outroAlerta: Function;
}

function MeuNome({name, outroAlerta}:MeuNomeProps){
  return(
    <div>
      <p>Fala aí, {name}</p>
      <button onClick={()=> outroAlerta()}>Aperta aqui</button>
    </div>
  )
}

export default MeuNome