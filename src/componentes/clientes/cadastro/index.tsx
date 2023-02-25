import { Layout } from 'componentes'
import { useState } from 'react'
import { ClienteForm } from './form'
import { Cliente } from 'app/models/clientes'

export const CadastroCliente: React.FC = () => {
    
    const [cliente, setCliente] = useState<Cliente>({
        nome:'teste',
        cpf:'000.000.000-08',
    });

    const handleSubmit = (cliente: Cliente) => {
        console.log(cliente)
    }
    
    return(
        <Layout titulo='Clientes'>
            <ClienteForm cliente={cliente} onSubmit={handleSubmit}/>
        </Layout>
    )
}