import React, { useContext, useEffect, useState } from 'react';
import { userContext } from '../../../App';
import OrderedServiceCard from '../OrderedServiceCard/OrderedServiceCard';
import Sidebar from '../Sidebar/Sidebar';

const Orders = () => {
    const [user] = useContext(userContext);
    const [orderedList, setOrderedList] = useState();
    useEffect( ()=> {
        fetch(`https://sheltered-reef-89819.herokuapp.com/getMyOrders?email=${user.email}`)
        .then(res=> res.json())
        .then(data=> setOrderedList(data))
    }, [user.email])

    
    return (
        <div className=" row">
            <Sidebar></Sidebar>
            <div className="col-9 dash-right-side">
                <h2 className="pt-5 ps-5">Orders</h2>
                <div className="pt-3 ps-5 order-list">
                    {
                        orderedList?.map(order => <OrderedServiceCard orderedService={order}></OrderedServiceCard>)
                    }
                </div>
            </div>
            
        </div>
    );
};

export default Orders;