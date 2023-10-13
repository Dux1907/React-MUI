import Dashboard from "./assets/Dashboard";
import Navbar from "./assets/Navbar";
import Data from "./assets/Data";
import Container from "./assets/Container";
import Overview from "./assets/Overview";
import Customers from "./assets/Customers";
import Tables from './assets/Tables'
import Grid from "@mui/material/Grid";

const App = () => {
  return (
    <Grid container style={{ background: "#f8f4fc" }}>
      <Grid item style={{ background: "#040440",minHeight:'100vh'}}>
      <Dashboard />
      </Grid>
       {/* using a container inside another container */}
      <Grid item xs   className="items">
        <Navbar />
        <Grid container> 
          {Data.map((data, index) => {
            return (
              <Grid
                item
                xs
                sm={6}
                md={6}
                lg={3}
                xl={3}
                className="items"
                key={index}
              >
                <Container data={data} />
              </Grid>
            );
          })}
        <Grid
          item
          xs = {12}
          sm = {12}
          md={7}
          lg={8}
          xl={8}
          className="items"
        >
          <Overview />
          </Grid> 
          <Grid
          item xs={12}
          sm={12}
          md={5}
          lg={4}
          xl={4}
          className="items"
        >
          <Customers/>
          </Grid> 
          <Grid
            item xs sm={12} md={12} lg={12} xl = {12}
          className="items p-xs-1"
        >
          <Tables/>
        </Grid> 
        
        
      </Grid>
       </Grid>
    </Grid>
  );
};

export default App;
