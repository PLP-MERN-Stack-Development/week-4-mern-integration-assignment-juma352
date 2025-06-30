import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getPostById } from '../services/postService';
import { Card, CardContent, CardTitle } from '@/components/ui/card';

const PostDetail = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetch = async () => {
      const data = await getPostById(id);
      setPost(data);
    };
    fetch();
  }, [id]);

  if (!post) return <p className="text-center">Loading post...</p>;

  return (
    <Card className="max-w-3xl mx-auto">
      <CardContent className="p-6">
        <CardTitle className="text-2xl">{post.title}</CardTitle>
        <p className="text-muted-foreground mt-2">{post.author}</p>
        <div className="mt-6 whitespace-pre-wrap">{post.body}</div>
        {post.imageUrl && (
          <img src={post.imageUrl} alt={post.title} className="mt-4 max-w-full rounded" />
        )}
      </CardContent>
    </Card>
  );
};

export default PostDetail;
