import { useEffect, useState } from 'react';
import { getPosts } from '../services/postService';
import { Card, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetch = async () => {
      try {
        const data = await getPosts();
        setPosts(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetch();
  }, []);

  if (loading) return <p className="text-center">Loading...</p>;

  const truncate = (text, length) => {
    if (!text) return '';
    return text.length > length ? text.substring(0, length) + '...' : text;
  };

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {posts.map((post) => (
        <Card key={post._id} className="hover:shadow-lg transition">
          <CardContent className="p-4">
            <CardTitle className="text-xl mb-2">{post.title}</CardTitle>
            <p className="text-muted-foreground line-clamp-3">{truncate(post.body, 100)}</p>
            <Link to={`/post/${post._id}`}>
              <Button className="mt-4" variant="outline">Read More</Button>
            </Link>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default Home;
