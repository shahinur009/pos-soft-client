import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
    return (
        <div className="grid grid-cols-2">
            <div>
                <ul>
                    <li><Link to='sales'>বিক্রয় এন্ট্রি</Link></li>
                    <li><Link to='add-product'>পণ্য যোগ করুন</Link></li>
                    <li><Link>সকল পণ্য</Link></li>
                    <li><Link>সকল বিক্রয় রিপোর্ট</Link></li>
                    <li><Link>স্টক রিপোর্ট</Link></li>
                    <li><Link>রিটার্ন পণ্য যোগ করুন</Link></li>
                    <li><Link>সকল রিটার্ন পণ্য</Link></li>
                    <li><Link>গ্রাহক রিপোর্ট</Link></li>

                </ul>
            </div>
            <div>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;