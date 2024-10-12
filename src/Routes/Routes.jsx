import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home";
import DashboardLayout from "../Dashboard/DashboardLayout/DashboardLayout";
import ErrorPage from "../Dashboard/ErrorPage/ErrorPage";
import Dashboard from "../Dashboard/Dashboard";
import AddProducts from "../Dashboard/Pages/AddProducts/AddProducts";
import AllProducts from "../Dashboard/Pages/AllProducts/AllProducts";
import AllReturn from "../Dashboard/Pages/AllReturn/AllReturn";
import AllSalesReport from "../Dashboard/Pages/AllSalesReport/AllSalesReport";
import CustomerInfo from "../Dashboard/Pages/CustomerInfo/CustomerInfo";
import ReturnProductsAdd from "../Dashboard/Pages/ReturnProductsAdd/ReturnProductsAdd";
import SalesReport from "../Dashboard/Pages/SalesReport/SalesReport";
import Stock from "../Dashboard/Pages/Stock/Stock";
import Sales from "../Dashboard/Pages/Sales/Sales";
import UpdateProduct from "../Dashboard/Pages/UpdateProducts/UpdateProduct";
import ProductsList from "../Dashboard/Pages/ProductList/ProductList";
import AddCustomer from "../Dashboard/Pages/AddCustomer/AddCustomer";



export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: 'update-product/:id',
                element: <UpdateProduct />
            },
        ]
    },
    {
        path: 'dashboard',
        element: <DashboardLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <Dashboard />
            },
            {
                path: 'add-product',
                element: <AddProducts />
            },
            // {
            //     path: 'update-product/:id',
            //     element: <UpdateProduct />
            // },
            {
                path: 'sales',
                element: <Sales />
            },
            {
                path: 'all-products',
                element: <AllProducts />
            },
            {
                path: 'all-return',
                element: <AllReturn />
            },
            {
                path: 'all-sales-report',
                element: <AllSalesReport />
            },
            {
                path: 'customer-info',
                element: <CustomerInfo />
            },
            {
                path: 'add-return',
                element: <ReturnProductsAdd />
            },
            {
                path: 'sales-report',
                element: <SalesReport />
            },
            {
                path: 'stock',
                element: <Stock />
            },
            {
                path: 'products-list',
                element: <ProductsList />
            },
            {
                path: 'add-customer',
                element: <AddCustomer />
            },
        ]

    }
]);

