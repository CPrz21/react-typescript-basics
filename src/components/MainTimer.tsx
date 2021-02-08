import { useState } from "react";
import Timer from "./Timer";

const MainTimer = (): JSX.Element => {

  const [milliseconds, setMilliseconds] = useState<number>(1000);

  return (
    <>
      <span>Milliseconds: {milliseconds}</span>
      <br/>
      <button 
        className="btn btn-outline-success"
        onClick={() => setMilliseconds(500)}
      >
        500
      </button>
      &nbsp;
      <button 
        className="btn btn-outline-success"
        onClick={() => setMilliseconds(1000)}
      >
        1000
      </button>
      &nbsp;
      <button 
        className="btn btn-outline-success"
        onClick={() => setMilliseconds(2000)}
      >
        2000
      </button>
      <Timer milliseconds={ milliseconds }  />
    </>
  )
}

export default MainTimer
