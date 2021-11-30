import React, { useEffect, useState } from "react";
import axios from "axios";

const BlogPost = () => {
    const [blog, setBlog] = useState([]);

    useEffect(() => {
        axios
            .get("https://jsonplaceholder.typicode.com/posts")
            .then((post) => {
                console.log({ post });
                setBlog(post);
                console.log({ setBlog });
            })
            .catch((err) => {
                console.log("error with catch:", err);
            });
    }, []);

    console.log("blog:", blog);
    return (
        <div>
            <h1>Blog yeah!</h1>
            {blog.map((bloggy) => (
                <ul>
                    <li>{bloggy.title}</li>
                    <li></li>
                </ul>
            ))}
        </div>
    );
};

export default BlogPost;
