import cookie from "cookie";
// import { API_URL } from "@/config/index";

const logoutApi = async (req, res) => {
  if (req.method === "POST") {
    /*-------distroy cookie--------*/
    res.setHeader(
      "Set-Cookie",
      cookie.serialize("token", "", {
        httpOnly: true,
        secure: process.env.NODE_ENV != "development",
        expires: new Date(0),
        sameSite: "strict",
        path: "/",
      })
    );

    res.status(200).json({ message: "Successfully logged out " });
    return;
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).json({ message: `Method ${req.method} not allowed` });
  }
};

export default logoutApi;
