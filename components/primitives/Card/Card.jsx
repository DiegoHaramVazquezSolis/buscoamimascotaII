import PropTypes from 'prop-types';

const Card = ({ children }) => {
    return (
        <>
            <div>
                <div className={`card`}>
                    {children}
                </div>
            </div>
            <style jsx>{`
                .card {
                    border-radius: 4px;
                    box-shadow: 0 2px 1px -1px rgba(0, 0, 0, .2), 0 1px 1px 0 rgba(0, 0, 0, .14), 0 1px 3px 0 rgba(0, 0, 0, .12);
                    display: flex;
                    margin: 12px 0;
                    flex-direction: column;
                    box-sizing: border-box;
                    padding: 0;
                    background-color: #fff;
                    width: 20rem;
                }
                div {
                    padding-right: 15px;
                    padding-left: 15px;
                }
            `}</style>
        </>
    );
}

Card.propTypes = {
    children: PropTypes.string.isRequired
};

export default Card;
