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
import { Checkbox } from "../../components/ui/Checkbox/Checkbox";
import { Link } from "@tanstack/react-router";
import { themeContext } from "../../context/theme.context";
import { useObservable } from "@legendapp/state/react";
import { queue } from "../../components/ui/Toast/Toast";
import { authContext } from "../../context/auth.store";

export default function Login() {
  const { toggleTheme } = themeContext;
  const { isLoggedIn, user } = authContext;

  const $state = useObservable({
    form: {
      username: "",
      password: "",
    },
  });

  const handleSubmit = (formData: FormData) => {
    isLoggedIn.toggle();
    user.set({ name: formData.get("username") as string });
    queue.add({
      title: "Login Attempt",
      description: `You have attempted to log in as ${formData.get(
        "username"
      )}. This is a demo, so no actual authentication is performed.`,
    });
  };

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
      <div className="login-container">
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
              <h2 className="label-xl">Evanishka Franklin</h2>
              <p className="label-lg">CTO, GMR</p>
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
            <p className="subheading-sm">
              Powered By <span>Ease My AI</span>
            </p>
          </div>
        </div>
        <div className="right-cont">
          <div className="theme-toggler">
            <Button variant="secondary" onClick={toggleTheme}>
              <SunMedium fill="#000" />
            </Button>
          </div>

          <div className="form">
            <div className="form-title">
              <h2 className="label-xl">Welcome Back</h2>
              <p className="para-lg">
                Welcome Back! Please enter your details.
              </p>
            </div>
            <Form action={handleSubmit}>
              <CustomInput
                name="username"
                label="Username"
                icon={Lock}
                placeholder="Enter your username..."
                tooltip="Your Name Must be Unique"
                value$={$state.form.username}
                onChange={(value) => $state.form.username.set(value)}
              />
              <CustomInput
                name="password"
                label="Password"
                placeholder="Enter your password..."
                value$={$state.form.password}
                onChange={(value) => $state.form.password.set(value)}
                secureTextEntry
              />

              <div className="options">
                <Checkbox>Remember Me</Checkbox>
                <Link
                  className="Link subheading-xs"
                  to={"/forgot-password" as any}
                >
                  Forget Password
                </Link>
              </div>
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
              <p className="subheading-xs">
                Dont have an account?{" "}
                <span>
                  <Link to={"/register" as any}>Sign Up</Link>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
