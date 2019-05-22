import PropTypes from 'prop-types';
import TextForButtons from '../../styled/TextForButtons';

const ButtonRaised = ({ className, disabled, type, value, onClick, required, style, textStyle }) => {
    return (
        <>
            <button
                className={`primary ${!disabled ? '' : 'disabled'} btn ${className}`}
                type={type}
                disabled={disabled}
                onClick={onClick}
                style={style}
                required={required}>
                    <TextForButtons style={textStyle}>{value}</TextForButtons>
                </button>
            <style jsx>{`
                .primary {
                    padding-right: 16px;
                    padding-left: 16px;
                    background: #26C7DC;
                    box-shadow: 0px 2px 4px rgba(38, 199, 220, 0.25);
                    border-radius: 4px;
                    color: #fff;
                    transition: box-shadow 300ms ease-in-out, background 300ms ease-in-out;
                }   
                .primary:hover {
                    box-shadow: 0px 4px 4px rgba(38, 199, 220, 0.30);
                    background: rgba(38, 199, 220, 0.9);
                }
                .primary:active {
                    background: rgba(38, 199, 220, 0.75);
                    box-shadow: 0px 8px 4px rgba(38, 199, 220, 0.25);
                }
                .primary:focus {
                    background: rgba(38, 199, 220, 0.75);
                }
                .primary.disabled {
                    background: #BDBDBD;
                    color: rgba(0, 0, 0, 0.4);
                    box-shadow: none;
                }
            `}</style>
        </>
    );
}

ButtonRaised.defaultProps = {
    disabled: false,
    type: 'button',
    required: true
}

ButtonRaised.propTypes = {
    disabled: PropTypes.bool,
    className: PropTypes.string,
    type: PropTypes.oneOf(['submit', 'button', 'reset']),
    value: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    required: PropTypes.bool,
    textStyle: PropTypes.object
};

export default ButtonRaised;
