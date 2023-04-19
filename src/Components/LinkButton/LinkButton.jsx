import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const LinkButton = ({ to, icon, text }) => {
  return (
    <Link to={to}>
      <button className="text-2xl content-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-6 m-2 rounded">
        <FontAwesomeIcon icon={icon} size={"2xl"} className="block pb-4 mx-auto" />
        <span className="block text-center text-3xl">{text}</span>
      </button>
    </Link>
  )
}

export default LinkButton;
