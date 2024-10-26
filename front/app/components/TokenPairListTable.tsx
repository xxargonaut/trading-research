"use client";

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

type TokenPairData = {
    id: number;
    name: string;
    MaxPrice: number;
    MinPrice: number;
};

const TokenPairListTable: React.FC = () => {
    const [data, setData] = useState<TokenPairData[]>([]);
    const [sortBy, setSortBy] = useState<'name' | 'difference'>('difference');
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;
    const router = useRouter();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/api/tokenpairs');
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const result = await response.json();
                setData(result);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    const sortedData = data.slice().sort((a, b) => {
        if (sortBy === 'name') {
            return a.name.localeCompare(b.name);
        } else {
            const diffA = a.MaxPrice - a.MinPrice;
            const diffB = b.MaxPrice - b.MinPrice;
            return diffB - diffA;
        }
    });

    const totalPages = Math.ceil(sortedData.length / itemsPerPage);

    const pageData = sortedData.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    const goToNextPage = () => setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
    const goToPreviousPage = () => setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
    const goToPage = (pageNumber: number) => setCurrentPage(pageNumber);

    const handleRowClick = (id: number) => {
        router.push(`/details/${id}`);
    };

    return (
        <div className='w-100% h-screen bg-red-300 px-10 py-8'>
            <h1 className='w-full text-5xl text-center'>Token Pair List</h1>
            <div className='w-100% flex justify-end px-5'>
                <div className='p-2 rounded-md bg-red-200'>
                    <label>Sort By: </label>
                    <select
                        className='py-2 rounded-md'
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value as 'name' | 'difference')}
                    >
                        <option value="name">Name</option>
                        <option value="difference">Max Difference</option>
                    </select>
                </div>
            </div>
            <div className='w-full mt-2 px-3 pt-3 pb-[10px] rounded-lg bg-red-200'>
                <table className='w-full rounded-lg bg-red-300'>
                    <thead className='border-b-4 border-red-200 text-[22px]'>
                        <tr>
                            <th className='py-1'>Name</th>
                            <th>Max Price</th>
                            <th>Min Price</th>
                        </tr>
                    </thead>
                    <tbody className='text-center text-[18px]'>
                        {pageData.map((item) => (
                            <tr
                                key={item.name}
                                className='border-b-2 border-red-200 cursor-pointer hover:bg-red-400 hover:opacity-90'
                                onClick={() => handleRowClick(item.id)}
                            >
                                <td className='py-1'>{item.name}</td>
                                <td>{item.MaxPrice}</td>
                                <td>{item.MinPrice}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className='flex flex-row justify-center gap-3 mt-2'>
                <button
                    onClick={goToPreviousPage}
                    className='p-2 rounded-s-full bg-red-200'
                    disabled={currentPage === 1}
                >
                    {`<<`}
                </button>
                {Array.from({ length: totalPages }, (_, index) => (
                    <button
                        key={index}
                        onClick={() => goToPage(index + 1)}
                        className={`p-2 rounded-[3px] bg-red-200 ${currentPage === index + 1 ? 'bg-red-400' : ''}`}
                    >
                        {index + 1}
                    </button>
                ))}
                <button
                    onClick={goToNextPage}
                    className='p-2 rounded-e-full bg-red-200'
                    disabled={currentPage === totalPages}
                >
                    {`>>`}
                </button>
            </div>
        </div>
    );
};

export default TokenPairListTable;
