import React, { Fragment, useRef, useState, useEffect } from "react";
import "./LoginSingup.css";
import { Link } from "react-router-dom";
import EmailIcon from "@material-ui/icons/Email";
import LockIcon from "@material-ui/icons/Lock";
import PersonIcon from "@material-ui/icons/Person";
import Profile from "../../images/Profile3.png";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, login, register } from "../../actions/userAction";
import { useAlert } from "react-alert";
import { useNavigate, useLocation } from "react-router-dom";
import Loader from "../layout/Loader/Loader";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import PhoneIcon from "@mui/icons-material/Phone";
import PlaceIcon from "@mui/icons-material/Place";

const LoginSignup = () => {
  const dispatch = useDispatch();
  const alert = useAlert();
  const navigate = useNavigate();
  const location = useLocation();
  const { error, loading, isAuthenticated } = useSelector(
    (state) => state.user
  );

  const loginTab = useRef(null);
  const registerTab = useRef(null);
  const switcherTab = useRef(null);

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    rate: "",
    phone: "",
    address: "",
  });
  const { name, email, password, rate, phone, address } = user;

  const [avatar, setAvatar] = useState(Profile);
  const [avatarPreview, setAvatarPreview] = useState(Profile);

  const [role, setRole] = useState("");

  //here that single line mean if we are login then it move to shipping page that is 1 index otherwise it go to 0 index that means login page
  const redirect = location.search ? location.search.split("=")[1] : "/account";

  useEffect(() => {
    if (error) {
      alert.info(error);
      dispatch(clearErrors());
    }
    if (isAuthenticated) {
      navigate(redirect);
    }
  }, [dispatch, error, alert, navigate, isAuthenticated, redirect]);

  const switchTabs = (e, tab) => {
    if (tab === "login") {
      switcherTab.current.classList.add("shiftToNeutral");
      switcherTab.current.classList.remove("shiftToRight");
      registerTab.current.classList.remove("shiftToNeutralForm");
      loginTab.current.classList.remove("shiftToLeft");
    }
    if (tab === "register") {
      switcherTab.current.classList.add("shiftToRight");
      switcherTab.current.classList.remove("shiftToNeutral");
      registerTab.current.classList.add("shiftToNeutralForm");
      loginTab.current.classList.add("shiftToLeft");
    }
  };
  const loginSubmit = (e) => {
    e.preventDefault();
    dispatch(login(loginEmail, loginPassword));
  };

  const registerSubmit = (e) => {
    e.preventDefault();
    const myForm = new FormData();
    myForm.set("name", name);
    myForm.set("email", email);
    myForm.set("password", password);
    myForm.set("avatar", avatar);
    myForm.set("role", role);
    myForm.set("rate", rate);
    myForm.set("phone", phone);
    myForm.set("address", address);
    dispatch(register(myForm));
  };

  const registerDataChange = (e) => {
    if (e.target.name === "avatar") {
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.readyState === 2) {
          setAvatarPreview(reader.result);
          setAvatar(reader.result);
        }
      };
      reader.readAsDataURL(e.target.files[0]);
    } else {
      setUser({ ...user, [e.target.name]: e.target.value });
    }
  };

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <div className="LoginSignupContainer">
            <div className="LoginSignupBox">
              <div>
                <div className="LoginSignupToggle">
                  <p onClick={(e) => switchTabs(e, "login")}>LOGIN</p>
                  <p onClick={(e) => switchTabs(e, "register")}>REGISTER</p>
                </div>
                <button ref={switcherTab}></button>
              </div>
              <form className="loginForm" ref={loginTab} onSubmit={loginSubmit}>
                <div className="loginEmail">
                  <EmailIcon />
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    value={loginEmail}
                    onChange={(e) => setLoginEmail(e.target.value)}
                  />
                </div>
                <div className="loginPassword">
                  <LockIcon />
                  <input
                    type="password"
                    placeholder="Password"
                    required
                    value={loginPassword}
                    onChange={(e) => setLoginPassword(e.target.value)}
                  />
                </div>
                <Link to="/password/forgot">Forget Password ?</Link>
                <input type="submit" value="Login" className="loginBtn" />
              </form>

              <form
                className="signupForm"
                ref={registerTab}
                encType="multipart/form-data"
                onSubmit={registerSubmit}
              >
                {role !== "mechanic" && (
                  <>
                    <div className="signupName">
                      <PersonIcon />
                      <input
                        type="text"
                        placeholder="Name"
                        required
                        name="name"
                        value={name}
                        onChange={registerDataChange}
                        pattern="^[a-z ,.'-]+$"
                        title="Enter only letters"
                      />
                    </div>
                    <div className="signupEmail">
                      <EmailIcon />
                      <input
                        type="email"
                        placeholder="Email"
                        required
                        name="email"
                        value={email}
                        onChange={registerDataChange}
                      />
                    </div>
                    <div className="signupPassword">
                      <LockIcon />
                      <input
                        type="password"
                        placeholder="Password"
                        required
                        name="password"
                        value={password}
                        onChange={registerDataChange}
                      />
                    </div>

                    <div id="registerImage">
                      <img src={avatarPreview} alt="Avatar Preview" />
                      <input
                        type="file"
                        name="avatar"
                        accept="image/*"
                        onChange={registerDataChange}
                      />
                    </div>
                  </>
                )}

                <div>
                  <VerifiedUserIcon />
                  <select
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                  >
                    <option value="">Choose Role</option>
                    <option value="user">Customer</option>
                    <option value="mechanic">Mechanic</option>
                  </select>
                </div>

                {role === "mechanic" && (
                  <>
                    <div style={{ paddingBottom: 10 }}>
                      <AttachMoneyIcon />

                      <input
                        type="number"
                        name="rate"
                        placeholder="Hourly rate"
                        required
                        value={rate}
                        onChange={registerDataChange}
                        min={1}
                        max={100000}
                      />
                    </div>
                    <div style={{ paddingBottom: 10 }}>
                      <PhoneIcon />

                      <input
                        type="text"
                        name="phone"
                        placeholder="Phone Number"
                        required
                        value={phone}
                        onChange={registerDataChange}
                      />
                    </div>

                    <div style={{ paddingBottom: 10 }}>
                      <PlaceIcon />

                      <input
                        type="text"
                        name="address"
                        placeholder="Address"
                        required
                        value={address}
                        onChange={registerDataChange}
                      />
                    </div>
                  </>
                )}

                <input type="submit" value="Register" className="signupBtn" />
              </form>
            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default LoginSignup;
