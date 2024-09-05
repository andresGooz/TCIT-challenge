import React, { useState, useEffect } from 'react';


function LocalFilter({ posts, onFilteredPostsChange }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredPosts, setFilteredPosts] = useState(posts);

  useEffect(() => {
    const filterPosts = () => {
      if (searchTerm === '') {
        setFilteredPosts(posts);
      } else {
        setFilteredPosts(posts.filter(post =>
          post.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          post.description.toLowerCase().includes(searchTerm.toLowerCase())
        ));
      }
    };
    filterPosts();
  }, [searchTerm, posts]);

  useEffect(() => {
    onFilteredPostsChange(filteredPosts);
  }, [filteredPosts, onFilteredPostsChange]);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Filter posts..."
        value={searchTerm}
        onChange={handleChange}
      />
    </div>
  );
}

export default LocalFilter;
