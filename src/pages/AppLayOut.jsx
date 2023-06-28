// import AppNav from "../components/AppNav";
import Map from "../components/Map";
import Sidebar from "../components/Sidebar";
import styles from "./AppLayout.module.css";
import { useAuth } from "../context/FakeAuthContext";
import User from "../components/User";
const AppLayout = () => {
  const { isAuthenticated } = useAuth();
  return (
    <div className={styles.app}>
      <Sidebar />
      <Map />
      {isAuthenticated && <User></User>}
    </div>
  );
};

export default AppLayout;
