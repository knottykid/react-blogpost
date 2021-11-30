import React, { useEffect, useState } from "react";
import axios from "axios";

const BlogPost = () => {
    const [blog, setBlog] = useState([]);

    useEffect(() => {
        console.log("useEffect blogPost.jsx");
        const list = axios
            .get("https://jsonplaceholder.typicode.com/posts")
            .then((post) => {
                console.log({ post });
                setBlog(post);
                console.log({ setBlog });
            });
    }, []);

    return <div></div>;
};

export default BlogPost;
