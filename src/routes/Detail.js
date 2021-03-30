import { render } from '@testing-library/react';
import React from 'react';
import './Detail.css'

class Detail extends React.Component{
    componentDidMount(){
        const { location, history } = this.props;
        if (location.state === undefined){
            history.push('/');
        }
    }
    render(){
        const { location } = this.props;
        if (location.state){
            return(
                <div className ="movie__details">
                    <span>{location.state.title}</span>
                    <div className ="summary">
                        <span>{location.state.summary}</span>
                    </div>

                </div>
            );
        } else {
            return null;
        }
    }
}

export default Detail;