
const styles = {
        color: "orange",
        marginTop: "1rem"
}

function RatingStar() {
    return (
        <div>
            <i className="fas fa-star" style={styles}></i>
            <i className="fas fa-star" style={styles}></i>
            <i className="fas fa-star" style={styles}></i>
            <i className="fas fa-star" style={styles}></i>
            <i className="fas fa-star" style={styles}></i>
        </div>
    )
}

export default RatingStar;