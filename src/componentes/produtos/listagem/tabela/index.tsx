import { Produto } from 'app/models/produtos'
import { useState } from 'react';

interface TabelaProdutosProps{
    produtos: Array<Produto>;
    onEdit: (produto) => void;
    onDelete: (produto) => void;
}

export const TabelaProdutos: React.FC<TabelaProdutosProps> = ({
    produtos,
    onDelete,
    onEdit
}) => {
    return(
        <table className="table is-striped is-hoverable">
            <thead>
                <tr>
                <th>Código</th>
                <th>SKU</th>
                <th>Nome</th>
                <th>Preço</th>
                <th></th>
                </tr>
            </thead>
            <tbody>
            {produtos.map(produto => (
                        <ProdutoRow onDelete={onDelete} 
                                    onEdit={onEdit} 
                                    key={produto.id} 
                                    produto={produto}/>
                            )
                        )
                    }
            </tbody>
        </table>
    )
}

interface ProdutoRowProps{
    produto: Produto;
    onEdit: (produto) => void;
    onDelete: (produto) => void;
}

const ProdutoRow: React.FC<ProdutoRowProps> = ({
    produto,
    onEdit,
    onDelete
}) => {

const [deletando, setDeletando] = useState<boolean>(false)

const onDeleteClick = (produto: Produto) => {
    if(deletando){
        onDelete(produto)
        setDeletando(false)
    }else{
        setDeletando(true)
    }
}

const cancelarDelete = () => setDeletando(false)

    return(
        <tr>
            <td>{ produto.id }</td>
            <td>{ produto.sku }</td>
            <td>{ produto.nome }</td>
            <td>{ produto.preco }</td>
            <td>
                { !deletando && <button onClick={e => onEdit(produto)} 
                className='button is-success is-rounder is-small'>Editar</button>
                }
                                
                <button onClick={e => onDelete(produto)} 
                className='button is-danger is-rounder is-small'>{
                deletando ? "Confirma ?" : "Deletar"
                }</button>

                { deletando && <button onClick={cancelarDelete} 
                className='button is-rounder is-small'>Cancelar</button>

                }
            </td>
        </tr>
    )
}