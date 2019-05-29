import PropTypes from 'prop-types';
import Caption from '../../styled/Caption';

const CardBody = ({ children }) => {
    return (
        <>
            <Caption style={{ marginLeft: '.75rem', marginRight: '1.25rem', marginBottom: '1.5rem', height: '64px'}}>{children}</Caption>
        </>
    );
}

CardBody.propTypes = {
    children: PropTypes.string.isRequired
};

export default CardBody;
