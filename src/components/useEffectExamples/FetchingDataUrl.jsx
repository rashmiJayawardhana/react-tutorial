import React, { useEffect, useState } from 'react'

function FetchingDataUrl() {
    const [data, setData] =useState([]);

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.json())
        .then(data => setData(data))
        .catch(error=>console.error("Error fetching data:", error));
    },[])
  return (
    <div>
        <ul>{data.slice(0,5).map(post => (
            <li key={post.id}>
                {post.title}
            </li>
        ))}
        </ul>
    </div>
  )
}

export default FetchingDataUrl
