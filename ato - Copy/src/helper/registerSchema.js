import * as Yup from "yup";

const personalSchema = Yup.object().shape({
  first_name: Yup.string().required("First Name is required"),
  last_name: Yup.string().required("Last Name is required"),
  country_code: Yup.string().required("Country Code is required"),
  phone: Yup.string().required("Phone is required"),
  backup_number: Yup.string().required("Backup Phone is required"),
  company_name: Yup.string().when("company", {
    is: true,
    then: Yup.string().required("Company Name is required"),
  }),
  citizenship_ein: Yup.string().when("company", {
    is: true,
    then: Yup.string().required("Citizen Ein is required"),
  }),
  mc_number: Yup.string().when("company", {
    is: true,
    then: Yup.string().required("MC Number is required"),
  }),
});

export default personalSchema;

export const truckSchema = Yup.object().shape({
  truck_type: Yup.string().required("Truck type is required"),
  ownership: Yup.string().required("ownership is required"),
  vin_number: Yup.string().required("Vin Number is required"),
  year_vehicle_manufacture: Yup.string().required(
    "Year vehicle manufacture is required"
  ),
  max_carriable_weight: Yup.string().required(
    "max carriable weight is required"
  ),
  mileage: Yup.string().required("mileage is required"),
  max_pallets: Yup.string().required("max pallets is required"),
  vehicle_length: Yup.string().required("vehicle length is required"),
  wheel_width: Yup.string().required("wheel width is required"),
  vehicle_height: Yup.string().required("vehicle height is required"),
  backdoor_width: Yup.string().required("backdoor width is required"),
  backdoor_height: Yup.string().required("backdoor height is required"),
  sidedoor_width: Yup.string().required("sidedoor width is required"),
  sidedoor_height: Yup.string().required("sidedoor height is required"),
  registration_image: Yup.mixed().required("registration image is required"),
  insurance_image: Yup.mixed().required("insurance_image is required"),
  truck_images: Yup.mixed().required("truck_images is required"),
});

export const licenceSchema = Yup.object().shape({
  driver_licence: Yup.string().required("driver licence is required"),
  expiration: Yup.string().required("expiration is required"),
  driver_licence_image: Yup.mixed().required(
    "driver_licence_image is required"
  ),
});

export const bankSchema = Yup.object().shape({
  name: Yup.string().required("name is required"),
  account_number: Yup.string().required("account_number is required"),
  account_number_confirm: Yup.string().required(
    "account_number_confirm is required"
  ),
  routing_number: Yup.string().required("routing_number is required"),
  routing_number_confirm: Yup.string().required(
    "routing_number_confirm is required"
  ),
  quick_pay: Yup.string().required("quick_pay is required"),
  bank_confirmation_check: Yup.mixed().required(
    "bank_confirmation_check is required"
  ),
  bank_confirmation_letter: Yup.mixed().required(
    "bank_confirmation_letter is required"
  ),
});
