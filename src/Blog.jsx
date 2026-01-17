import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function Blog() {
    const { id } = useParams();
    ///id = ekhane useParams() etar jonno path="/Home/:cardId" ekhaner cardId the chole asbe...

    const [blog, setBlog] = useState(null);

    useEffect(() => {
        fetch(`https://jsonfakery.com/blogs/${id}`)
            .then(res => res.json())
            .then(data => setBlog(data));
    });
    ///useEffect = eta use korle api sob somoi fetch hobe na. sodo tokhon fetch hobe, jokhon dorkar
    ///res.json() = fetch kora data ke js e convert kore
    ///setBlog(data)) = eta data gula [blog] e set korbe...const [blog, setBlog] = useState(null);
    

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
//// ei page kono kaj er na....