interface BotaoProps {
    cor?: 'green' | 'Blue' | 'Gray'
    className?: string
    children: any
    onClick ?: () => void
}

export default function Botao(props: BotaoProps){
    const cor = props.cor ?? "Gray"
    return (
        <button onClick={props.onClick} className={`
            bg-gradient-to-r from-${cor}-400 to-${cor}-700
            text-white px-4 py-2 rounded-md 
            ${props.className}
        `}>
            {props.children}
        </button>
    )
}