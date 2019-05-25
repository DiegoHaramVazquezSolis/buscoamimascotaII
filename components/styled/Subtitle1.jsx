import PropTypes from 'prop-types';

const Subtitle1 = ({ children, style }) => {
    return (
        <>
            <p style={style ? style : null}>{children}</p>
            <style jsx>{`
                p {
                    font-family: 'Open Sans', sans-serif;
                    font-size: 16px;
                    line-height: 24px;
                    letter-spacing: 0.15px;
                }
            `}</style>
        </>
    );
};


Subtitle1.propTypes = {
    children: PropTypes.string.isRequired,
    style: PropTypes.object
};


export default Subtitle1;
