import PropTypes from 'prop-types';

const Body2 = ({ children, style, className }) => {
    return (
        <>
            <p className={className ? className : ''} style={style ? style : null}>{children}</p>
            <style jsx>{`
                p {
                    font-family: 'Montserrat', sans-serif;
                    font-size: 14px;
                    line-height: 20px;
                    letter-spacing: 0.25px;
                }
            `}</style>
        </>
    );
};


Body2.propTypes = {
    children: PropTypes.string.isRequired,
    style: PropTypes.object,
    className: PropTypes.string
};


export default Body2;
