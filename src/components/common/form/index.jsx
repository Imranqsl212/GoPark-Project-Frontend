import './form.scss';

const Form = ({ onSubmit, children, title, descr }) => {
    return (
      <div className="form__wrapper">
        <div className="form__logo"></div>
        <div className="form__main">
          <div className="form__header">
            <h1 className="form__title">{title}</h1>
            {descr && <p className="form__descr">{descr}</p> }
          </div>
          <form onSubmit={onSubmit} noValidate={true}>
            {children}
          </form>
        </div>
      </div>
    )
  }

export default Form;