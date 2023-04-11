import { faUsers, faGears } from '@fortawesome/free-solid-svg-icons'
import LinkButton from '../Components/LinkButton/LinkButton';

function HomePage() {
  return (
    <div className="page__home">
      {/* Buttons for People and Setting Routes */}
      <div className="flex flex-row justify-center">
        
        {/* Button to "/people" route */}
        <LinkButton 
          to="/people"
          icon={faUsers}
          text="People"
        />

        {/* Button to "/settings" route */}
        <LinkButton
          to="/settings"
          icon={faGears}
          text="Settings"
        />

      </div>
    </div>
  )
}

export default HomePage;
