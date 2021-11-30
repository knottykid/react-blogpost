import React, { useEffect, useState } from "react";
import axios from "axios";
import {
    Container,
    Grid,
    Typography,
    List,
    ListItem,
    Divider,
    ListItemText,
    LinearProgress,
} from "@mui/material";

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
                <Grid>
                    <List
                        sx={{
                            width: "100%",
                            maxWidth: 360,
                            bgcolor: "background.paper",
                        }}
                    >
                        <ListItem alignItems="flex-start">
                            <ListItemText
                                primary="Brunch this weekend?"
                                secondary={
                                    <React.Fragment>
                                        <Typography
                                            sx={{ display: "inline" }}
                                            component="span"
                                            variant="body2"
                                            color="text.primary"
                                        >
                                            {blog.map((bloggy, index) => {
                                                if (!bloggy) {
                                                    return <h1>Nothing yet</h1>;
                                                } else {
                                                    return (
                                                        <h2>{bloggy.title}</h2>
                                                    );
                                                }
                                            })}
                                        </Typography>
                                    </React.Fragment>
                                }
                            />
                        </ListItem>
                    </List>
                </Grid>
            </Container>
        </div>
    );
};

export default BlogPost;

// {/* <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>

//</List>

//       <ListItem alignItems="flex-start">
//
//         <ListItemText
//           primary="Brunch this weekend?"
//           secondary={
//             <React.Fragment>
//               <Typography
//                 sx={{ display: 'inline' }}
//                 component="span"
//                 variant="body2"
//                 color="text.primary"
//               >
//                 Ali Connors
//               </Typography>
//               {" — I'll be in your neighborhood doing errands this…"}
//             </React.Fragment>
//           }
//         />
//       </ListItem>
//       <Divider variant="inset" component="li" />
//       <ListItem alignItems="flex-start">
//         <ListItemAvatar>
//           <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
//         </ListItemAvatar>
//         <ListItemText
//           primary="Summer BBQ"
//           secondary={
//             <React.Fragment>
//               <Typography
//                 sx={{ display: 'inline' }}
//                 component="span"
//                 variant="body2"
//                 color="text.primary"
//               >
//                 to Scott, Alex, Jennifer
//               </Typography>
//               {" — Wish I could come, but I'm out of town this…"}
//             </React.Fragment>
//           }
//         />
//       </ListItem>
//       <Divider variant="inset" component="li" />
//       <ListItem alignItems="flex-start">
//         <ListItemAvatar>
//           <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
//         </ListItemAvatar>
//         <ListItemText
//           primary="Oui Oui"
//           secondary={
//             <React.Fragment>
//               <Typography
//                 sx={{ display: 'inline' }}
//                 component="span"
//                 variant="body2"
//                 color="text.primary"
//               >
//                 Sandra Adams
//               </Typography>
//               {' — Do you have Paris recommendations? Have you ever…'}
//             </React.Fragment>
//           }
//         />
//       </ListItem>
//     </List>
//   ); */}
