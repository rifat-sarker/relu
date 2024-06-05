import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { CiHome } from "react-icons/ci";
import { IoMdNotificationsOutline } from "react-icons/io";
import { CiShop } from "react-icons/ci";
import { BiConversation } from "react-icons/bi";
import { CiWallet } from "react-icons/ci";
import { MdOutlineSubscriptions } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { CiSettings } from "react-icons/ci";
import { BiLogOutCircle } from "react-icons/bi";
import { CiSearch } from "react-icons/ci";
import { VscSettings } from "react-icons/vsc";
import photo1 from "../../assets/photo.png";
import photo2 from "../../assets/photo2.png";
import photo3 from "../../assets/photo3.png";
import photo4 from "../../assets/photo4.png";
import photo5 from "../../assets/photo5.png";
import photo6 from "../../assets/photo6.png";
import photo7 from "../../assets/photo7.png";
import photo8 from "../../assets/photo8.png";
import image from "../../assets/image.png";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.png";
import image4 from "../../assets/image4.png";
import image5 from "../../assets/image5.png";
import image6 from "../../assets/image6.png";
import image7 from "../../assets/image7.png";
import { CiHeart } from "react-icons/ci";
import { FaRegComment } from "react-icons/fa";
import { TbShare3 } from "react-icons/tb";
import { CiStar } from "react-icons/ci";
import { Link } from "react-router-dom";

const Home = () => {
  const { logOut } = useContext(AuthContext);
  return (
    <div className="max-w-7xl mx-auto my-12">
      <div className="grid-cols-12 grid gap-2">
        {/* column 1 */}
        <div className="col-span-3  p-3">
          <h1 className="text-3xl p-4 px-8 bg-[#FFFFFF] shadow-sm text-[#101010] rounded-xl h-[80px] font-semibold">
            Logo
          </h1>
          <nav className="py-2 px-8 my-6 text-[#8D8D8D] bg-[#FFFFFF] opacity-100 font-semibold shadow-sm rounded-xl h-screen">
            <div className="flex flex-col justify-between h-full">
              <div>
                <ul>
                  <li className="text-[#101010] my-5 border-l-2">
                    <a href="">
                      <CiHome className="inline size-5 mr-2" /> Home
                    </a>
                  </li>
                  <li className="my-5">
                    <a href="">
                      <IoMdNotificationsOutline className="inline size-5 mr-2" />{" "}
                      Notifications
                    </a>
                  </li>
                  <li className="my-5">
                    <a href="">
                      <CiShop className="inline size-5 mr-2" /> Shop
                    </a>
                  </li>
                  <li className="my-5">
                    <a href="">
                      <BiConversation className="inline size-5 mr-2" />{" "}
                      Conversation
                    </a>
                  </li>
                  <li className="my-5">
                    <a href="">
                      <CiWallet className="inline size-6 mr-2" /> Wallet
                    </a>
                  </li>
                  <li className="my-5">
                    <a href="">
                      <MdOutlineSubscriptions className="inline size-5 mr-2" />{" "}
                      Subscription
                    </a>
                  </li>
                  <li className="my-5">
                    <a href="">
                      <CgProfile className="inline size-5 mr-2" /> My Profile
                    </a>
                  </li>
                  <li className="my-5">
                    <a href="">
                      <CiSettings className="inline size-5 mr-2" /> Settings
                    </a>
                  </li>
                </ul>
              </div>
              <div className="mt-auto">
                <ul>
                  <li className="mb-8">
                    <button onClick={logOut}>
                      <BiLogOutCircle className="inline size-6 mr-2" /> Logout
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>

        {/* column 2*/}
        <div className="col-span-6 p-3 ">
          <p className="rounded-xl bg-[#FFFFFF] shadow-sm px-3 h-[80px]">
            <div className="flex items-center justify-between  p-3">
              <div className="flex  items-center">
                <CiSearch className="size-6" />
                <input
                  type="text"
                  placeholder="search here"
                  className="px-6 py-3"
                />
              </div>
              <div className="flex">
                <VscSettings className="mr-2 size-6" />{" "}
                <p className="text-[#303030]">Filters</p>
              </div>
            </div>
          </p>
          <div className="my-6 bg-[#FFFFFF] rounded-lg shadow-sm p-6 ">
            <div className="flex gap-3">
              <img src={photo1} alt="" />
              <div className="">
                <h4 className="text-[#101010] font-semibold text-xl">
                  Lara Leones
                </h4>
                <p className="text-[#8D8D8D] text-sm">@thewallart</p>
              </div>
            </div>
            <p className="text-sm text-[#101010] my-6">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.{" "}
              <span className="text-[#FF5E8A]">Read More</span>
            </p>
            <div className="relative">
              <img src={image} className=" my-6  " alt="" />
              <CiHeart className="absolute right-4 top-4 size-7 text-white" />
            </div>
            <div className="flex gap-4  text-[#101010] font-semibold">
              <p>
                <CiHeart className="size-5 inline mr-2" /> 9.8k
              </p>
              <p>
                <FaRegComment className="size-5 inline mr-2" /> 8.6k
              </p>
              <p>
                <TbShare3 className="size-5 inline mr-2" /> 7.2k
              </p>
            </div>
          </div>

          <div className="my-6 bg-[#FFFFFF] rounded-lg shadow-sm p-6 ">
            <div className="flex gap-3">
              <img src={photo2} alt="" />
              <div className="">
                <h4 className="text-[#101010] font-semibold text-xl">
                  Thomas J.
                </h4>
                <p className="text-[#8D8D8D] text-sm">@thecustomcreater</p>
              </div>
            </div>
            <p className="text-sm text-[#101010] my-6">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
              <span className="text-[#FF5E8A]">Read More</span>
            </p>
            <div className="relative">
              <img src={image2} className=" my-6  " alt="" />
              <CiHeart className="absolute right-4 top-4 size-7 text-white" />
            </div>
            <div className="flex gap-4  text-[#101010] font-semibold">
              <p>
                <CiHeart className="size-5 inline mr-2" /> 9.8k
              </p>
              <p>
                <FaRegComment className="size-5 inline mr-2" /> 8.6k
              </p>
              <p>
                <TbShare3 className="size-5 inline mr-2" /> 7.2k
              </p>
            </div>
          </div>
          <div className="flex justify-center gap-6">
            <div className="text-[#101010]">
              <img
                src={photo3}
                className="rounded-lg h-[160px] w-[250px] "
                alt=""
              />
              <p className="text-sm font-semibold my-3">
                Modern Wall Decor Framed Painting
              </p>
              <div className="flex justify-between items-center">
                <p className="text-xl font-semibold">$199.99</p>
                <div className="flex">
                  <CiStar className="" />
                  <CiStar />
                  <CiStar />
                  <CiStar />
                  <CiStar />
                </div>
              </div>
            </div>
            <div className="text-[#101010]">
              <img
                src={photo4}
                className="rounded-lg h-[160px] w-[250px]"
                alt=""
              />
              <p className="text-sm font-semibold my-3">
                Modern Wall Decor Framed Painting
              </p>
              <div className="flex justify-between items-center">
                <p className="text-xl font-semibold">$199.99</p>
                <div className="flex">
                  <CiStar className="" />
                  <CiStar />
                  <CiStar />
                  <CiStar />
                  <CiStar />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* column 3 */}
        <div className="col-span-3   p-3">
          <button className="px-8  py-5 bg-[#88C2BB] rounded-xl w-full text-white font-semibold h-[80px]  ">
            Become a Seller
          </button>

          <div className="gap-6 flex my-6">
            <Link className="text-[#101010] font-semibold">Artists</Link>
            <Link className="font-semibold text-[#8D8D8D]">Photographers</Link>
          </div>
          <div
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),  url(${image3})`,
              backgroundSize: "cover",
            }}
            className="w-full mx-auto h-[126px] bg-no-repeat my-6 rounded-lg"
          >
            <div className="flex gap-3 p-3 pb-0 pl-3 pt-16 ">
              <img src={photo5} alt="" />
              <div className="">
                <h4 className="font-semibold text-white">Thomas Edward</h4>
                <p className="text-white text-sm">@thewildwithyou</p>
              </div>
            </div>
          </div>
          <div
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${image4})`,
              backgroundSize: "cover",
            }}
            className="w-full h-[126px] bg-no-repeat my-6 rounded-lg"
          >
            <div className="flex gap-3 p-3 pb-0 pl-3 pt-16 ">
              <img src={photo6} alt="" />
              <div className="">
                <h4 className="font-semibold text-white">Chris Doe</h4>
                <p className="text-white text-sm">@thewildwithyou</p>
              </div>
            </div>
          </div>
          <div
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${image5})`,
              backgroundSize: "cover",
            }}
            className="w-full h-[126px] bg-no-repeat my-6 rounded-lg"
          >
            <div className="flex gap-3 p-3 pb-0 pl-3 pt-16 ">
              <img src={photo7} alt="" />
              <div className="">
                <h4 className="font-semibold text-white">Jessica Williams</h4>
                <p className="text-white text-sm">@thewildwithyou</p>
              </div>
            </div>
          </div>
          <div
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${image6})`,
              backgroundSize: "cover",
            }}
            className="w-full h-[126px] bg-no-repeat my-6 rounded-lg"
          >
            <div className="flex gap-3 p-3 pb-0 pl-3 pt-16 ">
              <img src={photo8} alt="" />
              <div className="">
                <h4 className="font-semibold text-white">Emilie Jones</h4>
                <p className="text-white text-sm">@thewildwithyou</p>
              </div>
            </div>
          </div>
          <div
            style={{
              backgroundImage: `
      linear-gradient(
        to bottom, 
        rgba(0, 0, 0, 0.5) 50%, 
        #F5F5F5 50%
      ), 
      url(${image7})
    `,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            className="w-full h-[100px] bg-no-repeat my-6 rounded-lg flex flex-col justify-end"
          >
            <div className="flex gap-3 justify-between text-[#8D8D8D] font-semibold text-[12px] p-3">
              <p>Privacy</p>
              <p>Terms of Service</p>
              <p>Cookie Notice</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
