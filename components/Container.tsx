import Image from "next/image";
import CategoryCard from "./CategoryCard";
import { cards } from "../common/data";

const Container = () => {
  return (
    <div className="flex width-full  gap-8 px-17 justify-center pt-2 pr-18 pb-3">
      <div className="card relative flex-1 mt-8 flex flex-col pl-9 pr-7 py-3 pb-16 ">
        <div className="w-full h-fit flex justify-between items-center">
          <div className="flex gap-10">
            <Image
              src="/assets/logo.png"
              alt={"Logo"}
              width={300}
              height={40}
            />

            <div className="w-[556px]  flex justify-between items-center">
              <a href="#" className="navbar-item">
                Motorcycles
              </a>
              <a href="#" className="navbar-item">
                Locate Us
              </a>
              <a href="#" className="navbar-item">
                events
              </a>
              <a href="#" className="navbar-item">
                accessories
              </a>
              <a href="#" className="navbar-item">
                Apparel
              </a>
              <a href="#" className="navbar-item">
                supports
              </a>
            </div>
          </div>

          <p className="navbar-item text-red-500 text-xl">Login</p>
        </div>

        <div className="w-full  mt-8">
          <div className=" w-[23.2%]">
            <h1 className="title">hunter 350</h1>

            <p className="container-text mt-2 opacity-80">
              The Hunter 350 fills a space in the Royal Enfield lineup. It has
              the sound, feel, and character you expect from a Royal Enfield
              single, and the lighter, more nimble chassis design feels more
              modern and refined. It’s not as traditional, but that’s the
              point—and it certainly isn’t generic
            </p>
          </div>
        </div>

        <div className="relative ml-[44px] -mt-[222px] h-[548px] group  overflow-visible">
          <Image
            src="/assets/bike.png"
            alt="Bike"
            width={1170}
            height={548}
            className=" absolute left-0 top-0
      transition-transform duration-2000 ease-out
      scale-[1.17] group-hover:scale-[1.75]
      group-hover:-translate-x-[30px]
      group-hover:-translate-y-[20px]
      z-10 group-hover:z-80
      pointer-events-none
    "
          />
          <div className=" absolute bottom-0 lg:-right-7 w-[110%] h-[272px] rounded-[20px] blur-box z-30 group-hover:hidden"></div>
        </div>

        <div className="w-full -mt-[120px] z-30 pointer-events-none ">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-12  px-5">
            {cards.map((c) => (
              <div key={c.id} className="flex justify-center">
                <CategoryCard item={c} />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className=" card w-[37.3%] h-fit flex flex-col pl-6 pr-8 pt-13 pb-12 ">
        <div className="relative width-full h-[360px] rounded-[20px] overflow-clip ">
          <Image src="/assets/container2-bg-crop-2.jpg" alt="Background" fill />
          <div className="absolute top-0 right-0 h-full w-[35%] bg-[#0A0A0A5C] text-start flex items-center container-text justify-center pl-4 pr-3">
            <p className="opacity-90">
              At the heart of the Hunter beats a fuel-injected, long-stroke
              350cc J-engine that delivers a smoother ride, higher RPM and
              dollops of torque. Paired with a steady downtube spine frame and
              grounded suspension, the Hunter 350 gives the right amount of
              power and precision, whether you’re revving up the city streets or
              gunning down the motorway.
            </p>
          </div>
        </div>

        <div className="w-full mt-11 h-[170px]  flex gap-5">
          <div
            className="flex-1 h-full  rounded-[10px] bg-center bg-no-repeat bg-cover overflow-hidden"
            style={{ backgroundImage: "url('/assets/bike1.jpg')" }}
          ></div>
          <div
            className="flex-1 h-full rounded-[10px] bg-center bg-no-repeat bg-cover"
            style={{ backgroundImage: "url('/assets/bike2.jpg')" }}
          ></div>
          <div
            className="flex-1 h-full  rounded-[10px] bg-center bg-no-repeat bg-cover"
            style={{ backgroundImage: "url('/assets/bike3.jpg')" }}
          ></div>
        </div>

        <div className="w-full mt-11 h-[37px]  flex   justify-evenly">

            <span className="navbar-item featured-text">
                colors
              </span>
              <span  className="navbar-item featured-text">
                highlights
              </span>
              <span className="navbar-item featured-text">
                gallery
              </span>
              <span className="navbar-item featured-text">
                reviews
              </span>
              <span className="navbar-item featured-text">
                faq&apos;s
              </span>
              

        </div>


        <div className="w-full mt-2 h-[137px]  bg-red-500">

        </div>


      </div>
    </div>
  );
};

export default Container;
