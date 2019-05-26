import PropTypes from 'prop-types';

const H4Styled = ({ children, style, className }) => {
    return (
        <>
            <h4 className={className ? className : ''} style={style ? style : null}>{children}</h4>
            <style jsx>{`
                h4 {
                    font-family: 'Montserrat', sans-serif;
                    font-weight: normal;
                    font-size: 34px;
                    line-height: 41px;
                    letter-spacing: 0.25px;
                }
            `}</style>
        </>
    );
};


H4Styled.propTypes = {
    children: PropTypes.string.isRequired,
    style: PropTypes.object,
    className: PropTypes.string
};


export default H4Styled;
