import Image from "next/image";
import Link from "next/link";
import { CiBookmark, CiShare2 } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { IoEyeSharp } from "react-icons/io5";

const NewsCard = ({ news }) => {
  return (
    <div className="card bg-base-100  shadow-sm my-4">
      <div className="card-body">
        {/* author info  */}
        <div className="bg-base-300 rounded-xl p-2 flex justify-between items-center">
          <div className="flex gap-2 items-center ">
            <Image
              src={news.author?.img}
              height={50}
              width={50}
              alt="auth info"
              className="rounded-full"
            ></Image>
            <div>
              <h2 className="font-bold">{news.author.name}</h2>
              <h2 className="text-[#706F6F] text-xs">
                {news.author.published_date}
              </h2>
            </div>
          </div>
          <div className="flex gap-2 items-center text-xl">
            <CiBookmark />
            <CiShare2 />
          </div>
        </div>

        <h2 className="card-title">{news.title}</h2>

        <figure className="py-4">
          <Image
            src={news.image_url}
            height={200}
            width={300}
            alt="card img"
            className="rounded-lg w-full "
          ></Image>
        </figure>
        <p className="line-clamp-3 ">{news.details}</p>
        <p className="text-orange-500">Read More</p>
        <div className="divider"></div>
        <div className="flex justify-between items-center">
          <div className="flex text-orange-500 gap-2">
            <FaStar className="text-orange-500 text-lg" />
            
            <h2 className="text-gray-700 ">{news.rating.number}</h2>
            <div className="flex gap-1 items-center  text-gray-700">
              <IoEyeSharp className="text-orange-500 text-lg" />
              {news.total_view}
            </div>
          </div>

          {/* <div className="flex gap-2 items-center text-lg text-gray-700">
                      <IoEyeSharp />
                      {news.total_view}
                  </div> */}

          <Link href={`/news/${news._id}`}>
            <button className="btn">See Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
