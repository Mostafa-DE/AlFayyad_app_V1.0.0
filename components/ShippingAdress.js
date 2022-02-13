import styles from "@/styles/ShippingAddress.module.css";
import React, {useContext, useEffect, useState} from "react";
import {useRouter} from "next/router";
import {ValidatorForm, TextValidator} from "react-material-ui-form-validator";
import {ToastContainer, toast} from "react-toastify";
import {CartContext} from "@/context/CartContext";
import {LanguageContext} from "@/context/LanguageContext";
import {AiOutlineLine} from "react-icons/ai";
import {GiCash} from "react-icons/gi";
import {API_URL} from "../config";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import emailjs from "emailjs-com";

const languageWords = {
    english: {
        TitleShippingAddressLanguage: "Shipping Address",
        EmailLanguage: "Email Address (important)",
        FirstNameLanguage: "First Name",
        LastNameLanguage: "Last Name",
        FullAddressLanguage: "Full Address",
        CityLanguage: "City",
        BuildingNumberLanguage: "Building Number",
        PhoneNumberLanguage: "Phone Number (important)",
        OrderDetailsLanguage: "Order Details",
        ImageTableLanguage: "Image",
        NameTableLanguage: "Name",
        QtyTableLanguage: "QTY",
        PriceTableLanguage: "Price",
        TitleNoteLanguage: "Note!!",
        TextNoteLanguage:
            "Delivery fees will be added automatically 2.50 JD Inside Amman, 4 JD Outside Amman",
        ConfirmOrderLanguage: "Confirm Order",
        ReturnCartLanguage: "Return to cart",
        EmailValidationRequiredLanguage: "Please Enter A Email !!",
        FirstNameValidationLanguage: "Please Enter A First Name !!",
        LastNameValidationLanguage: "Please Enter A Last Name !!",
        AddressValidationLanguage: "Please Enter An Address !!",
        CityValidationLanguage: "Please Enter A City !!",
        PhoneValidationRequiredLanguage: "Please Enter A Phone Number !!",
        PhoneValidationIsNumberLanguage: "Phone Number Must Be A Numbers!!",
        PhoneValidationIsPhoneNumberLanguage: "Phone Number Must Be (10 number) !!",
        PhoneValidationIsLocalNumberLanguage:
            "Phone Number Must Begin With (078 , 079, 077)",
    },
    arabic: {
        TitleShippingAddressLanguage: "معلومات التوصيل",
        EmailLanguage: "البريد الإلكتروني ( مهم جداً )",
        FirstNameLanguage: "الإسم الأول",
        LastNameLanguage: "إسم العائلة",
        FullAddressLanguage: "العنوان كامل",
        CityLanguage: "المحافظة",
        BuildingNumberLanguage: "رقم العمارة",
        PhoneNumberLanguage: "رقم الهاتف ( مهم جداً )",
        OrderDetailsLanguage: "معلومات الطلب",
        ImageTableLanguage: "الصورة",
        NameTableLanguage: "الإسم",
        QtyTableLanguage: "الكمية",
        PriceTableLanguage: "السعر",
        TitleNoteLanguage: "!!ملاحظة",
        TextNoteLanguage:
            "أجور التوصيل سيتم إضافتها بشكل تلقائي, 2.50 داخل عمان و 4 دنانير خارج عمان",
        ConfirmOrderLanguage: "تأكيد الطلب",
        ReturnCartLanguage: "العودة إلى العربة",
        EmailValidationRequiredLanguage: "!! الرجاء إدخال بريد إلكتروني",
        FirstNameValidationLanguage: "!! الرجاء إدخال الإسم الأول",
        LastNameValidationLanguage: "!! الرجاء إدخال إسم العائلة",
        AddressValidationLanguage: "!! الرجاء إدخال عنوانك الكامل",
        CityValidationLanguage: "!! الرجاء إدخال إسم المحافظة",
        PhoneValidationRequiredLanguage: "!! الرجاء إدخال رقم هاتف",
        PhoneValidationIsNumberLanguage: "!! رقم الهاتف يجب أن يكون من أرقام فقط",
        PhoneValidationIsPhoneNumberLanguage:
            "!! رقم الهاتف يجب أن يتكون من 10 أرقام فقط",
        PhoneValidationIsLocalNumberLanguage:
            "(078 , 079, 077) رقم الهاتف يجب أن يبدأ ب",
    },
};

export default function ShippingAdress({account, token}) {
    const router = useRouter();

    /*----------------------context language-------------------*/
    const {language} = useContext(LanguageContext);
    const {
        TitleShippingAddressLanguage,
        EmailLanguage,
        FirstNameLanguage,
        LastNameLanguage,
        FullAddressLanguage,
        CityLanguage,
        BuildingNumberLanguage,
        PhoneNumberLanguage,
        OrderDetailsLanguage,
        ImageTableLanguage,
        NameTableLanguage,
        QtyTableLanguage,
        PriceTableLanguage,
        TitleNoteLanguage,
        TextNoteLanguage,
        ConfirmOrderLanguage,
        ReturnCartLanguage,
        EmailValidationRequiredLanguage,
        IsEmailValidationLanguage,
        FirstNameValidationLanguage,
        LastNameValidationLanguage,
        AddressValidationLanguage,
        CityValidationLanguage,
        PhoneValidationRequiredLanguage,
        PhoneValidationIsNumberLanguage,
        PhoneValidationIsPhoneNumberLanguage,
        PhoneValidationIsLocalNumberLanguage,
    } = languageWords[language];
    /*-----------------------------X---------------------------*/

    /*---------context shopping cart-----------*/
    const {cart} = useContext(CartContext);
    const {items = []} = cart;
    const cartTotal = cart.cartTotal;
    const totalAmount = cartTotal.toFixed(2);
    /*-------------------X---------------------*/

    /*-----------state for input-------------*/
    const [values, setValues] = useState({
        email: `${account.email === undefined ? "" : account.email}`,
        firstName: "",
        lastName: "",
        address: "",
        city: "",
        building: "1",
        phone: `${account.phone === undefined ? "" : `0${account.phone}`}`,
        amount: `${cart.cartTotal}`,
    });
    console.log(cart.cartTotal)
    const handleChangeInput = (evnt) => {
        const {name, value} = evnt.target;
        setValues({...values, [name]: value});
    };
    /*------------------x--------------------*/

    const handleSubmit = async (evnt) => {
        evnt.preventDefault();

        /*-----send email using emailJS-----*/
        // emailjs
        //     .sendForm(
        //         "service_8swmbyy",
        //         "template_ezya1ej",
        //         evnt.target,
        //         "user_tjMhMjtx9IxF7pqse8vPx"
        //     )
        //     .catch((err) => console.log(err));
        /*----------------X-----------------*/

        /*----------create order in strapi-----------*/
        if (token !== null) {
            try {
                await fetch(`${API_URL}/orders`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                    body: JSON.stringify({
                        ...values,

                    }),
                });
                router.push("/payment/invoice-order");
            } catch (err) {
                console.log(err)
                toast.error("Oh No, Somthing Went Wrong!!");
            }
        } else {
            try {
                await fetch(`${API_URL}/orders`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(values),
                });
                router.push("/payment/invoice-order");
            } catch (err) {
                console.log(err)
                toast.error("Oh No, Somthing Went Wrong!!");
            }
        }

        /*---------------------X---------------------*/
    };

    /*------------------Validation TextField phone number-------------------*/
    useEffect(() => {
        ValidatorForm.addValidationRule("isPhoneNumber", (value) => {
            if (value.length > 10 || value.length < 10) {
                return false;
            }
            return true;
        });
    });

    useEffect(() => {
        ValidatorForm.addValidationRule("isNumber", (value) => {
            if (value.match(/^[A-Za-z]+$/)) {
                return false;
            }
            return true;
        });
    });

    useEffect(() => {
        ValidatorForm.addValidationRule("isLocalNumber", (value) => {
            if (value.match("078") || value.match("079") || value.match("077")) {
                return true;
            }
            return false;
        });
    });
    /*-----------------------------------X-----------------------------------*/

    return (
        <div className={styles.main}>
            <ToastContainer position="top-center" style={{width: "30rem"}}/>

            <ValidatorForm onSubmit={handleSubmit} className="mx-1 mx-md-4">
                <div className={styles.container}>
                    <div className={styles.containerForms}>
                        {/*-----------h1 title--------------*/}
                        <h1 className={styles.h1Shipping}>
                            {TitleShippingAddressLanguage}
                            <span>
                <AiOutlineLine/>
              </span>
                        </h1>
                        {/*---------------X-----------------*/}

                        <div className="row">
                            {/*---------------input email address--------------*/}
                            <div className="d-flex flex-row align-items-center">
                                <div className="form-outline flex-fill mb-3">
                                    <TextValidator
                                        type="email"
                                        name="email"
                                        value={values.email}
                                        onChange={handleChangeInput}
                                        fullWidth
                                        variant="standard"
                                        label={EmailLanguage}
                                        validators={["required"]}
                                        errorMessages={[EmailValidationRequiredLanguage]}
                                    />
                                </div>
                            </div>
                            {/*------------------------X-----------------------*/}

                            {/*----------input first name & last name----------*/}
                            <div className="col d-flex justify-content-evenly">
                                <div className="mb-4">
                                    <TextValidator
                                        type="text"
                                        name="firstName"
                                        value={values.firstName}
                                        onChange={handleChangeInput}
                                        variant="standard"
                                        label={FirstNameLanguage}
                                        validators={["required"]}
                                        errorMessages={[FirstNameValidationLanguage]}
                                    />
                                </div>

                                <div className="  mb-4 mx-3">
                                    <TextValidator
                                        type="text"
                                        name="lastName"
                                        value={values.lastName}
                                        onChange={handleChangeInput}
                                        variant="standard"
                                        label={LastNameLanguage}
                                        validators={["required"]}
                                        errorMessages={[LastNameValidationLanguage]}
                                    />
                                </div>
                            </div>
                            {/*------------------------X-----------------------*/}
                        </div>

                        {/*------------------input address-----------------*/}
                        <div className="form-outline flex-fill mb-3">
                            <TextValidator
                                type="text"
                                name="address"
                                value={values.address}
                                onChange={handleChangeInput}
                                fullWidth
                                variant="standard"
                                label={FullAddressLanguage}
                                validators={["required"]}
                                errorMessages={[AddressValidationLanguage]}
                            />
                        </div>
                        {/*------------------------X-----------------------*/}

                        {/*-------------input city & building--------------*/}
                        <div className="row">
                            <div className="col d-flex">
                                <div className="form-outline flex-fill mb-3">
                                    <TextValidator
                                        type="text"
                                        name="city"
                                        value={values.city}
                                        onChange={handleChangeInput}
                                        fullWidth
                                        variant="standard"
                                        label={CityLanguage}
                                        validators={["required"]}
                                        errorMessages={[CityValidationLanguage]}
                                    />
                                </div>

                                <div className="  mb-4 mx-3">
                                    <TextValidator
                                        type="text"
                                        name="building"
                                        value={values.building}
                                        onChange={handleChangeInput}
                                        variant="standard"
                                        label={BuildingNumberLanguage}
                                        validators={["isNumber"]}
                                        errorMessages={["Must Be Number !!"]}
                                    />
                                </div>
                            </div>
                        </div>
                        {/*------------------------X-----------------------*/}

                        {/*--------------input phone number----------------*/}
                        <div className="d-flex flex-row align-items-center">
                            <div className="form-outline flex-fill mb-5">
                                <TextValidator
                                    type="text"
                                    name="phone"
                                    value={values.phone}
                                    onChange={handleChangeInput}
                                    fullWidth
                                    variant="standard"
                                    label={PhoneNumberLanguage}
                                    validators={[
                                        "required",
                                        "isNumber",
                                        "isPhoneNumber",
                                        "isLocalNumber",
                                    ]}
                                    errorMessages={[
                                        PhoneValidationRequiredLanguage,
                                        PhoneValidationIsNumberLanguage,
                                        PhoneValidationIsPhoneNumberLanguage,
                                        PhoneValidationIsLocalNumberLanguage,
                                    ]}
                                />
                            </div>
                        </div>
                        {/*------------------------X-----------------------*/}

                        {/*------------------total amount------------------*/}
                        <div className={styles.totalAmountForm}>
                            Total Amount:{" "}
                            <input
                                value={totalAmount}
                                name="amount"
                                readOnly
                                className={styles.inputTotalAmount}
                            />{" "}
                            JD
                        </div>
                        {/*------------------------X-----------------------*/}

                        {/*------------------dilevery fees-----------------*/}
                        <div className={styles.info}>
                            <p>
                                <strong> {TitleNoteLanguage} </strong> <br/> {TextNoteLanguage}
                                <br/>
                            </p>
                        </div>
                        {/*------------------------X-----------------------*/}

                        <div className="d-flex justify-content-around ">
                            {/*------------------button confirm-----------------*/}
                            <button type="submit" className={styles.btnCheckout}>
                                {ConfirmOrderLanguage} <GiCash style={{fontSize: "1.5rem"}}/>
                            </button>
                            {/*------------------------X------------------------*/}

                            {/*--------------link return to cart----------------*/}
                            <Link href="/products/shopping-cart">
                                <a className={styles.returnCart}> {ReturnCartLanguage} </a>
                            </Link>
                            {/*-----------------------X-------------------------*/}
                        </div>
                    </div>

                    {/*--------------------details order------------------ */}
                    <div className={styles.containerDetails}>
                        <h1 className={styles.h1Order}>
                            {OrderDetailsLanguage}
                            <span>
                <AiOutlineLine/>
              </span>
                        </h1>
                        <TableContainer>
                            <Table style={{minWidth: "500px"}}>
                                <TableHead>
                                    <TableRow>
                                        <TableCell align="left"> {ImageTableLanguage} </TableCell>
                                        <TableCell align="left"> {NameTableLanguage} </TableCell>
                                        <TableCell align="center"> {QtyTableLanguage} </TableCell>
                                        <TableCell align="center"> {PriceTableLanguage} </TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {items.map((item) => (
                                        <TableRow key={item.id}>
                                            <TableCell component="th" scope="row">
                                                <img
                                                    name="img"
                                                    className={styles.imgProduct}
                                                    src={item.images[0].url}
                                                    width={90}
                                                    height={70}
                                                    alt="..."
                                                />
                                            </TableCell>
                                            <TableCell align="inherit">
                                                <input
                                                    className={styles.inputProductName}
                                                    readOnly
                                                    name="nameOrder"
                                                    value={item.name}
                                                />
                                            </TableCell>

                                            <TableCell align="center">
                                                <input
                                                    className={styles.inputQty}
                                                    name="qty"
                                                    value={item.qty}
                                                    readOnly
                                                />
                                            </TableCell>
                                            <TableCell align="center">{item.price} JD</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </div>
                    {/*--------------------------X-------------------------*/}
                </div>
            </ValidatorForm>
        </div>
    );
}
