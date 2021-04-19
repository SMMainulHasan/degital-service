import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { userContext } from '../../../App';
import Sidebar from '../Sidebar/Sidebar';

const Review = () => {
    const [user] = useContext(userContext);
    const { register, handleSubmit, reset} = useForm();

    const onSubmit = data => {
        const newReview = {...data, ...user}
        fetch('http://localhost:8080/addReview', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(newReview)
            }).then(res => {
                if (res.status === 200) {
                    window.alert('Review added successfully!')
                    reset();
                }
                else {
                    window.alert('Sorry try again!')
                }
            });
    };



    return (
        <div className=" row">
            <Sidebar></Sidebar>
            <div className="col-9 dash-right-side">
                <h2 className="pt-5 ps-5">Orders</h2>
                <div className="pt-3 ps-5 order-list">
                <form className="p-5" onSubmit={handleSubmit(onSubmit)}>
                        <label>Company Name & designation:</label> <br />
                        <input className="form-control" placeholder="Company, designation" {...register("company")} /> <br />
                        <label>Reviews:</label> <br />
                        <textarea className="form-control" placeholder="Review hare ..." {...register("review", { required: true })} /> <br />
                        <input className="form-control button px-5 py-1" type="submit" value="Review Submit"/>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default Review;