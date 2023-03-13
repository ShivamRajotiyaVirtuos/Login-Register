import Link from "next/link";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import headerlogo from "./images/book-my-time-logo.svg";
import bodyimg from "./images/book-my-time-img.svg";
import virtuoslogo from "./images/virtuos-virtuez-logo.svg";
import { useState } from "react";
import Image from "next/image";

const Register = () => {
  const [email, setEmail] = useState("");
  const [fullname, setFullname] = useState("");

  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, fullname, password);
  };
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
            <h2>Register </h2>
          </div>
          <div className="form1">
            <form className="form">
              <div className="text-field">
                <TextField
                  style={{ width: "250px" }}
                  type="text"
                  id="outlined-basic"
                  label="Enter your Fullname"
                  variant="outlined"
                  onChange={(e) => setFullname(e.target.value)}
                  value={fullname}
                  required
                />
              </div>
              <div className="text-field">
                <TextField
                  style={{ width: "250px" }}
                  type="email"
                  id="outlined-basic"
                  label="Enter your Email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  variant="outlined"
                  required
                />
              </div>

              <div className="text-field">
                <TextField
                  style={{ width: "250px" }}
                  type="password"
                  id="outlined-basic"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  label="Enter your Password"
                  variant="outlined"
                  required
                />
              </div>

              <Button
                style={{ borderRadius: "50px", backgroundColor: "#00a2fe" }}
                variant="contained"
                onClick={handleSubmit}
              >
                Register
              </Button>
            </form>
            <div>
              <Link
                style={{ textDecoration: "none", color: "#00a2fe" }}
                href={"/login"}
              >
                Have an account? Log In.
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

export default Register;
