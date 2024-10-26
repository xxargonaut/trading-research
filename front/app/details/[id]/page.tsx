'use client'

import { useParams } from 'next/navigation';
import { useRouter } from 'next/navigation';

export default function DetailsPage() {
    const { id } = useParams(); // Access route parameters
    const router = useRouter();
    return (
        <div className='w-100% h-screen bg-red-300 px-10 py-8'>
            <h1 className='w-full text-5xl text-center'>{id}</h1>
            <div className='w-100% flex justify-end px-5'>
                <button className='p-2 rounded-md bg-red-200' onClick={() => {router.push(`/`)}}>
                    {`<< `}Back to TokenListTable
                </button>
            </div>
            <div className='w-full mt-2 px-3 pt-3 pb-[10px] rounded-lg bg-red-200'>
                <table className='w-full rounded-lg bg-red-300'>
                    <thead className='border-b-4 border-red-200 text-[22px]'>
                        <tr>
                            <th className='py-1'>Name</th>
                            <th>Price</th>
                            <th>Dex</th>
                        </tr>
                    </thead>
                    <tbody className='text-center text-[18px]'>
                        {/* {pageData.map((item) => (
                            <tr
                                key={item.name}
                                className='border-b-2 border-red-200 cursor-pointer'
                            >
                                <td className='py-1'>{item.name}</td>
                                <td>{item.MaxPrice}</td>
                                <td>{item.MinPrice}</td>
                            </tr>
                        ))} */}
                    </tbody>
                </table>
            </div>
            <div className='flex flex-row justify-center gap-3 mt-2'>
                <button
                    // onClick={goToPreviousPage}
                    className='p-2 rounded-s-full bg-red-200'
                    // disabled={currentPage === 1}
                >
                    {`<<`}
                </button>
                {/* {Array.from({ length: totalPages }, (_, index) => (
                    <button
                        key={index}
                        onClick={() => goToPage(index + 1)}
                        className={`p-2 rounded-[3px] bg-red-200 ${currentPage === index + 1 ? 'bg-red-400' : ''}`}
                    >
                        {index + 1}
                    </button>
                ))} */}
                <button
                    // onClick={goToNextPage}
                    className='p-2 rounded-e-full bg-red-200'
                    // disabled={currentPage === totalPages}
                >
                    {`>>`}
                </button>
            </div>
        </div>
    );
}
