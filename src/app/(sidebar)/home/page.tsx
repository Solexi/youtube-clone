import HomeContent from "@/features/home";
import { Suspense } from "react";

const Home = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <HomeContent />
    </Suspense>
  );
};

export default Home;
