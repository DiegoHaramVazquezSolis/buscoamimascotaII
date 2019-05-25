import PropTypes from 'prop-types';

const H2Styled = ({ children, style }) => {
    return (
        <>
            <h2 style={style ? style : null}>{children}</h2>
            <style jsx>{`
                h2 {
                    font-family: 'Montserrat', sans-serif;
                    font-weight: 300;
                    font-size: 58px;
                    line-height: 73px;
                    letter-spacing: -0.5px;
                }
            `}</style>
        </>
    );
};


H2Styled.propTypes = {
    children: PropTypes.string.isRequired,
    style: PropTypes.object
};


export default H2Styled;