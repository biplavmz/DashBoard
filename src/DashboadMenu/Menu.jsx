import React, { useState } from "react";
import "./menu.css";
import vehicleicon from "../MenuIcon/vehical.png";
import dashBoadIcon from "../MenuIcon/dashboadIcon.png";
import expand from "../MenuIcon/expandicon.png";
import equpmentIcon from "../MenuIcon/equipmentIcon.png";
import inspectionIcon from "../MenuIcon/inspection.png";
import issueIcon from "../MenuIcon/inspection.png";
import reminderIcon from "../MenuIcon/reminder.png";
import serviceIcon from "../MenuIcon/service.png";
import contractIcon from "../MenuIcon/contract.png";
import vendorIcon from "../MenuIcon/vendor.png";
import inventoryIcon from "../MenuIcon/fuel.png";
import fuelIcon from "../MenuIcon/inventory.png";
import reportIcon from "../MenuIcon/report.png";
import placesIcon from "../MenuIcon/places.png";
import documentIcon from "../MenuIcon/document.png";

const Menu = () => {
  let menuList = [
    { name: "Dashboad", img: dashBoadIcon },
    { name: "Vehicles", img: vehicleicon, expand: true },
    { name: "Equipment", img: equpmentIcon },
    { name: "Inspections", img: inspectionIcon, expand: true },
    { name: "Issues", img: issueIcon, expand: true },
    { name: "Reminders", img: reminderIcon, expand: true },
    { name: "Service", img: serviceIcon, expand: true },
    { name: "Contracts", img: contractIcon },
    { name: "Vendors", img: vendorIcon },
    { name: "Parts & Inventory", img: inventoryIcon, expand: true },
    { name: "Fuel History", img: fuelIcon },
    { name: "Places", img: placesIcon },
    { name: "Documents", img: documentIcon },
    { name: "Reports", img: reportIcon },
  ];

  return (
    <div className="menu">
      {menuList.map((item, idx) => (
        <div>
          <div
            key={idx}
            className={`list ${item.name == "Dashboad" && "activeTab"}`}
          >
            <div className="menuContainer">
              <img
                height={20}
                src={item.img}
                alt=""
                style={{ marginRight: 10 }}
              />
              <p>{item.name}</p>
            </div>
            {item.expand && (
              <div style={{ marginRight: "20px" }}>
                <img src={expand} height={15} alt="" />
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Menu;
