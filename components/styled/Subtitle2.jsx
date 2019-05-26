import PropTypes from 'prop-types';

const Subtitle2 = ({ children, style, className }) => {
    return (
        <>
            <p className={className ? className : ''} style={style ? style : null}>{children}</p>
            <style jsx>{`
                p {
                    font-family: 'Open Sans', sans-serif;
                    font-size: 14px;
                    line-height: 24px;
                    letter-spacing: 0.1px;
                }
            `}</style>
        </>
    );
};


Subtitle2.propTypes = {
    children: PropTypes.string.isRequired,
    styles: PropTypes.object,
    className: PropTypes.string
};


export default Subtitle2;
