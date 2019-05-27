import Head from 'next/head';
import { useState } from 'react';
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
    const [files, setFiles] = useState([]);
    const [contacto, setContacto] = useState({ type: 'whatsapp'});
    const [location, setLocation] = useState({ cp: '44200', place: 'Guadalajara, Jalisco, Mexico'});

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
    return (
        <>
            <Head>
                <title>Publicar mascota perdida</title>
            </Head>
            <Navigation activeIndex={4} />
            <div className='container'>
                <SubtitlePublicar>
                    Publica a tu mascota
                </SubtitlePublicar>
                <form className='row' onSubmit={(e) => e.preventDefault()}>
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
                        <InputField label='Nombre' placeholder='Nombre de tu mascota' />
                    </Col>
                    <Col sm={12} md={4} className='mt-2'>
                        <SelectField name='especie' label='Especie'>
                            <option value='perro'>Perro</option>
                            <option value='gato'>Gato</option>
                            <option value='ave'>Ave</option>
                            <option value='otro'>Otro</option>
                        </SelectField>
                    </Col>
                    <Col sm={12} md={4} className='mt-2'>
                        <Body1>Genero</Body1>
                        <div className='form-check-inline mt-1'>
                            <RadioButtonField
                                name='genero'
                                label='Macho'
                                checked />
                            <RadioButtonField
                                name='genero'
                                label='Hembra' />
                        </div>
                    </Col>
                    <Col sm={12} md={6} className='mt-2'>
                        <TextAreaField
                            name='description'
                            label='Descripción'
                            rows={6}
                            placeholder='Descripción de tu mascota' />
                    </Col>
                    <Col sm={12} md={6} className='mt-2'>
                        <section className='container'>
                            <DropZoneWithPreview title='Imagen de tu mascota'
                                files={files}
                                getInputProps={getInputProps}
                                getRootProps={getRootProps}
                                removeImages={removeImages} />
                        </section>
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
                            onPointSelected={(cp, place) => setLocation({ cp, place })}/>
                    </Col>
                    <Col xl={6} className='mt-2'>
                        <InputField
                            label='Fecha de desaparición'
                            placeholder='Fecha de desaparición'
                            name='lastSeen'
                            type='date' />
                    </Col>
                    <Col xl={6} className='mt-5 mb-3'>
                        <CheckBoxField
                            name='haveId'
                            label='Tiene placa de identificación' />
                    </Col>
                    <Col xl={12}>
                        <SubtitlePublicar>
                            Información de contacto
                        </SubtitlePublicar>
                        <Row>
                            <Col xl={10}>
                                <List>
                                    <ListItem>
                                        <Row>
                                            <Col sm={12}>
                                                <Body1>Selecciona el medio de contacto</Body1>
                                            </Col>
                                            <Col className='d-flex justify-content-center mb-2 mt-2' sm={12} md={5}>
                                                <ButtonText style={{ backgroundColor: `rgba(${primaryColorRGB}, .3)` }} className='pt-0 pb-0 mr-1 ml-1 mt-2' value={<i style={{ color: '#25D366' }} className='fab m-2 fa-lg fa-whatsapp'></i>} />
                                                <ButtonText className='pt-0 pb-0 mr-1 ml-1 mt-2' value={<i style={{ color: 'black' }} className='fas m-2 fa-lg fa-mobile'></i>} />
                                                <ButtonText className='pt-0 pb-0 mr-1 ml-1 mt-2' value={<i style={{ color: '#32C8f4' }} className='fas m-2 fa-lg fa-phone'></i>} />
                                                <ButtonText className='pt-0 pb-0 mr-1 ml-1 mt-2' value={<i style={{ color: 'black' }} className='fas m-2 fa-lg fa-envelope'></i>} />
                                            </Col>
                                            <Col sm={12} md={7}>
                                                {contacto.type && contacto.type === 'envelope' ?
                                                <InputField disabled={contacto.lock} type='email' value={contacto.content} placeholder='Direccion de correo electronico' disabled />
                                                :
                                                <InputField disabled={contacto.lock} type='phone' value={contacto.content} placeholder='Numero de telefono' disabled />
                                                }
                                            </Col>
                                        </Row>
                                    </ListItem>
                                    <ListItem>
                                        <ButtonOutlined className='mt-2 pt-0 pb-0' value='Agregar otro' />
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
                .container {
                    display: flex;
                    flex-direction: column;
                }
            `}</style>
        </>
    );
}

export default Publicar;
