
function ShowPhotoProductsList() {
    return (
        <div id="carouselExampleIndicators" className="carousel carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5" aria-label="Slide 6"></button>
            </div>

            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="../images/fayyad/grill.png" className="d-block w-100" width={200} height={800} alt="..." />
                </div>
                <div className="carousel-item">
                    <img src="../images/fayyad/ozito.png" className="d-block w-100" width={200} height={800} alt="..." />
                    <div className={`carousel-caption `} style={{color: "black"}}>
                </div>
                </div>
                <div className="carousel-item">
                    <img src="../images/fayyad/toast.png" className="d-block w-100" width={100} height={750} alt="..." />
                </div>
                <div className="carousel-item">
                    <img src="../images/fayyad/duro.png" className="d-block w-100" width={100} height={750} alt="..." />
                </div>
                <div className="carousel-item">
                    <img src="../images/fayyad/pan.png" className="d-block w-100" width={100} height={750} alt="..." />
                </div>
                <div className="carousel-item">
                    <img src="../images/fayyad/termos.png" className="d-block w-100" width={100} height={750} alt="..." />
                </div>
            </div>

            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}

export default ShowPhotoProductsList;
