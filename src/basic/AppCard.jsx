import React from "react";

function AppCard(props) {
  return (
    <div>
      <Card>
        <h1 className=" text-2xl text-white">Card One</h1>
      </Card>
      <Card>
        <h1 className=" text-lg  text-red-200">Card Two</h1>
        <span className=" text-red-200">hi, there!</span>
      </Card>
    </div>
  );
}

function Card(props) {
  return (
    <>
      <div className="flex flex-col justify-center items-center m-10 h-40 w-40 bg-blue-400 rounded-2xl">
        {props.children}
      </div>
    </>
  );
}
export default AppCard;
