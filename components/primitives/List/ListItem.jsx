import PropTypes from 'prop-types';
import Subtitle1 from '../../styled/Subtitle1';

const ListItem = ({ content, iconFaCode, iconColor }) => {
    return (
        <>
            <div className={`listItem`} role='button'>
                <div className='listIcon'>
                    <i className={iconFaCode ? iconFaCode : ''} style={{ color: iconColor }}></i>
                </div>
                <Subtitle1 style={{ marginLeft: '.75rem' }}>{content}</Subtitle1>
            </div>
            <style jsx>{`
                .listIcon {
                    width: 40px;
                    height: 40px;
                    display: flex;
                    position: relative;
                    overflow: hidden;
                    font-size: 1.25rem;
                    align-items: center;
                    flex-shrink: 0;
                    border-radius: 50%;
                    justify-content: center;
                    -moz-user-select: none;
                }
                .listItem {
                    padding-left: 16px;
                    padding-right: 16px;
                    padding-top: 11px;
                    padding-bottom: 11px;
                    width: 100%;
                    display: flex;
                    position: relative;
                    box-sizing: border-box;
                    text-align: left;
                    align-items: center;
                    justify-content: flex-start;
                    text-decoration: none;
                    cursor: pointer;
                    border: 0;
                    margin: 0;
                    background-color: transparent;
                    transition: background-color 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
                }
                .listItem:hover {
                    background-color: rgba(0, 0, 0, 0.08);
                }
                .listItem:active {
                    background-color: rgba(38, 199, 220, 0.18);
                    transition: background-color 200ms ease-in;
                }
                .listItem:focus {
                    background-color: rgba(0, 0, 0, 0.18);
                    transition: background-color 100ms ease-in;
                }
            `}</style>
        </>
    );
}

ListItem.propTypes = {
    content: PropTypes.string.isRequired,
    iconFaCode: PropTypes.string,
    iconColor: PropTypes.string
};

export default ListItem;
