import React ,{useState} from 'react';
import {Card,Button}                 from 'react-bootstrap'
import                                    'bootstrap/dist/css/bootstrap.min.css';
import                                    './ProjektItem.css'


const ProjektItem = props => {

  const [show, setShow] = useState(false);
  const openHandler = () => setShow(true);
  const closeHandler = () => setShow(false);

    return(
    <React.Fragment>
      <li className="projekt-item">
        <Card className="projekt-item__content" text="dark">
          <Card.Img className="projekt-item__image" variant="top" src={props.image} alt={props.title} />
          <Card.Body >
            <Card.Text className="projekt-item__info" text="dark">
              <h2>{props.title}</h2>
              <h3>{props.description}</h3>
              <h3>{props.size}</h3>
            </Card.Text>
          </Card.Body>
          <div className="projekt-item__actions">
            <Button variant="success" onClick={openHandler}>VIEW</Button>
          </div>
        </Card>
    </li>
  </React.Fragment>
  )
};
export default ProjektItem;