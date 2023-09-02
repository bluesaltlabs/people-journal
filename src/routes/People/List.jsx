import { Link } from "react-router-dom";

import PageContent from "../../layouts/PageContent";

import peopleData from "../../data/people.json";

function List() {

  const PersonListItem = ({ personData }) => (
    <Link
      to={`/people/${personData?.id}`}
      className="block px-2 py-1 hover:bg-slate-400 rounded-sm my-3"
    >    
      <span className="px-2">{ personData?.name?.first }</span>
      <span className="px-2">{ personData?.name?.last }</span>
    </Link>
  );

  return (
    <PageContent>
      <div className="p-6">
        <h1>People</h1>
        <hr />

        <div>
          {peopleData.map((personData, personIndex) => {

            return (
              <PersonListItem
                key={`person-${personIndex}`}
                personData={personData}
              />
            )
          })}
        </div>
      </div>
    </PageContent>

  )
}

export default List;
