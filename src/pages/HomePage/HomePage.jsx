import "./HomePage.scss";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <>
      <Link className="leggo" to="/categories">
        LEGGO
      </Link>
    </>
  );
}
