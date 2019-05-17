import PropTypes from 'prop-types';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import Card from '../primitives/Card/Card';
import CardImage from '../primitives/Card/CardImage';
import CardHeader from '../primitives/Card/CardHeader';
import CardBody from '../primitives/Card/CardBody';
import ButtonText from '../primitives/Buttons/ButtonText';
import ButtonRaised from '../primitives/Buttons/ButtonRaised';

const CardCartel = ({ image, date, name, description, contact, id }) => {
    return (
        <Card>
            <CardImage src={image} />
            <CardHeader date={date} header={name} />
            <CardBody>
                {description}
            </CardBody>
            <div className='ml-2 mb-3'>
                <Row>
                    <Col xs={4}>
                        <ButtonText value='Ver mas' />
                    </Col>
                    <Col xs={5}>
                        <ButtonRaised value='Contactar' />
                    </Col>
                    <Col xs={2} className='ml-2'>
                        <OverlayTrigger
                            key={'placement'}
                            placement={'bottom'}
                            overlay={<Tooltip id={`tooltip`}>Compartir</Tooltip>}>
                            <i className='fas fa-share fa-2x'></i>
                        </OverlayTrigger>
                    </Col>
                </Row>
            </div>
            <style jsx>{`
                i {
                    color: #26C7DC;
                    cursor: pointer;
                }
                i:hover {
                    color: rgba(38, 199, 220, .85);
                }
                i:active {
                    color: rgba(38, 199, 220, .75);
                }
                i:focus {
                    color: rgba(38, 199, 220, .75);
                }
            `}</style>
        </Card>
    );
}

export default CardCartel;
