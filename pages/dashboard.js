import PostEditor from '../components/PostEditor';

const Dashboard = () => {
  // Handle save logic, for example, sending data to an API
  const handleSavePost = async (post) => {
    // Send POST request to the API to save the post
    const response = await fetch('/api/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(post),
    });

    if (response.ok) {
      console.log('Post saved successfully');
    } else {
      console.error('Failed to save post');
    }
  };

  return (
    <div>
      <h1>CMS Dashboard</h1>
      <PostEditor onSave={handleSavePost} />
    </div>
  );
};

export default Dashboard;
