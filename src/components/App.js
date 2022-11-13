import React from "react";
import ReactDOM from "react-dom";
import Heading from "./Heading";
import List from "./List";
import Hours from "./Hours";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import Card from "./Card";
import Avatar from "./Avatar";
import contacts from "../contacts";
import notes from "../notes";

function createCard(contact) {
  return (
    <Card
      key={contact.id}
      name={contact.name}
      img={contact.img}
      tel={contact.tel}
      email={contact.email}
    />
  );
}

// ReactDOM.render("What to show ", "Where to show")
function App() {
  return (
    <div>
      <Header />
      {notes.map((x) => (
        <Note key={x.id} title={x.title} content={x.content} />
      ))}
      <Footer />
      {/* <h1 className="heading">My Contacts</h1>
      <Avatar img="https://picsum.photos/200" />
      {contacts.map(createCard)} */}
      {/* <Card
        name={contacts[0].name}
        img={contacts[0].img}
        tel={contacts[0].tel}
        email="a@gmail.com"
      />
      <Card
        name={contacts[1].name}
        img={contacts[1].img}
        tel={contacts[1].tel}
        email={contacts[1].email}
      />

      <Card
        name={contacts[2].name}
        img={contacts[2].img}
        tel={contacts[2].tel}
        email={contacts[2].email}
      /> */}
      {/* <Header /> */}
      {/* <Heading />
      <List />
      <Hours /> */}
      {/* <Note /> */}
      {/* <Footer /> */}
    </div>
  );
}
export default App;
