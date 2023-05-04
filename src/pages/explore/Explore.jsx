import React from "react";
import Footer from "../homePage/Footer";
import SearchIcon from "@mui/icons-material/Search";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";

export default function Explore({ objectManagerFeatures }) {
  const mapAPI = [
    {
      center: [40.103655, 67.952669],
    },
  ];

  return (
    <div>
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

      <div className="map">
        {" "}
        {mapAPI.map((row, index) => (
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
        ))}
      </div>

      <Footer />
    </div>
  );
}
