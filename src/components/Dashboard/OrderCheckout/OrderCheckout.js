import React, { useContext, useEffect } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import './OrderCheckout.css';
import { useForm } from "react-hook-form";
import { userContext } from '../../../App';
import { useParams } from 'react-router';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import PaymentForm from '../PaymentForm/PaymentForm';

const stripePromise = loadStripe('pk_test_51IeRveCVrzPFzcO97vW3z1PGtQJVCyG9uXBcydNETq8xaFDwzQomeoi87XA1XUXOnvr3NW1U2gYDhI9tQLH6Eqyf00cFLCjLFH');


const OrderCheckout = () => {
    const [user] = useContext(userContext);
    const { id } = useParams();
    useEffect( () => {
        fetch('')
    }, [])

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <div className="row">
            <Sidebar></Sidebar>
            <div className="col-9 dash-right-side">
                <h2 className="pt-5 ps-5">order checkout</h2>
                <form className="p-5" onSubmit={handleSubmit(onSubmit)}>
                    <label htmlFor="name">Name:</label> <br />
                    <input defaultValue={user.name} className="form-control" {...register("example")} /> <br />
                    <label htmlFor="email">Email:</label> <br />
                    <input defaultValue={user.email} className="form-control" {...register("exampleRequired", { required: true })} /> <br />
                    <label htmlFor="email">Service:</label> <br />
                    <input defaultValue={id} className="form-control" {...register("exampleRequired", { required: true })} /> <br />
                    {errors.exampleRequired && <span>This field is required</span>} <br />
                    <input type="submit" />
                </form>
                <div className="ps-5 me-5 ">
                    <Elements stripe={stripePromise}>
                        <PaymentForm></PaymentForm>
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default OrderCheckout;