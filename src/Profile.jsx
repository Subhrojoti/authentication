import React, { useEffect, useState } from "react";
import { auth, db } from "./firebase/firebase";
import { doc, getDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const [userDetail, setUserDetail] = useState(null);
  const navigate = useNavigate();

  const fetchUserData = async () => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        try {
          console.log(user);
          const docRef = doc(db, "Users", user.uid);
          const docDetail = await getDoc(docRef);
          if (docDetail.exists()) {
            setUserDetail(docDetail.data());
            console.log(docDetail.data()); // Log the actual data
          } else {
            console.log("No such document!");
          }
        } catch (error) {
          console.error("Error fetching user data: ", error);
        }
      } else {
        console.log("User is not logged in");
      }
    });
  };

  const handleLogout = async () => {
    try {
      await auth.signOut();
      navigate("/login");
    } catch (error) {
      console.log("error");
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);
  return (
    <>
      <div className="flex flex-col w-full h-screen text-7xl text-violet-500 font-bold justify-center items-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 animate-gradient">
        <div className="bg-white bg-opacity-60 p-10 rounded-lg shadow-lg text-center backdrop-blur-md">
          <h1 className="mb-5 animate-fade-in">
            Welcome To The Profile Page, {userDetail?.firstName}!
          </h1>
          <button
            className="text-lg bg-slate-300 p-5 rounded-md hover:bg-slate-400 transition-all duration-300 ease-in-out"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      </div>
    </>
  );
};

export default Profile;
