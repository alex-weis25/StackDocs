import React from 'react';

export default function Header(props) {
  const setView = props.setView;
  return (
    <div className="chromelights-header">
      <h1 onClick={() => setView('home')}>ChromeLights</h1>
    </div>
  );
}
