import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="mt-10 text-center">
      <Link className="mr-6 bg-red-300 p-2 rounded border-1-gray" to="/">
        Home
      </Link>
      <Link className="mr-6 bg-red-300 p-2 rounded border-1-gray" to="/about">
        About
      </Link>
      <Link className="mr-6 bg-red-300 p-2 rounded border-1-gray" to="/github">
        Login GitHub
      </Link>
      <Link className="mr-6 bg-red-300 p-2 rounded border-1-gray" to="/login">
        Login Google
      </Link>
    </div>
  );
};

export default Header;
