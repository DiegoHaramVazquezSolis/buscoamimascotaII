import { useReducer } from 'react';
import H4Styled from '../components/styled/H4Styled';
import Subtitle1 from '../components/styled/Subtitle1';
import InputField from '../components/primitives/FormControls/InputField';
import ButtonOutlined from '../components/primitives/Buttons/ButtonOutlined';
import ButtonRaised from '../components/primitives/Buttons/ButtonRaised';
import { secondaryColor } from '../components/styled/Constants';
import { createUserWithEmailAndPassword, updateUserProfileData } from '../firebase/auth';
import { createUseRecord } from '../firebase/database';

const SignInView = () => {
    let formState = {
        name: '',        
        email: '',
        password: '',
        verify: ''
    };

    let alertState = {
        showShortPasswordAlert: false,
        showVerifyAlert: false,
        showEmailInUseAlert: false,
        showInvalidEmailAlert: false
    };

    let [{ name, email, password, verify }, setFormState] = useReducer(formReducer, formState);

    let [{ showShortPasswordAlert, showVerifyAlert, showEmailInUseAlert, showInvalidEmailAlert }, setShowAlert] = useReducer(alertReducer, alertState);

    function formReducer(prevState, state){
        return {...prevState, ...state};
    }

    function alertReducer(prevState, state) {
        return {...prevState, ...state};
    }

    function onChange(e) {
        setFormState({ [e.target.name]: e.target.value });
    }

    function onSubmit(e) {
        e.preventDefault();
        if (password === verify) {
            createUserWithEmailAndPassword(email.trim(), password)
            .then((user) => {
                setShowAlert(alertState);
                updateUserProfileData({ displayName: name }).then(() => {
                    createUseRecord(user.user);
                });
            }, (error) => {
                switch(error.code) {
                    case 'auth/email-already-in-use':
                        setShowAlert(alertState);
                        setShowAlert({ showEmailInUseAlert: true });
                        break;
                    case 'auth/invalid-email':
                        setShowAlert(alertState);
                        setShowAlert({ showInvalidEmailAlert: true });
                        break;
                    case 'auth/weak-password':
                        setShowAlert(alertState);
                        setShowAlert({ showShortPasswordAlert: true });
                        break;
                }
            });   
        } else {
            setShowAlert(alertState);
            setShowAlert({ showVerifyAlert: true })
        }
    }

    return (
        <div className='container'>
            <H4Styled style={{ marginTop: '1rem', marginBottom: '.75rem' }}>
                Bienvenido, registrate para continuar
            </H4Styled>
            <form className='row' onSubmit={onSubmit}>
                <div className='col-sm-12 col-md-7'>
                    <Subtitle1 style={{ color: '#828282' }}>
                    Esta información nos sirve para poder contactarte y trabajamos de forma activa por mantenerla siempre protegida.
                    </Subtitle1>
                </div>
                <div className='col-sm-12 col-md-6 mt-3'>
                    <InputField
                        label='Nombre'
                        placeholder='Nombre completo'
                        name='name'
                        value={name}
                        onChange={onChange} />
                </div>
                <div className='col-sm-12 col-md-6 mt-3'>
                    <InputField
                        label='Email'
                        type='email'
                        placeholder='Direccion de correo electronico'
                        name='email'
                        value={email}
                        onChange={onChange} />
                </div>
                <div className='col-sm-12 col-md-6 mt-3'>
                    <InputField
                        label='Contraseña'
                        type='password'
                        placeholder='Contraseña'
                        name='password'
                        value={password}
                        onChange={onChange} />
                </div>
                <div className='col-sm-12 col-md-6 mt-3'>
                    <InputField
                        label='Verificar contraseña'
                        type='password'
                        placeholder='Verificar'
                        name='verify'
                        value={verify}
                        onChange={onChange} />
                </div>
                <div className='col-12 mt-4 d-flex justify-content-end mb-3'>
                    <ButtonOutlined value='Borrar' type='reset' className='mr-2' onClick={() => setFormState(formState)} />
                    <ButtonRaised value='Registrarme!' type='submit' />
                </div>
            </form>
            {showShortPasswordAlert &&
                <div className={`fade secondaryColor alert ${showShortPasswordAlert ? 'show' : ''}`}>
                    La contraseña debe tener al menos seis caracteres de longitud
                </div>
            }
            {showEmailInUseAlert &&
                <div className={`fade secondaryColor alert ${showEmailInUseAlert ? 'show' : ''}`}>
                    Esta direccion de correo ya esta en uso
                </div>
            }
            {showInvalidEmailAlert &&
                <div className={`fade secondaryColor alert ${showInvalidEmailAlert ? 'show' : ''}`}>
                    La direccion de correo proporcionada no es valida
                </div>
            }
            {showVerifyAlert &&
                <div className={`fade secondaryColor alert ${showVerifyAlert ? 'show' : ''}`}>
                    Las contraseñas no coinciden
                </div>
            }
            <style jsx>{`
                .secondaryColor {
                    background-color: ${secondaryColor};
                    color: #FFF;
                }
            `}</style>
        </div>
    );
}

export default SignInView;