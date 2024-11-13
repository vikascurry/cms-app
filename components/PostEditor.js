import React, { useState } from 'react';
import ReactQuill from 'react-quill'; // Import react-quill
import 'react-quill/dist/quill.snow.css'; // Import Quill styles

const PostEditor = ({ onSave }) => {
  const [title, setTitle] = useState('');  // State for title
  const [content, setContent] = useState(''); // State for content (editor)

  // Handle save when user clicks the "Save" button
  const handleSave = () => {
    // Trigger the onSave function passed as a prop, passing title and content
    onSave({ title, content });
  };

  return (
    <div>
      {/* Title Input */}
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}  // Update title state on input change
        placeholder="Enter Title"
        className="border p-2 mb-4 w-full"
      />
      
      {/* React-Quill Editor */}
      <ReactQuill
        value={content}  // Bind content to editor
        onChange={setContent}  // Update content state on editor change
        placeholder="Write your post content here..."  // Placeholder text
        theme="snow"  // Snow theme for react-quill
        className="mb-4" // Add some margin below the editor
      />

      {/* Save Button */}
      <button
        onClick={handleSave}
        className="bg-blue-500 text-white p-2 rounded"
      >
        Save
      </button>
    </div>
  );
};

export default PostEditor;
