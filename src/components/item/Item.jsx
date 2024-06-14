import {Component} from 'react';
import './item.scss';

class Item extends Component{
    render(){
        return(
            <div className='item'>
                <div className='item__ratio'></div>
                <div className='item__text'>
                    <div className='item__text--title'>{this.props.data.title}</div>
                    <div className='item__text--description'>{this.props.data.text}</div>
                </div>
                <div className='item__image' style={ {backgroundImage : `url(${this.props.data.image})`} }></div>
            </div>
        )
    }
}

export default Item;