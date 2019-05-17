import PropTypes from 'prop-types';

const CardHeader = ({ header, date }) => {
    return (
        <>
            <div>
                <small>{date}</small>
                <h2>{header}</h2>
            </div>
            <style jsx>{`
                div {
                    padding: .5rem 0 0 .75rem;
                }
                small {
                    font-family: 'Montserrat' sans-serif;
                    font-style: bold;
                    font-weight: 600;
                    font-size: 12px;
                    display: flex;
                    letter-spacing: 0.4px;
                    color: rgba(0, 0, 0, 0.4);
                    margin-bottom: .5rem;
                }
                h2 {
                    font-family: 'Open Sans' sans-serif;
                    font-weight: 600;
                    font-size: 20px;
                    letter-spacing: 0.15px;
                }
            `}</style>
        </>
    );
}

CardHeader.propTypes = {
    header: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired
};

export default CardHeader;
