import { Cliente } from 'app/models/clientes'
import { useFormik } from 'formik'
import { Input } from 'componentes'

interface ClienteFormProps{
    cliente: Cliente;
    onSubmit: (cliente :Cliente) => void;
}

const formScheme: Cliente = {
    cadastro: '',
    cpf: '00000000000000',
    dataNascimento: '',
    email: '',
    endereco: '',
    id: '',
    nome: '',
    telefone: ''

}

export const ClienteForm: React.FC<ClienteFormProps> = ({
    cliente,
    onSubmit
}) => {

    const formik = useFormik<Cliente>({
        initialValues: {...formScheme, ... cliente},
        onSubmit,
    })

     return(
        <form onSubmit={formik.handleSubmit}>
            {formik.values.id &&

           <div className='columns'>
            <Input id='id' 
            name='id'
            label='Codigo:'
            autoComplete='off'
            disabled
            columnClasses='is-half' 
            value={formik.values.id}/>

            <Input id='telefone' 
            name='cadastro'
            label='Data Cadastro *'
            autoComplete='off'
            columnClasses='is-half'
            disabled
            value={formik.values.cadastro}/>
           </div>

}
<div className='columns'>
            <Input id='nome' 
            name='nome'
            label='Nome *'
            autoComplete='off'
            columnClasses='is-full' 
            onChange={formik.handleChange} 
            value={formik.values.nome}/>
           </div>

           <div className='columns'>
            <Input id='cpf' 
            name='cpf'
            label='Cpf *'
            autoComplete='off'
            columnClasses='is-half' 
            onChange={formik.handleChange} 
            value={formik.values.cpf}/>

            <Input id='dataNascimento' 
            name='dataNascimento'
            label='Data Nascimento *'
            autoComplete='off'
            columnClasses='is-half' 
            onChange={formik.handleChange} 
            value={formik.values.dataNascimento}/>
           </div>

           <div className='columns'>
            <Input id='endereco' 
            name='endereco'
            label='Endereco *'
            autoComplete='off'
            columnClasses='is-full' 
            onChange={formik.handleChange} 
            value={formik.values.endereco}/>
           </div>

           <div className='columns'>
            <Input id='email' 
            name='email'
            label='Email *'
            autoComplete='off'
            columnClasses='is-half' 
            onChange={formik.handleChange} 
            value={formik.values.email}/>

            <Input id='telefone' 
            name='telefone'
            label='Telefone *'
            autoComplete='off'
            columnClasses='is-half' 
            onChange={formik.handleChange} 
            value={formik.values.telefone}/>
           </div>

            <div className='field is-groupe'>
                <div className='control is-link'>
                    <button type='submit' className="button">
                        { formik.values.id ? "Atualizar": "Salvar" }
                    </button>

                </div>

            </div>

        </form>
    )
}