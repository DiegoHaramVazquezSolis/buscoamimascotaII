import PropTypes from 'prop-types';

const CardImage = ({ src }) => {
    return (
        <>
            <div></div>
            <style jsx>{`
                div {
                    background-image: ${src};
                    height: 150px;
                    width: 100%;
                    border-radius: 4px 4px 0 0;
                }
                div:before {
                    margin-top: 56.25%;
                }
            `}</style>
        </>
    );
}

CardImage.propTypes = {
    src: PropTypes.string.isRequired
};

export default CardImage;
