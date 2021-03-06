import './App.css';
import {Container, Grid} from "@mui/material";
import Form from "./components/Form";
import Table from "./components/Table";

function App() {
  return (
      <Container>
          <Grid container spacing={2} justifyContent="space-around">
              <Grid item xs={10} sm={8} md={4.5}>
                  <Form/>
              </Grid>
              <Grid item xs={10} sm={8} md={4.5}>
                  <Table/>
              </Grid>
          </Grid>
      </Container>
  );
}

export default App;
