import Carousel from "react-bootstrap/Carousel";
import { createRef } from "react";

function ShowPhotoProductsList({ photos }) {
  // console.log(photos);

  return (
    <Carousel slide={false} fade={true}>
      {photos.map((photo) => (
        <Carousel.Item key={photo.id}>
          <img
            className="d-block w-100"
            src={photo.images[0].url}
            width={180}
            height={700}
            alt="First slide"
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default ShowPhotoProductsList;

// <div
//   id="carouselExampleIndicators"
//   className="carousel carousel slide"
//   data-bs-ride="carousel"
// >
//   <div className="carousel-indicators">
//     <button
//       type="button"
//       data-bs-target="#carouselExampleIndicators"
//       data-bs-slide-to="0"
//       className="active"
//       aria-current="true"
//       aria-label="Slide 1"
//     ></button>
//     <button
//       type="button"
//       data-bs-target="#carouselExampleIndicators"
//       data-bs-slide-to="1"
//       aria-label="Slide 2"
//     ></button>
//     <button
//       type="button"
//       data-bs-target="#carouselExampleIndicators"
//       data-bs-slide-to="2"
//       aria-label="Slide 3"
//     ></button>
//     <button
//       type="button"
//       data-bs-target="#carouselExampleIndicators"
//       data-bs-slide-to="3"
//       aria-label="Slide 4"
//     ></button>
//     <button
//       type="button"
//       data-bs-target="#carouselExampleIndicators"
//       data-bs-slide-to="4"
//       aria-label="Slide 5"
//     ></button>
//     <button
//       type="button"
//       data-bs-target="#carouselExampleIndicators"
//       data-bs-slide-to="5"
//       aria-label="Slide 6"
//     ></button>
//   </div>

//   <div className="carousel-inner">
//     <div className="carousel-item active">
//       <img
//         src="../images/fayyad/grill.jpg"
//         className="d-block w-100"
//         width={200}
//         height={750}
//         alt="..."
//       />
//     </div>
//     <div className="carousel-item">
//       <img
//         src="../images/fayyad/ozito.jpg"
//         className="d-block w-100"
//         width={200}
//         height={750}
//         alt="..."
//       />
//       <div className={`carousel-caption `} style={{ color: "black" }}></div>
//     </div>
//     <div className="carousel-item">
//       <img
//         src="../images/fayyad/toast.jpeg"
//         className="d-block w-100"
//         width={100}
//         height={700}
//         alt="..."
//       />
//     </div>
//     <div className="carousel-item">
//       <img
//         src="../images/fayyad/heater.jpeg"
//         className="d-block w-100"
//         width={100}
//         height={750}
//         alt="..."
//       />
//     </div>
//     <div className="carousel-item">
//       <img
//         src="../images/fayyad/knife set.jpg"
//         className="d-block w-100"
//         width={100}
//         height={700}
//         alt="..."
//       />
//     </div>
//     <div className="carousel-item">
//       <img
//         src="../images/fayyad/changing set.jpg"
//         className="d-block w-100"
//         width={100}
//         height={750}
//         alt="..."
//       />
//     </div>
//   </div>

//   <button
//     className="carousel-control-prev"
//     type="button"
//     data-bs-target="#carouselExampleIndicators"
//     data-bs-slide="prev"
//   >
//     <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//     <span className="visually-hidden">Previous</span>
//   </button>
//   <button
//     className="carousel-control-next"
//     type="button"
//     data-bs-target="#carouselExampleIndicators"
//     data-bs-slide="next"
//   >
//     <span className="carousel-control-next-icon" aria-hidden="true"></span>
//     <span className="visually-hidden">Next</span>
//   </button>
// </div>
