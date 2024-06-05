import {Component} from 'react';
import './item.scss';

class Item extends Component{
    render(){
        return(
            <div className='item'>
                <div className='item__ratio'></div>
                <div className='item__text'>
                    <div className='item__text--title'>عنوان</div>
                    <div className='item__text--description'>دوچرخه مدل 88 در حد نو</div>
                </div>
                <div className='item__image'></div>
            </div>
        )
    }
}

export default Item;