import PropTypes from 'prop-types';
import Caption from '../../styled/Caption';
import { primaryColorRGB } from '../../styled/Constants';

const SelectField = ({ name, label, className, onChange, value, disabled, children }) => {
    return (
        <>
            <label htmlFor={name}><Caption>{label}</Caption></label>
            <select
                id={name}
                name={name}
                type='select'
                onChange={onChange}
                value={value}
                className={`form-control ${className ? className : ''}`}
                disabled={disabled}>
                    {children}
                </select>
            <style jsx>{`
                select {
                    //Subtitle1
                    font-family: 'Open Sans', sans-serif;
                    font-size: 16px;
                    line-height: 24px;
                    letter-spacing: 0.15px;
                    background: transparent !important;
                    border: 1.5px solid #CED4DA;
                }
                select:focus {
                    border-color: rgba(${primaryColorRGB}, 0.5);
                    box-shadow: 0 0 0 .2rem rgba(${primaryColorRGB},.25);
                }
            `}</style>
        </>
    );
}

SelectField.defaultProps = {
    disabled: false
};

SelectField.propTypes = {
    disabled: PropTypes.bool,
    className: PropTypes.string,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    children: PropTypes.element.isRequired
};

export default SelectField;
