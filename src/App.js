import { useState } from "react";
import "./App.css";
import ButtonAppBar from "./Appbar";
import SimpleCard from "./Card";
import {createMuiTheme,ThemeProvider} from '@material-ui/core/styles'
import { Paper } from "@material-ui/core";

function App() {

  const[darkMode,setDarkMode]=useState(false)

  const theme=createMuiTheme({
    palette:{
      type:darkMode?"dark":"light"
    }
  })



  return (

    <ThemeProvider theme={theme}>
      <Paper style={{height:"250vh"}}>
    <div className="App">
      <ButtonAppBar check={darkMode} change={()=>setDarkMode(!darkMode)}/>
      <h1>Dark Mode</h1>

      <SimpleCard />
    </div>
    </Paper>
    </ThemeProvider>
  );
}

export default App;
