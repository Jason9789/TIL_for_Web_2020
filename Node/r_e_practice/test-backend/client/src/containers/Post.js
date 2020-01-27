import React from "react";
import BigText from "../components/BigText";

const Posts = ({ params }) => {
  return (
    <div>
      <BigText>{params.id}</BigText>
    </div>
  );
};

export default Posts;
