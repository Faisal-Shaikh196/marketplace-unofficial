// import { useState } from "react";
// import { useNavigate } from "@tanstack/react-router";
// import { useQueryClient } from "@tanstack/react-query";
// import { apiFetch } from "../../utils/api";
// import { ensureMe } from "../../utils/auth";
import CustomInput from "../../components/shared/CustomInput/CustomInput";
import { Button } from "../../components/ui/Button/Button";
import { Form } from "../../components/ui/Form/Form";
import "./style.scss";
import { Star, SunMedium } from "lucide-react";
import { Lock } from "../../../public/icons/custom";
import { Link } from "react-aria-components";

export default function Login() {
  // const nav = useNavigate();
  // const qc = useQueryClient();

  // const [email, setEmail] = useState("admin@test.com");
  // const [password, setPassword] = useState("admin123");
  // const [err, setErr] = useState<string | null>(null);

  // async function onLogin() {
  //   setErr(null);
  //   try {
  //     await apiFetch<{ ok: boolean }>("/auth/login", {
  //       method: "POST",
  //       body: { email, password },
  //     });
  //     await ensureMe(qc);
  //     nav({ to: "/dashboard" as any, replace: true });
  //   } catch (e: any) {
  //     setErr(e?.message ?? "Login failed");
  //   }
  // }

  return (
    <>
      <div className="container">
        <div className="left-cont">
          <div className="top">
            <img src="./images/marketplace.png" alt="marketplace logo" />
            <img src="./images/redx.png" alt="redx logo" />
          </div>

          <div className="middle">
            <p className="title">
              "Game-changing AI Marketplace for CCTV easy to buy, deploy, and
              enhance security effortlessly!"
            </p>
            <img className="avatar" src="./images/Avatar.png" alt="avatar" />
            <div className="avatar-info">
              <h2>Evanishka Franklin</h2>
              <p>CTO, GMR</p>
            </div>

            <div className="avatar-rating">
              <Star color="#F2AE40" fill="#F2AE40" />
              <Star color="#F2AE40" fill="#F2AE40" />
              <Star color="#F2AE40" fill="#F2AE40" />
              <Star color="#F2AE40" fill="#F2AE40" />
              <Star color="#F2AE40" fill="#F2AE40" />
            </div>
          </div>

          <div className="bottom">
            <p>
              Powered By <span>Ease My AI</span>
            </p>
          </div>
        </div>
        <div className="right-cont">
          <div className="theme-toggler">
            <Button variant="secondary">
              <SunMedium fill="#000" />
            </Button>
          </div>

          <div className="form">
            <div className="form-title">
              <h2>Welcome Back</h2>
              <p>Welcome Back! Please enter your details.</p>
            </div>
            <Form>
              <CustomInput
                label="Username"
                icon={Lock}
                placeholder="Enter your username..."
                tooltip="Your Name Must be Unique"
              />
              <CustomInput
                label="Password"
                placeholder="Enter your password..."
                secureTextEntry
              />

              <div></div>
              <div className="btn-grp">
                <Button type="submit" className="login-btn">
                  Sign In
                </Button>
                <Button variant="secondary" className="google-auth">
                  <span>
                    <img src="./icons/google.svg" alt="google icon" />
                  </span>
                  Sign In With Google
                </Button>
              </div>
            </Form>

            <div className="signup-link">
              <p>
                Dont have an account?{" "}
                <span>
                  <Link href="/register">Sign Up</Link>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
