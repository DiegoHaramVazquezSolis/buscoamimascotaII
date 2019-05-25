import PropTypes from 'prop-types';

const Overline = ({ children, style }) => {
    return (
        <>
            <small style={style ? style : null}>{children}</small>
            <style jsx>{`
                small {
                    font-family: 'Montserrat', sans-serif;
                    font-weight: 500;
                    font-size: 10px;
                    line-height: 16px;
                    letter-spacing: 1.5px;
                    text-transform: uppercase;
                }
            `}</style>
        </>
    );
}

Overline.propTypes = {
    children: PropTypes.string.isRequired,
    style: PropTypes.object
};

export default Overline;
