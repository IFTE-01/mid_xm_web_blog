import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function Blog() {
    const { id } = useParams();
    const [blog, setBlog] = useState(null);

    useEffect(() => {
        fetch(`https://jsonfakery.com/blogs/${id}`)
            .then(res => res.json())
            .then(data => setBlog(data));
    }, [id]);

    return (
        <>
            {blog ? (
                <>
                    <h1>{blog.title}</h1>
                    <img src={blog.featured_image} />
                    <p>{blog.summary}</p>
                </>
            ) : (
                <p>Loading...</p>
            )}
        </>
    );
}

export default Blog;
