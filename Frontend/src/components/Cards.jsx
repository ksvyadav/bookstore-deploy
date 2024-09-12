import React from "react";

function Cards({ item }) {
  return (
    <>
      <div className="my-3 px-10 py-5 ">
        <div className="  dark:bg-slate-800 card bg-base-200 shadow-xl hover:scale-105 duration-300">
          <figure>
            <img className="h-60 w-40" src={item.image} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {item.name}
              <div className="badge badge-secondary border-green-500 bg-green-500">
                {item.category}
              </div>
            </h2>
            <p>{item.title}</p>
            <div className="card-actions justify-between">
              <div className="badge badge-outline px-3 py-3 rounded-xl">
                {item.price} Rs
              </div>
              <div className="cursor-pointer px-3 py-3 rounded-xl badge badge-outline hover:bg-pink-500 duration-200 hover:text-white">
                Buy
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
