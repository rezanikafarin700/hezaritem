import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { saveUser } from "../../../services/DBService";
import { Spinner } from "../../../components";
// import { Spinner } from "../../components";
import axios from "axios";

import "./register.scss";

export const Register = () => {
  const navigate = useNavigate();
  const URL = "http://localhost/back-sef/public/api/users";
  const config = {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  };
  const [inputErrorList, setInputErrorList] = useState({});

  const [getUser, setUser] = useState({
    name: "",
    mobile: "",
    type: "",
    city: "",
    address: "",
    email: "",
    password: "",
    avatar: "",
  });

  const [loading, setLoading] = useState(false);

  const handelInput = (event) => {
    event.persist();
    setUser({ ...getUser, [event.target.name]: event.target.value });
  };

  const handelSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      console.log("getUser = ", getUser);
      //   const { status } = await saveUser(getUser);
      let data = {
        address: getUser.address,
        avatar: getUser.avatar,
        city: getUser.city,
        email: getUser.email,
        mobile: getUser.mobile,
        name: getUser.name,
        password: "1234567",
        type: getUser.type,
      };
      axios.post(URL,data,config).then((res) => console.log("response = ", res)).catch(err => {
        if(err.response){
          if(err.response.status === 422){
            setInputErrorList(err.response.data.errors);

          }
          if(err.response.status === 500){
              alert(err.response.data);
          }
        }
      });
      // saveUser(data);
      //   console.log("status  = ", status);
      //   if (status === 201) {
      setUser({});
      setLoading(false);
      // navigate("/");
      //   }
    } catch (err) {
      console.log(err.message);
      setLoading(false);
    }
  };

  return (
    <div className="page">
      {loading ? (
        <Spinner />
      ) : (
        <form className="page__box" onSubmit={handelSubmit}>
          <input
            className="page__input"
            name="name"
            value={getUser.name}
            onChange={handelInput}
            placeholder="نام و نام خانوادگی"
            // required={true}
          />
          <span className="err">{inputErrorList.name}</span>
          <input
            className="page__input"
            name="email"
            value={getUser.email}
            onChange={handelInput}
            placeholder="ایمیل"
            // required={true}
          />
          <span className="err">{inputErrorList.email}</span>

          <input
            className="page__input"
            name="mobile"
            value={getUser.mobile}
            onChange={handelInput}
            placeholder="مبایل"
            // required={true}
          />
          <span className="err">{inputErrorList.mobile}</span>

          <label id="type-admin">تولید کننده</label>
          <input
            className=""
            name="type"
            id="type-admin"
            type="radio"
            value="ADMIN"
            onChange={handelInput}
            // required={true}
          />
          <label id="type-admin">خریدار</label>
          <input
            className=""
            name="type"
            id="type-user"
            type="radio"
            value="USER"
            onChange={handelInput}
            // required={true}
          />
          <span className="err">{inputErrorList.type}</span>

          <input
            className="page__input"
            name="city"
            value={getUser.city}
            onChange={handelInput}
            placeholder="شهر"
            // required={true}
          />
          <span className="err">{inputErrorList.city}</span>

          <input
            className="page__input"
            name="address"
            value={getUser.address}
            onChange={handelInput}
            placeholder="آدرس"
            // required={true}
          />
          <span className="err">{inputErrorList.address}</span>

          <input
            className="page__input"
            name="avatar"
            value={getUser.avatar}
            onChange={handelInput}
            placeholder="لینک عکس"
            // required={true}
          />
          <span className="err">{inputErrorList.avatar}</span>

          <div className="page__btns">
            <input
              type="submit"
              className="mybtn mybtn__sucsess"
              value="+ محصول جدید"
            />
            <Link to="/" className="mybtn mybtn__denger">
              بازگشت
            </Link>
          </div>
        </form>
      )}
    </div>
  );
};

export default Register;
