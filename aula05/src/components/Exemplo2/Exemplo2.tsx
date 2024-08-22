type PessoaProps = {
  foto: string
  nome: string
  idade: number
  profissao: string
}

function Pessoa({foto, nome, idade, profissao}:PessoaProps){
  return(
    <div>
      <img src={foto} alt={nome}/>
      <p>Nome: {nome}</p>
      <p>Idade: {idade}</p>
      <p>Profissão: {profissao}</p>
    </div>
  )
}

export default Pessoa