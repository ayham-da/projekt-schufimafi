import React ,{useState} from 'react';
import {Card}          from 'react-bootstrap'
import                        'bootstrap/dist/css/bootstrap.min.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import                        './JornalistItem.css'
import {faExternalLink} from "@fortawesome/free-solid-svg-icons"


const JornalistItem = props => {

  const [show, setShow] = useState(false);
  const openHandler = () => setShow(true);
  const closeHandler = () => setShow(false);

    return(
    <React.Fragment>
      <li className="jornalist-item">
        <Card className="jornalist-card text-center">
          <Card.Img className="jornalist-img" variant="top" src={props.imageUrl} alt={props.imageAlt}/>
          <Card.Body>
            <Card.Title className="jornalist-title">{props.title}</Card.Title>
            <Card.Text className="jornalist-description">
              {props.description}
            </Card.Text>
            <Card.Link href={props.articleUrl} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon className="externalLink" icon={faExternalLink} />
            </Card.Link>
          </Card.Body>
        </Card>
    </li>
  </React.Fragment>
  )
};
export default JornalistItem;