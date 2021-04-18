import React from 'react';
import Sidebar from '../Sidebar/Sidebar';

const Review = () => {




    return (
        <div className=" row">
            <Sidebar></Sidebar>
            <div className="col-9 dash-right-side">
                <h2 className="pt-5 ps-5">Orders</h2>
                <div className="pt-3 ps-5 order-list">
                    <form action="">
                        <input type="text" name="name" defaultValue="" placeholder="Your name" /> <br/><br/>
                        <textarea name="review" id="" cols="30" rows="5" placeholder="Your valuable review..."></textarea> <br/>
                        <input className="px-5 py-2 button" type="submit" value="Submit review"/>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default Review;