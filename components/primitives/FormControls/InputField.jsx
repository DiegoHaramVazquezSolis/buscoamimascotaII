import PropTypes from 'prop-types';
import { primaryColorRGB } from '../../styled/Constants';
import Body1 from '../../styled/Body1';

const InputField = ({ name, label, placeholder, disabled, type, className, required, value, onChange, list }) => {
    return (
        <>
            <label htmlFor={name}><Body1>{label}</Body1></label>
            <input
                id={name}
                name={name}
                className={`primary form-control ${className ? className : ''}`}
                type={type}
                placeholder={placeholder}
                onChange={onChange}
                value={value}
                disabled={disabled}
                required={required}
                list={list} />
            <style jsx>{`
                label {
                    margin: 0;
                }
                .primary {
                    //Subtitle1
                    font-family: 'Open Sans', sans-serif;
                    font-size: 16px;
                    line-height: 24px;
                    letter-spacing: 0.15px;
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
    required: true,
    type: 'text',
    list: ''
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
        'tel',
        'time'
    ]),
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string.isRequired,
    required: PropTypes.bool,
    list: PropTypes.string
};

export default InputField;
