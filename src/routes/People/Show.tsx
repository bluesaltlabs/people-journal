import { useParams } from "react-router-dom";

function Show() {

  let params = useParams();
  const id = params?.id;

  return (
    <div>
      <h1>Show Person: {id ?? "NaN"}</h1>
      <span>todo</span>
    </div>

  )
}

export default Show;
