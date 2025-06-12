//Blogging App using Hooks
import { useState, useRef, useEffect, useReducer } from "react";

// limitation of reducer:
// 1) should be syncronous function
// 2) Should not mutate the original state
// 3) ++ operator doesn't work here
function blogReducer(state, action) {
    // apart from switch case u can use if-else statement also 
    switch (action.type) {
        case "ADD":
            return [action.blog, ...state];
        case "REMOVE":
            return state.filter((blog, index) => action.index != index);
        default:
            return [];
    }

}

export default function Blog() {

    // const [title,setTitle] = useState("");
    // const [content,setContent] = useState("");
    const [formData, setformData] = useState({ title: "", content: "" })


    // const [blogs, setBlogs] =  useState([]);
    const [blogs, dispatch] = useReducer(blogReducer, []); // it is alternative to above useState. Here, everything works almost same as useState with an extention to reducer function(blogReducer)

    //useRef hook initialized
    const titleRef = useRef(null);

    // 1. Combination of componentDidMount and componentDidUpdate
    // Runs on mount and then every upadate
    // useEffect(() => {
    //   console.log("Running useEffect");
    // });

    // 2. Just runs on mount because it has no dependency
    // Focus in Title input on mount
    useEffect(() => {
        titleRef.current.focus();
    }, []); // automatically focus will go to title field when the component mount

    useEffect(() => {
        // 3. Required to add Title of the latest blog as page's title
        // Show Dependency Injection of blogs
        // Helps us avoid re-run logic on title and content change
        // Still has both DidMount and DidUpdate feature

        console.log("Runs on Blogs Mount/Update bcoz of the dependency given!!");
        if (blogs.length && blogs[0].title) {
            document.title = blogs[0].title;
        } else {
            document.title = "No blogs!";
        }
    }, [blogs]);

    function handleSubmit(e) {
        e.preventDefault();

        // setBlogs([{title: formData.title,content:formData.content}, ...blogs]);
        dispatch({ type: "ADD", blog: { title: formData.title, content: formData.content } }) // it passes 2 keys. One is type and another is data(blog) like what u want to add

        setformData({ title: "", content: "" });
        //Setting focus on title after adding a blog
        titleRef.current.focus();
        console.log(blogs);
    }

    function removeBlog(i) {

        // setBlogs( blogs.filter((blog,index)=> index !== i));
        dispatch({ type: "REMOVE", index: i }) // it passes 2 keys. One is type and another is index like what u want to remove

    }

    return (
        <>
            <h1>Write a Blog!</h1>
            <div className="section">

                {/* Form for to write the blog */}
                <form onSubmit={handleSubmit}>
                    <Row label="Title">
                        <input className="input"
                            placeholder="Enter the Title of the Blog here.."
                            value={formData.title}
                            ref={titleRef}
                            onChange={(e) => setformData({ title: e.target.value, content: formData.content })}
                        />
                    </Row >

                    <Row label="Content">
                        <textarea className="input content"
                            placeholder="Content of the Blog goes here.."
                            value={formData.content}
                            onChange={(e) => setformData({ title: formData.title, content: e.target.value })} // declare title as well else it will delete it.
                        />
                    </Row >

                    <button className="btn">ADD</button>
                </form>

            </div>

            <hr />

            {/* Section where submitted blogs will be displayed */}
            <h2> Blogs </h2>
            {blogs.map((blog, i) => (
                <div className="blog">
                    <h3>{blog.title}</h3>
                    <hr />
                    <p>{blog.content}</p>

                    <div className="blog-btn">
                        <button onClick={() => { removeBlog(i) }} className="btn remove"> Delete </button>
                    </div>
                </div>
            ))}

        </>
    )
}

//Row component to introduce a new row section in the form
function Row(props) {
    const { label } = props;
    return (
        <>
            <label>{label}<br /></label>
            {props.children}
            <hr />
        </>
    )
}
