import React, {Component} from 'react';
import Ingredients from './Ingredients';

class Submit extends Component {

    constructor(props){
        super(props);

        this.state = {
            newFood: {
                name: '',
                description: '',
                ingredients: []
            }
        }

        this.submitFood = this.submitFood.bind(this);
        this.handleName = this.handleName.bind(this);
        this.handleIngredient = this.handleIngredient.bind(this);
    }
    submitFood(event) {
        event.preventDefault();
        // this.props.history.push('/');
        // console.log(this.quantity.value);
    }
    handleName(event) {
        console.log(event.target.value);
    }
    handleIngredient(quantity, ingredient) {
        // console.log(quantity, ingredient);
        let food = this.state.newFood;
        food.ingredients.push(quantity: quantity, ingredient: ingredient);
        this.setState({newFood: food});
        // this.setState({
        //     ingredients: {quantity, ingredient}
        // });
        console.log(this.state.newFood.ingredients);
    }
    render () {
        return (
            <div>
                <div className="row">
                    <div className="col-xs-12 col-sm-12">
                        <form onSubmit={this.submitFood}>
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="name"
                                    onChange={this.handleName}
                                    placeholder="Name"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="description">Description</label>
                                <textarea
                                    className="form-control"
                                    id="description"
                                    ref={(input) => {this.description = input;}}
                                    placeholder="Description"/>
                            </div>
                            <Ingredients onIngredientChange={this.handleIngredient} />
                            <button type="submit" className="btn btn-success">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Submit;
