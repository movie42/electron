import { Button } from "@src/components/Button";

const IntroPages = () => {
  const handleNotification = () => {
    window.electron.notificationApi.sendNotification("안녕하세요~");
  };
  return (
    <div>
      안녕하세요.{" "}
      <Button id="output" onClick={handleNotification}>
        절대경로 된다.
      </Button>
    </div>
  );
};

export default IntroPages;
