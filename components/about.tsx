import Search from "../public/assets/about/about.svg";
import List from "../public/assets/about/list.svg";
import Image from "next/image";

const About: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="mb-12 font-sans text-6xl font-bold text-yellow-400">
        ABOUT US
      </h1>
      <p className="px-32 mb-24 text-3xl text-center font-slab">
        The Bronx Science Science Olympiad team is dedicated to exploring the
        world of science in every scientific discipline, ranging from biology to
        mathematics to engineering.
      </p>
      <div className="grid grid-cols-2 font-slab">
        <div className="flex flex-col items-center justify-start px-16">
          <div className="text-2xl">
            <ul className="mb-12 list-disc">
              <li className="mb-4">We are a student-led club!</li>
              <li className="mb-4">
                We help budding scientists discover their potential!
              </li>
              <li className="mb-4">
                We&apos;re one of themost tight-knit, dedicated, and
                collaborative communities in Bronx Science!
              </li>
            </ul>
            <Image src={List} />
          </div>
        </div>
        <div>
          <Image src={Search} />
        </div>
      </div>
    </div>
  );
};

export default About;
