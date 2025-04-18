import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/store/slice/userSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    // Unsiubscribe when component unmounts
    return () => unsubscribe();
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // navigate("/");
      })
      .catch((error) => {
        // navigate("/error");
      });
  };
  return (
    <div className="absolute top-0 left-0 w-full flex justify-between items-center px-6 py-4 bg-black bg-opacity-80 z-10">
      <h1 className="text-4xl font-bold text-red-600">NETFLIX</h1>
      {user && (
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <img
              src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
              alt="User"
              className="w-8 h-8 rounded-full"
            />
            <span className="text-gray-100 font-medium">
              {user?.displayName}
            </span>
          </div>
          <button
            onClick={handleSignOut}
            className="bg-red-100 text-red-600 px-3 py-1 rounded hover:bg-red-200 transition"
          >
            Sign out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
