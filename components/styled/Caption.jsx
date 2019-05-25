import PropTypes from 'prop-types';

const Caption = ({ children, style }) => {
    return (
        <>
            <small style={style ? style : null}>{children}</small>
            <style jsx>{`
                small {
                    font-family: 'Montserrat', sans-serif;
                    font-size: 12px;
                    line-height: 16px;
                    letter-spacing: 0.4px;
                }
            `}</style>
        </>
    );
}

Caption.propTypes = {
    children: PropTypes.string.isRequired,
    style: PropTypes.object
};

export default Caption;
