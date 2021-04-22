import Dashboard from "@material-ui/icons/Dashboard";
import AccountCircle from "@material-ui/icons/AccountCircle";
import PersonAdd from "@material-ui/icons/PersonAdd";
import Group from "@material-ui/icons/Group";
import DashboardPage from "views/Dashboard/Dashboard.js";
import UserProfile from "views/UserProfile/UserProfile.js";
import AllUsers from 'views/Allusers/AllUsers';
import Employee from 'views/Employee/Employee';

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    rtlName: "لوحة القيادة",
    icon: Dashboard,
    component: DashboardPage,
    layout: "/admin"
  },
  {
    path: "/employee",
    name: "All Employee",
    rtlName: "ملف تعريفي للمستخدم",
    icon: Group,
    component: Employee,
    layout: "/admin"
  },
  {
    path: "/allusers",
    name: "All Users",
    rtlName: "ملف تعريفي للمستخدم",
    icon: PersonAdd,
    component: AllUsers,
    layout: "/admin"
  },
  {
    path: "/user",
    name: "User Profile",
    rtlName: "ملف تعريفي للمستخدم",
    icon: AccountCircle,
    component: UserProfile,
    layout: "/admin"
  },
];

export default dashboardRoutes;
