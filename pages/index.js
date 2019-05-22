import Head from 'next/head';
import Navigation from '../components/composed/Navigation';

const Index = () => {
    return (
        <>
            <Head>
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous" />
                <link href="https://fonts.googleapis.com/css?family=Montserrat:300,400,500|Open+Sans:300,400" rel="stylesheet" />
                <link href="https://use.fontawesome.com/releases/v5.8.2/css/all.css" rel="stylesheet" integrity="sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay" crossOrigin="anonymous" />
            </Head>
            <br />
            <header>
                <h3 className='text-center mb-4'>Busco a mi mascota</h3>
            </header>
            <style jsx>{`
                h3 {
                    font-family: 'Montserrat', sans-serif;
                    font-style: normal;
                    font-weight: normal;
                    font-size: 48px;
                }
            `}</style>
            <Navigation activeIndex={1} />
        </>
    );
}

export default Index;
