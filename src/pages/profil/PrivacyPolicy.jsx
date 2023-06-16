import React from "react";
import { ic_keyboard_backspace } from "react-icons-kit/md/ic_keyboard_backspace";
import { Link } from "react-router-dom";
import { Icon } from "react-icons-kit";

export default function PrivacyPolicy() {
  return (
    <div>
      <div className="flex justify-between content-center  items-center mr-3CallIcon">
        <h1 className="font-bold grid-cols-1  m-5 text-xl text-[#000000]">
          <Link className="pl-0 m-0" to={"/profel "}>
            <Icon className="mr-4" size={"30px"} icon={ic_keyboard_backspace} />
            Maxfilik siyosati
          </Link>
        </h1>
      </div>

      <div>
        <div className="m-5">
          <b>1. Biz to'playdigan ma'lumotlar turlari</b>
          <p className="text-xs mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam,
            asperiores soluta voluptas non accusantium consequatur debitis
            impedit eveniet, quis nobis magnam veritatis nemo sunt, est numquam
            reiciendis pariatur cupiditate incidunt quo? Est corporis sapiente
            dolores quisquam labore culpa nihil vitae?
          </p>
        </div>
        <div className="m-5">
          <b>2. Shaxsiy ma'lumotlaringizdan foydalanish</b>
          <p className="text-xs mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam,
            asperiores soluta voluptas non accusantium consequatur debitis
            impedit eveniet, quis nobis magnam veritatis nemo sunt, est numquam
            reiciendis pariatur cupiditate incidunt quo? Est corporis sapiente
            dolores quisquam labore culpa nihil vitae?
          </p>
        </div>
        <div className="m-5">
          <b>3. Shaxsiy ma'lumotlaringizni oshkor qilish</b>
          <p className="text-xs mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam,
            asperiores soluta voluptas non accusantium consequatur debitis
            impedit eveniet, quis nobis magnam veritatis nemo sunt, est numquam
            reiciendis pariatur cupiditate incidunt quo? Est corporis sapiente
            dolores quisquam labore culpa nihil vitae?
          </p>
        </div>
      </div>
    </div>
  );
}
