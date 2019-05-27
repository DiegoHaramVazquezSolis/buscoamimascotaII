import React from 'react';
import Head from 'next/head';
import Dialog from '../primitives/Dialog';
import Subtitle1 from '../styled/Subtitle1';
import Body1 from '../styled/Body1';
import ButtonRaised from '../primitives/Buttons/ButtonRaised';
import H4Styled from '../styled/H4Styled';
import Map from '../primitives/Map/Map';
import { primaryColor } from '../styled/Constants';
import CheckBoxField from '../primitives/FormControls/CheckBoxField';
import ButtonOutlined from '../primitives/Buttons/ButtonOutlined';

const DialogCartel = () => (
    <>
        <Head>
            <title>Kenji</title>
        </Head>
        <Dialog open>
            <div className='container mt-4'>
                <div className='row'>
                    <div className='col-sm-12 col-md-4'></div>
                    <div className='col-sm-12 col-md-8'>
                        <H4Styled>Kenji</H4Styled>
                    </div>
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
                        <Body1 className='mb-2 text-center'>Visto por ultima vez el día: 26/05/2019</Body1>
                        <Subtitle1 className='text-center' style={{ color: '#828282' }}>
                            Especie: Perro <i style={{ color: primaryColor }} className='fas fa-dog fa-2x'></i><br />
                            Sexo: Macho<br />
                            Guadalajara, Jalisco, Mexico
                        </Subtitle1>
                        <div className='d-flex justify-content-center'>
                            <ButtonOutlined value='Compartir' className='mr-2' />
                            <ButtonRaised value='Contactar' />
                        </div>
                    </div>
                    <div className='col-sm-12 col-md-8'>
                        <Subtitle1 style={{ color: '#4F4F4F' }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin congue leo quis feugiat mattis. Aliquam vestibulum enim magna, vel ultricies lectus consectetur sit amet. Suspendisse faucibus metus molestie mi ullamcorper pretium. Vestibulum quis bibendum ipsum. Aenean eleifend sem vel eros blandit, a malesuada erat molestie. Maecenas ac cursus leo, a volutpat odio. Donec a dui sed justo placerat porta a a diam. Mauris sollicitudin dapibus lorem, ac iaculis turpis tempor quis. Donec lacinia libero neque, gravida aliquam quam rutrum ultricies. Fusce viverra pharetra iaculis. Ut leo velit, euismod ac dui a, sodales luctus nulla..
                        </Subtitle1>
                        <CheckBoxField className='mt-2 mb-0' disabled checked label='Tiene placa de identificación' />
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
        `}</style>
    </>
);

export default DialogCartel;
