import React from "react";
import { Button } from "./Button";

const ButtonList = () => {
  const list=["All","Javascript","React","Learning","Music","Cricket","Love","Gaming","Movies","Cooking","Food","Live","Gameshows","Virat",];

  return (
    <div className="flex cursor-pointer my-5">
        {
          list.map((v,index)=>(
            <Button name={v} key={index}/>
          ))
        }
    </div>
  );
};

export default ButtonList;
