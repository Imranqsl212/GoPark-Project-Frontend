import { Link } from 'react-router-dom';

import './link.scss';

const LinkItem = ({name, to, styleItem}) => {
  return (
    <Link to={`/${to}`} className={styleItem ? `link__${styleItem}` : ''}>{name}</Link>
  )
}

export default LinkItem;