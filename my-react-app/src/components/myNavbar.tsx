import "./../Styles/navbar.css";
import "./../index.css";

function myNavbar() {
  return (
    <div className="flex flex-wrap items-center justify-between">
      <h1>Ugaitz Cordero</h1>
      <nav className="flex space-x-12">
          <li>
            <a href="#">Who Am I</a>
          </li>
          <li>
            <a href="#">Learning</a>
          </li>
          <li>
            <a href="#">Projects</a>
          </li>
          <li>
            <a href="#">Socials</a>
          </li>
      </nav>
    </div>
  );
}

export default myNavbar;
