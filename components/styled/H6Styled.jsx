import PropTypes from 'prop-types';

const H6Styled = ({ children, style, className }) => {
    return (
        <>
            <h6 className={className ? className : ''} style={style ? style : null}>{children}</h6>
            <style jsx>{`
                h6 {
                    font-family: 'Open Sans', sans-serif;
                    font-size: 20px;
                    line-height: 27px;
                    letter-spacing: 0.15px;
                }
            `}</style>
        </>
    );
};


H6Styled.propTypes = {
    children: PropTypes.string.isRequired,
    style: PropTypes.object,
    className: PropTypes.string
};


export default H6Styled;
