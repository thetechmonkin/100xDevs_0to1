import React from "react";
import { RecoilRoot, useRecoilValue, useRecoilState } from "recoil";
import { jobsAtom, messagingAtom, networkAtom, notificationAtom, totalNotificationSelector } from "./EazyBits/atoms";

// EAZY BITS----------------------------------------------------------SELECTORS

const App2 = () => {
  return <div>
    <RecoilRoot>
        <MainApp />
    </RecoilRoot>
  </div>;
};

function MainApp() {
  const networkNotificationCount = useRecoilValue(networkAtom);
  const jobsAtomCount = useRecoilValue(jobsAtom);
  const notificationAtomCount = useRecoilValue(notificationAtom);
  const [messagingAtomCount, setMessagingCount] = useRecoilState(messagingAtom);

  const totalNotificationCount = useRecoilValue(totalNotificationSelector);

  return (
    <>
      <button>Home</button>

      <button>
        My Network (
        {networkNotificationCount >= 100 ? "99+" : networkNotificationCount})
      </button>
      <button>Jobs (
        {jobsAtomCount >= 100 ? "99+" : jobsAtomCount})</button>
      <button>Messaging (
        {messagingAtomCount >= 100 ? "99+" : messagingAtomCount})</button>
      <button>Notification (
        {notificationAtomCount >= 100 ? "99+" : notificationAtomCount})</button>

      <button onClick={() => setMessagingCount(messagingAtomCount + 1)}>Me</button>

      <button>Total ({totalNotificationCount})</button>
    </>
  );
}

export default App2;

// Selectors
// Lets say you want to show all notification counts above your avatar
// 102 0 0 12 = 114