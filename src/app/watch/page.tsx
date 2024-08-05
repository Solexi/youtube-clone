import { Suspense } from "react";
import dynamic from "next/dynamic";

const WatchContent = dynamic(() => import('@/features/watch/index'), {
  ssr: false,
});


const WatchVideo = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <WatchContent />
    </Suspense>
  );
};

export default WatchVideo;
