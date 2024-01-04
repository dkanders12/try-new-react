import "./App.scss";
import { Header } from "./components/Header/Header";
import { PageTitle } from "./components/propsTitle/PropsTitle";
import { List } from "./components/List/List";

const myarray = ["Anders", "Maja", "Mads", "Henrik", "Hanne"];

function App() {
  return (
    <>
      <PageTitle pagetitle="den virker"> </PageTitle>
      <Header></Header>
      <List data={myarray}></List>
    </>
  );
}

export default App;
