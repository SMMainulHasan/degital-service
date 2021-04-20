import React, { useEffect, useState } from 'react';
import AdminSidebar from '../AdminSidebar/AdminSidebar';
import OrderDataRow from '../OrderDataRow/OrderDataRow';

const OrderListForAdmin = () => {
    const [orderedListForAdmin, setOrderedListForAdmin] = useState()
    console.log(orderedListForAdmin);
    useEffect(() => {
        fetch('http://localhost:8080/getAllOrders')
            .then(res => res.json())
            .then(data => setOrderedListForAdmin(data))
    }, [])


    return (
        <div className=" row">
            <AdminSidebar></AdminSidebar>
            <div className="col-9 dash-right-side">
                <h2 className="pt-5 ps-5">All Orders</h2>
                <div className="pt-3 ps-5 me-5 order-list">
                    <table className="table table-striped table-hover">
                        <thead>
                            <tr>
                                <td>Name</td>
                                <td>Email</td>
                                <td>Service</td>
                                <td>Status</td>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                orderedListForAdmin?.map(orderData => <OrderDataRow orderData={orderData} key={orderData._id}></OrderDataRow>)
                            }
                        </tbody>
                    </table>

                </div>
            </div>

        </div>
    );
};

export default OrderListForAdmin;