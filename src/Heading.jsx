import React from "react";
function Heading() {
  const date = new Date();
  const currentTime = date.getHours();
  const customStyle = {
    color: "",
  };

  let title;
  if (currentTime < 12) {
    title = "Good Morning";
    customStyle.color = "red";
  } else if (currentTime < 18) {
    title = "Good Afternoon";
    customStyle.color = "green";
  } else {
    title = "Good Night";
    customStyle.color = "blue";
  }
  return (
    <h1 className="heading" style={customStyle}>
      {title}
    </h1>
  );
}
export default Heading;
