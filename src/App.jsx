import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import About from "./pages/About.jsx";
import Home from "./pages/Home.jsx";
import Login, {
  loader as loginLoader,
  action as loginAction,
} from "./pages/Login.jsx";
import Vans, { loader as vansLoader } from "./pages/vans/Vans.jsx";
import News, {
  loader as newsLoader,
  action as newsAction,
} from "./pages/News.jsx";
import VanDetail, {
  loader as vanDetailLoader,
} from "./pages/vans/VanDetail.jsx";
import Layout from "./components/Layout.jsx";
import HostLayout from "./components/HostLayout.jsx";
import Dashboard from "./pages/host/Dashboard.jsx";
import Income from "./pages/host/Income.jsx";
import Reviews from "./pages/host/Reviews.jsx";
import HostVans, { loader as hostVansLoader } from "./pages/host/HostVans.jsx";
import HostVanDetail, {
  loader as hostVanDetailLoader,
} from "./pages/host/HostVanDetail.jsx";
import HostVanInfo from "./pages/host/HostVanInfo.jsx";
import HostVanPricing from "./pages/host/HostVanPricing.jsx";
import HostVanPhotos from "./pages/host/HostVanPhotos.jsx";
import NotFound from "./pages/NotFound.jsx";
import Error from "./components/Error.jsx";

import { requireAuth } from "./utils";

import "./App.css";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route
        path="login"
        element={<Login />}
        loader={loginLoader}
        action={loginAction}
      />
      <Route
        path="news"
        element={<News />}
        loader={newsLoader}
        errorElement={<Error />}
        action={newsAction}
      />

      <Route path="vans">
        <Route
          index
          element={<Vans />}
          loader={vansLoader}
          errorElement={<Error />}
        />
        <Route path=":id" element={<VanDetail />} loader={vanDetailLoader} />
      </Route>

      <Route
        path="/host"
        element={<HostLayout />}
        loader={async ({ request }) => await requireAuth(request)}
      >
        <Route
          index
          element={<Dashboard />}
          loader={async ({ request }) => await requireAuth(request)}
        />
        <Route
          path="income"
          element={<Income />}
          loader={async ({ request }) => await requireAuth(request)}
        />
        <Route
          path="reviews"
          element={<Reviews />}
          loader={async ({ request }) => await requireAuth(request)}
        />
        <Route path="vans" element={<HostVans />} loader={hostVansLoader} />
        <Route
          path="vans/:id"
          element={<HostVanDetail />}
          loader={hostVanDetailLoader}
        >
          <Route
            index
            element={<HostVanInfo />}
            loader={async ({ request }) => await requireAuth(request)}
          />
          <Route
            path="pricing"
            element={<HostVanPricing />}
            loader={async ({ request }) => await requireAuth(request)}
          />
          <Route
            path="photos"
            element={<HostVanPhotos />}
            loader={async ({ request }) => await requireAuth(request)}
          />
        </Route>
      </Route>
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import About from "./pages/About.jsx";
// import Home from "./pages/Home.jsx";
// import Vans from "./pages/vans/Vans.jsx";
// import News from "./pages/News.jsx";
// import VanDetail from "./pages/vans/VanDetail.jsx";
// import Layout from "./components/Layout.jsx";
// import HostLayout from "./components/HostLayout.jsx";
// import Dashboard from "./pages/host/Dashboard.jsx";
// import Income from "./pages/host/Income.jsx";
// import Reviews from "./pages/host/Reviews.jsx";
// import HostVans from "./pages/host/HostVans.jsx";
// import HostVanDetail from "./pages/host/HostVanDetail.jsx";
// import HostVanInfo from "./pages/host/HostVanInfo.jsx";
// import HostVanPricing from "./pages/host/HostVanPricing.jsx";
// import HostVanPhotos from "./pages/host/HostVanPhotos.jsx";
// import NotFound from "./pages/NotFound.jsx";

// import "./App.css";

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Layout />}>
//           <Route index element={<Home />} />
//           <Route path="about" element={<About />} />
//           <Route path="news" element={<News />} />

//           <Route path="vans">
//             <Route index element={<Vans />} />
//             <Route path=":id" element={<VanDetail />} />
//           </Route>

//           <Route path="/host" element={<HostLayout />}>
//             <Route index element={<Dashboard />} />
//             <Route path="income" element={<Income />} />
//             <Route path="reviews" element={<Reviews />} />
//             <Route path="vans" element={<HostVans />} />
//             <Route path="vans/:id" element={<HostVanDetail />}>
//               <Route index element={<HostVanInfo />} />
//               <Route path="pricing" element={<HostVanPricing />} />
//               <Route path="photos" element={<HostVanPhotos />} />
//             </Route>
//           </Route>
//           <Route path="*" element={<NotFound />} />
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;
