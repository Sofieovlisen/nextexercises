import Header from "./components/Header";
import Text from "./components/Text";
import Watch from "./components/Watch";
import Colors from "./components/Colors";
import Watches from "./components/Watches";

export default function Home() {
  return (
    <div>
      <Header></Header>
      <div className="stor">
        <Text></Text>
        <Watch></Watch>
        <Colors></Colors>
      </div>
      <Watches></Watches>
    </div>
  );
}
