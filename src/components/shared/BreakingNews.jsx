import Marquee from "react-fast-marquee";

const breakingNews = [
  {
    id: 1,
    title: "     Global Tech Summit 2026: Innovations in AI and Sustainable Energy Revealed         "
  },
  {
    id: 2,
    title: "    SpaceX Successfully Lands First Crewed Mission on Mars Surface      "
  },
  {
    id: 3,
    title: "    Breakthrough in Medicine: Universal Vaccine for Flu Enters Final Testing     "
  }
];




const BreakingNews = () => {
    return (
        <div className="flex justify-between gap-4 items-center bg-gray-200 py-3 container mx-auto px-2">
            <button className="btn bg-red-500 text-white">Latest News</button>
            <Marquee pauseOnHover={true} speed={100}>
                {
                    breakingNews.map(n => {
                       return <span key={n.id}>{n.title}</span>
                    })
                }
            </Marquee>
        </div>
    );
};

export default BreakingNews;