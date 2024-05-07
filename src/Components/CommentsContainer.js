import React from "react";
import Comment from "./Comment";

const CommentsData = [
  {
    name: "Prasad",
    text: "Lorem ipsum dolor sit amet",
    replies: [
      {
        name: "Prasad",
        text: "Lorem ipsum dolor sit amet",
        replies: [
          {
            name: "Prasad",
            text: "Lorem ipsum dolor sit amet",
            replies: [
              {
                name: "Prasad",
                text: "Lorem ipsum dolor sit amet",
                replies: [
                  {
                    name: "Prasad",
                    text: "Lorem ipsum dolor sit amet",
                    replies: [
                      {
                        name: "Prasad",
                        text: "Lorem ipsum dolor sit amet",
                        replies: [],
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            name: "Prasad",
            text: "Lorem ipsum dolor sit amet",
            replies: [
              {
                name: "Prasad",
                text: "Lorem ipsum dolor sit amet",
                replies: [],
              },
            ],
          },
        ],
      },
      {
        name: "Prasad",
        text: "Lorem ipsum dolor sit amet",
        replies: [],
      },
    ],
  },
  {
    name: "Prasad",
    text: "Lorem ipsum dolor sit amet",
    replies: [],
  },
  {
    name: "Prasad",
    text: "Lorem ipsum dolor sit amet",
    replies: [],
  },
];

const CommentList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div>
      <Comment key={index} data={comment} />
      <div className="ml-5 pl-2 border border-l-black">
        <CommentList comments={comment.replies} />
      </div>
    </div>
  ));
};
const CommentsContainer = () => {
  return (
    <div className="m-3 p-2 border border-green-500">
      <h1 className="font-bold">Comments :</h1>
      <CommentList comments={CommentsData} />
    </div>
  );
};

export default CommentsContainer;
