import { NextResponse } from "next/server";
import { verify } from "jsonwebtoken";
const secret = process.env.SECRET;
export default function middleware(req) {
  const { cookies } = req;
  const jwt = cookies.OursiteJWT;
  const url = req.url;
console.log(jwt,"jwt");
console.log(url,"url");
console.log("cooke",cookies);


  if (url.includes("/dashboard")) {
    if (jwt === undefined) {
      return NextResponse.redirect("/loginform");
    }
    try {
      const user = verify(jwt, secret);
      console.log(user)
      return NextResponse.next();
    } catch (e) {
      return NextResponse.redirect("/loginform");
    }
  }
  return NextResponse.next();
}
