import { Button, Flex, Input } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useState } from "react";
import { setCookie } from "cookies-next";

export default function AdminLogin() {
  const [password, setPassword] = useState("");
  let router = useRouter();
  return (
    <Flex
      sx={{
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "1rem",
        height: "80vh",
        input: {
          width: {
            base: "20rem",
            sm: "25rem",
            md: "50vw",
          },
          height: {
            md: "3rem",
          },
          fontSize: {
            sm: "1.3rem",
          },
          paddingTop: {
            sm: "-1rem",
          },
        },
        button: {
          width: {
            base: "8rem",
          },

          fontSize: {
            sm: "1rem",
            md: "1.3rem",
          },
          padding: {
            base: "1.2rem",
            md: "1.3rem",
          },
        },
      }}
    >
      <Input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type="text"
        placeholder="Password"
        borderColor="border.black"
      />
      <Button
        isDisabled={password.length < 1}
        onClick={async () => {
          let res;
          try {
            res = await fetch("/api/login", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                password: password,
              }),
            });
          } catch (err) {
            console.log(err);
          }
          if (!res) return;

          if (res.status === 200) {
            let xToken = res.headers.get("x-token");
            setCookie("x-token", xToken, {
              secure: true,
              expires: new Date(Date.now() + 7 * 60 * 60 * 1000), // 7 hours
              maxAge: 7 * 60 * 60, // 7 hours
              httpOnly: true,
              sameSite: "strict",
            });

            return router.replace("/admin/dashboard");
          }
        }}
      >
        Login
      </Button>
    </Flex>
  );
}
