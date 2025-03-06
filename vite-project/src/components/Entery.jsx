import React from 'react'

function Entery(props) {
  return (
    <article className="journal-entry flex p-11 ">
      <div className="main-image-container w-[125px] h-[168px] overflow-hidden rounded-[5px] flex-shrink-0 mr-[19px]">
        <img
          className="main-image w-full h-full object-cover"
          src={props.Entery.img.src}
          alt={props.Entery.img.src}
        />
      </div>
      <div className=" info-containermarker ">
        <img
          className="marker w-[7px] mr-1"
          src="../src/assets/marker.png"
          alt="map marker icon"
        />
        <span className="country uppercase text-[0.7rem] mr-3">{props.Entery.country}</span>
        <a
          className="text-[#2B283A] text-[0.7rem] visited:text-[#918E9B]"
          href={props.Entery.googleMapsLink}
        >
          Veiw on google map
        </a>
        <h2 className="entry-title mt-[7px] mb-[17px] text-lg font-semibold">
         {props.Entery.title}
        </h2>
        <p className="trip-dates font-bold">{props.Entery.dates}</p>
        <p className="entry-text leading-[1.5] text-[0.8rem] line-clamp-3 overflow-hidden">
         {props.Entery.text}
        </p>
      </div>
    </article>
  );
}

export default Entery
