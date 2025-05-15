import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PostsList } from "@/features/posts-lists";
import { Select } from "@/shared/ui";
import { usePosts } from "@/entities/posts";
import { FiRefreshCw } from "react-icons/fi";

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
    <div className="containerPosts max-w-6xl mx-auto px-4 py-8">
      {/* Анимированный индикатор загрузки */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 flex items-center justify-center z-[1000]"
            style={{
              background: "rgba(255, 255, 255, 0.8)",
              backdropFilter: "blur(5px)",
            }}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 500,
                damping: 20,
              }}
              className="flex flex-col items-center"
            >
              <motion.div
                animate={{
                  opacity: [0.6, 1, 0.6],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <FiRefreshCw
                  className="text-5xl mb-4"
                  style={{
                    background:
                      "linear-gradient(90deg, #ff8a00, #e52e71, #5f2c82)",
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    color: "transparent",
                  }}
                />
              </motion.div>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xl font-medium"
                style={{
                  background: "linear-gradient(90deg, #ff8a00, #e52e71)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                }}
              >
                Загрузка постов...
              </motion.p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <h1
        className="text-4xl font-bold mb-8 text-center"
        style={{
          background: "linear-gradient(90deg, #ff8a00, #e52e71, #5f2c82)",
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          color: "transparent",
        }}
      >
        Исследуйте Посты
      </h1>

      <div className="sortOption mb-8 ml-auto">
        <Select
          value={selected}
          onChange={setSelected}
          options={selectOptions}
        />
      </div>

      {isError && (
        <div className="p-4 rounded-lg bg-red-50 text-red-600 mb-8">
          Ошибка загрузки. Пожалуйста, попробуйте перезагрузить страницу. (Если
          списки постов не подгрузились, проблема на стороне сервера, откуда
          беру данные, перезагрузка страницы должна решить проблему) -
          https://jsonplaceholder.typicode.com/
        </div>
      )}

      {!isLoading && (
        <>
          <PostsList
            posts={selected === "general" ? posts : sortedPosts}
            removePost={removePost}
          />

          {totalPages > 1 && (
            <div className="page__wrapper flex justify-center mt-12">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (pagePath) => (
                  <div
                    key={pagePath}
                    className={`navigation-pages mx-1 ${
                      page === pagePath ? "current-page" : ""
                    }`}
                    onClick={() => changePage(pagePath)}
                  >
                    {pagePath}
                  </div>
                )
              )}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default PostsPage;
