import React from 'react';

export default function Social(props) {
  return (
    <div>
      I am a social for {props.name}.
      <br />
      url is: {props.url}
      <br />
      icon: {props.icon}
    </div>
  );
}