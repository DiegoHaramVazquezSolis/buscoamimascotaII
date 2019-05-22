import PropTypes from 'prop-types';

const Body1 = ({ children, style }) => {
    return (
        <>
            <p style={style ? style : null}>{children}</p>
            <style jsx>{`
                p {
                    font-family: 'Montserrat', sans-serif;
                    font-size: 20px;
                    line-height: 28px;
                    letter-spacing: 0.444444px;
                }
            `}</style>
        </>
    );
};


Body1.propTypes = {
    children: PropTypes.string.isRequired,
    style: PropTypes.object
};


export default Body1;
