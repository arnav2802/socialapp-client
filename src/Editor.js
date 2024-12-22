import React, { useCallback } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';


export default function Editor({value, onChange}) {
  const modules = {
    toolbar: {
      container: [
        [{ header: [1, 2, false] }],
        ['bold', 'italic', 'underline', 'strike'],
        [{ list: 'ordered' }, { list: 'bullet' }],
        ['blockquote', 'code-block'],
        ['link'],
        ['clean']
      ]
    }
  };

  const handleChange = useCallback((newValue) => {
    onChange(newValue);
  }, [onChange]);

  return (
    <div className="editor-wrapper" style={{ height: "400px" }}>
      <ReactQuill 
        style={{ height: "350px" }}
        theme="snow"
        value={value || ''}
        onChange={handleChange}
        modules={modules}
        preserveWhitespace={true}
      />
    </div>
  );
} 