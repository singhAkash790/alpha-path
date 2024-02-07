// validation.js

export const validateUserData = (userData) => {
  if (!userData) {
    return "User data is required.";
  }

  if (!userData.designation) {
    return "Designation is required.";
  }

  if (!userData.name) {
    console.log("this sit het namer", userData.name)
    return "Full name is required.";
  }

  if (!userData.phoneNumber) {
    return "Mobile number is required.";
  }
  if (!userData.email) {
    return "email is required.";
  }
  if (!userData.dob) {
    return "dob is required.";
  }
  if (!userData.age) {
    return "age is required.";
  }
  if (!userData.gender) {
    return "gender is required.";
  }

  // Add more validation rules as needed

  return true; // No validation errors
};

export const validateUserAddress = (userAddress) => {
  if (!userAddress) {
    return "User address is required.";
  }

  if (!userAddress.address) {
    return "Address is required.";
  }

  if (!userAddress.pincode) {
    return "Pincode is required.";
  }
  if (!userAddress.state) {
    return "Pincode is required.";
  }
  if (!userAddress.city) {
    return "Pincode is required.";
  }
  if (!userAddress.homeCollectionDateTime) {
    return "Pincode is required.";
  }

  // Add more validation rules as needed

  return true; // No validation errors
};
