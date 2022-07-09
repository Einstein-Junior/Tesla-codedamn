import Navbar from "../../components/navbar/Navbar"
import HomePage from "../../../assets/M3-Homepage-D.jpg";
import {AiOutlineDown} from "react-icons/ai"

const Preview = () => {
  return (
    <div className="min-w-screen">
      <div
        style={{
          backgroundImage: `url(${HomePage}`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          width: "100vw",
          height: "100vh"
        }}
      >
        <Navbar />
        <section className="w-full flex flex-col gap-[50vh] md:gap-[55vh] items-center justify-between text-center">
          <div className="m-4">
            <h1 className="text-5xl font-extrabold mb-4">Model 3</h1>

            <p className="text-gray-600">
              Order Online for{" "}
              <span className="underline cursor-pointer">
                Touchless Delivery
              </span>
            </p>
          </div>

          <div className=" flex flex-col items-center gap-5">
            <div className="flex flex-col gap-4 mt-1 lg:flex-row">
              <button className="text-white bg-gray-700 text-lg py-[0.5em] px-[5em] text-center rounded-full hover:bg-gray-200 hover:text-gray-500">
                Custom Order
              </button>
              <button className="text-gray-600 bg-white text-lg py-2 px-20 text-center rounded-full hover:bg-[#e2e2e2] hover:text-white">
                Existing Inventory
              </button>
            </div>
            <AiOutlineDown className="w-6 h-6" />
          </div>
        </section>
      </div>
    </div>
  );
}

export default Preview