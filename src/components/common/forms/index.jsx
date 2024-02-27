
const Form = ({ children, onSubmit, title }) => {
  return (
    <div className="form">
        <div className="form__header">
            <h1 className="form__title">{title}</h1>
        </div>
        <form onSubmit={onSubmit}>
            {children}
        </form>
        <button className="button__submit" type="submit">
            Войти
        </button>
    </div>
  )
}

export default Form