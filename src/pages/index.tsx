import { useEffect, useState } from 'react'
import Botao from '../components/Botao'
import Formulario from '../components/Formulario'
import Layout from '../components/Layout'
import Tabela from '../components/Tabela'
import Cliente from '../core/Cliente'
import ClienteRepositorio from './../core/ClienteRepositorio';
import ColecaoCliente from './../backend/db/ColecaoCliente';

export default function Home() {

  const repo : ClienteRepositorio = new ColecaoCliente


  
  const [cliente, setCliente] = useState<Cliente>(Cliente.vazio())
  const [clientes, setClientes] = useState<Cliente[]>([])
  const [visivel, setVisivel] = useState<'tabela' | 'form'>('tabela')

useEffect(() => {
  repo.obterTodos().then(setClientes)
}, [])


  function clienteSelecionado(cliente: Cliente) {
    setCliente(cliente)
    setVisivel('form')

  }
  function clienteExcluido(cliente: Cliente) {
    console.log(`Excluir...${cliente.nome}`)

  }

  function salvarCliente(cliente: Cliente){
    console.log(cliente)
    setVisivel('tabela')

  }
  function novoCliente(cliente: Cliente){
    setCliente(Cliente.vazio())
    setVisivel('form')

  }


  return (
    <div className={`
     flex justify-center items-center h-screen
     bg-gradient-to-r from-blue-500 to-purple-500
     text-white
     `}>
      <Layout titulo="Cadastro Simples">
        {visivel === 'tabela' ? (
          <>
            <div className='flex justify-end'>
              <Botao cor="green" className='mb-4'
              onClick={novoCliente}>
                Novo Cliente</Botao>
            </div>
            <Tabela clientes={clientes} clienteSelecionado={clienteSelecionado}
              clienteExcluido={clienteExcluido}></Tabela>
          </>
        ) : (
          <Formulario cliente={cliente}
          clienteMudou={salvarCliente}
          cancelado={() => setVisivel('tabela')}>
          </Formulario>
        )}
      </Layout>
    </div>
  )
}
