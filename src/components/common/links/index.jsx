import LinkItem from './link';

import './links.scss';

const Links = ({ title, children }) => {
  return (
    <div className="links__wrapper">
        {title && <p>{title}</p>}
        {children}
    </div>
  )
}

export  {Links, LinkItem};