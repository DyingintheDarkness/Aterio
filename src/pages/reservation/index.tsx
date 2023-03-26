import {
  Text,
  Flex,
  Input,
  Button,
  Wrap,
  WrapItem,
  useToast,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { validateForm } from "../../../validation/validation";
import ContactInfo from "../../components/ContactInfo/ContactInfo";
import CustomDropdown from "../../components/CustomDropdown/CustomDropdown";
import Layout from "../../components/Layout/Layout";
import data from "../../../data/data.json";

export default function Reservation() {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    membersCount: "",
    time: "",
  });
  const [disabledButton, setDisabledButton] = useState(true);
  const [invalidFields, setInvalidFields] = useState([]);
  const toast = useToast();

  function validateFormData() {
    let [isValid, invalidField] = validateForm(formData);
    setDisabledButton(isValid as boolean);
    setInvalidFields(invalidField as string[]);
    return isValid;
  }

  async function submitForm() {
    let isValid = validateFormData();
    if (isValid) return;
    let res = await fetch("/api/book", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (res.status === 200) {
      toast({
        title: "Reservation Booked",
        description: `Booked a table for ${formData.membersCount} members at ${formData.time} Today`,
        status: "success",
        duration: 9000,
        isClosable: true,
      });
      setFormData({
        name: "",
        contact: "",
        membersCount: "",
        time: "",
      });
      setDisabledButton(true);
    }
  }

  useEffect(() => {
    validateFormData();
  }, [formData]);

  return (
    <Layout>
      <Flex
        flexDir={{ base: "column", md: "row" }}
        alignItems={"flex-start"}
        w="100%"
        justifyContent={"space-between"}
        pr="8rem"
        pt={{
          md: "4rem",
        }}
      >
        <Flex
          sx={{
            flexDir: "column",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            // width: "100%",
            pl: {
              base: "1rem",
              md: "2rem",
              lg: "8rem",
            },

            // pl: {
            // lg: "8rem",
            // },

            ".error": {
              borderColor: "red.500",
            },
            lg: "40vw",
          }}
        >
          <Text variant="title">Make a Reservation</Text>

          <Flex
            sx={{
              flexDir: "column",
              justifyContent: "flex-start",
              gap: {
                base: "1rem",
                lg: "1.5rem",
              },

              input: {
                borderWidth: "2px",
                borderStyle: "solid",
                borderColor: "border.black",
                w: {
                  base: "140%",
                  xsm: "80vw",
                  lg: "40vw",
                },
              },
            }}
          >
            <Input
              p=".5rem"
              variant="unstyled"
              placeholder="Name"
              name="name"
              className={invalidFields.includes("name") ? "error" : ""}
              value={formData.name}
              onChange={(e) => {
                setFormData({
                  ...formData,
                  name: e.target.value,
                });
              }}
            />
            <Input
              p=".5rem"
              variant="unstyled"
              placeholder="Contact"
              type="number"
              name="contact"
              value={formData.contact}
              className={invalidFields.includes("contact") ? "error" : ""}
              onChange={(e) => {
                setFormData({
                  ...formData,
                  contact: e.target.value,
                });
              }}
            />
            <CustomDropdown
              className={invalidFields.includes("membersCount") ? "error" : ""}
              options={data.membersCountData}
              updateSelected={(membersCount) =>
                setFormData({ ...formData, membersCount: membersCount })
              }
              selected={formData.membersCount}
              placeholder="No. of Members"
            />
            <CustomDropdown
              className={invalidFields.includes("time") ? "error" : ""}
              options={data.timeData}
              updateSelected={(time) => {
                setFormData({
                  ...formData,
                  time: time,
                });
              }}
              selected={formData.time}
              placeholder="Time"
            />
            <Button
              variant="solid"
              sx={{
                width: "10rem",
              }}
              isDisabled={disabledButton}
              onClick={() => submitForm()}
            >
              Book a Reservation
            </Button>
          </Flex>
        </Flex>

        <Flex
          justify="center"
          flexDir={"column"}
          gap="4rem"
          display={{ base: "none", md: "flex" }}
        >
          <ContactInfo />
        </Flex>
      </Flex>
    </Layout>
  );
}
