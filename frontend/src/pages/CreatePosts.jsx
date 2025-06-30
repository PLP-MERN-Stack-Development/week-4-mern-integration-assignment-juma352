// src/pages/CreatePost.jsx
import { useState } from 'react';
import { createPost } from '../services/postService';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { useNavigate } from 'react-router-dom';

const CreatePost = () => {
  const [form, setForm] = useState({ title: '', content: '', excerpt: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createPost(form);
      navigate('/');
    } catch (err) {
      console.error('Create post failed:', err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-4">
      <div>
        <Label htmlFor="title">Title</Label>
        <Input name="title" value={form.title} onChange={handleChange} required />
      </div>
      <div>
        <Label htmlFor="excerpt">Excerpt</Label>
        <Input name="excerpt" value={form.excerpt} onChange={handleChange} required />
      </div>
      <div>
        <Label htmlFor="content">Content</Label>
        <Textarea name="content" rows={6} value={form.content} onChange={handleChange} required />
      </div>
      <Button type="submit">Publish</Button>
    </form>
  );
};

export default CreatePost;
