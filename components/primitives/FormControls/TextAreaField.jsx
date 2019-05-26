import PropTypes from 'prop-types';
import { primaryColorRGB } from '../../styled/Constants';
import Body1 from '../../styled/Body1';

const TextAreaField = ({ name, label, className, placeholder, onChange, value, disabled, rows }) => {
    return (
        <>
            <label htmlFor={name}><Body1>{label}</Body1></label>
            <textarea
                id={name}
                name={name}
                className={`form-control ${className ? className : ''}`}
                placeholder={placeholder}
                onChange={onChange}
                value={value}
                disabled={disabled}
                rows={rows} />
            <style jsx>{`
                label {
                    margin: 0;
                }
                textarea {
                    //Subtitle1
                    font-family: 'Open Sans', sans-serif;
                    font-size: 16px;
                    line-height: 24px;
                    letter-spacing: 0.15px;
                    background: transparent !important;
                    border: 1.5px solid #CED4DA;
                }
                textarea:focus {
                    border-color: rgba(${primaryColorRGB}, 0.5);
                    box-shadow: 0 0 0 .2rem rgba(${primaryColorRGB},.25);
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
