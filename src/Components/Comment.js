import React from "react";

const Comment = ({ data }) => {
  return (
    <div className="flex flex-row border border-black my-2">
      <img
        alt="user-logo"
        className="h-16 w-16"
        src="https://png.pngtree.com/png-vector/20191110/ourmid/pngtree-avatar-icon-profile-icon-member-login-vector-isolated-png-image_1978396.jpg"
      />
      <div className="pt-3">
        <p className="font-bold">@{data.name} </p>
        <p>{data.text}</p>
      </div>
    </div>
  );
};

export default Comment;
