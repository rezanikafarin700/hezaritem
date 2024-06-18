import {PureComponent} from 'react';
import './items.scss'


class Items extends PureComponent{
    render(){
        return(
            <div className='items'>
                <div className='items__item'>1</div>
                <div className='items__item'>2</div>
                <div className='items__item'>3</div>
                <div className='items__item'>4</div>
                <div className='items__item'>5</div>
                <div className='items__item'>6</div>
                <div className='items__item'>7</div>
                <div className='items__item'>8</div>
                <div className='items__item'>9</div>
                <div className='items__item'>10</div>
                <div className='items__item'>11</div>
                <div className='items__item'>12</div>
            </div>
        )
    }
}

export default Items;