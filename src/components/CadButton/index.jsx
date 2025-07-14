import Style from './style.module.css';

export default function CadButton(props) {
    const cadButtonClass = props.cadButtonClass || Style.cadButton;

    // --- AQUI ESTÁ A MUDANÇA: Adicione 'type' às props do botão interno ---
    // Você pode desestruturar 'type' das props, e dar um valor padrão 'button'
    const { nome, type = 'button' } = props;

    return (
        <button className={cadButtonClass} type={type}> {/* Adicionado type={type} */}
            {nome}
        </button>
    );
}