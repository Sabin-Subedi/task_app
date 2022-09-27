import { Box } from "@mui/system";
import SideNavbar from "../../components/sidenav";

const DefaultLayout = ({ children }) => {
  return (
    <Box sx={{ display: "flex", height: "100vh" }}>
      <Box sx={{ flexBasis: "20%", height: "100%" }}>
        <SideNavbar />
      </Box>
      <Box sx={{ flexBasis: "80%", px: 5 }}>
        {/* <Navbar /> */}
        {children}
      </Box>
    </Box>
  );
};

export const defaultLayout = (page) => <DefaultLayout>{page}</DefaultLayout>;

export default DefaultLayout;
