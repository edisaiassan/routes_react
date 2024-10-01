import { useNavigate } from "react-router-dom"

export const LoginPage = () => {

  const navigate = useNavigate();

  const onLogin = () => {
    navigate('/', {
      replace: true
    })
  }
  return (
    <>
      <div>LoginPage</div>
      <button className="btn btn-primary" onClick={onLogin}>Ingresar</button>

    </>
  )
}
