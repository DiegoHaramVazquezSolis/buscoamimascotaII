import PropTypes from 'prop-types';
import Caption from '../../styled/Caption';
import { primaryColorRGB } from '../../styled/Constants';

const InputField = ({ name, label, placeholder, disabled, type, className, value, onChange }) => {
    return (
        <>
            <label htmlFor={name}><Caption>{label}</Caption></label>
            <input
                id={name}
                name={name}
                className={`primary form-control ${className}`}
                type={type}
                placeholder={placeholder}
                onChange={onChange}
                value={value}
                disabled={disabled} />
            <style jsx>{`
                .primary {
                    //Subtitle1
                    font-family: 'Open Sans', sans-serif;
                    font-size: 16px;
                    line-height: 24px;
                    letter-spacing: 0.15px;
                    background: transparent;
                    border: 1.5px solid #CED4DA;
                }
                .primary:focus {
                    border-color: rgba(${primaryColorRGB}, 0.5);
                    box-shadow: 0 0 0 .2rem rgba(${primaryColorRGB},.25)
                }
            `}</style>
        </>
    );
}

InputField.defaultProps = {
    disabled: false,
    error: false,
    type: 'text'
}

InputField.propTypes = {
    disabled: PropTypes.bool,
    className: PropTypes.string,
    type: PropTypes.oneOf([
        'text',
        'number',
        'password',
        'date',
        'email',
        'tel'
    ]),
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string.isRequired
};

export default InputField;
