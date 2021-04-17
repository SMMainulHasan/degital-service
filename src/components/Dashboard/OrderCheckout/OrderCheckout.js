import React, { useContext, useEffect } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import './OrderCheckout.css';
import { useForm } from "react-hook-form";
import { userContext } from '../../../App';
import { useParams } from 'react-router';

const OrderCheckout = () => {
    const [user] = useContext(userContext);
    const {id} = useParams();
    // useEffect( () => {
    //     fetch('')
    // }, [])

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <div className="row">
            <Sidebar></Sidebar>
            <div className="col-9 order-checkout">
                <h2 className="pt-5 ps-5">order checkout</h2>
                <form className="p-5" onSubmit={handleSubmit(onSubmit)}>
                    <label htmlFor="name">Name:</label> <br/>
                    <input defaultValue={user.name} className="form-control" {...register("example")} /> <br/>
                    <label htmlFor="email">Email:</label> <br/>
                    <input defaultValue={user.email} className="form-control" {...register("exampleRequired", { required: true })} /> <br/>
                    <label htmlFor="email">Service:</label> <br/>
                    <input defaultValue={user.email} className="form-control" {...register("exampleRequired", { required: true })} /> <br/>
                    {errors.exampleRequired && <span>This field is required</span>} <br/>

                    <input type="submit" />
                </form>
            </div>
        </div>
    );
};

export default OrderCheckout;