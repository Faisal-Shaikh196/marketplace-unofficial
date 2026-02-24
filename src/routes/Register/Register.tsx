// import { useState } from "react";
// import { useNavigate } from "@tanstack/react-router";
// import { useQueryClient } from "@tanstack/react-query";
// import { apiFetch } from "../../utils/api";
// import { ensureMe } from "../../utils/auth";
// import type { Role } from "../../utils/rbac";
import { FileText, Mail, Phone, Star, SunMedium } from "lucide-react";
import { Button } from "../../components/ui/Button/Button";
import { Form } from "../../components/ui/Form/Form";
import CustomInput from "../../components/shared/CustomInput/CustomInput";
import { Lock } from "../../../public/icons/custom";
import { Link } from "react-aria-components";
import { Select } from "../../components/ui/Select/Select";
import { DropdownItem } from "../../components/ui/ListBox/ListBox";
import "./style.scss";
import Dropdown from "../../components/shared/Dropdown/Dropdown";
import { useObservable } from "@legendapp/state/react";

// const ALL_ROLES: Role[] = ["user", "developer", "manufacturer", "superadmin"];

export default function Register() {
  const $state = useObservable({
    country: [
      "India",
      "United States",
      "United Kingdom",
      "Australia",
      "Germany",
      "France",
      "Japan",
      "China",
      "Brazil",
      "Canada",
    ],
    state: ["State 1", "State 2", "State 3", "State 4", "State 5"],
    city: ["City 1", "City 2", "City 3", "City 4", "City 5"],
  });
  // const nav = useNavigate();
  // const qc = useQueryClient();

  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  // // for testing: multi-role selection
  // const [roles, setRoles] = useState<Role[]>(["user"]);
  // const [err, setErr] = useState<string | null>(null);

  // function toggleRole(role: Role) {
  //   setRoles((prev) =>
  //     prev.includes(role) ? prev.filter((r) => r !== role) : [...prev, role]
  //   );
  // }

  // async function onRegister() {
  //   setErr(null);
  //   try {
  //     await apiFetch<{ ok: boolean }>("/auth/register", {
  //       method: "POST",
  //       body: { email, password, roles },
  //     });
  //     await ensureMe(qc);
  //     nav({ to: "/dashboard" as any, replace: true });
  //   } catch (e: any) {
  //     setErr(e?.message ?? "Registration failed");
  //   }
  // }

  return (
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
          <div className="header">
            <div className="head-icon">
              <FileText color="var(--bg-primary-500)" />
            </div>
            <div className="head-info">
              <h2>Your Details</h2>
              <p>Please provide your personal details.</p>
            </div>
          </div>
          <Form>
            <CustomInput
              label="Name"
              placeholder="Enter your name"
              isRequired
            />

            <div className="form-row">
              <CustomInput
                label="Email Address"
                icon={Mail}
                placeholder="Enter your email address"
                type="email"
                isRequired
              />
              <CustomInput
                label="Mobile Number"
                icon={Phone}
                placeholder="Enter your phone number"
                type="tel"
                isRequired
              />
            </div>

            <CustomInput
              label="Create Username"
              placeholder="Create your username"
              isRequired
            />

            <div className="form-row">
              <CustomInput
                label="Create Password"
                icon={Lock}
                placeholder="Enter your password"
                secureTextEntry
                isRequired
                onClear={() => {}}
              />
              <CustomInput
                label="Confirm Password"
                icon={Lock}
                placeholder="Confirm your password"
                secureTextEntry
                isRequired
                onClear={() => {}}
              />
            </div>

            {/* <Select
              label="Country"
              placeholder="Select your country"
              isRequired
            >
              <DropdownItem id="india">India</DropdownItem>
              <DropdownItem id="usa">United States</DropdownItem>
              <DropdownItem id="uk">United Kingdom</DropdownItem>
            </Select> */}
            <Dropdown
              $options={$state.country}
              placeholder="Select your Country"
              label="Country"
              // multiSelect={true}
              isRequired
            />

            <div className="form-row">
              <Select label="State" placeholder="Select your state" isRequired>
                <DropdownItem id="state1">State 1</DropdownItem>
                <DropdownItem id="state2">State 2</DropdownItem>
              </Select>
              <Select label="City" placeholder="Select your city" isRequired>
                <DropdownItem id="city1">City 1</DropdownItem>
                <DropdownItem id="city2">City 2</DropdownItem>
              </Select>
            </div>
          </Form>
          <div className="footer">
            <Button type="submit" className="login-btn">
              Submit
            </Button>
          </div>
        </div>

        <div className="signup-link">
          <p>
            Already have an account?{" "}
            <span>
              <Link href="/login">Sign In</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
