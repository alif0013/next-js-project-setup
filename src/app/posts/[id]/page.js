import Link from "next/link";


const DetailPage = async ({params}) => {

    const res = await fetch(`http://localhost:5000/posts/${params.id}`);
    const post = await res.json();

    return (
        <div>
            <h1 className="">Post Detail Page</h1>
            <div
                    key={post.id}
                     className="card bg-gray-50 shadow-md my-4 w-[70%] mx-auto">
                        <div className="card-body">
                            <h2 className="card-title">{post.title}</h2>
                            <p>{post.description}</p>
                            <p>Likes: {post.likesCount}</p>
                            <div className="card-actions justify-end">
                               <Link href='/posts'>
                                   <button className="btn btn-secondary">See Posts</button>
                               </Link>
                            </div>
                        </div>
                    </div>
        </div>
    );
};

export default DetailPage;