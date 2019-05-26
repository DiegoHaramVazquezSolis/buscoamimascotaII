import PropTypes from 'prop-types';

const H2Styled = ({ children, style, className }) => {
    return (
        <>
            <h2 className={className ? className : ''} style={style ? style : null}>{children}</h2>
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
    style: PropTypes.object,
    className: PropTypes.string
};


export default H2Styled;