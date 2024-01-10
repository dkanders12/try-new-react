import { Image } from "../../components/Image/Image";

// Import your images using the ES6 import syntax
import backround1 from "../../assets/images/backround1.jpg";
import backround2 from "../../assets/images/backround2.jpg";
import backround3 from "../../assets/images/backround3.jpg";
import backround4 from "../../assets/images/backround4.jpg";
import backround5 from "../../assets/images/backround5.jpg";
import backround6 from "../../assets/images/backround6.jpg";
import backround7 from "../../assets/images/backround7.jpg";
import backround8 from "../../assets/images/backround8.jpg";

// Image paths for the gallery
const imagePaths = [
  backround1,
  backround2,
  backround3,
  backround4,
  backround5,
  backround6,
  backround7,
  backround8,
];

export const Home = () => {
  return (
    <>
      <p>Home</p>
      <div className="Gallery">
        {imagePaths.map((path, index) => (
          <Image key={index} file={path} alt={`Image ${index + 1}`} />
        ))}
      </div>{" "}
    </>
  );
};
