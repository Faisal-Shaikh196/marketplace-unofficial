// import { useQueryClient } from "@tanstack/react-query";
// import { logout } from "../../../utils/auth";
import "./style.scss";
import {
  Bell,
  Calculator,
  Cart,
  Currency,
  CurrencyRupee,
  Profile,
} from "../../../../public/icons/custom";
import { ChevronDown, Search } from "lucide-react";
import CustomInput from "../CustomInput/CustomInput";

export function NavBar() {
  // const qc = useQueryClient();
  // const me = qc.getQueryData(meQueryKey) as any;

  // const role = me?.user?.role ?? "guest";
  // const email = me?.user?.email ?? "";

  return (
    <div className="nav-container">
      <div className="nav-left">
        <div className="badge subheading-xs">
          <CurrencyRupee size="14" color="var(--bg-invert)" />
          INR
          <ChevronDown size="14" />
        </div>
      </div>
      <div className="nav-middle">
        <CustomInput
          aria-label="Search Input"
          icon={Search}
          placeholder="Search Apps..."
        />
      </div>
      <div className="nav-right">
        <div className="nav-right-options">
          <Bell size="32" color="var(--bg-grey-500)" />
          <Calculator size="32" color="var(--bg-grey-500)" />
          <Cart size="32" color="var(--bg-grey-500)" />
        </div>

        <div className="profile">
          <Profile size="40" />
          <div className="profile-badge">
            <Currency size="10" />
            <h1 className="subheading-2xs">10000</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
