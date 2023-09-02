import { useParams } from "react-router-dom";
import PageContent from "../../layouts/PageContent";

import ContactCard from "../../components/ContactCard";
import vCardsJS from 'vcards-js';

const vCard = vCardsJS();

function Show() {

  let params = useParams();
  const id = params?.id;


  // todo: temp. load from data file instead!
  const personData = {
    "id": 1,
    "name": {
      "first": "Luke",
      "middle": "R",
      "last": "Sontrop"
    },
    "email": "luke@bluesaltlabs.com",
    "organization": "BlueSalt Labs",
    "title": "Software Developer",
    "url": "https://bluesaltlabs.com",
    "photo": {
      "url": "https://avatars.githubusercontent.com/u/72760763?s=300&v=4"
    },
    "socialUrls": {
      "github": "https://github.com/bluesaltlabs",
      "linkedIn": "https://www.linkedin.com/in/lukesontrop/",
      "twitter": "https://twitter.com/bluesaltlabs",
      "facebook": "https://www.facebook.com/bluesaltlabs"
    },
    "phone": {
      "work": "555-555-5555"
    },
    "birthday": {
      "year": 1990,
      "month": 12,
      "day": 11
    }
  };

  // todo: get person data and convert it to a vCard more efficiently than this?
  vCard.firstName = personData?.name?.first;
  vCard.middleName = personData?.name?.middle;
  vCard.lastName = personData?.name?.last;
  vCard.email = personData?.email;
  vCard.formattedName = `${vCard?.firstName} ${vCard?.lastName}`;
  vCard.organization = personData?.organization?.name;
  vCard.photo.attachFromUrl(personData?.photo?.url, 'JPEG');
  vCard.workPhone = personData?.phone?.work;
  vCard.birthday = new Date(personData?.birthday?.year, personData?.birthday?.month, personData?.birthday?.day);
  vCard.title = personData?.title;
  vCard.url = personData?.url;
  vCard.socialUrls = personData?.socialUrls;
  // todo: etc.

  return (
    <PageContent>
      <h1>Show Person: {id ?? "NaN"}</h1>
      

      {id != 1 ?
        <span>todo: Load person data from file. </span>
        :
        <ContactCard vCard={vCard} />
      }
      
    </PageContent>

  )
}

export default Show;
