import PropTypes from 'prop-types';

const CardBody = ({ children }) => {
    return (
        <>
            <p>{children}</p>
            <style jsx>{`
                p {
                    font-family: Montserrat;
                    font-size: 12px;
                    letter-spacing: 0.4px;
                    margin-left: .75rem;
                    margin-right: 1.25rem;
                }
            `}</style>
        </>
    );
}

CardBody.propTypes = {
    children: PropTypes.string.isRequired
};

export default CardBody;
