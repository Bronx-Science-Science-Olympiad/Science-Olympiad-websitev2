import Link from "next/link";

const Nav = () => {
  return (
    <div className="bg-black font-sans font-bold flex items-center px-16 py-8 sticky top-0 left-0">
      <h1 className="m-auto">SCIENCE OLYMPIAD</h1>
      <ul className="flex space-x-5 m-auto">
        <Link href="/">
          <li>Home</li>
        </Link>
        <Link href="/about">
          <li>About</li>
        </Link>
        <Link href="/events">
          <li>Events</li>
        </Link>
        <li className="text-yellow-500">Join Us</li>
      </ul>
    </div>
  );
};

export default Nav;
