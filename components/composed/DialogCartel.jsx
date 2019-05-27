import React from 'react';
import Dialog from '../primitives/Dialog';
import Subtitle1 from '../styled/Subtitle1';
import Body1 from '../styled/Body1';
import ButtonRaised from '../primitives/Buttons/ButtonRaised';
import CardHeader from '../primitives/Card/CardHeader';
import ButtonText from '../primitives/Buttons/ButtonText';
import H4Styled from '../styled/H4Styled';
import Map from '../primitives/Map/Map';
import { primaryColor } from '../styled/Constants';
import CheckBoxField from '../primitives/FormControls/CheckBoxField';

const DialogCartel = () => (
    <>
        <Dialog open>
            <div className='container'>
                <div className='row'>
                    <div className='col-sm-12 col-md-4 mb-4'>
                        <div
                            className='mb-3 rounded'
                            style={{ 
                                background: 'url(https://images.unsplash.com/photo-1490042706304-06c664f6fd9a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80)',
                                backgroundColor: '#C4C4C4',
                                width: '100%',
                                height: '190px',
                                backgroundSize: 'cover'
                            }}></div>
                        <Subtitle1 className='mb-1 mt-1 text-center'>
                            Especie: Perro <i style={{ color: primaryColor }} className='fas fa-dog fa-2x'></i>
                        </Subtitle1>
                        <Subtitle1 className='mb-1 text-center'>
                            Sexo: Macho
                        </Subtitle1>
                        <Subtitle1 className=' mb-2 text-center'> Status: Desaparecido</Subtitle1>
                        <Body1 className='mb-2 text-center' style={{ fontWeight: '600' }}>Visto por ultima vez el día: 26/05/2019</Body1>
                        <Subtitle1 className='text-center' style={{ color: '#828282' }}>Guadalajara, Jalisco, Mexico</Subtitle1>
                        <div className='d-flex justify-content-center'>
                            <ButtonRaised value='Contactar' />
                        </div>
                        <div className='card mt-3'>
                            <CardHeader header='Compartir' />
                            <div className='mb-3'>
                                <ButtonText className='pt-0 pb-0 ml-5 mr-2' value={<i className='fab fa-whatsapp fa-2x m-2'></i>} />
                                <ButtonText className='pt-0 pb-0 ml-2 mr-2' value={<i className='fab fa-facebook-f fa-2x m-2'></i>} />
                                <ButtonText className='pt-0 pb-0 ml-2'value={<i className='fab fa-facebook-messenger fa-2x m-2'></i>} />
                            </div>
                        </div>
                    </div>
                    <div className='col-sm-12 col-md-8'>
                        <H4Styled>Kenji</H4Styled>
                        <Subtitle1 className='ml-4' style={{ color: '#4F4F4F' }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin congue leo quis feugiat mattis. Aliquam vestibulum enim magna, vel ultricies lectus consectetur sit amet. Suspendisse faucibus metus molestie mi ullamcorper pretium. Vestibulum quis bibendum ipsum. Aenean eleifend sem vel eros blandit, a malesuada erat molestie. Maecenas ac cursus leo, a volutpat odio. Donec a dui sed justo placerat porta a a diam. Mauris sollicitudin dapibus lorem, ac iaculis turpis tempor quis. Donec lacinia libero neque, gravida aliquam quam rutrum ultricies. Fusce viverra pharetra iaculis. Ut leo velit, euismod ac dui a, sodales luctus nulla. Phasellus auctor, elit vel condimentum dignissim, lacus nulla rutrum quam, quis faucibus purus urna sed erat. Praesent aliquam sollicitudin mauris, eu mollis tellus feugiat nec.
                        </Subtitle1>
                        <CheckBoxField className='mt-2' disabled checked label='Tiene placa de identificación' />
                        <div className='row'>
                            <div className='col-12 mr-2'>
                                <Map draggable={false} initialPosition={{ latitude: 20.721870, longitude: -103.293555 }} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Dialog>
        <style jsx>{`
            .card {
                box-shadow: 0 2px 1px -1px rgba(0, 0, 0, .2), 0 1px 1px 0 rgba(0, 0, 0, .14), 0 1px 3px 0 rgba(0, 0, 0, .12);
            }
        `}</style>
    </>
);

export default DialogCartel;
