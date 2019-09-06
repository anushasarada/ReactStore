import React,{Component} from 'react';

class AddReview extends Component {
    reviewerRef = React.createRef();
    starRatingRef = React.createRef();
    titleRef = React.createRef();
    reviewRef = React.createRef();
    state = {
        values: {
            reviewer:'',
            starRating: 5,
            title:'',
            review:''
        },
        errors: {
            reviewer:'',
            starRating: 5,
            title:'',
            review:''
        },
        isValid: false
    }
    addReview = ( event ) => {
        event.preventDefault();
    }
    checkValidity(){
        let isValid = true;
        let reviewerErr = '', starRatingErr='', titleErr='',reviewErr='';

        const {reviewer,starRating,title,review} = this.state.values;

        if(reviewer === ''){
            isValid = false;
            reviewerErr = reviewerErr+'Please enter your name!'
        }
        else if(reviewer.length < 3){
            isValid = false;
            reviewerErr = reviewerErr+'Your name is too short!<br/>'
        }else{reviewerErr='';}

        if(starRating === ''){
            isValid = false;
            starRatingErr = starRatingErr+'You must select a rating!<br/>'
        }else{starRatingErr='';}

        this.setState({
            errors:{
                reviewer: reviewerErr,
                starRating: starRatingErr,
                title: titleErr,
                review: reviewErr
            },
            isValid: isValid
        })
    }
    updateValue = ( event ) => {
        this.setState(
            {
                values:{
                    /* ...this.state.values,
                    [event.target.name]:event.target.value */
                    reviewer: this.reviewerRef.current.value,
                    starRating: this.starRatingRef.current.value,
                    title: this.titleRef.current.value,
                    review: this.reviewRef.current.value,
                }
            },
            this.checkValidity
        );
    }
    render() {
        const {reviewer,starRating,title,review} = this.state.values;
        const {reviewer: reviewerErr,starRating: starRatingErr,title: titleErr,review: reviewErr} = this.state.errors;
        return (
            <div>
                <h2>Add a review</h2>
                <hr></hr>
                <form onSubmit={this.addReview}> 
                    <div className="form-group">
                        <label htmlFor="reviewer">Your name:</label>
                        <input type="text" name="reviewer" id="reviewer" className="form-control" placeholder="" aria-describedby="helpId" value={reviewer} onChange={this.updateValue} ref={this.reviewerRef}/>
                        {
                            reviewerErr ? 
                            (
                                <div className="text-danger">
                                    {reviewerErr}
                                </div>
                            ) :
                            (
                                <small id="helpId" className="text-muted">Your name goes in here</small>
                            )
                        }
                    </div>
                    <div className="form-group">
                        <label htmlFor="starRating">Rating:</label>
                        <select name="starRating" id="starRating" className="form-control" aria-describedby="helpStarRating"  value={starRating} onChange={this.updateValue}/* [(ngModel)]=review.starRating */>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                        {
                            starRatingErr ? 
                            (
                                <div className="text-danger">
                                    {starRatingErr}
                                </div>
                            ) :
                            (
                                <small id="helpStarRating" className="text-muted">Your rating (1-least, 5-highest))</small>
                            )
                        }
                    </div>
                    <div className="form-group">
                        <label htmlFor="title">Your title for the review:</label>
                        <textarea name="title" id="title" className="form-control" aria-describedby="helpTitle"  value={title} onChange={this.updateValue} /* [(ngModel)]=review.title */></textarea>
                        {
                            titleErr ? 
                            (
                                <div className="text-danger">
                                    {titleErr}
                                </div>
                            ) :
                            (
                                <small id="helpTitle" className="text-muted">Your title for the review goes in here...</small>
                            )
                        }
                    </div >
                    <div className="form-group">
                        <label htmlFor="review">Your review:</label>
                        <textarea name="review" id="review" className="form-control" aria-describedby="helpReview"  value={review} onChange={this.updateValue} /* [(ngModel)]=review.text */></textarea>
                        {
                            reviewErr ? 
                            (
                                <div>
                                    {reviewErr}
                                </div>
                            ) :
                            (
                                <small id="helpReview" className="text-muted">Your review for the product goes in here...</small>
                            )
                        }
                    </div >
                    <div className="form-group">
                        <input type="submit" value="Add review" disabled={this.state.isValid}/>
                    </div> 
                    {/* <button className="form-group btn btn-primary" type="submit" disabled={this.state.isValid}>
                        Add review
                    </button> */}
                </form >
            </div>
        );
    }
}
export default AddReview;