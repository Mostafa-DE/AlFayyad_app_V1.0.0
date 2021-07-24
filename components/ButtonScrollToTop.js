import React,{useState, useEffect} from 'react'
import styles from "@/styles/ButtonScrollToTop.module.css";

function ButtonScrollToTop() {
    const [isVisible, setIsVisisble] = useState(false);
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    useEffect(() => {
        /*Buuton is display after scrolling for 400 pixels*/
        const handleVisibility = () => {
            if(window.pageYOffset > 400) {
                setIsVisisble(true);
            } else {
                setIsVisisble(false);
            }
        };
        window.addEventListener("scroll", handleVisibility);
        return () => window.removeEventListener("scroll", handleVisibility);
    });

    return (
        <div className={styles.scrollContainer}>
            {isVisible && (
                <div onClick={scrollToTop} className={styles.buttonScrollToTop}>
                    <h4><i className="fas fa-chevron-up"></i></h4>
                </div>
            )}
        </div>
    );
}

export default  ButtonScrollToTop;
