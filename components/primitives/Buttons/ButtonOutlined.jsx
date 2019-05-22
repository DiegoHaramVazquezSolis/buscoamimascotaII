import PropTypes from 'prop-types';
import TextForButtons from '../../styled/TextForButtons';

const ButtonOutlined = ({ className, disabled, type, value, onClick, required, style, textStyle }) => {
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
                    background: transparent;
                    border: 2px solid #26C7DC;
                    box-sizing: border-box;
                    border-radius: 4px;
                    color: #26C7DC;
                    transition: background 300ms ease-in-out;
                }   
                .primary:hover {
                    background: rgba(38, 199, 220, 0.1);
                }
                .primary:active {
                    background: rgba(38, 199, 220, 0.2);
                }
                .primary:focus {
                    background: rgba(38, 199, 220, 0.2);
                    box-shadow: none;
                }
                .primary.disabled {
                    background: none;
                    border: 2px solid rgba(0, 0, 0, 0.4);
                    box-sizing: border-box;
                    cursor: pointer;
                    color: rgba(0, 0, 0, 0.4);
                }
            `}</style>
        </>
    );
}

ButtonOutlined.defaultProps = {
    disabled: false,
    type: 'button',
    required: true
}

ButtonOutlined.propTypes = {
    disabled: PropTypes.bool,
    className: PropTypes.string,
    type: PropTypes.oneOf(['submit', 'button', 'reset']),
    value: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    required: PropTypes.bool,
    textStyle: PropTypes.object,
    style: PropTypes.object
};

export default ButtonOutlined;