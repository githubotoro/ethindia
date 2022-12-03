import React from "react";

export default function AdLogo({ data }) {
  return data ? (
    <div className="flex justify-end p-2">
      <a href={data.linkUrl} target="_blank" rel="noreferrer">
        <div className="h-10 w-10 rounded-full shadow overflow-hidden shadow-sm">
          <img
            className="h-full object-cover"
            src={data.logoURL}
            alt="ad logo"
          />
        </div>
      </a>
    </div>
  ) : null;
}
