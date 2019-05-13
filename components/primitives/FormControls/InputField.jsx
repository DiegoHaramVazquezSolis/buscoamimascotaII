import PropTypes from 'prop-types';

const InputField = ({ name, label, error, placeholder, disabled, type, className, value, onChange }) => {
    return (
        <>
            <label htmlFor={name}>{label}</label>
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
                label {
                    font-family: 'Montserrat', sans-serif;
                    font-size: 12px;
                    letter-spacing: 0.4px;
                    opacity: 0.87;
                }
                .primary {
                    font-family: 'Open Sans', sans-serif;
                    font-style: normal;
                    font-weight: normal;
                    font-size: 16px;
                    line-height: 24px;
                    letter-spacing: 0.15px;
                }
                .primary:focus {
                    border-color: rgba(38, 199, 220, 0.5);
                    box-shadow: 0 0 0 .2rem rgba(39, 199, 220,.25)
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
    error: PropTypes.bool,
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
    onChange: PropTypes.func.isRequired
};

export default InputField;
