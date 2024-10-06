import { Link } from 'react-router-dom';
import pic from '../../../public/error.png'
const ErrorPage = () => {
    return (
        <>
            <section className="flex items-center h-full sm:p-16 bg-[#004A29] ">
                <div className="container flex flex-col items-center justify-center px-5 mx-auto my-5 space-y-5 text-center sm:max-w-md text-white">
                    <img src={pic} alt="error image" className='h-[50vh]'/>
                    <p className="text-3xl">currently offline</p>
                    <Link to='/' rel="noopener noreferrer" href="#" className="px-8 py-3 font-semibold rounded bg-[#F4CE1F]">Back to homepage</Link>
                </div>
            </section>
        </>
    );
};

export default ErrorPage;