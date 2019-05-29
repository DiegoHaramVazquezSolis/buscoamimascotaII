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
import ButtonOutlined from '../primitives/Buttons/ButtonOutlined';
import ListItemText from '../primitives/List/ListItemText';
import H5Styled from '../styled/H5Styled';
import ButtonText from '../primitives/Buttons/ButtonText';

const DialogCartel = ({ id, name, date, specie, sex, place, description, haveId, contact, image, open, closeDialog }) => {
    const [contactDialogOpen, setContactDialogOpen] = useState(false);
    const [shareDialogOpen, setShareDialogOpen] = useState(false);
    if (open) {
        history.pushState(null, '', `/mascotaperdida/${id}`);
    }
    function onCloseDialog() {
        setContactDialogOpen(false);
        setShareDialogOpen(false);
        closeDialog();
    }
    return(
        <>
            {open &&
            <Head>
                <title>{name}</title>
            </Head>
            }
            <Dialog open={open} closeDialog={onCloseDialog}>
                <div className='container mt-4'>
                    <div className='row'>
                        <div className='col-sm-12 col-md-4'></div>
                        <div className='col-sm-12 col-md-8'>
                            <H4Styled>{name}</H4Styled>
                        </div>
                        <div className='col-sm-12 col-md-4 mb-4'>
                            <div
                                className='mb-3 rounded'
                                style={{ 
                                    background: `url(${image})`,
                                    backgroundColor: '#C4C4C4',
                                    width: '100%',
                                    height: '250px',
                                    backgroundSize: 'cover'
                                }}></div>
                            <Body1 className='mb-2 text-center'>Visto por ultima vez el día: {date}</Body1>
                            <Subtitle1 className='text-center' style={{ color: '#828282' }}>
                                Especie: {specie}<br />
                                Sexo: {sex}<br />
                                {place}
                            </Subtitle1>
                            <div className='d-flex justify-content-center'>
                                <ButtonOutlined value='Compartir' className='mr-2' onClick={() => {setShareDialogOpen(true); setContactDialogOpen(false);}} />
                                <ButtonRaised value='Contactar' onClick={() => {setShareDialogOpen(false); setContactDialogOpen(true);}} />
                            </div>
                        </div>
                        <div className='col-sm-12 col-md-8'>
                            <Subtitle1 style={{ color: '#4F4F4F' }}>
                                {description}
                            </Subtitle1>
                            <CheckBoxField className='mt-2 mb-0' disabled checked={haveId} label='Tiene placa de identificación' />
                            <div className='ml-2'>
                                <Map label='Zona de la desaparición' draggable={false} initialPosition={{ latitude: 20.721870, longitude: -103.293555 }} />
                            </div>
                            <div className='contactList mt-2'>
                                <H5Styled>Contacto</H5Styled>
                                {Object.keys(contact).map((contactKey) => {
                                    switch (contact[contactKey].type) {
                                        case 'whatsapp':
                                            return (
                                                <ButtonText
                                                    className='pt-0 pb-0'
                                                    value={<i className='fab m-2 fa-lg fa-whatsapp' style={{ color: '#25D366' }}>{`  ${contact[contactKey].value}`}</i>} />
                                            );
                                        case 'mobile':
                                            return (
                                                <ButtonText
                                                    className='pt-0 pb-0'
                                                    value={<i className='fab m-2 fa-lg fa-mobile' style={{ color: 'black' }}>{`  ${contact[contactKey].value}`}</i>} />
                                            );
                                        case 'phone':
                                            return (
                                                <ButtonText
                                                    className='pt-0 pb-0'
                                                    value={<i className='fab m-2 fa-lg fa-phone' style={{ color: '#32C8f4' }}>{`  ${contact[contactKey].value}`}</i>} />
                                            );
                                        case 'envelope':
                                            return (
                                                <ButtonText
                                                    className='pt-0 pb-0'
                                                    value={<i className='fab m-2 fa-lg fa-envelope' style={{ color: 'black' }}>{`  ${contact[contactKey].value}`}</i>} />
                                            );
                                        default:
                                            break;
                                    }
                                })}
                            </div>
                            <div className='shareList mt-2'>
                                <H5Styled>Compartir</H5Styled>
                                    <ButtonText
                                        className='pt-0 pb-0'
                                        value={<i className='fab m-2 fa-lg fa-whatsapp' style={{ color: '#25D366' }}></i>} />
                                    <ButtonText
                                        className='pt-0 pb-0'
                                        value={<i className='fab m-2 fa-lg fa-facebook-f' style={{ color: '#3B5998' }}></i>} />
                                    <ButtonText
                                        className='pt-0 pb-0'
                                        value={<i className='fab m-2 fa-lg fa-facebook-messenger' style={{ color: '#2196F3' }}></i>} />
                            </div>
                        </div>
                    </div>
                </div>
            </Dialog>
            <style jsx>{`
                .card {
                    box-shadow: 0 2px 1px -1px rgba(0, 0, 0, .2), 0 1px 1px 0 rgba(0, 0, 0, .14), 0 1px 3px 0 rgba(0, 0, 0, .12);
                }
                .contactList {
                    max-height: ${contactDialogOpen ? '100%' : '0'};
                    overflow: hidden;
                }
                .shareList {
                    max-height: ${shareDialogOpen ? '100%' : '0'};
                    overflow: hidden;
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
