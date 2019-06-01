import Head from 'next/head';
import Link from 'next/link';
import { withRouter } from 'next/router';
import { useState } from 'react';
import H4Styled from './../components/styled/H4Styled';
import Body1 from './../components/styled/Body1';
import Body2 from './../components/styled/Body2';
import Subtitle1 from './../components/styled/Subtitle1';
import Navigation from './../components/composed/Navigation';
import ButtonRaised from './../components/primitives/Buttons/ButtonRaised';
import ButtonText from './../components/primitives/Buttons/ButtonText';
import Map from './../components/primitives/Map/Map';
import CheckBoxField from './../components/primitives/FormControls/CheckBoxField';
import List from './../components/primitives/List/List';
import ListItem from './../components/primitives/List/ListItem';
import Modal from 'react-bootstrap/Modal';
import { primaryColor } from '../components/styled/Constants';

const MascotaPerdida = withRouter((props) => {
    const [contactDialogOpen, setContactDialogOpen] = useState(false);
    return (
        <>
            <Head>
                <title>Kenji</title>
            </Head>
            <Navigation activeIndex={1} />
            <div className='container'>
                <Link as='/home' href='/'>
                    <div className='d-flex'>
                        <i className='fas fa-arrow-left fa-2x mr-2'
                            style={{ cursor: 'pointer', color: primaryColor }}></i>
                        <div style={{ cursor: 'pointer' }}>
                            <Body1 className='text-secondary'>
                                    Volver a la lista
                            </Body1>
                        </div>
                    </div>
                </Link>
                <div className='row mt-2'>
                    <div className='col-sm-12 col-md-4 mb-4'>
                        <div
                            className='mb-3 rounded'
                            style={{ 
                                background: `url(https://images.unsplash.com/photo-1534985111090-85c477f9d813?ixlib=rb-1.2.1&auto=format&fit=crop&w=375&q=80)`,
                                backgroundColor: '#C4C4C4',
                                width: '100%',
                                height: '300px',
                                backgroundSize: 'cover'
                            }}></div>
                        <Body1 className='mb-2 text-center'>Visto por ultima vez el día: 31/05/2019</Body1>
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
                    </div>
                    <div className='col-sm-12 col-md-8'>
                        <H4Styled className='mb-0'>Kenji</H4Styled>
                        <div className='row'>
                            <div className='col-sm-12 col-md-6'>
                                <Body2 style={{ color: '#828282' }}>
                                    Especie: Perro Sexo: Macho
                                </Body2>
                            </div>
                            <div className='col-sm-12 col-md-6'>
                                <Body2 style={{ color: '#828282' }}>
                                    Guadalajara, Jalisco, Mexico
                                </Body2>
                            </div>
                        </div>
                        <Subtitle1 style={{ color: '#4F4F4F' }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et pharetra erat. Etiam sem quam, fringilla eget elementum vel, imperdiet a est. Vestibulum eget blandit purus. Suspendisse potenti. Nunc nibh dolor, laoreet nec efficitur ut, vestibulum quis elit. Integer vitae finibus odio, sit amet pellentesque erat. Sed interdum quis nisi non posuere. Integer interdum ac lectus ac blandit. Fusce sed ultricies magna. Vivamus in mi nisl. Vivamus ac eleifend lorem. Duis dui tortor, convallis ut erat sed, dignissim hendrerit tellus.
                        </Subtitle1>
                        <CheckBoxField className='mt-2 mb-0' disabled checked={true} label='Tiene placa de identificación' />
                        <div className='ml-2'>
                            <Map label='Zona de la desaparición' draggable={false} initialPosition={{ latitude: 20.721870, longitude: -103.293555 }} />
                        </div>
                    </div>
                </div>
            </div>
            <Modal size='sm' centered show={contactDialogOpen} onHide={() => setContactDialogOpen(false)}>
                <Modal.Body>
                    <H4Styled>Contacto</H4Styled>
                    <List>
                        <ListItem>
                            <ButtonText className='w-100' value={<><i className='fab fa-whatsapp fa-lg mr-3'></i>33 12 97 12 99</>} />
                        </ListItem>
                    </List>
                </Modal.Body>
            </Modal>
        </>
    );
});

export default MascotaPerdida;
