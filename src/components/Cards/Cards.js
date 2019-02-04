import React from 'react';
import { Card, CardBody, CardText, CardImg, CardHeader } from 'reactstrap';

import './Cards.css'

const CardContact = (props) => {

    return (
        <Card className="shadow">
            <CardImg src={props.contacts.img} alt={props.contacts.firstName} />
            <CardHeader>
                {props.contacts.firstName} {props.contacts.lastName}
            </CardHeader>
            <CardBody>
                <CardText>
                    {props.contacts.country}
                </CardText>
                <CardText>
                    <small className="text-muted">
                        {props.contacts.email}
                    </small>
                </CardText>
            </CardBody>
        </Card>
    );
};

export default CardContact;