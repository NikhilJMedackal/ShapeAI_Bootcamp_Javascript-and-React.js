import React from "react";
function Footer() {
  var presentYear = new Date().getFullYear();
  return (
    <div>
      <footer>
        <p>Copyright @ {presentYear}</p>
      </footer>
    </div>
  );
}
export default Footer;
