import {
  PhoneIcon,
  EnvelopeIcon,
  ArrowDownTrayIcon,
  PencilSquareIcon,
} from '@heroicons/react/24/outline'


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubSquare, faTwitterSquare } from "@fortawesome/free-brands-svg-icons";

function ContactCard({ vCard }) {

  function getContactFilename(vCard) {
    const firstName = vCard?.firstName?.toLowerCase() ?? '[first-name]';
    const lastName = vCard?.lastName?.toLowerCase() ?? '[last-name]';

    return `${firstName}-${lastName}.vcf`;
  }

  function handleDownloadVCardClick() {
    const filename = getContactFilename(vCard);

    console.debug( vCard?.getFormattedString() );

    // doesn't work in browser for whatever reason
    //vCard.saveToFile(`./${filename}`);

    // todo: implement this in a helper function
    const file = new Blob([vCard?.getFormattedString()], { type: 'text/vcard' });
    const a   = document.createElement('a'),
          url = URL.createObjectURL(file);
          
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    setTimeout(() => {
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    }, 0);
  }

  
  
  {/* Contact Card */}
  return (
    <div className="contact-card flex-col my-5 mx-1 p-3 rounded bg-slate-200/50 dark:bg-slate-800/50 shadow-lg">
      
      {/* Contact Card Actions */}
      <div className="flex justify-end p-1 pb-2">
        
        {/* Edit Contact */}
        <ActionButton
          title="Edit Contact"
          HeroIcon={PencilSquareIcon}
          onClick={() => console.debug('Edit Contact')}
        />

        {/* Download Contact vCard */}
        <ActionButton
          title="Download vCard"
          HeroIcon={ArrowDownTrayIcon}
          onClick={handleDownloadVCardClick}
        />
      </div>

      {/* Contact Card Body */}
      <div className="flex">
        
        {/* Contact Card Photo */}
        <div className="contact-card-photo m-3">
          <img src={vCard?.photo?.url} alt={vCard?.formattedName} />
        </div>

        {/* Contact Card Info */}
        <div className="contact-card-info m-3">
          <h2 className="text-2xl font-bold">{vCard?.formattedName}</h2>
          <p className="text-xl">{vCard?.title}</p>
          <p className="text-xl">{vCard?.organization}</p>

          {/* Contact Phone */}
          <ContactLinkButton          
            url={`tel:${vCard?.workPhone}`}
            title={vCard?.workPhone}
            HeroIcon={PhoneIcon}
          />

          {/* Contact Email */}
          <ContactLinkButton
            url={`mailto:${vCard?.email}`}
            title={vCard?.email}
            HeroIcon={EnvelopeIcon}
          />

          {/* Contact Social Links */}
          <div className="flex shadow-inner p-2">
            <SocialIconButton
              url={vCard?.socialUrls?.github}
              faIcon={faGithubSquare}
              title="GitHub"
            />

            <SocialIconButton
              url={vCard?.socialUrls?.twitter}
              faIcon={faTwitterSquare}
              title="Twitter"
            />

          </div>

        </div>
      </div>
    </div>
  );
}

function ContactLinkButton({ url, title, HeroIcon }) {

  return (
    <div className="flex">
      <HeroIcon width={16} className="mr-3" />
      <a
        href={url}
        className="p-1 block flex-grow hover:bg-slate-200/50 dark:hover:bg-slate-800/50 hover:shadow-sm rounded"
      >
        {title}
      </a>
    </div>
  );
}

function SocialIconButton({ url, faIcon, title }) {
  if (!url || !faIcon) return null;
  
  return (
    <div className="flex text-3xl">
      <a href={url} className="px-2 py-1 hover:bg-slate-200/50 dark:hover:bg-slate-800/50 hover:shadow-sm rounded">
        <FontAwesomeIcon icon={faIcon} title={title ?? url} />
      </a>
    </div>
  );
}

function ActionButton({ title, HeroIcon, onClick }) {
  return (
    <button
      className="block text-center hover:bg-slate-200/50 dark:hover:bg-slate-800/50 hover:shadow-sm rounded"
      onClick={onClick}
    >
      <HeroIcon width={32} className="block p-1" title={title} />
    </button>
  );
}

export default ContactCard;