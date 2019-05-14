import Link from 'next/link';
import PropTypes from 'prop-types';

const Tab = ({ children, active, className, href, as }) => {
    return (
        <>
            <Link as={as} href={href}>
                <div className={`${active ? 'active' : ''} ${className}`}>
                    {children}
                </div>
            </Link>
            <style jsx>{`
                div {
                    font-family: 'Open Sans' sans-serif;
                    align-items: center;
                    text-align: center;
                    letter-spacing: 0.15px;
                    color: rgba(0, 150, 170, 0.65);
                    font-size: 20px;
                    font-style: normal;
                    padding-left: 1.10rem;
                    padding-right: 1.10rem;
                    cursor: pointer;
                }
                div:hover {
                    color: rgba(0, 150, 170, 0.45);
                    border-bottom: 3px solid rgba(38, 199, 220, 0.45);
                }
                .active:hover {
                    color: rgba(0, 150, 170, 0.8);
                    border-bottom: 3px solid rgba(38, 199, 220, 0.8);
                }
                .active {
                    color: #0096AA;
                    font-weight: 600;
                    border-bottom: 3px solid #26C7DC;
                }
            `}</style>   
        </>
    );
}

Tab.defaultProps = {
    active: false
};

Tab.propTypes = {
    active: PropTypes.bool,
    className: PropTypes.string,
    as: PropTypes.string,
    children: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired
};

export default Tab;
