import { useParams } from "react-router-dom";

import PageContent from "../../layouts/PageContent";

function Show() {

  let params = useParams();
  const id = params?.id;

  return (
    <PageContent>
      <h1>Show Person: {id ?? "NaN"}</h1>
      <span>todo: Load person data from file. </span>
    </PageContent>

  )
}

export default Show;
