import { Tabs, Tab } from "@mui/material";
import styles from "../pages/RegistrationPage.module.css";

const FormTabs = ({ activeTab, handleTabChange }) => {
  return (
    <Tabs
      value={activeTab}
      onChange={handleTabChange}
      variant="scrollable"
      scrollButtons="auto"
      className={styles.Tabs}
    >
      <Tab label="Personal Info" />
      <Tab label="Truck Info" />
      <Tab label="Licence Info" />
      <Tab label="Bank Info" />
      <Tab label="Phone Numbers" />
      <Tab label="Sign Contact" />
    </Tabs>
  );
};

export default FormTabs;
