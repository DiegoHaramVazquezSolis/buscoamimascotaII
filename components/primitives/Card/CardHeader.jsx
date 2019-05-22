import PropTypes from 'prop-types';
import H5Styled from '../../styled/H5Styled';
import Overline from '../../styled/Overline';

const CardHeader = ({ header, date }) => {
    return (
        <>
            <div>
                <Overline style={{ color: 'rgba(0, 0, 0, .4)' }}>{date}</Overline>
                <H5Styled style={{ marginTop: '.5rem', marginBottom: '.80rem' }}>{header}</H5Styled>
            </div>
            <style jsx>{`
                div {
                    padding: .5rem 0 0 .75rem;
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
