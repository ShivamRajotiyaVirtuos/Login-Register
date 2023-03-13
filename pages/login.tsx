import Link from "next/link";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import headerlogo from "./images/book-my-time-logo.svg";
import bodyimg from "./images/book-my-time-img.svg";
import virtuoslogo from "./images/virtuos-virtuez-logo.svg";
import { useState } from "react";
import Image from "next/image";
import React from "react";

const Login = () => {
  const [email, setEmail] = useState<any>("");
  const [password, setPassword] = useState<any>("");
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(email, password);
  };
  // console.log(fullname, password);
  return (
    <div className="main">
      <div className="header">
        <Image src={headerlogo} alt="bookmytime-logo" />
      </div>

      <div className="body">
        <div className="byt-img">
          <Image src={bodyimg} alt="bookmytime-img" />
        </div>

        <div className="container">
          <div>
            <h2>Welcome</h2>
          </div>
          <div className="form1">
            <form className="form">
              <div className="text-field">
                <TextField
                  style={{ width: "250px" }}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  id="outlined-basic"
                  label="Enter your Email"
                  variant="outlined"
                  value={email}
                  required
                />
              </div>

              <div className="text-field">
                <TextField
                  style={{ width: "250px" }}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  id="outlined-basic"
                  label="Enter your Password"
                  variant="outlined"
                  value={password}
                  required
                />
              </div>

              <Button
                onClick={handleSubmit}
                style={{ borderRadius: "50px", backgroundColor: "#00a2fe" }}
                variant="contained"
              >
                Login
              </Button>
            </form>
            <div>
              <Link
                style={{ textDecoration: "none", color: "#00a2fe" }}
                href={"/register"}
              >
                Dont have an account? Register.
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="v-logo">
          <Image src={virtuoslogo} alt="Virtuos-Logo" />
        </div>
        <div className="copy">
          © Virtuos Digital Ltd. Virtuez Assimilations. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Login;
