import React, { useState, useEffect } from "react";
import Image from "next/image";
import { baseURL } from "../../constants/movie";
import styles from "./Banner.module.css";
import { HiPlay, HiInformationCircle } from "react-icons/hi";

interface Props {
  netflixOriginals: Movie[];
}

function Banner({ netflixOriginals }: Props) {
  const [random, setRandom] = useState<Movie | null>(null);
  useEffect(() => {
    setRandom(
      netflixOriginals[Math.floor(Math.random() * netflixOriginals.length)]
    );
  }, [netflixOriginals]);
  console.log(`${baseURL}/random`);

  const customClassName = `top-0 left-0 -z-10 absolute h-[75vh] w-[100%] ${styles.bg_image}`;

  return (
    <div className="flex space-x-6 flex-col space-y-2 md:space-y-4 lg:h-[65vvh] lg:justify-end ">
      <div className={customClassName}>
      <video className="absolute top-0 left-0 w-[100%] h-[100%] object-cover" autoPlay playsInline loop muted>
          <source src="./images/Avengers_ Endgame  _ Official Trailer _ Hindi _ In Cinemas April 26.mp4" type="video/mp4" />
        </video>
      
        {/* <Image
          src={`${baseURL}${random?.backdrop_path || random?.poster_path}`}
          layout="fill"
          objectFit="cover"
        /> */}
      </div>
      <div className="absolute left-5 top-40">
        <h1 className="text-2xl md:text-4xl lg:text-7xl font-bold w-[50%]">
          {random?.title || random?.original_title}
        </h1>
        <p className="w-[300px] md:w-[40%] my-6 ">
          {random?.overview && random?.overview}{" "}
        </p>
        <div className="flex space-x-3">
          <button className="main_button bg-white text-black">
            <HiPlay className="h-5 w-5 text-black md:w-7" />
            Play
          </button>
          <button className="main_button bg-[gray]/70">
            <HiInformationCircle className="h-5 w-5 text-white md:w-8 md:h-8" />
            more Info
          </button>
        </div>
      </div>
    </div>
  );
}

export default Banner;
