import { Container } from "@mui/material";
import Header from "../Header";

// export default function Layout({ children }: IParent) {
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
