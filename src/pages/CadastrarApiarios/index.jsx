import Style from './style.module.css'


function CadastrarApiarios () {
    return (
     <div className={Style.container}>
     <h1>+ Novo Apiario</h1>
         <form>
        <h4>Campos com * são obrigatórios</h4>
        <p>Nome *</p>
        <input placeholder='Apiário 01' type="text" name='nome' />

        <p>Data de instalação *</p>
        <input placeholder='Data de instalação' type="date" name='data de instalação' />

        <p>Localização *</p>
        <input placeholder='Quixadá' type="text" name='localização' />
        
        
    </form>
    <p>Observação</p>
        <input placeholder='Observações' type='text' name='observacoes' />

     </div>
    
    )
}
export default CadastrarApiarios