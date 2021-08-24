import { AiFillStar } from "react-icons/ai";
const styles = {
  color: "orange",
  marginTop: "1rem",
};

function RatingStar() {
  return (
    <div className="rating">
      <AiFillStar style={styles} />
      <AiFillStar style={styles} />
      <AiFillStar style={styles} />
      <AiFillStar style={styles} />
      <AiFillStar style={styles} />
    </div>
  );
}

export default RatingStar;
