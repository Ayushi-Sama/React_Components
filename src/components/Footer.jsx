import react from "react";

function Footer() {
  var date = new Date();
  var year = date.getFullYear();
  console.log(year);
  return (
    <footer>
      <p>Copyright © {year}</p>
    </footer>
  );
}

export default Footer;
