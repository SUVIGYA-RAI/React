import Counterclass from "./classComponent";
import Greeting from "./greeting";
import CounterFunction from "./functionalComponent";
import WelcomeMessage from "./funcCompo2"
import ProfileCard from "./profileCard";
import InlineStyledBox from "./inlineStyle";
import Button from "./button";
import Card from "./card";

function App() {
  return (
    <h1 className="text-4xl font-bold text-red-500">
      
      <Greeting />
      <Counterclass />
      <CounterFunction />
      <WelcomeMessage name="Suvigya !" />

      <ProfileCard name='Suvigya' role='React Developer' />
      <ProfileCard name='Alice' role='Backend Developer' />

      <InlineStyledBox />
      <Button />
      <Card title="My card" description="This is CSS styled card" />
    </h1>
  );
}
export default App;