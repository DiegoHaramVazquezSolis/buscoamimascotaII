import Head from 'next/head';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Navigation from './../components/composed/Navigation';
import CardCartel from './../components/composed/CardCartel';
import DialogCartel from './../components/composed/DialogCartel';
import H4Styled from './../components/styled/H4Styled';
import List from './../components/primitives/List/List';
import ListItem from './../components/primitives/List/ListItem';
import ButtonText from './../components/primitives/Buttons/ButtonText';
import { connect } from 'react-redux';
import { loadPerdidas } from '../redux/actions/perdidasActions';
import { makeGeolocationMapBoxQuery, getUserLocationBasedOnTheirIP } from '../algorithms';
import InputField from '../components/primitives/FormControls/InputField';

const MascotasPerdidas = ({ perdidas }) => {
    const shapeSelectedMascota = {
        name: '',
        specie:'',
        sex: '',
        id: '',
        image: 'https://images.unsplash.com/photo-1534985111090-85c477f9d813?ixlib=rb-1.2.1&auto=format&fit=crop&w=375&q=80',
        place: '',
        description: '',
        haveId: '',
        contact: [],
        date: ''
    }
    const [ openCartel, setOpenCartel ] = useState(false);
    const [ openContact, setOpenContact ] = useState(false);
    const [ selectedMascota, setSelectedMascota ] = useState(shapeSelectedMascota);
    const [ query, setQuery ] = useState('');
    const [ placesList, setPlacesList ] = useState([]);
    const localContact = {};
    function getPosiblePlaces(query) {
        makeGeolocationMapBoxQuery(query)
        .then((response) => {
            setPlacesList(response.data.features);
        });
    }
    Object.assign(localContact, selectedMascota.contact);
    getUserLocationBasedOnTheirIP().then((response) => {
        setQuery(`${response.data.city}, ${response.data.region_name}, ${response.data.country_name}`);
    });
    return (
        <>
            <Head>
                <title>Mascotas Perdidas</title>
            </Head>
            <Navigation activeIndex={1} />
            <div className='container'>
                <div className='row'>
                    <div className='col-12'>
                        <InputField
                            label='Ciudad'
                            list='places'
                            value={query}
                            onChange={(e) => {
                                setQuery(e.target.value);
                                getPosiblePlaces(e.target.value)
                                }
                            } />
                        <datalist id='places'>
                            {placesList.map((place) => (
                                <option value={place.place_name} />
                            ))}
                        </datalist>
                    </div>
                    {perdidas && Object.keys(perdidas).map((mascotaPerdidaKey) => (
                        <CardCartel
                            onVerMasClick={() => {setSelectedMascota({ ...perdidas[mascotaPerdidaKey], id: mascotaPerdidaKey }); setOpenCartel(true);}}
                            onContactarClick={() => {setSelectedMascota(perdidas[mascotaPerdidaKey]); setOpenContact(true)}}
                            image={perdidas[mascotaPerdidaKey].image}
                            name={perdidas[mascotaPerdidaKey].name}
                            date={perdidas[mascotaPerdidaKey].date}
                            description={perdidas[mascotaPerdidaKey].description} />
                    ))}
                </div>
            </div>
            <DialogCartel
                name={selectedMascota.name}
                specie={selectedMascota.specie}
                sex={selectedMascota.sex}
                id={selectedMascota.id}
                image={selectedMascota.image}
                place={selectedMascota.place}
                description={selectedMascota.description}
                haveId={selectedMascota.haveId}
                closeDialog={() => {setOpenCartel(false); history.pushState(null, '', `/mascotasperdidas`);}}
                open={openCartel}
                contact={selectedMascota.contact}
                date={selectedMascota.date} />
            <Modal size='sm' centered show={openContact} onHide={() => setOpenContact(false)}>
                <Modal.Body>
                    <H4Styled>Contacto</H4Styled>
                    <List>
                        {Object.keys(localContact).map((contactKey) => {
                            switch (localContact[contactKey].type) {
                                case 'whatsapp':
                                    return (
                                        <ListItem>
                                            <ButtonText className='w-100' value={<><i className='fab fa-whatsapp fa-lg mr-3' style={{ color: '#25D366' }}></i>{`  ${localContact[contactKey].content}`}</>} />
                                        </ListItem>
                                    );
                                case 'mobile':
                                    return (
                                        <ListItem>
                                            <ButtonText className='w-100' value={<><i className='fab fa-mobile fa-lg mr-3'></i>{`  ${localContact[contactKey].content}`}</>} />
                                        </ListItem>
                                    );
                                case 'phone':
                                    return (
                                        <ListItem>
                                            <ButtonText className='w-100' value={<><i className='fab fa-phone fa-lg mr-3'></i>{`  ${localContact[contactKey].content}`}</>} />
                                        </ListItem>
                                    );
                                case 'envelope':
                                    return (
                                        <ListItem>
                                            <ButtonText className='w-100' value={<><i className='fas fa-envelope fa-lg mr-3'></i>{`  ${localContact[contactKey].content}`}</>} />
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
}

MascotasPerdidas.getInitialProps = async ({ store, isServer, pathname, query }) => {
    await store.dispatch(loadPerdidas());
    return {};
}

function mapStateToProps(state) {
    return {
        perdidas: state.perdidasReducer.perdidas
    }
}

export default connect(mapStateToProps)(MascotasPerdidas);
