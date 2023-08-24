import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Popup from "../Components/Popup";
import { removeContact } from "../Redux/action";

const Contacts = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [singleContact, setSingleContact] = useState({});
  
  const AllContacts = useSelector((store) => store.contacts);
  const dispatch = useDispatch();
  
  const togglePopup = (contact) => {
    setSingleContact(contact);
    setIsOpen(!isOpen);
  };

  return (
    <div className="justify-center pt-16 text-gray-50 p-4 w-full">
      <div className="m-4">
        <button className="rounded-full bg-blue-600 p-3 text-2xl">
          <Link to="/contact_form">Create Contact</Link>
        </button>
      </div>
      {AllContacts.length === 0 && (
        <div className="m-auto w-fit p-4 align-middle text-blue-500 justify-center">
          {/* SVG code */}
          <h1 className="text-3xl">No Contact Found. Add contacts using the Create Contact Button</h1>
        </div>
      )}
      <div id="contact_list" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {AllContacts.map((contact) => (
          <div key={contact.id} className="bg-blue-950 rounded-lg shadow-md m-4 p-4 text-white">
            <div onClick={() => togglePopup(contact)} className="w-3/4 m-auto">
              {/* Image */}
              <div className="p-4">
                {isOpen && <Popup close={() => togglePopup()} el={singleContact} />}
              </div>
              <div className="text-left">
                <p>First Name: {contact.first_name}</p>
                <p>Last Name: {contact.last_name}</p>
                <p>Status: {contact.status === "active" ? "Active" : "Inactive"}</p>
              </div>
            </div>
            <div className="flex justify-between my-2">
              <Link to={`edit/${contact.id}`}>
                <button className="rounded p-2 bg-violet-600 text-black">Edit</button>
              </Link>
              <button onClick={() => dispatch(removeContact(contact.id))} className="rounded p-2 bg-red-600 text-white">
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contacts;
