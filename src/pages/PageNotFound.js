import { Link } from "react-router-dom"
import { useTitle } from "../hooks/useTitle";
import Pagenotfound from "../assets/images/pagenotfound.jpg"


export const PageNotFound = () => {
  useTitle("Page Not Found");
  return (
    <section className="pageNotFound">
      <p>404 / Page Not Found</p>
      <img src={Pagenotfound} alt="page not found" />
      <Link to="/">
        <button>Go back home</button>
      </Link>
    </section>
  )
}
