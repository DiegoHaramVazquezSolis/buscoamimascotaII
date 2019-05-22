import Head from 'next/head';
import Navigation from '../components/composed/Navigation';
import H4Styled from '../components/styled/H4Styled';
import Subtitle1 from '../components/styled/Subtitle1';
import InputField from '../components/primitives/FormControls/InputField';
import ButtonRaised from '../components/primitives/Buttons/ButtonRaised';
import ButtonOutlined from '../components/primitives/Buttons/ButtonOutlined';

const Signin = () => {
    return (
        <>
            <Head>
                <title>Registrarse</title>
            </Head>
            <Navigation activeIndex={4} />
            <div className='container'>
                <H4Styled style={{ marginTop: '1rem', marginBottom: '.75rem' }}>
                    Bienvenido, registrate para continuar
                </H4Styled>
                <form className='row' onSubmit={() => alert('submit')}>
                    <div className='col-sm-12 col-md-7'>
                        <Subtitle1 style={{ color: '#828282' }}>
                        Esta información nos sirve para poder contactarte y trabajamos de forma activa por mantenerla siempre protegida.
                        </Subtitle1>
                    </div>
                    <div className='col-sm-12 col-md-6 mt-3'>
                        <InputField label='Nombre' placeholder='Nombre completo' />
                    </div>
                    <div className='col-sm-12 col-md-6 mt-3'>
                        <InputField label='Email' type='email' placeholder='Direccion de correo electronico' />
                    </div>
                    <div className='col-sm-12 col-md-6 mt-3'>
                        <InputField label='Contraseña' type='password' placeholder='Contraseña' />
                    </div>
                    <div className='col-sm-12 col-md-6 mt-3'>
                        <InputField label='Verificar contraseña' type='email' placeholder='Verificar' />
                    </div>
                    <div className='col-12 mt-4 d-flex justify-content-end mb-3'>
                        <ButtonOutlined value='Borrar' type='reset' style={{ marginRight: '1rem' }} />
                        <ButtonRaised value='Registrarme!' type='submit' />
                    </div>
                </form>
            </div>
        </>
    );
}

export default Signin;