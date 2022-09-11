import Search from "../public/assets/about/about.svg";
import List from "../public/assets/about/list.svg";
import Scioly1 from "../public/assets/about/scioly1.png";
import Scioly2 from "../public/assets/about/scioly2.png";
import Image from "next/image";

const About: React.FC = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center px-24 py-16">
        <h1 className="mb-12 font-sans font-bold text-yellow-400 text-7xl">
          ABOUT US
        </h1>
        <p className="px-32 mb-24 text-3xl text-center font-slab">
          The Bronx Science Science Olympiad team is dedicated to exploring the
          world of science in every scientific discipline, ranging from biology
          to mathematics to engineering.
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
              <Image src={List} alt="List of things you can do in BSSO!" />
            </div>
          </div>
          <div>
            <Image src={Search} alt="curious guy doin' curious things" />
          </div>
        </div>
      </div>

      <div className="flex items-center justify-start">
        <div className="relative mr-auto group mt-52 ">
          <div className="absolute h-[600px] -inset-8 bg-gradient-to-r from-cyan-600 to-gray-700 rounded-xl blur-md opacity-75 group-hover:opacity-100 transition duration-200 group-hover:duration-200" />
          <img
            src="/assets/about/scioly2.png"
            className="h-[600px] w-auto relative"
          />
        </div>
        <div className="relative group ">
          <div className="absolute h-[550px] -inset-8 bg-gradient-to-r from-gray-700 to-cyan-600 rounded-xl blur-md opacity-75 group-hover:opacity-100 transition duration-200 group-hover:duration-200" />
          <img
            src="/assets/about/scioly1.png"
            className="h-[550px] w-auto relative mb-16"
          />
        </div>
      </div>
      <div className="flex justify-end">
        {" "}
        <div className="px-32 text-right">
          <h1 className="mb-4 text-4xl text-yellow-400">To the moon!</h1>
          <ul
            className="mb-12 text-xl list-disc font-slab"
            style={{ direction: "rtl" }}
          >
            <li className="mb-3">
              We have over 200 members
              and over 20 events that cover all the branches of science
            </li>
            <li className="mb-3">
              Having just qualified for States in 2018, our team has now climbed
              from 40th place to 11th
            </li>
            <li className="mb-3">
              We won first place at Regionals in 2020 and 11th place in States
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default About;
