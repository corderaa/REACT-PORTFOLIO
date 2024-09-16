import "./../Styles/navbar.css";
import "./../index.css";

function myNavbar() {
  return (
    <div className="flex flex-wrap items-center justify-between font-light p-8 bg-neutral-900/[0.5] rounded-md">
      <h1 className=" w-60 text-xl">Corderaa</h1>
      <nav className="flex space-x-12">
          <li className="">
            <a className="nav-text" href="#">About Me</a>
          </li>
          <li>
            <a href="#" className="nav-text">Learning</a>
          </li>
          <li>
            <a href="#" className="nav-text">Projects</a>
          </li>
          <li>
            <a href="#" className="nav-text">Socials</a>
          </li>
      </nav>
    </div>
  );
}

export default myNavbar;
