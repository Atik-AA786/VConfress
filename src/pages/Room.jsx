import { useParams } from "react-router";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";

const Room = () => {
  const { id } = useParams();
  const roomid = id;

  let meeting = async (element) => {
    const appID = Number(import.meta.env.VITE_App_ID);
    const serverSecret = import.meta.env.VITE_App_Secret;
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appID,
      serverSecret,
      roomid,
      Date.now().toString(),
      "Atik Ahmed"
    );
    const zp = ZegoUIKitPrebuilt.create(kitToken);

    zp.joinRoom({
      container: element,
      sharedLinks: [
        {
          name: "Your Personal link",
          url:
            window.location.protocol +
            "//" +
            window.location.host +
            window.location.pathname +
            "?roomID=" +
            roomid,
        },
      ],
      scenario: {
        mode: ZegoUIKitPrebuilt.VideoConference,
      },
    });
  };
  return (
    <div
      className="myCallContainer"
      ref={meeting}
      style={{ width: "100vw", height: "100vh" }}
    ></div>
  );
};

export default Room;
