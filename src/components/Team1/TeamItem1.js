import React from 'react';
import { LoremIpsum } from 'react-lorem-ipsum';
import './Team.css';
import {Card} from "react-bootstrap";




const TeamItem= ({ name, img, cardStyle,handlePointerEvent }) =>  {
    return (
        <article className={cardStyle}>
            <Card
                className="projekt-item__content card-team"
                text="dark"
                onMouseDown={handlePointerEvent}
                onTouchStart={handlePointerEvent}
            >
                <Card.Img className="projekt-item__image" variant="top" src={img} alt={name} />
                <Card.Body >
                    <Card.Text className="projekt-item__info" text="dark">
                        <h2>{name}</h2>
                        <h3><LoremIpsum p={1} /></h3>
                    </Card.Text>
                </Card.Body>
            </Card>
        </article>
    );
}

export default TeamItem;
