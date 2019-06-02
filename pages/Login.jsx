import Head from 'next/head';
import Navigation from '../components/composed/Navigation';
import LogInView from '../views/LogInView';

const Login = () => {
    return (
        <>
            <Head>
                <title>Iniciar sesión</title>
            </Head>
            <Navigation activeIndex={4} />
            <LogInView />
        </>
    );
}

export default Login;
