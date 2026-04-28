import LeftSidebar from "@/components/homepage/news/LeftSidebar";
import NewsCard from "@/components/homepage/news/NewsCard";
import RightSidebar from "@/components/homepage/news/RightSidebar";
import React from "react";





const fetchCategoriData = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/news/categories",
  );
  return res.json();
};
const fetchNewsByCategoryId = async (category_id) => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/news/category/${category_id}`,
  );
  return res.json();
};

const NewsCategoryPage = async ({ params }) => {
  const { id } = await params;

  const categoriData = await fetchCategoriData();
  const categori = categoriData.data;
  const newsAllData = await fetchNewsByCategoryId(id);

  return (
    <div className="container mx-auto my-10">
      <div className="grid grid-cols-12 gap-3 ">
        <div className=" col-span-3">
          <LeftSidebar categori={categori} activeId={id}></LeftSidebar>
        </div>

        <div className=" col-span-6 ">
          <h2 className="text-xl font-bold py-3"> News by Category</h2>

          <div className="mt-4">
            {newsAllData.data.length > 0 ? (
              newsAllData.data.map((news, ind) => (
                <NewsCard key={ind} news={news}></NewsCard>
              ))
            ) : (
              <h2 className="flex justify-center items-center text-4xl text-center">
                No News Found
              </h2>
            )}
          </div>
        </div>

        <div className=" col-span-3">
          <RightSidebar></RightSidebar>
        </div>
      </div>
    </div>
  );
};

export default NewsCategoryPage;
