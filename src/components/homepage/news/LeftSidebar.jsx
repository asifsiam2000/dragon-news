import Link from "next/link";


const LeftSidebar = ({ categori, activeId }) => {
  return (
    <div >
      <h2 className="text-xl font-bold py-3">All Category</h2>
      <ul className="grid grid-cols-1 gap-2">
              {
                  categori.news_category.map((data) => 
                      <li key={data.category_id}
                          className={`${activeId == data.category_id && " bg-gray-300"}  rounded-xl font-bold text-center `}
                      >
                          <Link href={`/category/${data.category_id}`} className="block p-2">{data.category_name}</Link>
                      </li>
                )
        }
      </ul>
    </div>
  );
};

export default LeftSidebar;
