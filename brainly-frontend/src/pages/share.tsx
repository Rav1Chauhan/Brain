import { useParams } from "react-router-dom";

function Share() {
  const { sharelink } = useParams();

  return (
    <div>
      <h1>Shared Brain</h1>
      <p>Share Link: {sharelink}</p>
    </div>
  );
}

export default Share;