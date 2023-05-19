import { Ramdon } from './Ramdon'
export const Boton = ({setphrase,setimagen,Arrayphrases}) => {
    
        const cambia=()=>{
            const numphrase=Ramdon(Arrayphrases.length)
            setphrase(Arrayphrases[numphrase].phrase)
            const numimag=Ramdon(4)+1 ;
            setimagen(`Url(/images/fondo${numimag}.png)`)
        }

        const style1={            
            backgroundColor:'darkblue',
            padding:'1rem',
            color:'white',
            border:'none'
        }
       
    return (
        <div >
            <button style={style1} onClick={cambia}> Cambiar Frase</button>
        </div>

    )
}
