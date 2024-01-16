"use client"
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const Users = () => {

    const [users, setUsers] = useState([]);

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => res.json())
        .then((data) => setUsers(data))
    },[])


    return (
        <div>
            <h1>Total User: {users.length}</h1>
            {
                users.map((user) => (
                    <div
                    key={user.id}
                     className="card bg-gray-50 shadow-md my-4 w-[70%] mx-auto">
                        <div className="card-body">
                            <h2 className="card-title">Name: {user.name}</h2>
                            <p>User Name: {user.username}</p>
                            <p>Email: {user.email}</p>
                            <div className="card-actions justify-end">
                               <Link href="/">
                                   <button className="btn btn-primary">Home</button>
                               </Link>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default Users;