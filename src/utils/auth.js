import API from "./api";
async function checkAuthorization() {
  try {
    const response = await API.get("/auth-check");

    return response.ok == true;
  } catch (error) {
    console.log("Error occurred during authentication check:", error);
    return false;
  }
}

export default checkAuthorization;
