import { Lock } from "../../../public/icons/custom";
import "./style.scss";
import { Form } from "../../components/ui/Form/Form";
import CustomInput from "../../components/shared/CustomInput/CustomInput";
import { Memo, useObservable } from "@legendapp/state/react";
import { Link, useNavigate } from "@tanstack/react-router";
import Card from "./components/Card";
import { Cog } from "lucide-react";
import { observe } from "@legendapp/state";
import { Button } from "../../components/ui/Button/Button";

const ForgotPassword = () => {
  const navigate = useNavigate({
    from: "/forgot-password" as any,
  });
  const $state = useObservable({
    form: {
      name: "",
      email: "",
      phone: "",
      username: "",
      password: "",
      confirmPassword: "",
    },
    stepCount: 0,
    stepper: [],
  });

  const Stepper = [
    {
      title: "Enter Email",
      description: "Please provide your email address.",
      form: (
        <Form>
          <CustomInput
            label="Email Address"
            placeholder="Enter your email address"
            isRequired
            value$={$state.form.email}
            onChange={(val) => $state.form.email.set(val)}
          />
        </Form>
      ),
      button: {
        text: "Send 4-digit Code",
        onClick: (e: React.MouseEvent<HTMLButtonElement>) => {
          console.log("Event triggered", e);
          e.preventDefault();
          $state.stepCount.set(1);
        },
        props: { type: "submit" as const, className: "login-btn" },
      },
    },
    {
      title: "Enter your code",
      description: "We sent a code to fsk@gmail.com",
      form: (
        <Form>
          <CustomInput
            otp
            otpLength={4}
            onChange={(value) => console.log(value)}
          />
          <div className="code-info">
            <p className="label-sm">
              Didn’t receive the code?{" "}
              <Button className="label-sm" variant="quiet">
                Click to resend
              </Button>
            </p>
            <p>
              You can resend code in <span> 120 </span> seconds.
            </p>
          </div>
        </Form>
      ),
      button: {
        text: "Continue",
        onClick: (e: React.MouseEvent<HTMLButtonElement>) => {
          e.preventDefault();
          $state.stepCount.set(2);
        },
        props: { type: "submit" as const, className: "login-btn" },
      },
    },
    {
      title: "Set new password",
      description: "Must be at least 8 characters.",
      form: (
        <Form>
          <CustomInput
            label="New Password"
            placeholder="Enter your new password"
            isRequired
            icon={Lock}
            type="password"
            value$={$state.form.password}
            secureTextEntry
            onChange={(val) => $state.form.password.set(val)}
          />
          <CustomInput
            label="Confirm Password"
            placeholder="Confirm your new password"
            isRequired
            icon={Lock}
            secureTextEntry
            type="password"
            value$={$state.form.confirmPassword}
            onChange={(val) => $state.form.confirmPassword.set(val)}
          />
        </Form>
      ),
      button: {
        text: "Set new password",
        onClick: (e: React.MouseEvent<HTMLButtonElement>) => {
          e.preventDefault();
          console.log("Password reset");
          navigate({
            to: "/login" as any,
          });
        },
        props: { type: "submit" as const, className: "login-btn" },
      },
    },
  ];

  observe(() => {
    console.log("Current step:", $state.stepCount.get());
  });

  return (
    <div className="forget-container">
      <div className="wrapper">
        <img src="./images/marketplace.png" alt="Marketplace Logo" />
        <div className="form">
          <Memo>
            {() => {
              const step = Stepper[$state.stepCount.get()];
              return step ? (
                <Card
                  key={step.title}
                  Icon={Lock}
                  title={step.title}
                  description={step.description}
                  form={step.form}
                  button={step.button}
                />
              ) : null;
            }}
          </Memo>
        </div>

        <div className="signup-link">
          <p>
            Go back to{" "}
            <span>
              <Link className="subheading-xs Link" to={"/login" as any}>
                Sign In
              </Link>
            </span>
          </p>
        </div>
      </div>

      <div className="contact">
        <p className="para-sm">Contact Support</p>
        <Cog size={16} color="var(--bg-grey-900)" />
      </div>
    </div>
  );
};

export default ForgotPassword;
