import Link from "next/link";

const Nav: React.FC = () => {
  return (
    <div className="sticky top-0 left-0 z-50 flex items-center px-24 py-6 text-2xl font-light bg-black ont-sans p">
      <h1 className="mr-auto">BxSciOly</h1>
      <ul className="flex space-x-7">
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
