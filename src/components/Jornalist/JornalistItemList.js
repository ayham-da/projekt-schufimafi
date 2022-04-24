import React           from 'react';
import JornalistItem       from './JornalistItem'
import {Card}          from 'react-bootstrap'
import                      'bootstrap/dist/css/bootstrap.min.css';
import                      './JornalistItemList.css'


const JornalistItemList = props => {
    if (props.items.length === 0){
        return ( 
        <>
            <div className="center">
                <Card text="light">
                    <Card.Body>
                           <Card.Text >
                               {<h2>No article found!!</h2>}
                           </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </>
        );
    }else{
        return(
            <>
            <ul className="jornalist-list">
                {props.items.map(article =>{
                    return(<>
                    <JornalistItem
                        key={article.id}
                        id={article.id}
                        title={article.title}
                        imageUrl={article.imageUrl}
                        imageAlt={article.imageAlt}
                        description={article.description}
                        articleUrl={article.articleUrl}
                    />
                    </>
                    )
                    
                })}
            </ul>
            </>
        )
       }
};
export default JornalistItemList;