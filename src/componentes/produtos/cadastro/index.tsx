import { useState } from 'react'
import { Layout, Input } from 'componentes'
import { useProdutoService } from 'app/services'
import { Produto } from 'app/models/produtos'

export const CadastroProdutos: React.FC = () => {

    const service = useProdutoService()

    const [sku, setSku] = useState<string>('')
    const [preco, setPreco] = useState<string>('')
    const [nome, setNome] = useState<string>('')
    const [descricao, setDescricao] = useState<string>('')
    const [id, setId] = useState<string>()
    const [cadastro, setCadastro] = useState<string>()

    const submit = () =>{

        const produto:Produto ={
            id,
            sku,
            preco: parseFloat(preco),
            nome,
            descricao
        }

        if(id){

            service.atualizar(produto)
            .then(response => console.log("Atualizado"))

        }else{
            
            service.salvar(produto)
            .then(produtoResposta => {
                setId(produtoResposta.id)
                setCadastro(produtoResposta.cadastro)
            })
        }

    }

    return(
        <Layout titulo="Cadastro de Produtos">
            {id && 
                <div className='columns'>
                <Input label='Codigo:' 
                columnClasses='is-half'
                value={id}
                id="inputId"
                disabled={true} 
                />

                <Input label='Data Cadastro:' 
                columnClasses='is-half'
                value={cadastro}
                id="inputDataCadastro" 
                disabled={true}
                />
                </div>
            }

            <div className='columns'>
                <Input label='SKU: *' 
                columnClasses='is-half'
                onChange={setSku}
                value={sku}
                id="inputSku" 
                placeholder='Digite o SKU do Produto'
                />

                <Input label='Preço: *' 
                columnClasses='is-half'
                onChange={setPreco}
                value={preco}
                id="inputPreco" 
                placeholder='Digite o Preço do Produto'
                />
        
            </div>

            <div className='columns'>
            <Input label='Nome: *' 
                columnClasses='is-full'
                onChange={setNome}
                value={nome}
                id="inputNome" 
                placeholder='Digite o Nome do Produtoo'
                />
            </div>

            <div className='columns'>
            <div className="field column is-full">
                <label className='label' htmlFor='inputDesc'> Descrição: *</label>
                <div className='control'>
                    <textarea className='textarea'
                    id='inputDesc'
                    value={descricao}
                    onChange={e=> setDescricao(e.target.value)}  
                    placeholder='Digite a Descrição detalhada do Produto'/>
                </div>
            </div>
            </div>

            <div className='field is-grouped'>
                <div className='control'>
                    <button onClick={submit} className='button'>
                        { id ? "Atualizar": "salvar" }
                    </button>
                </div>
                <div className='control'>
                    <button className='button'>voltar</button>
                </div>
            </div>

        </Layout>
    )
}