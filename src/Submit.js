import React, {Component} from 'react';

class Submit extends Component {

    constructor(props){
        super(props);

        this.submitFood = this.submitFood.bind(this);
    }
    submitFood() {
        console.log('food submited');
    }
    render () {
        return (
            <div>
                <button className="btn btn-primary" onClick={this.submitFood}>Submit a food</button>
            </div>
        );
    }
}

export default Submit;
