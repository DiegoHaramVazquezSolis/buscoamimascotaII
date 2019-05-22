import PropTypes from 'prop-types';
import Caption from '../../styled/Caption';

const CardBody = ({ children }) => {
    return (
        <>
            <Caption style={{ marginLeft: '.75rem', marginRight: '1.25rem', marginBottom: '1.5rem'}}>{children}</Caption>
        </>
    );
}

CardBody.propTypes = {
    children: PropTypes.string.isRequired
};

export default CardBody;
