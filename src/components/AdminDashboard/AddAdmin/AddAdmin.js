import React from 'react';
import AdminSidebar from '../AdminSidebar/AdminSidebar';
import { useForm } from "react-hook-form";

const AddAdmin = () => {
    const { register, handleSubmit, reset} = useForm();

    const onSubmit = data => {
        const email = data
        fetch('http://localhost:8080/addAdmin', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(email)
            }).then(res => {
                if (res.status === 200) {
                    window.alert('Service added successfully!')
                    reset();
                }
                else {
                    window.alert('Sorry try again!')
                }
            });
    };

    
    return (
        <div className=" row">
            <AdminSidebar></AdminSidebar>
            <div className="col-9 dash-right-side">
                <h2 className="pt-5 ps-5">Add Admin</h2>
                <div className="pt-3 ps-5 order-list">
                    <form className="p-5" onSubmit={handleSubmit(onSubmit)}>
                        <label htmlFor="email">Email:</label> <br />
                        <input className="form-control" placeholder="Email" {...register("email", { required: true })} /> <br />
                        <input className="form-control button px-5 py-1" type="submit" value="Add Service"/>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default AddAdmin;