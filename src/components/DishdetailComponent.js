import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
import Moment from 'react-moment';

class DishDetail extends Component {
    
    renderComments(comments) {
        if (comments != null) {

            const commentItem = comments.map((comment) => {
                return (
                            <li key={comment.id}>
                                <p>{comment.comment}</p>
                                <p>-- {comment.author}, 
                                    <Moment format="ll">{comment.date}</Moment>
                                </p>
                            </li>
                );                 
            });
    
            return (
                <ul className="list-unstyled">
                    {commentItem}
                </ul>
            ); 
        }
        else {
            return (
                <div></div>
            );
        }
    }

    renderDish(dish) {
        if (dish != null) {
            
            return (
                <React.Fragment>
                <div className="col-12 col-md-5 m-1">
                    <Card>
                        <CardImg width="100%" object src={dish.image} alt={dish.name} />
                        <CardBody>
                            <CardTitle>{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
                <div className="col-12 col-md-5 m-1">
                <h4>Comments</h4>
                {this.renderComments(dish.comments)}
                </div>
                </React.Fragment>   
            );

        }
        else {
            return (
                <div></div>
            );
        }
    }

    render() {
        
        const dish = this.props.dish;
        // console.log(dish);
        const dishItem = this.renderDish(dish);
        if (dish == null) {
            return (<div></div>)
        }
        return(
            <div className="row">
                {dishItem}
            </div>
        );   
    };
    
}

export default DishDetail;