import React, { useState, useEffect } from 'react';
import { auth } from '../../firebase/firebase';
import H6Styled from '../styled/H6Styled';
import ButtonRaised from './Buttons/ButtonRaised';
import SignInView from '../../views/SignInView';
import LogInView from '../../views/LogInView';

const RequireAuth = ({ children }) => {
    const [logged, setLogged] = useState(null);
    const [choice, setChoice] = useState(null);
    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if (user) {
                setLogged(true);
            } else {
                setLogged(false);
            }
        });
    }, []);
    return (
        <>
            {logged === null ?
                <div className='d-flex justify-content-center container'>
                    <H6Styled style={{ color: '#828282' }}>
                        Cargando
                    </H6Styled>
                </div>
            : logged ?
                children 
                :
                <div className='d-flex justify-content-center container'>
                    <div className='card'>
                        <div className='row mr-5 ml-5 mb-4 mt-3'>
                            <div className='col-12'>
                                <H6Styled style={{ color: '#828282' }}>
                                    Para continuar registrate o inicia sesion
                                </H6Styled>
                                <div className='d-flex justify-content-center mt-3'>
                                    {choice === null ?
                                    <>
                                        <ButtonRaised value='Registrarme' className='mr-4' onClick={() => setChoice(true)} />
                                        <ButtonRaised value='Iniciar sesión' onClick={() => setChoice(false)} />
                                    </>
                                    : choice ?
                                        <SignInView />
                                        :
                                        <LogInView />  
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    );
}

export default RequireAuth;
