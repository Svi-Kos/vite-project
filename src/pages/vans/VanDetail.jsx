import { Link, useLocation, useLoaderData } from "react-router-dom";
import vans from "../../vans.json";

// eslint-disable-next-line react-refresh/only-export-components
export function loader({ params }) {
  return vans.find((van) => van.id === params.id);
}

export default function VanDetail() {
  // const params = useParams();
  const location = useLocation();
  const van = useLoaderData();

  // const van = vans.find((van) => van.id === params.id);

  const search = location.state?.search || "";
  const type = location.state?.type || "all";

  return (
    <div className="van-detail-container">
      <Link to={`..${search}`} relative="path" className="back-button">
        &larr; <span>Back to {type} vans</span>
      </Link>

      <div className="van-detail">
        <img src={van.imageUrl} />
        <i className={`van-type ${van.type} selected`}>{van.type}</i>
        <h2>{van.name}</h2>
        <p className="van-price">
          <span>${van.price}</span>/day
        </p>
        <p>{van.description}</p>
        <button className="link-button">Rent this van</button>
      </div>
    </div>
  );
}
