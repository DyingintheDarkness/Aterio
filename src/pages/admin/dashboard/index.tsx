import dynamic from "next/dynamic";
import {
  Flex,
  Text,
  Button,
  Input,
  WrapItem,
  Wrap,
  useToast,
  Switch,
} from "@chakra-ui/react";
import Fonts from "../../../components/Fonts/Fonts";
import { useState } from "react";
import { getCookie } from "cookies-next";
import { NextPageContext } from "next";
import { ReservationType } from "../../../../@types/types";

const DynamicInfoTable = dynamic(() => import("./infoTable"), {
  ssr: false,
});

function Admin({ reservations }: { reservations: ReservationType[] }) {
  let toast = useToast();
  const [reservationsData, setReservationsData] =
    useState<ReservationType[]>(reservations);
  const [currentDate, setCurrentDate] = useState(
    new Date().toISOString().slice(0, 10)
  );
  const [showArchived, setShowArchived] = useState(false);
  function removeReservation(id: string) {
    setReservationsData((prev) =>
      prev.filter((reservation) => reservation.id !== id)
    );
  }
  async function updateDate(e) {
    setCurrentDate(e.target.value);

    let res = await fetch(`/api/reservations?date=${e.target.value}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-token": (await getCookie("x-token")) as string,
      },
    });
    if (res.status === 200) {
      let data = await res.json();
      setReservationsData(data);
    } else if (res.status === 400) {
      toast({
        title: "No Reservations Found",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  }
  async function toggleShowArchived() {
    console.log(await getCookie("x-token"));
    setShowArchived(!showArchived);
    let res = await fetch(
      `/api/reservations?date=${currentDate}&archived=${!showArchived}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-token": (await getCookie("x-token")) as string,
        },
      }
    );
    if (res.status === 200) {
      let data = await res.json();
      setReservationsData(data);
    } else if (res.status === 400) {
      toast({
        title: "No Reservations Found",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  }

  return (
    <>
      <Fonts />
      <Flex
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          padding: {
            md: "1rem .2rem 1rem .4rem",
          },
          ".date": {
            color: "#000",
            backgroundColor: "#fff",
            border: "none",
            padding: { base: "0 .2rem 0 .4rem" },
            borderRadius: "4px",
            fontSize: {
              base: "1rem",
              sm: "1.2rem",
            },

            width: {
              base: "12rem",
              sm: "15rem",
            },
            height: {
              base: "2rem",
              sm: "2.5rem",
            },
          },
        }}
      >
        <Flex
          sx={{
            display: "flex",
            flexDirection: {
              base: "column",
              md: "row",
            },
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            gap: ".5rem",

            padding: "0 1rem 0 1rem", // top right bottom left
          }}
        >
          <Text
            variant="title"
            sx={{
              fontSize: {
                base: "2rem",
                lg: "4rem",
              },
            }}
          >
            Reservations - <Text as="span">{
              new Date(currentDate).toLocaleDateString("en-US", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
              }) || "Today"
            }</Text>
          </Text>
          <Flex
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              gap: ".5rem",
            }}
          >
            <Flex
              htmlFor="showArchivedReservations"
              as="label"
              display="flex"
              alignItems="center"
              sx={{
                flexDirection: {
                  base: "column",
                  md: "row",
                },
                whiteSpace: {
                  lg: "nowrap",
                },
                textAlign: "center",
                gap: {
                  base: ".5rem",
                },
                fontSize: {
                  base: "1rem",
                  md: "1.2rem",
                },
              }}
            >
              <Text>View Archived Reservations</Text>
              <Switch
                size={{
                  base: "lg",
                }}
                isChecked={showArchived}
                onChange={toggleShowArchived}
              />
            </Flex>
            <Input
              type="date"
              name="date"
              variant={"outline"}
              value={currentDate}
              onChange={(e) => updateDate(e)}
              // @ts-ignore
              format="dd/mm/yyyy"
              className="date"
            />
          </Flex>
        </Flex>

        <Wrap
          spacing={{
            base: "2rem",
            sm: "3rem",
            md: "4rem",
          }}
          marginLeft={{
            base: "0",
            sm: "20%",
            md: "0",
          }}
          sx={{
            w: "100%",
            padding: "1rem",
            display: "flex",
            flexDirection: "row",
          }}
        >
          {reservationsData.map((reservation) => {
            return (
              <InfoCard
                removeReservation={removeReservation}
                key={reservation.id}
                {...reservation}
              />
            );
          })}
        </Wrap>
      </Flex>
    </>
  );
}

export default Admin;

function InfoCard(
  props: ReservationType & {
    removeReservation: (id: string) => void;
  }
) {
  let { archived, seated, id, removeReservation } = props;
  let toast = useToast();
  return (
    <WrapItem
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        borderColor: "border.black",
        borderWidth: "2px",
        borderStyle: "solid",
        borderRadius: "10px",
        padding: "1rem",

        width: {
          base: "20rem",
          sm: "25rem",
        },
        ".info-container": {
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "space-between",
          gap: "1rem",
          width: "100%",
        },
        ".info-text-container": {
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          gap: ".1rem",
          width: "20rem",
          fontSize: "1rem",
        },
        ".buttons-container": {
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-start",

          width: "100%",
          gap: "2rem",
          button: {
            width: "54%",
            textAlign: "center",
            fontSize: "1rem",
            padding: "1rem", // top right bottom left
          },
        },

        table: {
          width: "100%",
          borderCollapse: "collapse",
          borderSpacing: "0",
          borderRadius: "10px",
          overflow: "hidden",

          tr: {
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            width: {
              base: "47%",
              sm: "70%",
            },
            paddingTop: ".5rem",
          },
        },
      }}
    >
      <Flex className="info-container">
        <DynamicInfoTable {...props} />

        <Flex className="buttons-container">
          <Button
            isDisabled={seated}
            pointerEvents={seated ? "none" : "auto"}
            onClick={async () => {
              let req = await fetch("/api/seated", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                  "x-token": (await getCookie("x-token")) as string,
                },
                body: JSON.stringify({ id: id, seated: true }),
              });
              if (req.status === 200) {
                toast({
                  title: "Reservation marked as seated",
                  status: "success",
                  duration: 3000,
                  isClosable: true,
                });
              }
            }}
          >
            Mark as Seated
          </Button>
          <Button
            isDisabled={archived}
            _disabled={{ opacity: ".2" }}
            pointerEvents={archived ? "none" : "auto"}
            background="#004819"
            onClick={async () => {
              let req = await fetch("/api/archive", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                  "x-token": (await getCookie("x-token")) as any,
                },
                body: JSON.stringify({ id: id, archived: true }),
              });
              if (req.status === 200) {
                removeReservation(id);
                toast({
                  title: "Archived reservation",
                  status: "success",
                  duration: 3000,
                  isClosable: true,
                });
              }
            }}
          >
            Archive
          </Button>
        </Flex>
      </Flex>
    </WrapItem>
  );
}

export async function getServerSideProps(context: NextPageContext) {
  let xToken: string | undefined;
  try {
    xToken = context.req.headers.cookie.replace("x-token=", "").toString();
  } catch (err) {
    return {
      props: {
        reservations: [],
      },
    };
  }

  try {
    let req = await fetch("http://localhost:3000/api/reservations", {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        "x-token": xToken,
      },
    });
    let data = await req.json();
    return {
      props: {
        reservations: data,
      },
    };
  } catch (err) {
    console.error(err);
    return {
      props: {
        reservations: [],
      },
    };
  }
}
