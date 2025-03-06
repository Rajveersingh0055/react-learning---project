import React from 'react'

function Numbers(props) {
  return (
    <div className=" flex justify-center flex-wrap gap-10 p-6 bg-gray-100  ">
      <article className="contact-card  flex flex-col p-4 pb-5 bg-white shadow-md rounded-lg w-[90%] sm:w-[300px] md:w-[350px] lg:w-[400px] transition-all duration-300">
        <img
          src={props.img}     
         alt="Photo of Mr. Whiskerson"
        />
        <h3 className="font-bold text-lg mt-2">{props.Name}</h3>
        <div className="info-group flex items-center mt-2 ">
          <img src="../src/assets/phone-icon.png" alt="phone icon" />
          <p className="text-xs text-gray-800 m-0">{props.Phone}</p>
        </div>
        <div className="info-group flex items-center mt-2">
          <img src="../src/assets/mail-icon.png" alt="mail icon" />
          <p className="text-xs text-gray-800 m-0">{props.Email}</p>
        </div>
      </article>
    </div>
  );
}

export default Numbers
// function App() {
//   return (
//     <div className="flex">
//       <Numbers
//         img="../src/assets/mr-whiskerson.png"
//         Name=" Mr. Whiskerson"
//         Phone="(212) 555-1234"
//         Email=">mr.whiskaz@catnap.meow"
//       />
//       <Numbers
//         img="../src/assets/fluffykins.png"
//         Name="Mr.Billu"
//         Phone="7521852485"
//         Email="bilu@gamil.com"
//       />
//       <Numbers
//         img="../src/assets/felix.png"
//         Name="Chiku"
//         Phone="7895185185"
//         Email="Chiku@gmail.com"
//       />
//       <Numbers img="../src/assets/pumpkin.png" 
//       Name="KalaBilla"
//        Phone="895782852" 
//        Email="kalabillu@gmail.com" />
//     </div>
//   );
// }