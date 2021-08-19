import React, {useState, useRef, useMemo} from 'react';
import '../src/styles/App.css';
import {PostList} from "./components/PostList";
import {MyButton} from "./components/UI/button/MyButton";
import {MyInput} from "./components/UI/input/MyInput";
import {PostForm} from "./components/PostForm";
import MySelect from "./components/UI/select/MySelect";
import PostFilter from "./components/PostFilter";

function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: "aa", body: "nn"},
        {id: 2, title: "bb 2", body: "f"},
        {id: 3, title: "cc 3", body: "a"},
    ])
    const [filter, setFilter] = useState({sort: '', query: ''})
    
    const sortedPosts = useMemo(() => {
        console.log('getSortedPosts')
        if(filter.sort){
            return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]));
        }
        return posts;
    }, [filter.sort, posts]);
    
    const sortedAndSearchedPosts = useMemo(() => {
        return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query))
    }, [filter.query, sortedPosts]) 
    
    const createPost = (newPost) => {
        setPosts([...posts, newPost])
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }
    
    return (
        <div className="App">
            <PostForm create={createPost}/>
            <hr style={{margin: '15px 0'}}/>
            <PostFilter filter={filter} setFilter={setFilter}/>
            {sortedAndSearchedPosts.length
                ? <PostList remove={removePost} posts={sortedAndSearchedPosts} title="Посты про JS"/>
                : <h1 style={{textAlign: 'center'}}>
                    Посты не найдены
                </h1>
            }

        </div>
    );
}

export default App;
