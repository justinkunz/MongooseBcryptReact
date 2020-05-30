import React, { useState } from "react";
import SignIn from "../Components/SignIn";
import AccountDetails from "../Components/AccountDetails";

function Account() {
  // Use state to keep track of the users information
  const [currentUser, setCurrentUser] = useState({ isSignedIn: false });

  // Handle successful login to set user's data and rerender AccountDetails page
  function handleUserLogin(userDetails) {
    console.log("Logged in successfully", userDetails);
    setCurrentUser({ ...userDetails, isSignedIn: true });
  }

  // Reset current users info when user clicks sign out
  function handleSignOut(userDetails) {
    console.log("Logging out user");
    setCurrentUser({ isSignedIn: false });
  }

  // If user is not signed in, show the sign in page
  // Else, show the user their account details
  if (!currentUser.isSignedIn) {
    return <SignIn handleUserLogin={handleUserLogin} />;
  } else {
    return <AccountDetails user={currentUser} handleSignOut={handleSignOut} />;
  }
}

export default Account;
