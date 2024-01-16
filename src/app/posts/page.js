import Link from "next/link";

const PostsPage = async () => {

    const res = await fetch("http://localhost:5000/posts", {

        // isr korbo ecommrece website e 

        next: {
            revalidate: 5,
        },
    });

    const posts = await res.json();
    // console ninja 

        // cache: "no-cache"

        // ssr server side rendering || user er request onujayi data update hobe 
        // (news portal ba social media website e use korte gobe)
        // cache: "no-store"

    return (
        <div className="w-full">
            <h1 className="text-3xl text-center">Tota                                                        l Post: {posts.length} </h1>

            {
                posts.map((post) => (
                    <div
                    key={post.id}
                     className="card bg-gray-50 shadow-md my-4 w-[70%] mx-auto">
                        <div className="card-body">
                            <h2 className="card-title">{post.title}</h2>
                            <p>{post.description}</p>
                            <p>Likes: {post.likesCount}</p>
                            <div className="card-actions justify-end">
                               <Link href={`/posts/${post.id}`}>
                                   <button className="btn btn-primary">See More</button>
                               </Link>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default PostsPage;