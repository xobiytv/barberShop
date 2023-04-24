import React from "react";
import { Link } from "react-router-dom";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import StarIcon from "@mui/icons-material/Star";
import Avatar from "@mui/material/Avatar";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
export default function Review() {
  return (
    <div>
      <div className="flex justify-between ">
        <b className="text-xl ">
          <StarHalfIcon sx={{ color: "#FB9400 " }} /> 4.8 (3,278 reviews)
        </b>

        <Link to={"/logUp"} className=" text-[#FB9400] ">
          <b>See All</b>
        </Link>
      </div>
      <hr className="mt-3 " />

      <div>
        <div className="mt-5 mb-3">
          <div className="flex justify-between ">
            <div className="flex gap-2 items-center ">
              <Avatar
                alt="Remy Sharp"
                src="https://avatars.mds.yandex.net/get-altay/2816622/2a00000170d21aec7b5dcc9bd7b640bf762b/XXL"
              />
              {/* <img className="rounded-3xl h-28" alt="" /> */}
              <b>Annabel Rohal</b>
            </div>
            <div className="rounded-3xl items-center text-[#FB9400] h-8 flex border-2  justify-evenly w-12 border-[#FB9400]">
              <StarIcon fontSize="small" />
              <p>4</p>
            </div>
          </div>
          <div>
            <p className="mt-3 mb-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repellendus, ex sit saepe, perferendis quidem eius iusto ipsam
              quod magnam eligendi eum ut unde enim? Modi fuga ullam aut, omnis
              reiciendis doloribus vel molestias accusantium!
            </p>
            <div className="flex items-center justify-between">
              <p>
                <FavoriteIcon className="text-[#f44343] mr-2" />
                574
              </p>
              <p className="text-xs">2 mother ago</p>
            </div>
          </div>
        </div>
        <div className="mt-5 mb-3">
          <div className="flex justify-between ">
            <div className="flex gap-2 items-center ">
              <Avatar
                alt="Remy Sharp"
                src="https://avatars.mds.yandex.net/get-altay/2816622/2a00000170d21aec7b5dcc9bd7b640bf762b/XXL"
              />
              {/* <img className="rounded-3xl h-28" alt="" /> */}
              <b>Annabel Rohal</b>
            </div>
            <div className="rounded-3xl items-center text-[#FB9400] h-8 flex border-2  justify-evenly w-12 border-[#FB9400]">
              <StarIcon fontSize="small" />
              <p>4</p>
            </div>
          </div>
          <div>
            <p className="mt-3 mb-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repellendus, ex sit saepe, perferendis quidem eius iusto ipsam
              quod magnam eligendi eum ut unde enim? Modi fuga ullam aut, omnis
              reiciendis doloribus vel molestias accusantium!
            </p>
            <div className="flex items-center justify-between">
              <p>
                <FavoriteIcon className="text-[#f44343] mr-2" />
                574
              </p>
              <p className="text-xs">2 mother ago</p>
            </div>
          </div>
        </div>
        <div className="mt-5 mb-3">
          <div className="flex justify-between ">
            <div className="flex gap-2 items-center ">
              <Avatar
                alt="Remy Sharp"
                src="https://avatars.mds.yandex.net/get-altay/2816622/2a00000170d21aec7b5dcc9bd7b640bf762b/XXL"
              />
              {/* <img className="rounded-3xl h-28" alt="" /> */}
              <b>Annabel Rohal</b>
            </div>
            <div className="rounded-3xl items-center text-[#FB9400] h-8 flex border-2  justify-evenly w-12 border-[#FB9400]">
              <StarIcon fontSize="small" />
              <p>4</p>
            </div>
          </div>
          <div>
            <p className="mt-3 mb-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repellendus, ex sit saepe, perferendis quidem eius iusto ipsam
              quod magnam eligendi eum ut unde enim? Modi fuga ullam aut, omnis
              reiciendis doloribus vel molestias accusantium!
            </p>
            <div className="flex items-center justify-between">
              <p>
                <FavoriteIcon className="text-[#f44343] mr-2" />
                574
              </p>
              <p className="text-xs">2 mother ago</p>
            </div>
          </div>
        </div>

       
      </div>
    </div>
  );
}
