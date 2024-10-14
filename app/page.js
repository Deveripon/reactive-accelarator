import PwaInstall from "@/components/pwa-install";
import Link from "next/link";

const page = () => {
    return (
        <div className='bg-gray-800 w-screen h-screen flex flex-col gap-5 justify-center items-center'>
            <Link
                className='bg-gray-100 px-6 py-3 rounded'
                href='/reactive-accilarator'>
                👉 Reactive accelerator
            </Link>
            <PwaInstall />
        </div>
    );
};

export default page;

