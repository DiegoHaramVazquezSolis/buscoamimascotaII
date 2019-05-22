import PropTypes from 'prop-types';

const H3Styled = ({ children, style }) => {
    return (
        <>
            <h3 style={style ? style : null}>{children}</h3>
            <style jsx>{`
                h3 {
                    font-family: 'Montserrat', sans-serif;
                    font-weight: normal;
                    font-size: 50px;
                    line-height: 59px;
                }
            `}</style>
        </>
    );
};


H3Styled.propTypes = {
    children: PropTypes.string.isRequired,
    style: PropTypes.object
};


export default H3Styled;