'use client'

import { useEffect, useState } from "react";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import OrderTable from "@/components/Tables/Order";
import { orderApi } from "@/api/OrderApi";
import toast from "react-hot-toast";

const packageData = [
  { name: 'Dashboard / ', link: '/' },
  { name: 'Orders ', link: '/shop-admin/orders' },
];

const TablesPage = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await orderApi.getAllOrders();
        console.log('yguyguguyguyuygyu',response.data)
        setOrders(response.data.data);
      } catch (error) {
        console.error(error);
        toast.error("Failed to fetch orders.");
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  return (
    <DefaultLayout>
      <Breadcrumb pageName="Orders" navigation={packageData} />
      <div className="flex flex-col gap-10">
        {loading ? <p>Loading orders...</p> : <OrderTable listOfOrders={orders} />}
      </div>
    </DefaultLayout>
  );
};

export default TablesPage;
