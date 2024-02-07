// UserDataContext.js
import React, { createContext, useState } from "react";

const UserDataContext = createContext();

const UserDataProvider = ({ children }) => {
  const [userData, setUserData] = useState({
    name: "",
    phoneNumber: "",
    dob: "",
    age: "",
    gender: "",
    isHomecollection: 1,
    address: "",
    pincode: "",
    city: "",
    state: "",
  });

  const [loading, setLoading] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [errors, setErrors] = useState({});

  const updateUserData = (key, value) => {
    setUserData((prevData) => ({ ...prevData, [key]: value }));
  };

  const updateErrors = (newErrors) => {
    setErrors(newErrors);
  };

  return (
    <UserDataContext.Provider
      value={{
        userData,
        updateUserData,
        loading,
        setLoading,
        selectedPlan,
        setSelectedPlan,
        errors,
        updateErrors,
      }}
    >
      {children}
    </UserDataContext.Provider>
  );
};

export { UserDataProvider, UserDataContext };
