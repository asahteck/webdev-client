import "@/app/labs/lab2/tailwind/utilities.css";
import { FaCalendar, FaEnvelopeOpenText, FaRegClock } from "react-icons/fa";
import { AiOutlineDashboard } from "react-icons/ai";
import { FaBookBible } from "react-icons/fa6";
import { VscAccount } from "react-icons/vsc";
import { BiAccessibility } from "react-icons/bi";
import { FiActivity } from "react-icons/fi";
import { MdFavorite } from "react-icons/md";
import { HiRocketLaunch } from "react-icons/hi2";

export default function ReactIconsSampler() {
  return (
    <div id="wd-react-icons-sampler" className="mb-4 font-sans">
      <h2 className="text-lg font-semibold">React Icons Sampler</h2>
      <div className="flex gap-3 text-3xl">
        <VscAccount />
        <AiOutlineDashboard />
        <FaBookBible />
        <FaCalendar />
        <FaEnvelopeOpenText />
        <FaRegClock />
      </div>
      <div className="flex gap-3">
        <MdFavorite className="text-4xl text-blue-600" />
        <HiRocketLaunch className="text-4xl text-blue-600" />
      </div>
      <div className="flex gap-3 text-3xl">
        <BiAccessibility className="text-5xl" />
        <FiActivity className="text-6xl"/>
      </div>
    </div>
  );
}