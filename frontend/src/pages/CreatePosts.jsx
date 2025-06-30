import { useState } from 'react';
import { createPost } from '../services/postService';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { useNavigate } from 'react-router-dom';

const CreatePost = () => {
  const [form, setForm] = useState({ title: '', body: '', author: '', imageUrl: '' });
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
        <Label htmlFor="author">Author</Label>
        <Input name="author" value={form.author} onChange={handleChange} placeholder="Anonymous" />
      </div>
      <div>
        <Label htmlFor="imageUrl">Image URL</Label>
        <Input name="imageUrl" value={form.imageUrl} onChange={handleChange} />
      </div>
      <div>
        <Label htmlFor="body">Body</Label>
        <Textarea name="body" rows={6} value={form.body} onChange={handleChange} required />
      </div>
      <Button type="submit">Publish</Button>
    </form>
  );
};

export default CreatePost;
