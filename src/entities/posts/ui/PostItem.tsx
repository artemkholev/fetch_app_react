import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { PathNames } from "@/shared/constants/route.constants";
import type { IPost } from "../lib";

interface PostItemProps {
  post: IPost;
  removePost: (postToRemove: IPost) => void;
}

export const PostItem: React.FC<PostItemProps> = ({ post, removePost }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLeftClick = () => {
    navigate({
      pathname: PathNames.POST.replace(":id", post.id.toString()),
      search: location.search,
    });
  };

  const handleRightClick = (e: React.MouseEvent) => {
    e.preventDefault();
    removePost(post);
  };

  return (
    <div
      className="post"
      onClick={handleLeftClick}
      onContextMenu={handleRightClick}
    >
      <div className="post__info">
        <p>{post.id}</p>
        <div className="post__info-elem">
          <p>
            <strong>Название:</strong> {post.title}
          </p>
          <p>
            <strong>Описание:</strong> {post.body}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PostItem;
