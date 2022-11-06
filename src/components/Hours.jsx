import react from "react";

function Hours() {
  var customStyle = {
    color: ""
  };

  const date = new Date();
  const hours = date.getHours();
  console.log(hours);

  var greeting;

  if (hours < 12) {
    greeting = "Good Morning";
    customStyle.color = "red";
  } else if (hours >= 12 && hours < 18) {
    greeting = "Good Afternoon";
    customStyle.color = "blue";
  } else {
    greeting = "Good Night";
    customStyle.color = "green";
  }

  return (
    <h1 className="heading" style={customStyle}>
      {greeting}
    </h1>
  );
}

export default Hours;
