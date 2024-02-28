import Button from './button';
import './buttons.scss';

const Buttons = ({ children }) => {
  return (
    <div className="buttons__wrapper">  
        {children}
    </div>
  )
}

export { Buttons, Button };