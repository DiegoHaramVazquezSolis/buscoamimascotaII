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
import Body2 from '../styled/Body2';
import { primaryColor, primaryColorRGB } from '../styled/Constants';

const CardCartel = ({ image, date, name, description, contact, id }) => {
    return (
        <Card>
            <CardImage src={image} />
            <CardHeader date={date} header={name} />
            <CardBody>
                {description}
            </CardBody>
            <div className='mb-3'>
                <Row>
                    <Col xs={4} className='ml-4' style={{ padding: '0' }}>
                        <ButtonText style={{ paddingLeft: '12px', paddingRight: '12px' }} textStyle={{ fontSize: '16px' }} className='btn-sm' value='Ver mas' />
                    </Col>
                    <Col xs={4} style={{padding: '0' }}>
                        <ButtonRaised style={{ paddingLeft: '12px', paddingRight: '12px' }} textStyle={{ fontSize: '16px' }} className='btn-sm' value='Contactar' />
                    </Col>
                    <Col xs={2} className='ml-3'>
                        <OverlayTrigger
                            key={'placement'}
                            placement={'bottom'}
                            overlay={<Tooltip id={`tooltip`}><Body2>Compartir</Body2></Tooltip>}>
                            <i className='fas fa-share fa-2x'></i>
                        </OverlayTrigger>
                    </Col>
                </Row>
            </div>
            <style jsx>{`
                i {
                    color: ${primaryColor};
                    cursor: pointer;
                }
                i:hover {
                    color: rgba(${primaryColorRGB}, .85);
                }
                i:active {
                    color: rgba(${primaryColorRGB}, .75);
                }
                i:focus {
                    color: rgba(${primaryColorRGB}, .75);
                }
            `}</style>
        </Card>
    );
}

export default CardCartel;
