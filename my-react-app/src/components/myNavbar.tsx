import "./../Styles/navbar.css";
import "./../index.css";

function myNavbar() {
  return (
    <div className="flex flex-wrap items-center justify-between font-light p-8 bg-neutral-900/[0.5] rounded-md">
      <h1 className=" w-60 text-xl">Corderaa</h1>
      <nav className="flex space-x-12">
          <li>
            <a href="#">About Me</a>
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
