import * as React from 'react';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import styles from "@/styles/ProductDetails.module.css";
import RatingStar from '@/components/RatingStar';


function ProductDetails({product}) {
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : false);
    };

    return (
        <div className={styles.main}>
        <div className={styles.container}>
            <img src={product.images[0].url} />
            <div className={styles.cover}>
                <div className={styles.content}>
                    <div className={styles.nav}>
                        <span className={styles.logo}>Product Deatails</span>
                        <span><i className="fas fa-heart" style={{fontSize: "24px", color: "#03c7ff"}} ></i></span>
                    </div>
                    <div className={styles.contentBody}>
                        <div className={styles.pages}>
                            <span className={styles.active}><b>01</b></span>
                            <span>02</span>
                            <span>03</span>
                            <span>04</span>
                        </div>
                        <div className={styles.blackName}>
                            <span className={styles.title}><b>{product.name}</b></span>

                        <div>
                            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}  style={{backgroundColor: "#efefef", marginTop: "1rem"}}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1bh-content"
                                    id="panel1bh-header"
                                    
                                >
                                    <Typography><b>Description</b></Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        {product.description}
                                     </Typography>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} style={{backgroundColor: "#efefef", marginTop: "1rem"}}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel2bh-content"
                                    id="panel2bh-header"
                                >
                                    <Typography><b>Additional_Information</b></Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        {product.description}
                                     </Typography>
                                </AccordionDetails>
                            </Accordion>
                        </div>
                







                            <div className={styles.price}>
                                <span><b>{product.price} JD</b></span>
                                <a href="#" className={styles.btnCard}>Add To Cart</a>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
            
        </div>
        </div>
    )
}

export default ProductDetails;

{/* <p>
<a className={styles.description} data-bs-toggle="collapse" href="#multiCollapseProductDetails1" role="button" aria-expanded="false" aria-controls="multiCollapseProductDetails1">Description</a>
</p>
<p className={`collapse multi-collapse ${styles.descriptionField}`}  id="multiCollapseProductDetails1">{product.description}</p>

<p>
<a className={styles.description} data-bs-toggle="collapse" href="#multiCollapseProductDetails2" role="button" aria-expanded="false" aria-controls="multiCollapseProductDetails2">Additional information</a>
</p>
<p className="collapse multi-collapse card crad-body" style={{backgroundColor: "#efefef", width: "30rem"}} id="multiCollapseProductDetails2">{product.additionalInfo}</p> */}