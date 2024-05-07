import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../Utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";

const WatchPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  const [searchParam] = useSearchParams();
  // console.log(searchParam.get("v"));
  return (
    <div className="flex flex-col w-full">
      <div className="p-5 flex">
        <div>
          <iframe
            className="rounded-lg"
            width="980"
            height="500"
            src={"https://www.youtube.com/embed/" + searchParam.get("v")}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        {/* <div> */}
        {/* <div className="ml-2 border border-black w-full h-[500px] bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse"> */}
        <div>
          {" "}
          <LiveChat />
        </div>
        {/* <input
            type="text"
            className="border border-black  bg-green-400 ml-5 mt-2 px-1"
          /> */}
        {/* </div> */}
      </div>
      <CommentsContainer />
    </div>
  );
};

export default WatchPage;
