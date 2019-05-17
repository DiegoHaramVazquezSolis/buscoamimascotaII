import PropTypes from 'prop-types';

const Card = ({ children }) => {
    return (
        <>
            <div className='cardContainer'>
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
                    min-width: 0;
                }
                .cardContainer {
                    -ms-flex: 0 0 33.3333%;
                    flex: 0 0 33.3333%;
                    max-width: 33.3333%;
                    padding-right: 15px;
                    padding-left: 15px;
                }
                @media (max-width: 1199px) {
                    .cardContainer {
                        -ms-flex: 0 0 50%;
                        flex: 0 0 50%;
                        max-width: 50%;
                    }
                }
                @media (max-width: 768px) {
                    .cardContainer {
                        -ms-flex: 0 0 100%;
                        flex: 0 0 100%;
                        max-width: 100%;
                    }
                }
            `}</style>
        </>
    );
}

Card.propTypes = {
    children: PropTypes.string.isRequired
};

export default Card;
