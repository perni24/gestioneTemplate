import { useNavigate } from 'react-router-dom'

function ButtonLink({ to, testo }) {

   const navigate = useNavigate()

   const cambioPagina = () => {
      navigate(to)
   }

   return (
      <>
         <button className='btn w-full' onClick={cambioPagina}>{testo}</button>
      </>
   )
}

export default ButtonLink