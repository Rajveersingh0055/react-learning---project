import React from "react";
import avatar from "../assets/user.png";
import Star from "./Star";

/**
 * Renders a user profile card that displays the user's name, phone number, email address, and a favorite button.
 * The favorite button toggles the user's favorite status and changes its icon accordingly.
 * @returns {JSX.Element} A JSX element representing the user profile card.
 */
function ComplexObject() {
  const [contact, setContact] = React.useState({
    firstName: "John",
    lastName: "Doe",
    phone: "+1 (212) 555-1212",
    email: "itsmyrealname@example.com",
    isFavorite: false,
  });



  function toggleFavorite() {
    setContact((prevContact) => ({
      ...prevContact,
      isFavorite: !prevContact.isFavorite,
    }));
  }

  return (
    <div className="bg-[#0C4A6E] m-0 font-[Inter,sans-serif] h-[100vh] flex justify-center items-center">
      <article className="card bg-white w-[200px] border border-lightgray rounded-[10px] h-[350px]">
        <img
          src={avatar}
          className="avatar w-full p-[10%] pb-0"
          alt="User profile picture of John Doe"
        />
        <div className="info p-2.5">
         <Star isfilled={contact.isFavorite} handleClick={toggleFavorite}/>
          <h2 className="name my-[13px] text-[#333333]">
            {contact.firstName} {contact.lastName}
          </h2>
          <p className="contact text-[0.75rem] text-gray-500 my-[7px]">
            {contact.phone}
          </p>
          <p className="contact text-[0.75rem] text-gray-500 my-[7px]">
            {contact.email}
          </p>
        </div>
      </article>
    </div> 
  );
}

export default ComplexObject;
