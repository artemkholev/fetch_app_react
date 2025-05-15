import { createBrowserRouter } from "react-router-dom";
import { withLayout } from "./providers/withLayout";
import { HomePage } from "@/pages/home";
import { PostsPage } from "@/pages/posts";

export const router = createBrowserRouter([
  {
    path: "/",
    element: withLayout(HomePage)(),
  },
  {
    path: "/posts",
    element: withLayout(PostsPage)(),
  },
]);
