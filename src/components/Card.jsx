import react from "react";
import Avatar from "../components/Avatar";

function Card(props) {
  return (
    <div className="card">
      <div className="top">
        <h2 className="name">{props.name}</h2>
        <Avatar img="https://picsum.photos/200" />
      </div>
      <div className="bottom">
        <p className="info">{props.email}</p>
        <p className="info">{props.tel}</p>
      </div>
    </div>
  );
}

export default Card;
