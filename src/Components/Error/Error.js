import React, {useEffect} from "react";

const Error = () => {
  useEffect(() => {
    alert("Can not fetch API");
  }, []);
   let x = true
  return <div className="Error">
    
  </div>;
};

export default Error;
