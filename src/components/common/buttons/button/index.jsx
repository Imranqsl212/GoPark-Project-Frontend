import './button.scss';

const Button = ({ title, type = 'submit', disabled = false }) => {
  return (
    <button className={`button__${type}`} type={type} disabled={disabled}>
        {title}
    </button>
  )
}

export default Button;