import React from 'react';
import './search.scss';

export default function SearchPage() {
  return (
    <div className="wrapper-search relative h-screen">
      {/* Google Map */}
      <iframe
        title="Google Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.7878689190507!2d106.69745087501886!3d10.827539589324354!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317528f4a62fce9b%3A0xc99902aa1e26ef02!2sVan%20Lang%20University%20-%20Main%20Campus!5e0!3m2!1sen!2s!4v1728396151377!5m2!1sen!2s"
        className="w-full h-full"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>

      {/* Search Bar Overlay */}
      <div className=" absolute top-4 left-1/2 transform -translate-x-1/2 p-4 rounded-lg z-10">
        <div className="flex">
          <input
            type="text"
            placeholder="Tìm kiếm... "
            className=" max-w-md px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className=" ml-2 px-4 py-2 text-white bg-black rounded-lg hover:bg-gray-700">
            Tìm kiếm
          </button>
        </div>
      </div>
    </div>
  );
}
