import { Logo } from "../static/img";
import {
  AddSquare2,
  Home,
  Message2,
  Profile,
  Lamp,
  Task,
} from "../static/icon";

const Sidebar = ({ showSidebar }) => {
  return (
    <div>
      <div
        className={`sticky top-0 min-h-screen ${
          showSidebar ? "w-64" : "hidden"
        }`}
      >
        <main>
          {/* Navbar */}
          <ul className="my-0 mx-[13px] py-[30px] px-0 flex flex-col gap-[25px] border-b border-b-grey-light-1">
            <li className="flex text-base font-medium text-grey gap-[14px] sm:ml-[9px] cursor-pointer">
              <img src={Home} alt={Home} />
              <span className="hidden sm:block">avua Recommended</span>
            </li>
            <li className="flex text-base font-medium text-grey gap-[14px] sm:ml-[9px] cursor-pointer">
              <img src={Message2} alt={Message2} />
              <span className="hidden sm:block">Other Candidate</span>
            </li>
            <li className="flex text-base font-medium text-grey gap-[14px] sm:ml-[9px] cursor-pointer">
              <img src={Task} alt={Task} />
              <span className="hidden sm:block">Shortlist</span>
            </li>
            <li className="flex text-base font-medium text-grey gap-[14px] sm:ml-[9px] cursor-pointer">
              <img src={Profile} alt={Profile} />
              <span className="hidden sm:block">Interview</span>
            </li>
            <li className="flex text-base font-medium text-grey gap-[14px] sm:ml-[9px] cursor-pointer">
              <img src={AddSquare2} alt={AddSquare2} />
              <span className="hidden sm:block">Add Other</span>
            </li>
          </ul>

          {/* Thoughts */}
          <div className="flex justify-center mt-16 pb-6">
            <div className="hidden sm:block relative w-[12.875rem]">
              <div className="mx-auto flex w-[4.125rem] aspect-square justify-center items-center bg-dusky-white rounded-full">
                <span className="absolute rounded-full w-[4.125rem] aspect-square bg-lamp-yellow bg-opacity-50 blur-lg"></span>
                <img
                  src={Lamp}
                  alt={Lamp}
                  className="w-6 aspect-square object-contain"
                />
              </div>
              <div className="flex flex-col -mt-[2rem] pt-8 bg-dusky-white items-center gap-2 rounded-2xl w-full">
                <h2 className="text-sm font-medium text-pure-black pt-3">
                  Thoughts Time
                </h2>
                <p className="text-xs font-normal text-grey text-center w-[10.375rem]">
                  Your human talent is your most important talent.
                </p>
                <input
                  type="text"
                  placeholder="Write a message"
                  className="text-center w-full px-3 py-3 placeholder:text-pure-black bg-white text-sm font-medium mb-5 rounded focus:outline-none"
                />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Sidebar;
