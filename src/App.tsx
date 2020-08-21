/** @jsx jsx */
import { jsx, ThemeProvider, Container, Grid, Flex, Box } from "theme-ui";
import theme from "./theme";
import Card from "./Card";
import ColorSwitch from "./ColorSwitch";

const cards = [1, 2, 3, 4, 5, 6]; // Demo data to generate 6 cards

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Grid>
        <Container>
          <ColorSwitch />
          <Flex sx={{ flexWrap: "wrap" }}>
            {cards.map((card) => (
              <Box key={card} sx={{ width: ["100%", "50%", "33.33%"] }}>
                <Card />
              </Box>
            ))}
          </Flex>
        </Container>
      </Grid>
    </ThemeProvider>
  );
}

export default App;
