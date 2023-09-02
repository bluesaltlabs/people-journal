import { useParams } from "react-router-dom";

function Edit() {

  let params = useParams();
  const id = params?.id;

  return (
    <div>
      <h1>Create Person: {id ?? "NaN"}</h1>
      <span>todo</span>
    </div>

  )
}

export default Edit;
