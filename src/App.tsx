import { ThemeProvider, createTheme } from "@mui/material";
import "./styles.css";
import FourCardFeature from "./Components/FourCardFeature/FourCardFeature";

const theme = createTheme({
  typography: {
    body1: {
      fontSize: 15,
    },
    h1: {
      fontSize: 20,
    },
    fontFamily: "Poppins",
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="app">
        <FourCardFeature />
      </div>
    </ThemeProvider>
  );
}

export default App;
