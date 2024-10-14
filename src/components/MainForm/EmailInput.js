import React from 'react';
import { SlEnvolope } from 'react-icons/sl';

export default function EmailInput({ onChange }) {
  return (
    <label className="wrapper">
      <SlEnvolope className="envolope" />
      <input
        type="email"
        placeholder="yourfriends@email.com"
        onChange={(e) => {
          onChange(e.target.value);
        }}
      ></input>
    </label>
  );
}
