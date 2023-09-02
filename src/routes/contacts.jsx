import ContactCard from '../components/ContactCard'
import vCardsJS from 'vcards-js';


function Contacts() {


  // create a new vCard
  // https://github.com/enesser/vCards-js
  const vCard = vCardsJS();
    
  //set properties
  vCard.firstName = 'Luke';
  vCard.middleName = 'R';
  vCard.lastName = 'Sontrop';
  vCard.email = 'luke@bluesaltlabs.com';
  vCard.formattedName = 'Luke Sontrop';
  vCard.organization = 'BlueSalt Labs';
  vCard.photo.attachFromUrl('https://avatars.githubusercontent.com/u/72760763?s=300&v=4', 'JPEG');
  vCard.workPhone = '555-555-5555';
  vCard.birthday = new Date(1990, 11, 11);
  vCard.title = 'Software Developer';
  vCard.url = 'https://bluesaltlabs.com';
  vCard.socialUrls.github = 'https://github.com/bluesaltlabs';
  vCard.socialUrls.linkedIn = 'https://www.linkedin.com/in/lukesontrop/';
  vCard.socialUrls.twitter = 'https://twitter.com/bluesaltlabs';
  vCard.socialUrls.facebook = 'https://www.facebook.com/bluesaltlabs';


  
  return (
    <div id="contacts">
      <h1>Contacts</h1>
      <hr />

      <ContactCard vCard={vCard} />

    </div>
  );
}

export default Contacts;