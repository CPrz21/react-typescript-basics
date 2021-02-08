import { useForm } from "../hooks/useForm"

interface FormatData {
  email: string;
  name: string;
  age: number;
}

const PersonalForm = (): JSX.Element => {
  const { form, handleChange} = useForm<FormatData>({
    email: "",
    name: "",
    age: 0
  });
  
  const { email, name, age } = form;
  return (
    <form autoComplete="off">
      <div className="mb-3">
        <label 
          htmlFor="email" 
          className="form-label"
        >
          Email:
        </label>
        <input 
          type="email"
          className="form-control"
          name="email"
          value={email}
          onChange={ handleChange }
        />
      </div>

      <div className="mb-3">
        <label 
          htmlFor="name" 
          className="form-label"
        >
          Name:
        </label>
        <input 
          type="text"
          className="form-control"
          name="name"
          value={name}
          onChange={ handleChange }
        />
      </div>
      
      <div className="mb-3">
        <label 
          htmlFor="age" 
          className="form-label"
        >
          Age:
        </label>
        <input 
          type="number"
          className="form-control"
          name="age"
          value={age}
          onChange={ handleChange }
        />
      </div>
      <pre>{ JSON.stringify(form) }</pre>
    </form>
  )
}

export default PersonalForm
