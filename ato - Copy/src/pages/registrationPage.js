import React, { useState } from "react";
import FormTabs from "../components/FormTabs";
import TruckInfoForm from "../components/TruckInfoForm";
import LicenceInfoForm from "../components/LicenceInfoForm";
import BankInfoForm from "../components/BankInfoForm";
import ButtonContainer from "../components/ButtonContainer";
import axios from "axios";
import PersonalInfoForm, { validateForm } from "../components/PersonalInfoForm";
import styles from "./RegistrationPage.module.css";
import SignContact from "../components/SignContact";

const RegistrationPage = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [buttonText, setButtonText] = useState("Next"); // Initial button text
  const [formData, setFormData] = useState({
    personalInfo: {
      first_name: "",
      last_name: "",
      country_code: "",
      phone: "",
      backup_number: "",
      company: false,
      company_name: "",
      citizenship_ein: "",
      mc_number: "",
    },
    truckInfo: {
      truck_type: "",
      ownership: "",
      vin_number: "",
      year_vehicle_manufacture: "",
      mileage: "",
      max_carriable_weight: "",
      max_pallets: "",
      vehicle_length: "",
      wheel_width: "",
      vehicle_height: "",
      backdoor_width: "",
      backdoor_height: "",
      sidedoor_width: "",
      sidedoor_height: "",
      registration_image: [],
      insurance_image: [],
      truck_images: [],
    },
    licenceInfo: {
      driver_licence: "",
      expiration: "",
      driver_licence_image: [],
    },
    bankInfo: {
      name: "",
      account_number: "",
      account_number_confirm: "",
      routing_number: "",
      routing_number_confirm: "",
      quick_pay: "",
      bank_confirmation_check: [],
      bank_confirmation_letter: [],
    },
    phoneNumbers: {
      id: "",
      type: "",
      country_code: "",
      phone: "",
    },
    signContact: {
      sign_contract: "",
      terms: "",
    },
  });

  const [hasErrors, setHasErrors] = useState(false);

  const numTabs = 6; // Define the number of tabs

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
    setButtonText("Next");
  };

  const handleChange = (tab, field, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [tab]: {
        ...prevData[tab],
        [field]: value,
      },
    }));
  };

  const handleChangeCheckbox = (field, value) => {
    setFormData((prevData) => ({
      ...prevData,
      personalInfo: {
        ...prevData.personalInfo,
        [field]: value,
      },
    }));
  };

  const apiAddresses = [
    "https://atoz-register.metariom.shop/api/v1/register/personal-info-store",
    "https://atoz-register.metariom.shop/api/v1/register/truck-info-store",
    "https://atoz-register.metariom.shop/api/v1/register/driver-licence-store",
    "https://atoz-register.metariom.shop/api/v1/register/bank-info-store",
    "https://atoz-register.metariom.shop/api/v1/register/phone-verify-send-code",
    "https://atoz-register.metariom.shop /api/v1/register/sign-contract",
  ];

  const handleSubmit = async () => {
    if (activeTab !== numTabs - 1) {
      const isFormValid = await validateForm(formData);

      if (!isFormValid) {
        setHasErrors(true);
        return;
      } else {
        setHasErrors(false);
      }
    }
    let loginToken = localStorage.getItem("token");
    console.log(loginToken);
    console.log(activeTab);
    try {
      const headers = {
        "x-api-key": "Y86n5bZYZmT5bhkfJTxxYdgJlFHDy4owrNgr2536",
        Authorization:
          "Bearer 362|7ogbEBoC4A4arMokN6pAY34xwD6y7bXC9H2wpHs4ff7bca73",
      };

      const res = await axios.post(
        apiAddresses[activeTab],
        {
          ...formData[activeTab],
        },
        { headers }
      );

      console.log("Response:", res);
      if (res.status === 200 && activeTab !== numTabs - 1) {
        // Move to the next tab upon successful submission
        setActiveTab(activeTab + 1);
      } else {
      }
    } catch (error) {
      console.log("Error:", error);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <header className={styles.title}>Registration Page</header>
        <FormTabs
          className={styles.tabwrapper}
          activeTab={activeTab}
          handleTabChange={handleTabChange}
        />
        <form onSubmit={handleSubmit}>
          <div
            className={`styles.tabPanel ${
              activeTab === 0 ? styles.active : ""
            }`}
          >
            {activeTab === 0 && (
              <PersonalInfoForm
                formData={formData}
                handleChange={handleChange}
                handleChangeCheckbox={handleChangeCheckbox}
                setHasErrors={setHasErrors} // Pass setHasErrors to PersonalInfoForm
              />
            )}
            {activeTab === 1 && (
              <TruckInfoForm
                formData={formData}
                handleChange={handleChange}
                setHasErrors={setHasErrors}
              />
            )}
            {activeTab === 2 && (
              <LicenceInfoForm
                formData={formData}
                handleChange={handleChange}
                setHasErrors={setHasErrors}
              />
            )}
            {activeTab === 3 && (
              <BankInfoForm formData={formData} handleChange={handleChange} />
            )}
            {activeTab === 4 && (
              <phoneNumbers formData={formData} handleChange={handleChange} />
            )}
            {activeTab === 5 && (
              <SignContact formData={formData} handleChange={handleChange} />
            )}
            <ButtonContainer
              type="submit"
              handleSubmit={handleSubmit}
              buttonText={activeTab === numTabs - 1 ? "Finish" : "Next"}
              hasErrors={hasErrors}
              
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegistrationPage;
