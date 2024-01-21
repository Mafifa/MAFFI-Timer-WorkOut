import "./App.css";
import { TimerCard } from "./componets/TimerCard.tsx";
import { Header } from "./componets/Header.tsx";
import { Container } from "./componets/Container.tsx";
import { ProgressBar } from "./componets/ProgressBar.tsx";

function App() {
  return (
    <>
      <Header />
      <Container props={"mt-20"}>
        <TimerCard></TimerCard>
      </Container>
      <Container>
        <div className="mt-24">
          <ProgressBar></ProgressBar>
        </div>
      </Container>
    </>
  );
}

export default App;
