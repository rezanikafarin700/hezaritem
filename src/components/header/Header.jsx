import { PureComponent } from "react";
import './header.scss';

class header extends PureComponent{
    render(){
        return(
            <div className="header">
                <div className="mybtn mybtn__logo">لوگو</div>
                <button className="mybtn mybtn__sucsess">ثبت محصول</button>
            </div>
        )
    }
}

export default header;