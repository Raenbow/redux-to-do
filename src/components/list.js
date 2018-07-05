import React, {Component} from 'react';
import { connect } from 'react-redux';
import { getData } from '../actions';

class List extends Component {
    componentDidMount(){
        this.props.getData();
    }

    render(){
        return(
            <div>
                <h1 className="center">To-Do List w/ Redux!</h1>
            </div>
        )
    }
}

export default connect(null, {getData: getData})(List);