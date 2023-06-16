import React from "react";
import PlaceIcon from "@mui/icons-material/Place";
import { Link } from "react-router-dom";
import {
  YMaps,
  Map,
  // GeolocationControl,
  // Placemark,
} from "@pbe/react-yandex-maps";
// import { Panorama } from "@pbe/react-yandex-maps";

function About(props) {
  return (
    <div>
      <div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
          sint fugiat atque consequatur quas, ea eaque et provident iure, in
          repellendus asperiores id beatae omnis, commodi rem similique
          inventore. Numquam, fuga?
        </p>
      </div>
      <div className="mt-5">
        <b>Ish vaqti</b>
        <p className="mt-3">
          Dushanba - Juma : <b>08:00 - 21:00</b>
        </p>
        <p className="mt-2">
          Shanba - Yakshanba : <b>10:00 - 20:00</b>
        </p>
      </div>
      <div className="mt-4">
        <b>Biz bilan bog'lanish:  </b>
        <span className=" mt-5 mb-5 text-[#FB9400] text-xl font-bold ">
          +998 (99) 444-2133
        </span>
      </div>
      <div className="mt-4">
        <div className="flex justify-between ">
          <b className="text-xl">Bizning manzil</b>

          <Link to={"/logUp"} className=" text-[#FB9400] ">
            <b>See On Maps</b>
          </Link>
        </div>
        <div className="flex">
          <PlaceIcon sx={{ color: "#FB9400 " }} />
          <p>0933 Novake Parkwary</p>
        </div>
      </div>
      <div className="w-full flex justify-center mt-4">
        <YMaps>
          {/* <Panorama defaultPoint={[40.102557, 67.972349]} /> */}
          <Map
            defaultState={{
              center: [40.102557, 67.972349],
              controls: [],
              zoom: 10,
            }}
          />
          {/* <Placemark geometry={[40.102557, 67.972349]} /> */}
          {/* <GeolocationControl options={{ float: "left" }} /> */}
        </YMaps>
      </div>
    
    </div>
  );
}

export default About;
