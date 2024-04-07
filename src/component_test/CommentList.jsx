import React from "react";
import Comment from "./Comment";

const comments = [
    {
        name: "권수현",
        comment: "안녕하세요, 반갑습니다.",
    },
    {
        name: "권수현",
        comment: "안녕하세요, 반갑습니다.",
    },
    {
        name: "권수현",
        comment: "안녕하세요, 반갑습니다.",
    },
]

function CommentList(props){
    return(
        <div>
            {comments.map((comment)=>{
                return (
                    <Comment name={comment.name} comment={comment.comment} />
                );
            })}
        </div>
    );
}

export default CommentList;