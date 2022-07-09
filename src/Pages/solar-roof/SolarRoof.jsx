import WhiteNavbar from "../../components/white-navbar/WhiteNavbar";
import Solarroof from "../../../assets/sr-storm-desktop.png";
import { GiSolarPower } from "react-icons/gi";
import { AiOutlineDown } from "react-icons/ai";
import { RiMessage2Line } from "react-icons/ri";

const SolarRoof = () => {
  return (
    <div className="min-w-screen min-h-screen">
      <div
        style={{
          backgroundImage: `url(${Solarroof}`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          width: "100vw",
          height: "100%",
        }}
      >
        <WhiteNavbar />
        <section className="h-full flex flex-col gap-[50vh] md:gap-[55vh] items-center justify-between text-center">
          <div className="m-4 text-white">
            <h1 className="text-5xl font-extrabold mb-4">Solar Roof</h1>

            <span>Transform your roof and produce clean energy</span>
          </div>

          <div className="text-white w-full">
            <div className="flex flex-col w-full items-center gap-[2rem]">
              <div className="flex flex-col md:flex-row w-[50%]  gap-[10vh]">
                <div className="w flex flex-col items-center gap-2 justify-center">
                  <GiSolarPower className="w-24 h-14" />
                  <span className="">
                    Beautiful Solar <br /> Without Compromise
                  </span>
                </div>
                <div className=" flex flex-col justify-center gap-2">
                  <span className="text-4xl">25 Year</span>
                  <span className="">Tile Warranty</span>
                </div>
                <div className="flex flex-col justify-center gap-2">
                  <span className="text-4xl">24/7</span>
                  <span className="">Outage Protection</span>
                </div>
                <div className="  text-white flex flex-col  justify-center  text-center rounded-full">
                  <button className="border border-white text-xl px-10 py-3 rounded-full">
                    ORDER NOW
                  </button>
                </div>
              </div>
              <AiOutlineDown className="w-6 h-6" />
              <RiMessage2Line className="absolute bottom-16 right-6 w-[3.5rem] h-[3.5rem] p-2 rounded-full bg-white text-gray-700" />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default SolarRoof;
