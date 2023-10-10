// layout
import { HeaderOnly } from "~/components/Layout";

import Home from "~/pages/Home";
import Following from "~/pages/Following";
import Upload from "~/pages/Upload";
import Search from "~/pages/Search";

const publicRoutes = [
  { path: "/", comment: Home },
  { path: "/following", comment: Following },
  { path: "/upload", comment: Upload, layout: HeaderOnly },
  { path: "/search", comment: Search, layout: null },
];
const privateRoutes = [];
export { publicRoutes, privateRoutes };
