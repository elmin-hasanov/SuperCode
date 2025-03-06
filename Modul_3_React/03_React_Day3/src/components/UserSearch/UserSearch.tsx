import React from "react";

const UserSearch = () => {
  const handleUserInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    // console.log(event);
    console.log(event.target.value);
  };
  return (
    <div>
      <p>please type something</p>
      <input type="text" onChange={handleUserInput} />
    </div>
  );
};

export default UserSearch;