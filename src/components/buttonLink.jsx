import { useNavigate } from 'react-router-dom'

function ButtonLink({ to, testo, state}) {

   const navigate = useNavigate()

   const cambioPagina = () => {
      navigate(to, {state})
   }

   return (
      <>
         <button className='btn w-full' onClick={cambioPagina}>{testo}</button>
      </>
   )
}

export default ButtonLink