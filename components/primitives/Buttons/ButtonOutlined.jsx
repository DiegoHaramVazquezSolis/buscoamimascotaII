import PropTypes from 'prop-types';

const ButtonOutlined = ({ className, disabled, type, value, onClick }) => {
    return (
        <>
            <input
                className={`primary ${!disabled ? '' : 'disabled'} btn ${className}`}
                type={type}
                value={value}
                disabled={disabled}
                onClick={onClick} />
            <style jsx>{`
                .primary {
                    font-family: 'Montserrat', sans-serif;
                    font-style: normal;
                    font-weight: 500;
                    letter-spacing: 1.25px;
                    text-transform: uppercase;
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
    type: 'button'
}

ButtonOutlined.propTypes = {
    disabled: PropTypes.bool,
    className: PropTypes.string,
    type: PropTypes.oneOf(['submit', 'button', 'reset']),
    value: PropTypes.string.isRequired,
    onClick: PropTypes.func
};

export default ButtonOutlined;