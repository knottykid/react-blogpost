import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Grid } from "@mui/material";

const BlogPost = () => {
    const [blog, setBlog] = useState([]);

    useEffect(() => {
        axios
            .get("https://jsonplaceholder.typicode.com/posts")
            .then((post) => {
                console.log({ post });
                setBlog(post.data);
                console.log({ setBlog });
            })
            .catch((err) => {
                console.log("error with catch:", err);
            });
        return () => console.log("bye bye");
    }, []);

    console.log("blog:", blog);
    return (
        <div>
            <Container>
                <Grid container spacing={3}>
                    {blog.map((bloggy, index) => {
                        if (!bloggy) {
                            return <h1>Nothing yet</h1>;
                        } else {
                            return <h2>{bloggy.title}</h2>;
                        }
                    })}
                </Grid>
            </Container>
        </div>
    );
};

export default BlogPost;
