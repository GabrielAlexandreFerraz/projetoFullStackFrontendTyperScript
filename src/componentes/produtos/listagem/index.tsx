import { Layout, Loader } from "componentes"
import Link from 'next/link'
import Router from "next/router"
import { TabelaProdutos } from './tabela'
import { Produto } from 'app/models/produtos'
import useSWR from 'swr'
import { httpClient } from 'app/http'
import { AxiosResponse } from "axios"
import { useProdutoService } from 'app/services'
import { useState, useEffect } from "react"
import { Alert } from "componentes/common/message"

export const ListagemProdutos: React.FC = () => {

    const service = useProdutoService();
    const [ messages, setMessages ] = useState<Array<Alert>>([])

    const { data: result, error } = useSWR<AxiosResponse<Produto[]>>('/api/produtos', url => httpClient.get(url))
    
    const [ lista, setLista] = useState<Produto[]>([])

    useEffect( ()=>{
        setLista(result?.data || [])

    },[result])
    
    const editar = (produto: Produto)=> {
        const url = `/cadastroPages/produtos?id=${produto.id}`
        Router.push(url)
    }


    const deletar = (produto: Produto)=> {
        
        service.deletar(produto.id).then(response => {
            
            setMessages([
                { tipo: 'success', texto: 'Produto Excluido com Sucesso!' }
            ])
            const listaAlterada:Produto[] = lista?.filter(p => p.id != produto.id)
            setLista(listaAlterada)
        })
        .catch(error => {
            setMessages([
                { tipo: 'error', texto: 'Não foi possível excluir o produto.' }
            ])
        })  
    }

   

    return(
    <Layout titulo="Produtos" mensagens={messages}>
        <Link href="/cadastroPages/produtos">
        <button className="button is-warning">Novo </button>
        </Link>
        <br />
        <br />
        <Loader show={!result}/>
        <TabelaProdutos onEdit={editar} onDelete={deletar} produtos={lista}/>
    </Layout>
    )

}