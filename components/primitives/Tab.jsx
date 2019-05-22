import Link from 'next/link';
import PropTypes from 'prop-types';
import H6Styled from '../styled/H6Styled';

const Tab = ({ children, active, className, href, as }) => {
    return (
        <>
            <Link as={as} href={href}>
                <div className={`${active ? 'active' : ''} ${className}`}>
                    <H6Styled style={{ fontWeight: active ? '600' : '' }}>{children}</H6Styled>
                </div>
            </Link>
            <style jsx>{`
                div {
                    align-items: center;
                    text-align: center;
                    color: rgba(0, 150, 170, 0.65);
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
