import './App.css';
import {Container, Grid} from "@mui/material";
import Form from "./components/Form";
import ItemList from "./components/ItemList";

function App() {
  return (
      <Container>
          <Grid container spacing={2} justifyContent="space-around">
              <Grid item xs={10} sm={8} md={4.5}>
                  <Form/>
              </Grid>
              <Grid item xs={10} sm={8} md={4.5}>
                  <ItemList/>
              </Grid>
          </Grid>
      </Container>
  );
}

export default App;
