import React, {Component} from 'react';

class Submit extends Component {

    constructor(props){
        super(props);
        // console.log(props);
        this.submitFood = this.submitFood.bind(this);
    }
    submitFood() {
        console.log('food submited');
        this.props.history.push('/');
    }
    render () {
        return (
            <div>
                <div className="row">
                    <div className="col-xs-12 col-sm-12">
                        <form>
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input type="text" className="form-control" id="name" placeholder="Name"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="description">Description</label>
                                <textarea className="form-control" id="description" placeholder="Description"/>
                            </div>
                            <div className="form-group form-inline">
                                <label htmlFor="quantity">Quantity</label>
                                <input type="text" className="form-control" id="quantity" placeholder="Quantity"/>
                                <label htmlFor="ingredient">Ingredient</label>
                                <input type="text" className="form-control" id="ingredient" placeholder="Ingredient"/>
                                <button type="button" className="btn btn-default" aria-label="Left Align">
                                    <span className="glyphicon glyphicon-plus-sign" aria-hidden="true"></span>
                                </button>
                            </div>
                            <button type="submit" className="btn btn-success">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Submit;
