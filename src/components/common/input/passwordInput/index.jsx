import { useState } from "react";
import {Input} from "..";
import '../input.scss';

const PasswordInput = ({ name, label, register, error, placeholder, validate }) => {
    const [showPassword, setShowPassword] = useState(false);

    const onShowePassword = () => {
        setShowPassword(showPassword => !showPassword)
    }

    return (
        <div className="input">
            <Input 
              label={label}
              name={name}
              type={showPassword ? 'text' : 'password'}
              required
              register={register}
              placeholder={placeholder}
              error={error}
              validate={validate}
            />
            <button type="button" className="input__show-btn" onClick={onShowePassword}>
                <svg width="22.105255" height="24.000000" viewBox="0 0 22.1053 24" fill="none">
                    <defs>
                        <clipPath id="clip3_961">
                            <rect id="Icon" width="22.105263" height="24.000000" fill="white" fillOpacity="0"/>
                        </clipPath>
                    </defs>
                    <rect id="Icon" width="22.105263" height="24.000000" fill="#FFFFFF" fillOpacity="0"/>
                    <g clipPath="url(#clip3_961)">
                        <path id="Vector" d="M11.0526 4.5C6.44734 4.5 2.51443 7.61 0.921021 12C2.51443 16.39 6.44734 19.5 11.0526 19.5C15.6579 19.5 19.5908 16.39 21.1842 12C19.5908 7.61 15.6579 4.5 11.0526 4.5ZM11.0526 17C8.5105 17 6.44734 14.76 6.44734 12C6.44734 9.24 8.5105 7 11.0526 7C13.5947 7 15.6579 9.24 15.6579 12C15.6579 14.76 13.5947 17 11.0526 17ZM11.0526 9C9.52365 9 8.28944 10.34 8.28944 12C8.28944 13.66 9.52365 15 11.0526 15C12.5815 15 13.8158 13.66 13.8158 12C13.8158 10.34 12.5815 9 11.0526 9Z" fill={ showPassword ? '#53D269' : "#8D99A5" } fillOpacity="1.000000" fillRule="nonzero"/>
                    </g>
                </svg>
            </button>
        </div>
    )
}

export default PasswordInput;