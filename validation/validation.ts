import data from "../data/data.json";
import jwt from "jwt-simple";
import { FormType } from "../@types/types";
let validationRegex = {
  name: /^[a-zA-Z ]{2,30}$/,
  contact: /^[0-9]{10}$/,
};

export function validateForm(form: FormType) {
  if (!form.name || !form.contact || !form.membersCount || !form.time) {
    return [true, []];
  }
  let invalidFields = [];
  if (!validationRegex.name.test(form.name)) {
    invalidFields.push("name");
  }
  if (!validationRegex.contact.test(form.contact)) {
    invalidFields.push("contact");
  }
  if (!data.membersCountData.includes(form.membersCount)) {
    invalidFields.push("membersCount");
  }
  if (!data.timeData.includes(form.time)) {
    invalidFields.push("time");
  }
  if (invalidFields.length > 0) {
    return [true, invalidFields];
  }
  return [false, ""];
}

export function generateToken(password: string) {
  return jwt.encode(password, process.env.SECRET, "HS256", {
    header: {
      expiresIn: "7h",
    },
  });
}
