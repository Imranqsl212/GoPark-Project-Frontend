import { Link } from 'react-router-dom';

import './link.scss';

const LinkItem = ({children, to, styleItem}) => {
  return (
    <Link to={`/${to}`} className={styleItem ? `link__${styleItem}` : ''}>{children}</Link>
  )
}

export default LinkItem;