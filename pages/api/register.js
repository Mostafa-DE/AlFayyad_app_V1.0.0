import cookie from "cookie";
import { API_URL } from "@/config/index";

const registerApi = async (req, res) => {
  if (req.method === "POST") {
    const { username, email, password, phone } = req.body;
    const strapiRes = await fetch(`${API_URL}/auth/local/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        email,
        password,
        phone,
      }),
    });
    const data = await strapiRes.json();
    if (strapiRes.ok) {
      /* @todo - set a Cookie */
      res.setHeader(
        "Set-Cookie",
        cookie.serialize("token", data.jwt, {
          httpOnly: true,
          secure: process.env.NODE_ENV != "development",
          maxAge: 60 * 60 * 24 * 7, // for a week
          sameSite: "strict",
          path: "/",
        })
      );
      /*----------X-----------*/
      res.status(200).json({ user: data.user });
      return;
    } else {
      res.status(data.statusCode).json({
        message:
          "Invalid username try again with another username, or maybe email already exist !!",
      });
    }
    res.status(200).json({});
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).json({ message: `Method ${req.method} not allowed` });
  }
};

export default registerApi;
