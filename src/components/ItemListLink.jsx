import React from "react";

export default function ItemListLink({ text = "No text", url = "/" }) {
  return (
    <li className="Navbar__item">
      <a className="Navbar__link" href={url}>
        {text}
      </a>
    </li>
  );
}
