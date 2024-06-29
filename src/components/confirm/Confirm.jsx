import './confirm.scss';

const Confirm = ({title,children}) => {
    return(
        <div className="box">
            <p>{title}</p>
            <div className="box__btns">{children}</div>
        </div>
    )
};
export default Confirm;
