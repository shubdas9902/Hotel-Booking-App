import toast from "react-hot-toast";

const validate = async (setAuthUser) => {
  try {
    const res = await fetch("http://localhost:5000/api/auth/validate-token", {
      method: "GET",
      credentials: "include", // if you need to include cookies
    });

    const data = await res.json();
    if (data.error) {
      console.log(data.error);
      throw new Error(data.error);
    }

    setAuthUser(data.userId); // Set the authenticated user data
  } catch (error) {
    setAuthUser(null); // Clear user data if validation fails
    toast.error(error.message);
  }
};

export default validate;
