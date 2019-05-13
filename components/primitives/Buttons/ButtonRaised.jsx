import PropTypes from 'prop-types';

const ButtonRaised = ({ className, disabled, type, value, onClick }) => {
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
    type: 'button'
}

ButtonRaised.propTypes = {
    disabled: PropTypes.bool,
    className: PropTypes.string,
    type: PropTypes.oneOf(['submit', 'button', 'reset']),
    value: PropTypes.string.isRequired,
    onClick: PropTypes.func
};

export default ButtonRaised;
