import { useRef, useState } from "react";
import { BG_URL, USER_AVATAR } from "../utils/constants";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { addUser } from "../utils/store/slice/userSlice";
import { useDispatch } from "react-redux";

const Login = () => {
  const [isSignInForm, setSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const dispatch = useDispatch();

  const toggleSignInForm = () => {
    setSignInForm(!isSignInForm);
  };

  const handleButtonClick = () => {
    const error = checkValidData(email.current.value, password.current.value);
    setErrorMessage(error);

    if (error) return;
    if (!isSignInForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: USER_AVATAR,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
              // navigate("/browse");
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " +" + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " +" + errorMessage);
        });
    }
  };

  return (
    <div
      className="relative h-screen w-full bg-cover bg-center"
      style={{ backgroundImage: `url('${BG_URL}')` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* Move Header OUTSIDE this absolute flex container */}
      <Header />

      {/* Centered login box */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-4">
        <div className="bg-black bg-opacity-70 p-8 rounded-md w-full max-w-md">
          <h2 className="text-3xl font-semibold mb-6 text-center text-white">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h2>

          <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
            {!isSignInForm && (
              <input
                ref={name}
                type="text"
                placeholder="Full Name"
                className="w-full p-3 bg-gray-800 text-white rounded focus:outline-none"
              />
            )}
            <input
              ref={email}
              type="text"
              placeholder="Email Address"
              className="w-full p-3 bg-gray-800 text-white rounded focus:outline-none"
            />
            <input
              ref={password}
              type="password"
              placeholder="Password"
              className="w-full p-3 bg-gray-800 text-white rounded focus:outline-none"
            />
            <p className="text-red-500 font-bold text-lg py-2">
              {errorMessage}
            </p>
            <button
              className="w-full bg-red-600 hover:bg-red-700 transition rounded p-3 font-semibold"
              onClick={handleButtonClick}
            >
              {isSignInForm ? "Sign In" : "Sign Up"}
            </button>
            <p
              className="mt-4 text-center text-sm text-gray-300 cursor-pointer"
              onClick={toggleSignInForm}
            >
              {isSignInForm
                ? "New to Netflix? Sign Up Now"
                : "Already registered? Sign In Now."}
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Login;
