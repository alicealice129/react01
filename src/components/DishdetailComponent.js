import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
// import Moment from 'react-moment';

    function RenderDish({dish}) {
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
                {/* {this.renderComments(dish.comments)} */}
                <RenderComments comments={dish.comments} />
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


    function RenderComments({comments}) {
        if (comments != null) {

            const commentItem = comments.map((comment) => {
                return (
                            <li key={comment.id}>
                                <p>{comment.comment}</p>
                                <p>-- {comment.author} , 
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

    const DishDetail = (props) => {

        const dish = props.dish;
        // const dishItem = renderDish(dish);
        if (dish != null) {
            return(
                <div className="container">
                    <div className="row">
                         {/* {this.renderDish(this.props.dish)} */}
                        <RenderDish dish={props.dish} />
                        {/* {this.renderComments(this.props.dish.comments)} */}
                        {/* <RenderComments comments={props.dish.comments} /> */}
                    </div>
                </div>
            );   
            
        } else {
            return(
                <div></div>
            );
        }
    } 


export default DishDetail;