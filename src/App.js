import "./App.css";
import Home from "./Home";
import Nav from "./Nav";
import About from "./About";
import Item from "./Item";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Search from "./Search";
// import { useState } from "react";
// import Form from "./Form";
function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/about">
            <About />
          </Route>

          <Route path="/item/:id">
            <Item />
          </Route>
          <Route path="/">
            <Search />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
  // const [person, setPerson] = useState("");
  // const [people, setPeople] = useState([]);
  // console.log(person);
  // console.log(people);

  // const myClick = (e) => {
  //   e.preventDefault();
  //   if (person) {
  //     const newPerson = { name: person, id: new Date().getTime() };
  //     setPeople([...people, newPerson]);
  //   }
  //   setPerson("");
  // };
  // const Edit = (id) => {
  //   console.log(id);
  //   const EditPerson = people.findIndex((data) => data.id == id);
  //   console.log(EditPerson);
  //   setPerson(EditPerson.name);
  // };

  // return (
  //   <div
  //     className="App"
  //     style={{ padding: "100px", backgroundColor: "aqua", height: "100vh" }}
  //   >
  //     <Form
  //       click={setPerson}
  //       handleClick={(e) => myClick(e)}
  //       people={people}
  //       Edit={Edit}
  //       person={person}
  //     />
  //   </div>

  // );
}

export default App;
