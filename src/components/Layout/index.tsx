import {  Container, Divider } from "@mui/material";

import Header from "../Header";
import TitlePages from "../TitlePages";

//TODO: Change any to a proper type
export default function Layout({ children }: any) {
  return (
    <>
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          flexDirection: "column",
          px: { xs: 1, sm: 2, md: 4 },
          gap: { xs: 2, sm: 4 },
        }}
      >
        <Header />

       <TitlePages />

        <Divider />

        <Container
          disableGutters
          component="main"
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: { xs: 2, sm: 4 },
          }}
        >
          {children}
        </Container>
      </Container>
    </>
  );
}
