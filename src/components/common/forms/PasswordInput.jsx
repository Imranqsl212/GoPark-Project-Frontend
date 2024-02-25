import { useState } from "react";

const PasswordInput = ({ name, value, onChange }) => {
    const [showPassword, setShowPassword] = useState(false);

    const onShowePassword = () => {
        setShowPassword(showPassword => !showPassword)
    }

    return (
        <>
            <input
                type={ showPassword ? 'text' : 'password' }
                name={name}
                value={value}
                onChange={onChange}
                required
                placeholder="********"
            />
            <button type="button" className="input__show-btn" onClick={onShowePassword} />
        </>
    )
}

export default PasswordInput;