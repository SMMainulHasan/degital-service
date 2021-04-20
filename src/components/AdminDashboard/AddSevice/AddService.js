import React, { useState } from 'react';
import AdminSidebar from '../AdminSidebar/AdminSidebar';
import { useForm } from "react-hook-form";
import axios from 'axios';

const AddService = () => {
    const [imageUrl, setImageUrl] = useState();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = data => {
        let serviceData = { ...data, imageUrl }

        if (imageUrl) {
            fetch('http://localhost:8080/addService', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(serviceData)
            }).then(res => {
                if (res.status === 200) {
                    reset();
                    setImageUrl('')
                    window.alert('Service added successfully!')
                }
                else {
                    window.alert('Sorry try again!')
                }
            });
        }
    };

    //create image url
    const handleImgUp = e => {
        const imgData = new FormData();
        imgData.set('key', '2776edc2118bb2862526ca87bf8e6434');
        imgData.append('image', e.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload',
            imgData)
            .then(response => {
                setImageUrl(response.data.data.display_url);
            })
            .catch(error => {
                console.log(error);
            });
    }
    return (
        <div className=" row">
            <AdminSidebar></AdminSidebar>
            <div className="col-9 dash-right-side">
                <h2 className="pt-5 ps-5">Add Service</h2>
                <div className="pt-3 ps-5 me-5 order-list">
                    <form className="p-5" onSubmit={handleSubmit(onSubmit)}>
                        <label htmlFor="name">Service Title:</label> <br />
                        <input className="form-control" placeholder="Service title" {...register("title", { required: true })} /> <br />
                        <label htmlFor="email">Price:</label> <br />
                        <input className="form-control" placeholder="Price" {...register("price", { required: true })} /> <br />
                        <label htmlFor="email">Service details:</label> <br />
                        <input className="form-control" placeholder="Service details" {...register("detail", { required: true })} /> <br />
                        <label htmlFor="service">Service:</label> <br />
                        <input className="form-control" type="file" onChange={handleImgUp} /> <br />
                        {errors.exampleRequired && <span>This field is required</span>} <br />
                        {
                            imageUrl ? <input className="form-control button px-5 py-1" type="submit" value="Add Service" /> : <input className="form-control button px-5 py-1" type="button" value="Waiting for image upload" />
                        }
                    </form>
                </div>
            </div>

        </div>
    );
};

export default AddService;