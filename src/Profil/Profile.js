import React from "react";
import PropTypes from "prop-types";

const Profile = ({ fullName, age, profession, style, handleName }) => {
  return (
    <div style={style}>
      {" "}
      My name is:
      {fullName}
      <br></br>
      My age: I'm
      {age}
      Years old
      <br></br>
      My profession is:
      {profession}
      {handleName()}
    </div>
  );
};

// Profile.defaultProps = { fullName:"GO MY CODE", age:4, profession: "the world of javascript" };

Profile.propsTypes = { fullName: PropTypes.number };
Profile.propsTypes = { fullName: PropTypes.string };
Profile.propsTypes = { fullName: PropTypes.string };

export default Profile;
