import Link from 'next/link';
import PropTypes from 'prop-types';
import H6Styled from '../styled/H6Styled';
import { primaryColor } from '../styled/Constants';
import { primaryColorRGB } from '../styled/Constants';

const Tab = ({ children, active, className, href, as }) => {
    return (
        <>
            <Link as={as} href={href}>
                <div className={`${active ? 'active' : ''} ${className}`}>
                    <H6Styled style={{ fontWeight: active ? '600' : '', textTransform: 'uppercase' }}>{children}</H6Styled>
                </div>
            </Link>
            <style jsx>{`
                div {
                    align-items: center;
                    text-align: center;
                    color: rgba(${primaryColorRGB}, 0.8);
                    padding-left: 1.10rem;
                    padding-right: 1.10rem;
                    cursor: pointer;
                }
                div:hover {
                    color: rgba(${primaryColorRGB}, 0.9);
                    border-bottom: 2.5px solid rgba(${primaryColorRGB}, 0.45);
                }
                .active:hover {
                    color: rgba(${primaryColorRGB}, 0.8);
                    border-bottom: 2.5px solid rgba(${primaryColorRGB}, 0.8);
                }
                .active {
                    color: ${primaryColor};
                    font-weight: 600;
                    border-bottom: 2.5px solid rgba(${primaryColorRGB}, 0.7);
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
