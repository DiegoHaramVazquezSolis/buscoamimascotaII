import PropTypes from 'prop-types';

const List = ({ children }) => {
    return (
        <>
            <div>
                {children}
            </div>
            <style jsx>{`
                div {
                    width: 100%;
                    max-width: 360px;
                    background-color: #fff;
                    padding-top: 8px;
                    padding-bottom: 8px;
                    background-color: #fff;
                }
            `}</style>
        </>
    );
}

List.propTypes = {
    children: PropTypes.element.isRequired
};

export default List;
