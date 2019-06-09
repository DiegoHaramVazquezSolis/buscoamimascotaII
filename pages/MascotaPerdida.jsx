import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import { connect } from 'react-redux';
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
import { loadPerdidaById } from '../redux/actions/perdidasActions';
import H6Styled from '../components/styled/H6Styled';

const MascotaPerdida = ({ mascotaPerdida }) => {
    const [contactDialogOpen, setContactDialogOpen] = useState(false);
    var contactObject = {};
    Object.assign(contactObject, mascotaPerdida.contact);
    if (Object.keys(mascotaPerdida).length > 0) {
        return (
            <>
                <Head>
                    <title>{mascotaPerdida.name}</title>
                </Head>
                <Navigation activeIndex={1} />
                <div className='container'>
                    <Link href='/mascotasperdidas'>
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
                                    background: `url(${mascotaPerdida.image})`,
                                    backgroundColor: '#C4C4C4',
                                    width: '100%',
                                    height: '300px',
                                    backgroundSize: 'cover'
                                }}></div>
                            <Body1 className='mb-2 text-center'>Visto por ultima vez el día: {mascotaPerdida.lastSeen}</Body1>
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
                            <H4Styled className='mb-0'>{mascotaPerdida.name}</H4Styled>
                            <div className='row'>
                                <div className='col-sm-12 col-md-6'>
                                    <Body2 style={{ color: '#828282' }}>
                                        Especie: {mascotaPerdida.specie} Sexo: {mascotaPerdida.sex}
                                    </Body2>
                                </div>
                                <div className='col-sm-12 col-md-6'>
                                    <Body2 style={{ color: '#828282' }}>
                                        {mascotaPerdida.place}
                                    </Body2>
                                </div>
                            </div>
                            <Subtitle1 style={{ color: '#4F4F4F' }}>
                                {mascotaPerdida.description}
                            </Subtitle1>
                            <CheckBoxField className='mt-2 mb-0' disabled checked={true} label='Tiene placa de identificación' />
                            <div className='ml-2'>
                                <Map
                                    label='Zona de la desaparición'
                                    draggable={false}
                                    initialPosition={{ latitude: mascotaPerdida.LatLng.latitude, longitude: mascotaPerdida.LatLng.longitude }} />
                            </div>
                        </div>
                    </div>
                </div>
                <Modal size='sm' centered show={contactDialogOpen} onHide={() => setContactDialogOpen(false)}>
                    <Modal.Body>
                        <H4Styled>Contacto</H4Styled>
                        <List>
                            {Object.keys(contactObject).map((contactKey) => {
                                switch (contactObject[contactKey].type) {
                                    case 'whatsapp':
                                        return (
                                            <ListItem>
                                                <ButtonText className='w-100' value={<><i className='fab fa-whatsapp fa-lg mr-3' style={{ color: '#25D366' }}></i>{`  ${contactObject[contactKey].content}`}</>} />
                                            </ListItem>
                                        );
                                    case 'mobile':
                                        return (
                                            <ListItem>
                                                <ButtonText className='w-100' value={<><i className='fab fa-mobile fa-lg mr-3'></i>{`  ${contactObject[contactKey].content}`}</>} />
                                            </ListItem>
                                        );
                                    case 'phone':
                                        return (
                                            <ListItem>
                                                <ButtonText className='w-100' value={<><i className='fab fa-phone fa-lg mr-3'></i>{`  ${contactObject[contactKey].content}`}</>} />
                                            </ListItem>
                                        );
                                    case 'envelope':
                                        return (
                                            <ListItem>
                                                <ButtonText className='w-100' value={<><i className='fas fa-envelope fa-lg mr-3'></i>{`  ${contactObject[contactKey].content}`}</>} />
                                            </ListItem>
                                        );
                                    default:
                                        break;
                                }
                            })}
                        </List>
                    </Modal.Body>
                </Modal>
            </>
        );
    } else {
        return (
            <>
                <Navigation activeIndex={1} />
                <div className='d-flex justify-content-center container'>
                    <H6Styled style={{ color: '#828282' }}>
                        Cargando
                    </H6Styled>
                </div>
            </>
        )
    }
}

MascotaPerdida.getInitialProps = async ({ store, isServer, pathname, query }) => {
    await store.dispatch(loadPerdidaById(query.id));
    return {};
}

function mapStateToProps(state) {
    return {
        mascotaPerdida: state.perdidasReducer.perdidaSelected
    }
}

export default connect(mapStateToProps)(MascotaPerdida);
