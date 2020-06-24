import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
// import Moment from 'react-moment';

class DishDetail extends Component {
    
    renderComments(comments) {
        if (comments != null) {

            const commentItem = comments.map((comment) => {
                return (
                            <li key={comment.id}>
                                <p>{comment.comment}</p>
                                <p>-- {comment.author}, 
                                    {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}
                                    {/* <Moment format="ll">{comment.date}</Moment> */}
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
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
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
        const dishItem = this.renderDish(dish);
        if (dish != null) {
            return(
                <div className="container">
                    <div className="row">
                        {dishItem}
                    </div>
                </div>
            );   
            
        } else {
            return(
                <div></div>
            );
        }
    };
    
}

export default DishDetail;