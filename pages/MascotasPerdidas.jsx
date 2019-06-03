import Head from 'next/head';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Navigation from './../components/composed/Navigation';
import CardCartel from './../components/composed/CardCartel';
import DialogCartel from './../components/composed/DialogCartel';
import H4Styled from './../components/styled/H4Styled';
import List from './../components/primitives/List/List';
import ListItem from './../components/primitives/List/ListItem';
import ButtonText from './../components/primitives/Buttons/ButtonText';

const MascotasPerdidas = () => {
    const [ openCartel, setOpenCartel ] = useState(false);
    const [ openContact, setOpenContact ] = useState(false);
    return (
        <>
            <Head>
                <title>Mascotas Perdidas</title>
            </Head>
            <Navigation activeIndex={1} />
            <div className='container'>
                <div className='row'>
                    <CardCartel
                        onVerMasClick={() => setOpenCartel(true)}
                        onContactarClick={() => setOpenContact(true)}
                        image='https://images.unsplash.com/photo-1490042706304-06c664f6fd9a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80'
                        name='Kenji'
                        date='25/05/2019'
                        description='Kenji es un perrito bonito y gordito, beagle de 5 años de edad' />
                    <CardCartel
                        onVerMasClick={() => setOpenCartel(true)}
                        onContactarClick={() => setOpenContact(true)}
                        image='https://images.unsplash.com/photo-1490042706304-06c664f6fd9a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80'
                        name='Kenji'
                        date='25/05/2019'
                        description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et pharetra erat. Etiam sem quam, fringilla eget elementum vel, imperdiet a est. Vestibulum eget blandit purus. Suspendisse potenti. Nunc nibh dolor, laoreet nec efficitur ut, vestibulum quis elit. Integer vitae finibus odio, sit amet pellentesque erat. Sed interdum quis nisi non posuere. Integer interdum ac lectus ac blandit. Fusce sed ultricies magna. Vivamus in mi nisl. Vivamus ac eleifend lorem. Duis dui tortor, convallis ut erat sed, dignissim hendrerit tellus. Suspendisse leo lorem, imperdiet nec erat a, facilisis congue odio.' />
                    <CardCartel
                        onVerMasClick={() => setOpenCartel(true)}
                        onContactarClick={() => setOpenContact(true)}
                        image='https://images.unsplash.com/photo-1490042706304-06c664f6fd9a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80'
                        name='Kenji'
                        date='25/05/2019'
                        description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et pharetra erat. Etiam sem quam, fringilla eget elementum vel, imperdiet a est. Vestibulum eget blandit purus. Suspendisse potenti. Nunc nibh dolor, laoreet nec efficitur ut, vestibulum quis elit. Integer vitae finibus odio, sit amet pellentesque erat. Sed interdum quis nisi non posuere. Integer interdum ac lectus ac blandit. Fusce sed ultricies magna. Vivamus in mi nisl. Vivamus ac eleifend lorem. Duis dui tortor, convallis ut erat sed, dignissim hendrerit tellus. Suspendisse leo lorem, imperdiet nec erat a, facilisis congue odio.' />
                    <CardCartel
                        onVerMasClick={() => setOpenCartel(true)}
                        onContactarClick={() => setOpenContact(true)}
                        image='https://images.unsplash.com/photo-1490042706304-06c664f6fd9a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80'
                        name='Kenji'
                        date='25/05/2019'
                        description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et pharetra erat. Etiam sem quam, fringilla eget elementum vel, imperdiet a est. Vestibulum eget blandit purus. Suspendisse potenti. Nunc nibh dolor, laoreet nec efficitur ut, vestibulum quis elit. Integer vitae finibus odio, sit amet pellentesque erat. Sed interdum quis nisi non posuere. Integer interdum ac lectus ac blandit. Fusce sed ultricies magna. Vivamus in mi nisl. Vivamus ac eleifend lorem. Duis dui tortor, convallis ut erat sed, dignissim hendrerit tellus. Suspendisse leo lorem, imperdiet nec erat a, facilisis congue odio.' />
                    <CardCartel
                        onVerMasClick={() => setOpenCartel(true)}
                        onContactarClick={() => setOpenContact(true)}
                        image='https://images.unsplash.com/photo-1490042706304-06c664f6fd9a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80'
                        name='Kenji'
                        date='25/05/2019'
                        description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et pharetra erat. Etiam sem quam, fringilla eget elementum vel, imperdiet a est. Vestibulum eget blandit purus. Suspendisse potenti. Nunc nibh dolor, laoreet nec efficitur ut, vestibulum quis elit. Integer vitae finibus odio, sit amet pellentesque erat. Sed interdum quis nisi non posuere. Integer interdum ac lectus ac blandit. Fusce sed ultricies magna. Vivamus in mi nisl. Vivamus ac eleifend lorem. Duis dui tortor, convallis ut erat sed, dignissim hendrerit tellus. Suspendisse leo lorem, imperdiet nec erat a, facilisis congue odio.' />
                </div>
            </div>
            <DialogCartel
                name='Kenji'
                specie='Perro'
                sex='Macho'
                id='-Lonuncsdg97cn9sd'
                image='https://images.unsplash.com/photo-1534985111090-85c477f9d813?ixlib=rb-1.2.1&auto=format&fit=crop&w=375&q=80'
                place='Guadalajara, Jalisco, Mexico'
                description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et pharetra erat. Etiam sem quam, fringilla eget elementum vel, imperdiet a est. Vestibulum eget blandit purus. Suspendisse potenti. Nunc nibh dolor, laoreet nec efficitur ut, vestibulum quis elit. Integer vitae finibus odio, sit amet pellentesque erat. Sed interdum quis nisi non posuere. Integer interdum ac lectus ac blandit. Fusce sed ultricies magna. Vivamus in mi nisl. Vivamus ac eleifend lorem. Duis dui tortor, convallis ut erat sed, dignissim hendrerit tellus.'
                haveId={false}
                closeDialog={() => {setOpenCartel(false); history.pushState(null, '', `/mascotasperdidas`);}}
                open={openCartel}
                contact={
                    {
                        ndsndias: {
                            type: 'whatsapp',
                            value: 3312971299
                        },
                        dsad: {
                            type: 'whatsapp',
                            value: 3312971299
                        },
                        ndsndiadvsdvs: {
                            type: 'whatsapp',
                            value: 3312971299
                        },
                    }
                }
                date='26/05/2020' />
            <Modal size='sm' centered show={openContact} onHide={() => setOpenContact(false)}>
                <Modal.Body>
                    <H4Styled>Contacto</H4Styled>
                    <List>
                        <ListItem>
                            <ButtonText className='w-100' value={<><i className='fab fa-whatsapp fa-lg mr-3'></i>33 12 97 12 99</>} />
                        </ListItem>
                    </List>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default MascotasPerdidas;
