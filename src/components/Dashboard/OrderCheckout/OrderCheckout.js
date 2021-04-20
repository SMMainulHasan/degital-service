import React, { useContext, useEffect, useState } from 'react';
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
    const [serviceDetail, setServiceDetail] = useState();
    const { id } = useParams();
    useEffect(() => {
        fetch(`https://sheltered-reef-89819.herokuapp.com/getServices/${id}`)
            .then(res => res.json())
            .then(data => setServiceDetail(data))
    }, [id])


    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        const newOrder= { ...user, ...data,  serviceDetail, status: "Pending"}

        fetch('https://sheltered-reef-89819.herokuapp.com/addOrder', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(newOrder)
            }).then(res => {
                if (res.status === 200) {
                    window.alert('Order successfully!')
                    reset();
                }
                else {
                    window.alert('Sorry try again!')
                }
            });
    };




    return (
        <div className="row">
            <Sidebar></Sidebar>
            <div className="col-9 dash-right-side">
                <h2 className="pt-5 ps-5">order checkout</h2>
                <form className="p-5" onSubmit={handleSubmit(onSubmit)}>
                    <label htmlFor="name">Name:</label> <br />
                    <input defaultValue={user.name} className="form-control" {...register("name")} /> <br />
                    <label htmlFor="email">Email:</label> <br />
                    <input defaultValue={user.email} className="form-control" {...register("email", { required: true })} /> <br />
                    <label htmlFor="email">Service:</label> <br />
                    <input defaultValue={serviceDetail?.title} disabled className="form-control" /> <br />
                    <input className="form-control button" type="submit" value="Order Place" />
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