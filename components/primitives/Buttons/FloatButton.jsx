import PropTypes from 'prop-types';

const FloatButton = () => {
    return (
        <>
            <button className={'fab btn'}>
                <i className="fas fa-share-alt fa-2x mr-1"></i>
            </button>
            <style jsx>{`
                .fab {
                    position:fixed;
                    width:60px;
                    height:60px;
                    bottom:40px;
                    right:40px;
                    border-radius:50px;
                    background: #D5785F;
                    color: #fff;
                    text-align:center;
                    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
                }
            `}</style>
        </>
    );
}

FloatButton.defaultProps = {
    disabled: false,
    type: 'button'
}

FloatButton.propTypes = {
    disabled: PropTypes.bool,
    className: PropTypes.string,
    type: PropTypes.oneOf(['submit', 'button', 'reset']),
    value: PropTypes.string.isRequired,
    onClick: PropTypes.func
};

export default FloatButton;
