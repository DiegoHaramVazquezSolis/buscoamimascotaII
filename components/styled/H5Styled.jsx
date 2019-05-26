import PropTypes from 'prop-types';

const H5Styled = ({ children, style, className }) => {
    return (
        <>
            <h5 className={className ? className : ''} style={style ? style : null}>{children}</h5>
            <style jsx>{`
                h5 {
                    font-family: 'Montserrat', sans-serif;
                    font-style: normal;
                    font-weight: normal;
                    font-size: 24px;
                    line-height: 29px;
                }
            `}</style>
        </>
    );
};


H5Styled.propTypes = {
    children: PropTypes.string.isRequired,
    style: PropTypes.object,
    className: PropTypes.string
};


export default H5Styled;
