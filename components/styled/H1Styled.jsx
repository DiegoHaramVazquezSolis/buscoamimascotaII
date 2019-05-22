
import PropTypes from 'prop-types';

const H1Styled = ({ children, style }) => {
    return (
        <>
            <h1 style={style ? style : null}>{children}</h1>
            <style jsx>{`
                h1 {
                    font-family: 'Montserrat', sans-serif;
                    font-weight: 300;
                    font-size: 96px;
                    line-height: 117px;
                    letter-spacing: -1.5px;
                }
            `}</style>
        </>
    );
};


H1Styled.propTypes = {
    children: PropTypes.string.isRequired,
    style: PropTypes.object
};


export default H1Styled;