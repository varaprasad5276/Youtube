import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../Utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../Utils/constants";
import { cacheResults } from "../Utils/searchSlice";
import { YT_LOGO, MENU, SEARCH_LOGO, USER_LOGO } from "../Utils/constants";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const searchCache = useSelector((store) => store.search);
  const dispatch = useDispatch();

  useEffect(() => {
    // make an API call after every key press
    // decline API - but if the difference b/w  two keys gap lessthan 3 seconds
    // call API - gap between >3 seconds

    const timer = setTimeout(() => {
      //   if search something new ,we are checking that are available in store or not ,
      // if there we are declining API call ,
      // if not there in store   - then we are calling API  and we are updating the   new data in store
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        callAPI();
      }
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const callAPI = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    console.log("API call - ", searchQuery);
    setSuggestions(json[1]);

    //update cache
    dispatch(
      cacheResults({
        [searchQuery]: json[1],
      })
    );
  };

  const toggleHandler = () => {
    dispatch(toggleMenu());
  };

  const handleSelection = (value) => {
    console.log("Clicked suggestion:", value);
  };

  return (
    <div className="grid grid-flow-col shadow-lg sticky top-0">
      <div className="flex col-span-1">
        <img
          onClick={() => {
            toggleHandler();
          }}
          alt="menu"
          className="w-7 h-7 cursor-pointer"
          src={MENU}
        />
        <a href="/">
          <img alt="yt logo" className="w-20 h-5 ml-3 mt-1" src={YT_LOGO} />
        </a>
      </div>

      <div className="col-span-10 ">
        <div className=" text-center ">
          <input
            type="text"
            className="border border-gray-500 rounded-l-full w-1/2 h-8 pl-4"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />
          <button className="border border-gray-500  rounded-r-full h-8 w-8 ">
            <img
              alt="search"
              className="h-3 w-7 bg-gray-400"
              src={SEARCH_LOGO}
            />
          </button>
        </div>
        {showSuggestions && (
          <div className="fixed bg-white ml-[16rem] w-[33rem] rounded-2xl px-4 py-2 shadow-2xl">
            <ul className="">
              {suggestions.map((item, index) => (
                <li
                  key={index}
                  className=" hover:bg-gray-200 py-1 "
                  onClick={handleSelection(item)}
                >
                  🔍 {item}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="col-span-1">
        <img alt="user-logo" className="h-10" src={USER_LOGO} />
      </div>
    </div>
  );
};

export default Header;
