import React from "react";
import { PostItem, type IPost } from "@/entities/posts";

interface PostsListProps {
  posts: IPost[];
  removePost: (postToRemove: IPost) => void;
}

export const PostsList: React.FC<PostsListProps> = ({ posts, removePost }) => {
  if (posts.length === 0) {
    return <h2>Данных нет</h2>;
  }

  return (
    <div>
      <h3>Посты</h3>
      <div className="bucket-list">
        {posts.map((post) => (
          <PostItem key={post.id} post={post} removePost={removePost} />
        ))}
      </div>
    </div>
  );
};

export default PostsList;
