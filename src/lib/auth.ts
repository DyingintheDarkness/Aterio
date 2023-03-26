import jwt from "jwt-simple";

export function validateToken(token: string) {
  try {
    return jwt.decode(token, process.env.SECRET, false, "HS256");
  } catch (err) {
    console.error(err);
    return null;
  }
}
