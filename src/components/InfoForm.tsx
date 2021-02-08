import { useForm } from "../hooks/useForm"

type infoData = {
  country: string;
  city: string;
  areaCode: number;
}

const InfoForm = (): JSX.Element => {
  const { form, handleChange} = useForm<infoData>({
    country: '',
    city: '',
    areaCode: 0
  });
  
  const { country, city, areaCode } = form;
  return (
    <form autoComplete="off">
      <div className="mb-3">
        <label 
          htmlFor="country" 
          className="form-label"
        >
          Country:
        </label>
        <input 
          type="text"
          className="form-control"
          name="country"
          value={country}
          onChange={ handleChange }
        />
      </div>

      <div className="mb-3">
        <label 
          htmlFor="city" 
          className="form-label"
        >
          City:
        </label>
        <input 
          type="text"
          className="form-control"
          name="city"
          value={city}
          onChange={ handleChange }
        />
      </div>
      
      <div className="mb-3">
        <label 
          htmlFor="areaCode" 
          className="form-label"
        >
          Area Code:
        </label>
        <input 
          type="text"
          className="form-control"
          name="areaCode"
          value={areaCode}
          onChange={ handleChange }
        />
      </div>
      <pre>{ JSON.stringify(form) }</pre>
    </form>
  )
}

export default InfoForm
