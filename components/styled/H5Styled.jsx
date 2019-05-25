import PropTypes from 'prop-types';

const H5Styled = ({ children, style }) => {
    return (
        <>
            <h5 style={style ? style : null}>{children}</h5>
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
    style: PropTypes.object
};


export default H5Styled;
