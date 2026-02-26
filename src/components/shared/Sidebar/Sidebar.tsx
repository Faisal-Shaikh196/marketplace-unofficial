import "./style.scss";
import { Link, useNavigate } from "@tanstack/react-router";
import {
  AcademicCap,
  Bulb,
  Bulding,
  Bulk,
  Cube,
  Desktop,
  Plus,
  ShoppingBag,
} from "../../../../public/icons/custom";
import { authContext } from "../../../context/auth.store";

const Sidebar = () => {
  const { isLoggedIn } = authContext;
  const navigate = useNavigate();

  // Handle a Method IF user is not logged in and clicks on any sidebar with not in a Public route then
  // Either show a modal or redirect to login page with a toast message "Please login to access this page"
  const handleProtectedRouteClick = (
    e: React.MouseEvent<HTMLAnchorElement>
  ) => {
    if (!isLoggedIn.get()) {
      e.preventDefault();
      // Show a toast message (you can replace this with your toast implementation)
      alert("Please login to access this page");
      // Redirect to login page
      navigate("/login" as any);
    }
  };

  return (
    <div className="sidebar">
      <div className="top">
        <div className="logo-container">
          <img src="./images/redx.png" alt="Redx Logo" className="top-logo" />
        </div>
        <div className="sidebar-links">
          <ul>
            <li>
              <Link
                className="sidebar-link label-sm"
                activeProps={{ className: "active" }}
                to={"/" as any}
              >
                {({ isActive }) => (
                  <>
                    <ShoppingBag
                      size="24"
                      color={
                        isActive ? "var(--bg-grey-900)" : "var(--bg-grey-400)"
                      }
                    />
                    My Store
                  </>
                )}
              </Link>
            </li>
            <li>
              <Link
                className="sidebar-link label-sm"
                activeProps={{ className: "active" }}
                to={"/manufacture" as any}
                onClick={handleProtectedRouteClick}
              >
                {({ isActive }) => (
                  <>
                    <Cube
                      size="24"
                      color={
                        isActive ? "var(--bg-grey-900)" : "var(--bg-grey-400)"
                      }
                    />
                    Manufacture
                  </>
                )}
              </Link>
            </li>
            <li>
              <Link
                className="sidebar-link label-sm"
                activeProps={{ className: "active" }}
                to={"/banking" as any}
                onClick={handleProtectedRouteClick}
              >
                {({ isActive }) => (
                  <>
                    <Bulding
                      size="24"
                      color={
                        isActive ? "var(--bg-grey-900)" : "var(--bg-grey-400)"
                      }
                    />
                    Banking
                  </>
                )}
              </Link>
            </li>
            <li>
              <Link
                className="sidebar-link label-sm"
                activeProps={{ className: "active" }}
                to={"/healthcare" as any}
                onClick={handleProtectedRouteClick}
              >
                {({ isActive }) => (
                  <>
                    <Plus
                      size="24"
                      color={
                        isActive ? "var(--bg-grey-900)" : "var(--bg-grey-400)"
                      }
                    />
                    Healthcare
                  </>
                )}
              </Link>
            </li>
            <li>
              <Link
                className="sidebar-link label-sm"
                activeProps={{ className: "active" }}
                to={"/education" as any}
                onClick={handleProtectedRouteClick}
              >
                {({ isActive }) => (
                  <>
                    <AcademicCap
                      size="24"
                      color={
                        isActive ? "var(--bg-grey-900)" : "var(--bg-grey-400)"
                      }
                    />
                    Education
                  </>
                )}
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="bottom">
        <div className="sidebar-links">
          <ul>
            <li>
              <Link
                className="sidebar-link label-sm"
                activeProps={{ className: "active" }}
                to={"/settings" as any}
                onClick={handleProtectedRouteClick}
              >
                {({ isActive }) => (
                  <>
                    <Bulb
                      size="24"
                      color={
                        isActive ? "var(--bg-grey-900)" : "var(--bg-grey-400)"
                      }
                    />
                    Settings
                  </>
                )}
              </Link>
            </li>
            <li>
              <Link
                className="sidebar-link label-sm"
                activeProps={{ className: "active" }}
                to={"/help" as any}
                onClick={handleProtectedRouteClick}
              >
                {({ isActive }) => (
                  <>
                    <Desktop
                      size="24"
                      color={
                        isActive ? "var(--bg-grey-900)" : "var(--bg-grey-400)"
                      }
                    />
                    Help
                  </>
                )}
              </Link>
            </li>
            <li>
              <Link
                className="sidebar-link label-sm"
                activeProps={{ className: "active" }}
                to={"/logout" as any}
                onClick={handleProtectedRouteClick}
              >
                {({ isActive }) => (
                  <>
                    <Bulk
                      size="24"
                      color={
                        isActive ? "var(--bg-grey-900)" : "var(--bg-grey-400)"
                      }
                    />
                    Logout
                  </>
                )}
              </Link>
            </li>
          </ul>
        </div>
        <div className="logo-container">
          <img src="./images/redx.png" alt="Redx Logo" className="top-logo" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
