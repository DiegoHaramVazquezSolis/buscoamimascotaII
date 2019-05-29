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
import List from '../primitives/List/List';
import ListItemText from '../primitives/List/ListItemText';
import H5Styled from '../styled/H5Styled';

const DialogCartel = ({ id, name, date, specie, sex, place, description, haveId, contact, image, open, closeDialog }) => {
    const [contactDialogOpen, setContactDialogOpen] = useState(false);
    const [shareDialogOpen, setShareDialogOpen] = useState(false);
    if (open) {
        history.pushState(null, '', `/mascotaperdida/${id}`);
    }
    return(
        <>
            {open &&
            <Head>
                <title>{name}</title>
            </Head>
            }
            <Dialog open={open} closeDialog={closeDialog}>
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
                            <div className='contactList mt-2'>
                                <H5Styled>Contacto</H5Styled>
                                <List>
                                    {Object.keys(contact).map((contactKey) => {
                                        switch (contact[contactKey].type) {
                                            case 'whatsapp':
                                                return (<ListItemText iconFaCode='fab m-2 fa-lg fa-whatsapp' iconColor='#25D366' content={contact[contactKey].value} />);
                                            case 'mobile':
                                                return (<ListItemText iconFaCode='fas m-2 fa-lg fa-mobile' iconColor='black' content={contact[contactKey].value} />);
                                            case 'phone':
                                                return (<ListItemText iconFaCode='fas m-2 fa-lg fa-phone' iconColor='#32C8f4' content={contact[contactKey].value} />);
                                            case 'envelope':
                                                return (<ListItemText iconFaCode='fas m-2 fa-lg fa-envelope' iconColor='black' content={contact[contactKey].value} />);
                                            default:
                                                break;
                                        }
                                    })}
                                </List>
                            </div>
                            <div className='shareList mt-2'>
                                <H5Styled>Compartir</H5Styled>
                                <List>
                                    {/*Todo: Social media links to share*/}
                                </List>
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
                    transition: max-height 600ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
                }
                .shareList {
                    max-height: ${shareDialogOpen ? '100%' : '0'};
                    overflow: hidden;
                    transition: max-height 600ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
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
