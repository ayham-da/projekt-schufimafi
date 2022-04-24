import React           from 'react';
import ProjektItem       from './ProjektItem'
import {Card}          from 'react-bootstrap'
import                      'bootstrap/dist/css/bootstrap.min.css';
import                      './ProjektItemList.css'


const ProjektItemList = props => {
    if (props.items.length === 0){
        return ( 
        <>
        <div className="center">
        <Card text="light">
        <Card.Body>
           <Card.Text >
               {<h2>No Projekt found!!</h2>}
           </Card.Text>
           
           </Card.Body>    
       </Card>
        </div>
        </>
        );
    }else{
        return(
            <>
            <ul className="projekts-list">
                {props.items.map(book =>{
                    return(<>
                    <ProjektItem
                        key={book.id} 
                        id={book.id} 
                        image={book.imageUrl} 
                        title={book.title} 
                        description={book.description} 
                        creatorId={book.creator}
                        
                    />
                    </>
                    )
                    
                })}
            </ul>
            </>
        )
       }
};
export default ProjektItemList;