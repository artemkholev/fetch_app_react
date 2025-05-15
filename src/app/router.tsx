import { createBrowserRouter } from "react-router-dom";
import { withLayout } from "./providers/withLayout";
import { HomePage } from "@/pages/home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: withLayout(HomePage)(),
  },
]);
