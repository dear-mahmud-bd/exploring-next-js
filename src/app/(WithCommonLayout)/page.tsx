"use client";

import { useUser } from "@/context/UserContext";

const HomePage = () => {
  const user = useUser();
  console.log(user);

  return (
    <div>
      <h1>This is NextMart Home Page</h1>
    </div>
  );
};

export default HomePage;
