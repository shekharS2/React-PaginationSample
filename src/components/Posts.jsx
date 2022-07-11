import React from 'react';

import './Posts.css';

const Posts = ({currPageData, loading }) => {
    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            {currPageData.map((post) => (
                <div key={post.id}>
                    <span>{post.id}. </span>
                    <span>
                            {post.title}
                    </span>
                </div>
            ))}
        </div>
    );
};

export default Posts;