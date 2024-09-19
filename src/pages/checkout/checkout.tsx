import { useState } from "react";
import style from './index.module.css';
import CustomButton from "../../component/customeButton/customButton.tsx";
import { useLocation, useNavigate } from "react-router-dom";

const Checkout = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { state } = location;
    const errorMessage = "*This Field is Required";
    const amount = state?.amount || 0;

    const [formValues, setFormValues] = useState({
        address: "",
        phone: "",
        email: "",
        street: "",
        city: "",
    });

    const [errors, setErrors] = useState({
        address: "",
        phone: "",
        email: "",
        street: "",
        city: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({
            ...formValues,
            [name]: value,
        });
        setErrors({
            ...errors,
            [name]: "",
        });
    };

    const validateFields = () => {
        let isValid = true;
        const newErrors = {
            address: "",
            phone: "",
            email: "",
            street: "",
            city: "",
        };

        if (!formValues.address) {
            newErrors.address = errorMessage;
            isValid = false;
        }

        if (!formValues.phone) {
            newErrors.phone = errorMessage;
            isValid = false;
        }

        if (!formValues.email) {
            newErrors.email = errorMessage;
            isValid = false;
        }

        if (!formValues.street) {
            newErrors.street = errorMessage;
            isValid = false;
        }

        if (!formValues.city) {
            newErrors.city = "This field is required";
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const handleStripePayment = () => {
        if (validateFields()) {
            navigate('/stripe-check-out', { state: { amount: amount } });
            window.alert("Your Order Has Been Sent to Us. Expect Your Product soon");
        }
    };

    return (
        <div className={style.mainDiv}>
            <div className={style.container}>
                <div className={style.motherDiv}>
                    <div className={style.firstDiv}>
                        <p className={style.p}>Receiver's Address <span>*</span></p>
                        <input
                            className={style.inputDiv}
                            name="address"
                            value={formValues.address}
                            onChange={handleChange}
                        />
                        {errors.address && <p className={style.errorText}>{errors.address}</p>}
                    </div>

                    <div className={style.firstDiv}>
                        <p className={style.p}>Receiver's Phone Number <span>*</span></p>
                        <input
                            className={style.inputDiv}
                            name="phone"
                            value={formValues.phone}
                            onChange={handleChange}
                        />
                        {errors.phone && <p className={style.errorText}>{errors.phone}</p>}
                    </div>

                    <div className={style.firstDiv}>
                        <p className={style.p}>Receiver's Email <span>*</span></p>
                        <input
                            className={style.inputDiv}
                            name="email"
                            value={formValues.email}
                            onChange={handleChange}
                        />
                        {errors.email && <p className={style.errorText}>{errors.email}</p>}
                    </div>

                    <div className={style.firstDiv}>
                        <p className={style.p}>Receiver's Delivery Address (street) <span>*</span></p>
                        <input
                            className={style.inputDiv}
                            name="street"
                            value={formValues.street}
                            onChange={handleChange}
                        />
                        {errors.street && <p className={style.errorText}>{errors.street}</p>}
                    </div>

                    <div className={style.firstDiv}>
                        <p className={style.p}>Receiver's City/State <span>*</span></p>
                        <input
                            className={style.inputDiv}
                            name="city"
                            value={formValues.city}
                            onChange={handleChange}
                        />
                        {errors.city && <p className={style.errorText}>{errors.city}</p>}
                    </div>
                </div>

                <div className={style.checkBoxDiv}>
                    <input type="checkbox" />
                    <p>Save this information for faster check-out next time</p>
                </div>

                <div className={style.lastDiv}>
                    <div className={style.lastDiv_1}>
                        <div className={style.lastDiv_1_1}>
                            <input type="radio" />
                            <p>Bank Transfer</p>
                        </div>
                        <div className={style.lastDiv_1_1}>
                            <input type="radio" />
                            <p>Payment On Delivery</p>
                        </div>
                    </div>
                    <CustomButton text={'Place Order'} style={style.button} onPress={()=>handleStripePayment()} />
                </div>
            </div>
        </div>
    );
};

export default Checkout;
