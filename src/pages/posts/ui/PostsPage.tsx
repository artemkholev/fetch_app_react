import { useEffect } from "react";
import { PostsList } from "@/features/posts-lists";
import { Select } from "@/shared/ui";
import { usePosts } from "@/entities/posts";

const PostsPage = () => {
  const {
    isLoading,
    isError,
    posts,
    sortedPosts,
    selected,
    setSelected,
    page,
    setPage,
    totalPages,
    selectOptions,
    getPosts,
    removePost,
  } = usePosts();

  const changePage = (currentPage: number) => {
    setPage(currentPage);
  };

  useEffect(() => {
    getPosts();
  }, [page, getPosts]);

  return (
    <div className="containerPosts">
      <div className="sortOption">
        <Select
          value={selected}
          onChange={setSelected}
          options={selectOptions}
        />
      </div>

      <PostsList
        posts={selected === "general" ? posts : sortedPosts}
        removePost={removePost}
      />

      {isLoading && <p style={{ margin: "10px" }}>Loading...</p>}

      {isError && (
        <p style={{ margin: "10px", color: "red" }}>
          Ошибка: {isError.toString()}
          (Если списки постов не подгрузились, проблема на стороне сервера,
          откуда беру данные, перезагрузка страницы должна решить проблему) -
          https://jsonplaceholder.typicode.com/
        </p>
      )}

      <div className="page__wrapper">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((pagePath) => (
          <div
            key={pagePath}
            className={`navigation-pages ${
              page === pagePath ? "current-page" : ""
            }`}
            onClick={() => changePage(pagePath)}
          >
            {pagePath}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostsPage;
