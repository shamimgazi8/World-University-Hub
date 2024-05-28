import Cookies from "js-cookie";
import jwt, { Secret } from "jsonwebtoken";

// Function to check if the access token is expired
const isAccessTokenExpired = (accessToken: string) => {
  try {
    const decodedToken = jwt.verify(
      accessToken,
      process.env.JWT_SECRET as Secret
    );

    console.log(decodedToken);

    return decodedToken;
  } catch (e) {
    console.log({ e });
  }
};

// Function to check if the user is authenticated
export const isAuthenticated = (userTokenCookie: string) => {
  if (userTokenCookie) {
    return true;
  }
  return false;
};
