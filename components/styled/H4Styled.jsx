import PropTypes from 'prop-types';

const H4Styled = ({ children, style }) => {
    return (
        <>
            <h4 style={style ? style : null}>{children}</h4>
            <style jsx>{`
                h4 {
                    font-family: 'Montserrat', sans-serif;
                    font-weight: normal;
                    font-size: 38px;
                    line-height: 41px;
                    letter-spacing: 0.25px;
                }
            `}</style>
        </>
    );
};


H4Styled.propTypes = {
    children: PropTypes.string.isRequired,
    style: PropTypes.object
};


export default H4Styled;
