import { Link, Outlet, NavLink, useLoaderData } from "react-router-dom";
import vans from "../../vans.json";
import { requireAuth } from "../../utils";

// eslint-disable-next-line react-refresh/only-export-components
export async function loader({ params, request }) {
  await requireAuth(request);
  return vans.find((van) => van.id === params.id);
}

export default function HostVanDetail() {
  // const params = useParams();
  const van = useLoaderData();

  const activeStyles = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616",
  };

  // const van = vans.find((van) => van.id === params.id);

  return (
    <section>
      <Link to=".." relative="path" className="back-button">
        &larr; <span>Back to all vans</span>
      </Link>

      <div className="host-van-detail-layout-container">
        <div className="host-van-detail">
          <img src={van.imageUrl} />
          <div className="host-van-detail-info-text">
            <i className={`van-type van-type-${van.type}`}>{van.type}</i>
            <h3>{van.name}</h3>
            <h4>${van.price}/day</h4>
          </div>
        </div>

        <nav className="host-van-detail-nav">
          <NavLink
            to="."
            end
            style={({ isActive }) => (isActive ? activeStyles : null)}
          >
            Details
          </NavLink>
          <NavLink
            to="pricing"
            style={({ isActive }) => (isActive ? activeStyles : null)}
          >
            Pricing
          </NavLink>
          <NavLink
            to="photos"
            style={({ isActive }) => (isActive ? activeStyles : null)}
          >
            Photos
          </NavLink>
        </nav>

        <Outlet context={{ van }} />
      </div>
    </section>
  );
}
