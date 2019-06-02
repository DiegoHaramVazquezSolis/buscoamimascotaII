import { useReducer } from 'react';
import H4Styled from '../components/styled/H4Styled';
import Subtitle1 from '../components/styled/Subtitle1';
import InputField from '../components/primitives/FormControls/InputField';
import ButtonRaised from '../components/primitives/Buttons/ButtonRaised';
import { primaryColor, secondaryColor } from '../components/styled/Constants';
import { signInWithEmailAndPassword } from '../firebase/auth';

const LogInView = () => {
    let formState = {
        email: '',
        password: ''
    };

    let alertState = {
        userNotFoundAlert: false,
        wrongPasswordAlert: false
    };

    let [{ email, password }, setFormState] = useReducer(formReducer, formState);

    let [{ userNotFoundAlert, wrongPasswordAlert, accountWithDifferenteCredential }, setShowAlert] = useReducer(alertReducer, alertState);

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
        signInWithEmailAndPassword(email, password)
        .then(() => {
        }, (error) => {
            switch(error.code) {
                case 'auth/user-not-found':
                    setShowAlert(alertState);
                    setShowAlert({ userNotFoundAlert: true });
                    break;
                case 'auth/wrong-password':
                    setShowAlert(alertState);
                    setShowAlert({ wrongPasswordAlert: true });
                    break;
                case 'auth/account-exists-with-different-credential':
                    setShowAlert(alertState);
                    setShowAlert({ accountWithDifferenteCredential: true });
                    break;
            }
        })
    }

    return (
        <div className='container'>
            <H4Styled style={{ marginTop: '1rem' }}>
                Bienvenido de nuevo
            </H4Styled>
            <form className='row' onSubmit={onSubmit}>
                <div className='col-12'>
                    <Subtitle1 style={{ color: '#828282' }}>
                        Inicia sesión con tus datos para continuar
                    </Subtitle1>
                </div>
                <div className='col-12'>
                    <InputField
                        label='Email'
                        type='email'
                        placeholder='Direccion de correo electronico'
                        name='email'
                        value={email}
                        onChange={onChange} />
                </div>
                <div className='col-12 mt-3'>
                    <InputField
                        label='Contraseña'
                        type='password'
                        placeholder='Contraseña'
                        name='password'
                        value={password}
                        onChange={onChange} />
                    <small className='form-text' style={{ color: primaryColor, cursor: 'pointer' }}>Olvide mi contraseña</small>
                </div>
                <div className='col-12 mt-4 d-flex justify-content-end mb-3'>
                    <ButtonRaised value='Registrarme!' type='submit' />
                </div>
            </form>
            {userNotFoundAlert &&
                <div className={`fade secondaryColor alert ${userNotFoundAlert ? 'show' : ''}`}>
                    No existe un usuario registrado con este correo
                </div>
            }
            {wrongPasswordAlert &&
                <div className={`fade secondaryColor alert ${wrongPasswordAlert ? 'show' : ''}`}>
                    Contraseña incorrecta
                </div>
            }
            {accountWithDifferenteCredential &&
                <div className={`fade secondaryColor alert ${accountWithDifferenteCredential ? 'show' : ''}`}>
                    Esta cuenta ha sido registrada por otro medio (Facebook o google)
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

export default LogInView;