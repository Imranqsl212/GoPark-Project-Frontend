import './input.scss';


const Input = ({
    name,
    label,
    placeholder,
    required,
    register,
    error,
    type = 'text',
    validate,
    disabled,
    maxLenght,
}) => {

  return (
    <label className="input__field">
        {label}
        <input
            {...{ type }}
            {...register(name, {
              required,
              validate,
              ...(type === 'email'
                ? {
                    pattern: {
                      value: /\S+@\S+\.\S+/,
                      message: '*Введите, пожалуйста, действительный адрес электронной почты',
                    },
                  }
                : {}),
            })}
            placeholder={placeholder}
            disabled={disabled}
            maxLenght='4'
        />
        {error && ( 
            <div className='input__error'>
              {!error?.message && error?.type === 'required'
                  ? '*Обязательное поле'
                  : error?.message}
            </div>
        )}
    </label>
  )
}

export default Input;