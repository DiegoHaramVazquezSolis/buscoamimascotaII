import H4Styled from "../components/styled/H4Styled";
import Subtitle1 from "../components/styled/Subtitle1";
import InputField from "../components/primitives/FormControls/InputField";
import ButtonRaised from "../components/primitives/Buttons/ButtonRaised";
import { primaryColor } from "../components/styled/Constants";

const LogInView = () => {
    return (
        <div className='container'>
            <H4Styled style={{ marginTop: '1rem' }}>
                Bienvenido de nuevo
            </H4Styled>
            <form className='row' onSubmit={() => alert('submit')}>
                <div className='col-12'>
                    <Subtitle1 style={{ color: '#828282' }}>
                        Inicia sesión con tus datos para continuar
                    </Subtitle1>
                </div>
                <div className='col-12'>
                    <InputField label='Email' type='email' placeholder='Direccion de correo electronico' />
                </div>
                <div className='col-12 mt-3'>
                    <InputField label='Contraseña' type='password' placeholder='Contraseña' />
                    <small className='form-text' style={{ color: primaryColor, cursor: 'pointer' }}>Olvide mi contraseña</small>
                </div>
                <div className='col-12 mt-4 d-flex justify-content-end mb-3'>
                    <ButtonRaised value='Registrarme!' type='submit' />
                </div>
            </form>
        </div>
    );
}

export default LogInView;