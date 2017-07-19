import React, {Component} from 'react';

class Ingredients extends Component {
    constructor(props){
        super(props);

        this.addIngredients = this.addIngredients.bind(this);
    }
    addIngredients() {
        // console.log('Ingredient added');
        this.props.onIngredientChange(this.quantity.value, this.ingredient.value);
        this.quantity.value="";
        this.ingredient.value="";
    }
    render () {
        return (
            <div className="form-group form-inline">
                <label htmlFor="quantity">Quantity: </label>
                <input
                    type="text"
                    ref={(input) => {this.quantity = input;}}
                    className="form-control"
                    id="quantity"
                    placeholder="Quantity"/>
                <label htmlFor="ingredient">Ingredient: </label>
                <input
                    type="text"
                    className="form-control"
                    id="ingredient"
                    ref={(input) => {this.ingredient = input;}}
                    placeholder="Ingredient"/>
                <button onClick={this.addIngredients} type="button" className="btn btn-default" aria-label="Left Align">
                    <span className="glyphicon glyphicon-plus-sign" aria-hidden="true"></span>
                </button>
            </div>
        );
    }
}

export default Ingredients;
