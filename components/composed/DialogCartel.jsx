import PropTypes from 'prop-types';
import { useState } from 'react';
import Head from 'next/head';
import Dialog from '../primitives/Dialog';
import Subtitle1 from '../styled/Subtitle1';
import Body1 from '../styled/Body1';
import ButtonRaised from '../primitives/Buttons/ButtonRaised';
import H4Styled from '../styled/H4Styled';
import Map from '../primitives/Map/Map';
import CheckBoxField from '../primitives/FormControls/CheckBoxField';
import ButtonText from '../primitives/Buttons/ButtonText';
import Body2 from '../styled/Body2';
import { primaryColor } from '../styled/Constants';

const DialogCartel = ({ id, name, date, specie, sex, place, description, haveId, contact, image, open, closeDialog, LatLng }) => {
    const [contactDialogOpen, setContactDialogOpen] = useState(false);
    if (open) {
        history.pushState(null, '', `/mascotaperdida/${id}`);
    }
    function onCloseDialog() {
        setContactDialogOpen(false);
        closeDialog();
    }
    var localContact = {};
    Object.assign(localContact, contact);
    return(
        <>
            {open &&
            <Head>
                <title>{name}</title>
            </Head>
            }
            <Dialog open={open} closeDialog={onCloseDialog}>
                <div className='container'>
                    <div className='row'>
                        <div className='col-sm-12 col-md-4 mb-4'>
                            <div
                                className='mb-3 rounded cover-bg'
                                style={{ 
                                    width: '100%',
                                    height: '300px',
                                    background: `url(${image})`
                                }}></div>
                            <Body1 className='mb-2 text-center'>Visto por ultima vez el día: {date}</Body1>
                            <div className='d-flex justify-content-center mt-3 mb-3'>
                                <ButtonRaised value='Contactar' onClick={() => setContactDialogOpen(true)} />
                            </div>
                            <div className='mt-3'>
                                <div className='d-flex justify-content-center'>
                                    <ButtonText
                                        className='pt-0 pb-0'
                                        value={<i className='fab m-2 fa-lg fa-whatsapp' style={{ color: '#25D366' }}></i>} />
                                    <ButtonText
                                        className='pt-0 pb-0 ml-3'
                                        value={<i className='fab m-2 fa-lg fa-facebook-f' style={{ color: '#3B5998' }}></i>} />
                                    <ButtonText
                                        className='pt-0 pb-0 ml-3'
                                        value={<i className='fab m-2 fa-lg fa-facebook-messenger' style={{ color: '#2196F3' }}></i>} />
                                </div>
                            </div>
                            <div className='contactList row mt-1'>
                                {Object.keys(localContact).map((contactKey) => {
                                    switch (localContact[contactKey].type) {
                                        case 'whatsapp':
                                            return (
                                                <div className='col-6'>
                                                    <ButtonText
                                                        className='pt-0 pb-0 pl-0 pr-0'
                                                        value={<><i className='fab m-2 fa-lg fa-whatsapp' style={{ color: '#25D366' }}></i>{`  ${localContact[contactKey].content}`}</>} />
                                                </div>
                                            );
                                        case 'mobile':
                                            return (
                                                <div className='col-6'>
                                                    <ButtonText
                                                        className='pt-0 pb-0 pl-0 pr-0'
                                                        value={<><i className='fab m-2 fa-lg fa-mobile' style={{ color: primaryColor }}></i>{`  ${localContact[contactKey].content}`}</>} />
                                                </div>
                                            );
                                        case 'phone':
                                            return (
                                                <div className='col-6'>
                                                    <ButtonText
                                                        className='pt-0 pb-0 pl-0 pr-0'
                                                        value={<><i className='fab m-2 fa-lg fa-phone' style={{ color: primaryColor }}></i>{`  ${localContact[contactKey].content}`}</>} />
                                                </div>
                                            );
                                        case 'envelope':
                                            return (
                                                <div className='col-6'>
                                                    <ButtonText
                                                        className='pt-0 pb-0 pl-0 pr-0'
                                                        value={<><i className='fas m-2 fa-lg fa-envelope' style={{ color: primaryColor }}></i>{`  ${localContact[contactKey].content}`}</>} />
                                                </div>
                                            );
                                        default:
                                            break;
                                    }
                                })}
                            </div>
                        </div>
                        <div className='col-sm-12 col-md-8'>
                            <H4Styled className='mb-0'>{name}</H4Styled>
                            <div className='row'>
                                <div className='col-sm-12 col-md-6'>
                                    <Body2 style={{ color: '#828282' }}>
                                        Especie: {specie} Sexo: {sex}
                                    </Body2>
                                </div>
                                <div className='col-sm-12 col-md-6'>
                                    <Body2 style={{ color: '#828282' }}>
                                        {place}
                                    </Body2>
                                </div>
                            </div>
                            <Subtitle1 style={{ color: '#4F4F4F' }}>
                                {description}
                            </Subtitle1>
                            <CheckBoxField className='mt-2 mb-0' disabled checked={haveId} label='Tiene placa de identificación' />
                            <div className='ml-2'>
                                {open &&
                                <Map
                                    label='Zona de la desaparición'
                                    draggable={false}
                                    initialPosition={{ latitude: LatLng.latitude, longitude: LatLng.longitude }} />
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </Dialog>
            <style jsx>{`
                .contactList {
                    max-height: ${contactDialogOpen ? '100%' : '0'};
                    overflow: hidden;
                    transition: max-height 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
                }
                .cover-bg {
                    background-size: cover !important;
                    background-color: #C4C4C4 !important;
                }
            `}</style>
        </>
    );
}

DialogCartel.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    specie: PropTypes.string.isRequired,
    place: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    haveId: PropTypes.bool.isRequired,
    contact: PropTypes.shape({
        identifier: {
            type: PropTypes.string.isRequired,
            value: PropTypes.string.isRequired
        }
    }).isRequired,
    image: PropTypes.string.isRequired,
    closeDialog: PropTypes.func.isRequired
};

export default DialogCartel;
