import PropTypes from 'prop-types';

const H3Styled = ({ children, style, className }) => {
    return (
        <>
            <h3 className={className ? className : ''} style={style ? style : null}>{children}</h3>
            <style jsx>{`
                h3 {
                    font-family: 'Montserrat', sans-serif;
                    font-weight: normal;
                    font-size: 46px;
                    line-height: 59px;
                }
            `}</style>
        </>
    );
};


H3Styled.propTypes = {
    children: PropTypes.string.isRequired,
    style: PropTypes.object,
    className: PropTypes.string
};


export default H3Styled;