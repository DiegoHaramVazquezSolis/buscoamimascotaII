import PropTypes from 'prop-types';
import Caption from '../../styled/Caption';

const TextAreaField = ({ name, label, className, placeholder, onChange, value, disabled, rows }) => {
    return (
        <>
            <label htmlFor={name}><Caption>{label}</Caption></label>
            <textarea
                id={name}
                name={name}
                className={`form-control ${className}`}
                placeholder={placeholder}
                onChange={onChange}
                value={value}
                disabled={disabled}
                rows={rows} />
            <style jsx>{`
                textarea {
                    //Subtitle1
                    font-family: 'Open Sans', sans-serif;
                    font-size: 16px;
                    line-height: 24px;
                    letter-spacing: 0.15px;
                    background: transparent !important;
                    border: 1.5px solid #ced4da;
                }
                textarea:focus {
                    border-color: rgba(38, 199, 220, 0.5);
                    box-shadow: 0 0 0 .2rem rgba(39, 199, 220,.25);
                }
            `}</style>
        </>
    );
}

TextAreaField.defaultProps = {
    disabled: false
};

TextAreaField.propTypes = {
    disabled: PropTypes.bool,
    className: PropTypes.string,
    rows: PropTypes.number,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string.isRequired
};

export default TextAreaField;
