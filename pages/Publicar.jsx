import Head from 'next/head';
import { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import Navigation from '../components/composed/Navigation';
import H4Styled from '../components/styled/H4Styled';
import Subtitle1 from '../components/styled/Subtitle1';
import InputField from '../components/primitives/FormControls/InputField';
import ButtonRaised from '../components/primitives/Buttons/ButtonRaised';
import TextAreaField from '../components/primitives/FormControls/TextAreaField';
import SelectField from '../components/primitives/FormControls/SelectField';
import DropZoneWithPreview from '../components/primitives/DropZoneWithPreview';
import ButtonOutlined from '../components/primitives/Buttons/ButtonOutlined';
import CheckBoxField from '../components/primitives/FormControls/CheckBoxField';
import RadioButtonField from '../components/primitives/FormControls/RadioButtonField';
import Caption from '../components/styled/Caption';
import List from '../components/primitives/List/List';
import ListItem from '../components/primitives/List/ListItem';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';

const SubtitlePublicar = ({ children }) => (
    <>
        <H4Styled className='subtitle'>
            {children}
        </H4Styled>
        <style jsx>{`
            .subtitle {
                margin-top: 1rem;
                margin-bottom: .75rem;
            }
        `}</style>
    </>
)
  
const Publicar = () => {
    const [files, setFiles] = useState([]);
    const [contacto, setContacto] = useState({ type: 'whatsapp'});

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
                <form className='row' onSubmit={() => alert('submit')}>
                    <Col xl={12}>
                        <Subtitle1 style={{ color: '#828282' }}>
                        Para publicar a tu mascota desaparecida llena el siguiente formulario
                        </Subtitle1>
                    </Col>
                    <Col sm={12} md={4} className='mt-3'>
                        <InputField label='Nombre' placeholder='Nombre de tu mascota' />
                    </Col>
                    <Col sm={12} md={4} className='mt-3'>
                        <SelectField name='especie' label='Especie'>
                            <option value='perro'>Perro</option>
                            <option value='gato'>Gato</option>
                            <option value='ave'>Ave</option>
                            <option value='otro'>Otro</option>
                        </SelectField>
                    </Col>
                    <Col sm={12} md={4} className='mt-3'>
                        <Caption>Genero</Caption>
                        <br/>
                        <div className='form-check-inline mt-3'>
                            <RadioButtonField
                                name='genero'
                                label='Macho'
                                checked />
                            <RadioButtonField
                                name='genero'
                                label='Hembra' />
                        </div>
                    </Col>
                    <Col sm={12} md={6} className='mt-3'>
                        <TextAreaField
                            name='description'
                            label='Descripción'
                            rows={6}
                            placeholder='Descripción de tu mascota' />
                    </Col>
                    <Col sm={12} md={6} className='mt-3'>
                        <section className='container'>
                            <DropZoneWithPreview title='Imagen de tu mascota'
                                files={files}
                                getInputProps={getInputProps}
                                getRootProps={getRootProps}
                                removeImages={removeImages} />
                        </section>
                    </Col>
                    <Col xl={12}>
                        <SubtitlePublicar>
                            Información sobre la desaparición
                        </SubtitlePublicar>
                    </Col>
                    <Col xl={6} className='mt-3'>
                        <InputField
                            name='cp'
                            label='Codigo Postal'
                            placeholder='Codigo postal' />
                            <ButtonOutlined className='mt-2 pt-0 pb-0' value='Validar CP' />
                    </Col>
                    <Col xl={6} className='mt-3'>
                        <SelectField
                            name='colonia'
                            label='Colonia'
                            disabled>
                                <option value='443900'>Huentitan el alto</option>
                        </SelectField>
                    </Col>
                    <Col xl={6} className='mt-3'>
                        <InputField
                            label='Fecha de desaparición'
                            placeholder='Fecha de desaparición'
                            name='lastSeen'
                            type='date' />
                    </Col>
                    <Col xl={6} className='mt-3'>
                        <InputField
                            label='Hora de desaparición'
                            placeholder='Hora de desaparición'
                            name='lastSeen' />
                    </Col>
                    <Col xl={4} className='mt-3'>
                        <CheckBoxField
                            name='haveId'
                            label='Tenia placa de identificación' />
                    </Col>
                    <Col xl={12}>
                        <SubtitlePublicar>
                            Información especifica
                        </SubtitlePublicar>
                    </Col>
                    <Col sm={12} md={6} className='mb-3'>
                        <div className='card' style={{ boxShadow: '0 2px 1px -1px rgba(0, 0, 0, .2), 0 1px 1px 0 rgba(0, 0, 0, .14), 0 1px 3px 0 rgba(0, 0, 0, .12)' }}>
                            <div className='card-body'>
                                <Subtitle1>Señas particulares</Subtitle1>
                                <List>
                                    <ListItem>
                                        <InputField placeholder='Tiene una mancha negra en el ojo' />
                                    </ListItem>
                                    <ListItem>
                                        <ButtonOutlined className='mt-2 pt-0 pb-0' value='Agregar otra' />
                                    </ListItem>
                                </List>
                            </div>
                        </div>
                    </Col>
                    <Col sm={12} md={6} className='mb-3'>
                        <div className='card' style={{ boxShadow: '0 2px 1px -1px rgba(0, 0, 0, .2), 0 1px 1px 0 rgba(0, 0, 0, .14), 0 1px 3px 0 rgba(0, 0, 0, .12)' }}>
                            <div className='card-body'>
                                <Subtitle1>Cuidados especiales</Subtitle1>
                                <List>
                                    <ListItem>
                                        <InputField placeholder='Requiere X medicamento' />
                                    </ListItem>
                                    <ListItem>
                                        <ButtonOutlined className='mt-2 pt-0 pb-0' value='Agregar otro' />
                                    </ListItem>
                                </List>
                            </div>
                        </div>
                    </Col>
                    <Col>
                    <H4Styled style={{ marginBottom: '.75rem' }}>
                        Información de contacto
                    </H4Styled>
                    <Row>
                        <Col xl={10}>
                            <div className='card' style={{ boxShadow: '0 2px 1px -1px rgba(0, 0, 0, .2), 0 1px 1px 0 rgba(0, 0, 0, .14), 0 1px 3px 0 rgba(0, 0, 0, .12)' }}>
                                <div className='card-body'>
                                    <List>
                                        <ListItem>
                                            <Row>
                                                <Col sm='12'>
                                                    <Subtitle1>Selecciona el medio de contacto</Subtitle1>
                                                </Col>
                                                <Col className='d-flex justify-content-center mb-2 mt-1' sm={12} md={5}>
                                                    <ToggleButtonGroup type="radio" name="options" value={contacto.type}>
                                                        <ToggleButton className='btn-sm border-0 mr-4 mt-3' value='whatsapp' style={{ backgroundColor: contacto.type === 'whatsapp' ? '#25d366' :  'transparent', cursor: 'pointer' }}>
                                                            <i style={{ color:  contacto.type === 'whatsapp' ? '#FFF' :  '#25D366' }} className='fab m-2 fa-lg fa-whatsapp'></i>
                                                        </ToggleButton>
                                                        <ToggleButton className='btn-sm border-0 mr-4 mt-3' value='mobile' style={{ backgroundColor: contacto.type === 'mobile' ? '#d0d0d0' :  'transparent', cursor: 'pointer' }}>
                                                            <i style={{ color: 'black' }} className='fas m-2 fa-lg fa-mobile'></i>
                                                        </ToggleButton>
                                                        <ToggleButton className='btn-sm border-0 mr-4 mt-3' value='phone' style={{ backgroundColor: contacto.type === 'phone' ? '#d0d0d0' :  'transparent', cursor: 'pointer' }}>
                                                            <i style={{ color: '#32C8f4' }} className='fas m-2 fa-lg fa-phone'></i>
                                                        </ToggleButton>
                                                        <ToggleButton className='btn-sm border-0 mr-4 mt-3' value='envelope' style={{ backgroundColor: contacto.type === 'envelope' ? '#d0d0d0' :  'transparent', cursor: 'pointer' }}>
                                                            <i style={{ color: 'black' }} className='fas m-2 fa-lg fa-envelope'></i>
                                                        </ToggleButton>
                                                    </ToggleButtonGroup>
                                                </Col>
                                                <Col sm={12} md={7}>
                                                    {contacto.type && contacto.type === 'envelope' ?
                                                    <InputField disabled={contacto.lock} type='email' value={contacto.content} placeholder='Direccion de correo electronico' />
                                                    :
                                                    <InputField disabled={contacto.lock} type='phone' value={contacto.content} placeholder='Numero de telefono' />
                                                    }
                                                </Col>
                                            </Row>
                                        </ListItem>
                                        <ListItem>
                                            <ButtonOutlined className='mt-2 pt-0 pb-0' value='Agregar otro' />
                                        </ListItem>
                                    </List>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    </Col>
                    <Col xl={12} className='mt-4 d-flex justify-content-end mb-3'>
                        <ButtonRaised value='Registrarme!' type='submit' />
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
