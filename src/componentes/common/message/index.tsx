interface MessageProsp{
    tipo: string;
    field?: string;
    texto: string;
}

export const Message:React.FC<MessageProsp> = ({
    tipo,
    field,
    texto
}) => {
    return(
        <article className={`message is-${tipo}`}>
            <div className="message-body">
                    {field && `${field}:`}{texto}
            </div>
        </article>
    )
}