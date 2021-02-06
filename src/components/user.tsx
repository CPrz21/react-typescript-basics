import { useState } from "react";

interface UserI {
  uid: string, 
  name: string
}

export const User = () => {

  const [user, setUser] = useState<UserI>();

  const login = () =>{
    setUser({
      uid: "21911",
      name: "Carlos Pérez"
    })
  }

  return (
    <div className="mt-2">
      <h3>Usuario:</h3>

      <button
        onClick={login}
        className="btn btn-outline-primary"
      >
      Login
      </button>
      <button
        onClick={() => setUser(undefined)}
        className="btn btn-outline-danger"
      >
        reset
      </button>
      {
          (!user) 
              ? <pre> No hay usuario </pre>
              : <pre> { JSON.stringify( user ) } </pre>
      }
    </div>
  )
}
