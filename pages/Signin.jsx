import Head from 'next/head';
import Navigation from '../components/composed/Navigation';
import SignInView from '../views/SignInView';

const Signin = () => {
    return (
        <>
            <Head>
                <title>Registrarse</title>
            </Head>
            <Navigation activeIndex={4} />
            <SignInView />
        </>
    );
}

export default Signin;