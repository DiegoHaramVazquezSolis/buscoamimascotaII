import Head from 'next/head';
import { useState, useReducer } from 'react';
import { useDropzone } from 'react-dropzone';
import Navigation from '../components/composed/Navigation';
import H4Styled from '../components/styled/H4Styled';
import Body1 from '../components/styled/Body1';
import InputField from '../components/primitives/FormControls/InputField';
import ButtonRaised from '../components/primitives/Buttons/ButtonRaised';
import TextAreaField from '../components/primitives/FormControls/TextAreaField';
import SelectField from '../components/primitives/FormControls/SelectField';
import DropZoneWithPreview from '../components/primitives/DropZoneWithPreview';
import ButtonOutlined from '../components/primitives/Buttons/ButtonOutlined';
import CheckBoxField from '../components/primitives/FormControls/CheckBoxField';
import RadioButtonField from '../components/primitives/FormControls/RadioButtonField';
import List from '../components/primitives/List/List';
import ListItem from '../components/primitives/List/ListItem';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Body2 from '../components/styled/Body2';
import ButtonText from '../components/primitives/Buttons/ButtonText';
import { primaryColorRGB } from '../components/styled/Constants';
import Map from '../components/primitives/Map/Map';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import RequireAuth from '../components/primitives/RequireAuth';
import { db } from '../firebase/firebase';
import { publishMascotaPerdida, savePlaceOfPerdidaOnDatabase } from '../firebase/database';
import { uploadFileByReference, getDownloadURLByReference } from '../firebase/storage';

const SubtitlePublicar = ({ children }) => (
    <>
        <H4Styled className='subtitle'>
            {children}
        </H4Styled>
        <style jsx>{`
            .subtitle {
                margin-top: 1rem;
            }
        `}</style>
    </>
)
  
const Publicar = () => {
    const state = {
        name: '',
        specie: '',
        sex: 'Hembra',
        description: '',
        location: {cp: '44200', place: 'Guadalajara, Jalisco, Mexico', LatLng: { latitude: 0, longitude: 0 }},
        lastSeen: '',
        haveId: false,
        contact: [
            {
                type: '',
                content: '',
                lock: true
            }
        ]
    };

    const [files, setFiles] = useState([]);
    const [{name, specie, sex, description, location, lastSeen, haveId, contact}, setState] = useReducer(reducer, state)

    function reducer(prevState, state) {
        return {...prevState, ...state};
    }

    const {getRootProps, getInputProps} = useDropzone({
        multiple: false,
        accept: 'image/*',
        onDrop: acceptedFiles => {
        setFiles(acceptedFiles.map(file => Object.assign(file, {
            preview: URL.createObjectURL(file)
        })));
        }
    });

    function removeImages() {
        const deleteImage = confirm('Deseas quitar las imagenes?');
        if (deleteImage) {
            setFiles([]);
        }
    }

    function onChange(e) {
        setState({ [e.target.name]: e.target.value });
    }

    function onSubmit(e){
        e.preventDefault();
        var contactObject = {};
        contact.map((contactNode, index) => {
            contactObject[index] = contactNode;
            contactObject[index].lock = null;
        });
        if (location.LatLng.latitude !== 0 && location.LatLng.longitude !== 0) {
            if (description !== '') {
                if (files.length > 0) {
                    const mascotaInfo = {
                        name: name,
                        specie: specie,
                        sex: sex,
                        description: description,
                        cp: location.cp,
                        place: location.place,
                        LatLng: location.LatLng,
                        lastSeen: lastSeen,
                        haveId: haveId,
                        contact: contactObject
                    };
                    publishMascotaPerdida(mascotaInfo)
                    .then((reference) => {
                        savePlaceOfPerdidaOnDatabase(mascotaInfo.place);
                        const storageRef = `/Perdidas/${name}-${reference.key}`;
                        uploadFileByReference(storageRef, files[0])
                        .on('state_changed', (snapshot) => {
                            // Mientras el archivo se sube
                             }, (error) => {
                                alert('Hubo un error mientras se publicaba la imagen');
                                console.error(error);
                            }, () => {
                                getDownloadURLByReference(storageRef).then((url) => {
                                    db.child('Perdidas').child(reference.key).update({image: url});
                            });
                        });
                    })
                    .catch((error) => {
                        console.error(error);
                        alert('Hubo un error al guardar la información');
                    });
                } else {
                    alert('Selecciona una imagen de tu mascota');
                }
            } else {
                alert('Ingresa la descripción de tu mascota');
            }
        } else {
            alert('Selecciona la ubicación de desaparición en el mapa');
        }
    }

    return (
        <>
            <Head>
                <title>Publicar mascota perdida</title>
            </Head>
            <Navigation activeIndex={4} />
            <RequireAuth>
                <div className='container'>
                    <SubtitlePublicar>
                        Publica a tu mascota
                    </SubtitlePublicar>
                    <form className='row' onSubmit={onSubmit}>
                        <Col xl={12}>
                            <Body1 style={{ color: '#828282' }}>
                                Para publicar a tu mascota desaparecida llena el siguiente formulario
                            </Body1>
                        </Col>
                        <Col xl={12} className='mt-3'>
                            <SubtitlePublicar>
                                Información sobre tu mascota
                            </SubtitlePublicar>
                        </Col>
                        <Col sm={12} md={4} className='mt-2'>
                            <InputField
                                label='Nombre'
                                placeholder='Nombre de tu mascota'
                                name='name'
                                onChange={onChange}
                                value={name} />
                        </Col>
                        <Col sm={12} md={4} className='mt-2'>
                            <SelectField
                                label='Especie'
                                name='specie'
                                onChange={onChange}
                                value={specie} >
                                <option value=''>Selecciona una opción</option>
                                <option value='perro'>Perro</option>
                                <option value='gato'>Gato</option>
                                <option value='ave'>Ave</option>
                                <option value='otro'>Otro</option>
                            </SelectField>
                        </Col>
                        <Col sm={12} md={4} className='mt-2'>
                            <Body1>Sexo</Body1>
                            <div className='form-check-inline mt-1'>
                                <RadioButtonField
                                    name='sex'
                                    label='Hembra'
                                    value='Hembra'
                                    checked={sex === 'Hembra'}
                                    onChange={() => setState({ sex: 'Hembra' })} />
                                <RadioButtonField
                                    name='sex'
                                    label='Macho'
                                    value='Macho'
                                    checked={sex === 'Macho'}
                                    onChange={() => setState({ sex: 'Macho' })} />
                            </div>
                        </Col>
                        <Col sm={12} md={6} className='mt-2'>
                            <TextAreaField
                                label='Descripción'
                                rows={6}
                                placeholder='Descripción de tu mascota'
                                name='description'
                                onChange={onChange}
                                value={description} />
                        </Col>
                        <Col sm={12} md={6} className='mt-2'>
                            <DropZoneWithPreview title='Imagen de tu mascota'
                                files={files}
                                getInputProps={getInputProps}
                                getRootProps={getRootProps}
                                removeImages={removeImages} />
                        </Col>
                        <Col xl={12} className='mt-4'>
                            <SubtitlePublicar>
                                Información sobre la desaparición
                            </SubtitlePublicar>
                        </Col>
                        <Col xl={12} className='mt-2'>
                            <Map
                                label={
                                    <>
                                        Lugar de desaparición
                                        <OverlayTrigger
                                            key={'placement'}
                                            placement={'bottom'}
                                            overlay={
                                                <Tooltip id={`tooltip`}>
                                                    <Body2>
                                                        La ubicación sirve para notificar a los usuarios que esten 5km a la redonda.
                                                    </Body2>
                                                </Tooltip>
                                            }>
                                            <i className='far fa-question-circle fa-lg ml-1'></i>
                                        </OverlayTrigger>
                                        <br/>
                                        <Body2 style={{ color: '#828282' }}>
                                            Lugar: {location.place}
                                            <br/>
                                            Codigo Postal: {location.cp}
                                        </Body2>
                                    </>
                                }
                                instructions={
                                    <>
                                        Arrastra el marcador <i style={{ color: '#D00' }} className='fas fa-map-marker fa-lg'></i> para determinar la ubicación.
                                        <br/>
                                        Presiona <img src='/static/media/baseline-gps_fixed-24px.svg' /> para colocar el marcador en tu ubicación actual.
                                    </>
                                }
                                onPointSelected={(cp, place, LatLng) => setState({ location: {cp, place, LatLng} })}/>
                        </Col>
                        <Col xl={6} className='mt-2'>
                            <InputField
                                label='Fecha de desaparición'
                                placeholder='Fecha de desaparición'
                                type='date'
                                name='lastSeen'
                                onChange={onChange}
                                value={lastSeen} />
                        </Col>
                        <Col xl={6} className='mt-5 mb-3'>
                            <CheckBoxField
                                label='Tiene placa de identificación'
                                name='haveId'
                                onChange={() => setState({ haveId: !haveId })}
                                checked={haveId} />
                        </Col>
                        <Col xl={12}>
                            <SubtitlePublicar>
                                Información de contacto
                            </SubtitlePublicar>
                            <Row>
                                <Col xl={10}>
                                    <List>
                                        {contact.map((contactNode, index) => (
                                            <ListItem>
                                                <Row>
                                                    <Col sm={12}>
                                                        <Body1>Selecciona el medio de contacto</Body1>
                                                    </Col>
                                                    <Col className='d-flex justify-content-center mb-2 mt-2' sm={12} md={5}>
                                                        <ButtonText style={{ backgroundColor: contactNode.type==='whatsapp' && `rgba(${primaryColorRGB}, .3)` }}
                                                            className='pt-0 pb-0 mr-1 ml-1 mt-2'
                                                            value={<i style={{ color: '#25D366' }}className='fab m-2 fa-lg fa-whatsapp'></i>}
                                                            onClick={() => {var contactCopy = contact; contactCopy[index].type = 'whatsapp'; contactCopy[index].lock = false; setState({ contact: contactCopy });}} />
                                                        <ButtonText style={{ backgroundColor: contactNode.type==='mobile' && `rgba(${primaryColorRGB}, .3)` }}
                                                            className='pt-0 pb-0 mr-1 ml-1 mt-2'
                                                            value={<i style={{ color: 'black' }} className='fas m-2 fa-lg fa-mobile'></i>}
                                                            onClick={() => {var contactCopy = contact; contactCopy[index].type = 'mobile'; contactCopy[index].lock = false; setState({ contact: contactCopy });}} />
                                                        <ButtonText style={{ backgroundColor: contactNode.type==='phone' && `rgba(${primaryColorRGB}, .3)` }}
                                                            className='pt-0 pb-0 mr-1 ml-1 mt-2'
                                                            value={<i style={{ color: '#32C8f4' }} className='fas m-2 fa-lg fa-phone'></i>}
                                                            onClick={() => {var contactCopy = contact; contactCopy[index].type = 'phone'; contactCopy[index].lock = false; setState({ contact: contactCopy });}} />
                                                        <ButtonText style={{ backgroundColor: contactNode.type==='envelope' && `rgba(${primaryColorRGB}, .3)` }}
                                                            className='pt-0 pb-0 mr-1 ml-1 mt-2'
                                                            value={<i style={{ color: 'black' }} className='fas m-2 fa-lg fa-envelope'></i>}
                                                            onClick={() => {var contactCopy = contact; contactCopy[index].type = 'envelope'; contactCopy[index].lock = false; setState({ contact: contactCopy });}} />
                                                    </Col>
                                                    <Col sm={12} md={7}>
                                                        {contactNode.type === 'envelope' ?
                                                        <InputField disabled={contactNode.lock}
                                                            type='email'
                                                            value={contactNode.content}
                                                            placeholder='Direccion de correo electronico'
                                                            required={false}
                                                            onChange={(e) => {var contactCopy = contact; contactCopy[index].content = e.target.value; setState({ contact: contactCopy });}} />
                                                        :
                                                        <InputField disabled={contactNode.lock}
                                                            type='phone'
                                                            value={contactNode.content}
                                                            placeholder='Numero de telefono'
                                                            required={false}
                                                            onChange={(e) => {var contactCopy = contact; contactCopy[index].content = e.target.value; setState({ contact: contactCopy });}} />
                                                        }
                                                    </Col>
                                                </Row>
                                            </ListItem>
                                        ))}
                                        <ListItem>
                                            <ButtonOutlined className='mt-2 pt-0 pb-0' value='Agregar otro' onClick={() => { var contactCopy = contact; contactCopy.push({type: '', content: '', lock: true}); setState({ contact: contactCopy }); }} />
                                        </ListItem>
                                    </List>
                                </Col>
                            </Row>
                        </Col>
                        <Col xl={12} className='mt-4 d-flex justify-content-end mb-3'>
                            <ButtonRaised value='Publicar a mi mascota!' type='submit' />
                        </Col>
                    </form>
                </div>
                <style jsx>{`
                    .dropzone {
                        flex: 1;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        align-text: center;
                        padding: 20px;
                        border-width: 2px;
                        border-radius: 2px;
                        border-color: #eeeeee;
                        border-style: dashed;
                        background-color: #fafafa;
                        color: #bdbdbd;
                        outline: none;
                        transition: border .24s ease-in-out;
                    }
                `}</style>
            </RequireAuth>
        </>
    );
}

export default Publicar;
