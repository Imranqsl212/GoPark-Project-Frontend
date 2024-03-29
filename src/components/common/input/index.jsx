import PasswordInput from './passwordInput';

import './input.scss';

const Input = ({
    name,
    label = null,
    placeholder,
    required = null,
    register = null,
    error = null,
    type = 'text',
    validate = null,
    disabled = false,
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

export {Input, PasswordInput};