import React from "react";
import Footer from "../homePage/Footer";
import SearchIcon from "@mui/icons-material/Search";
// import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";

export default function Explore() {
  // const mapAPI = [
  //   {
  //     center: [40.103655, 67.952669],
  //   },
  // ];

  
  return (
    <div className="">
      <form class="flex rounded-2xl flex-col  mt-5 w-full justify-start items-center ">
        <div class="relative border  w-80">
          <SearchIcon className="fa fa-user ml-2 mt-3 absolute text-primarycolor text-xl" />
          {/* <i></i> */}
          <input
            type="text"
            placeholder="Search..."
            className="pl-10 w-full    l pt-2 pr-2 pb-2 border font-display focus:outline-none focus:border-primarycolor transition-all duration-500 capitalize text-lg"
          />
        </div>
      </form>

      <div className="map ">
        <div className="relative  truncate" >
          <a
            href="https://yandex.uz/maps?utm_medium=mapframe&utm_source=maps"
            className="text-[#eee] text-xs absolute inset-3"
          >
            Яндекс Карты
          </a>
          <a
            href="https://yandex.uz/maps/?ll=67.918421%2C40.104742&utm_medium=mapframe&utm_source=maps&z=15"
            className="text-[#eee] text-xs absolute inset-3"
          >
            Яндекс Карты — транспорт, навигация, поиск мест
          </a>
          <iframe
            src="https://yandex.uz/map-widget/v1/?ll=67.918421%2C40.104742&z=15"
            width="100%"
            height="725"
            frameborder="1"
            allowfullscreen="true"
            // style="position:relative;"
            className="relative "
          ></iframe>
        </div>
        {/* {mapAPI.map((row, index) => (
          <YMaps key={index}>
            <Map
              defaultState={{
                center: [{row.center}],
                zoom: 5,
              }}
            >
              <Placemark geometry={[55.684758, 37.738521]} />
            </Map>
          </YMaps>
        ))} */}
      </div>

      <Footer />
    </div>
  );
}
