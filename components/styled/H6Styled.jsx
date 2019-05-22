import PropTypes from 'prop-types';

const H6Styled = ({ children, style }) => {
    return (
        <>
            <h6 style={style ? style : null}>{children}</h6>
            <style jsx>{`
                h6 {
                    font-family: 'Open Sans', sans-serif;
                    font-size: 24px;
                    line-height: 27px;
                    letter-spacing: 0.15px;
                }
            `}</style>
        </>
    );
};


H6Styled.propTypes = {
    children: PropTypes.string.isRequired,
    style: PropTypes.object
};


export default H6Styled;
