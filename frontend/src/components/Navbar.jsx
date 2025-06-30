import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <header className="w-full border-b shadow-sm">
      <nav className="flex items-center justify-between px-6 py-4 container mx-auto">
        <Link to="/" className="text-xl font-bold">
          MyBlog
        </Link>

        <div className="flex items-center gap-4">
          <Button asChild variant="ghost">
            <Link to="/">Home</Link>
          </Button>
          <Button asChild variant="ghost">
            <Link to="/create">Create</Link>
          </Button>

          {user ? (
            <>
              <span className="text-sm text-muted-foreground">Hi, {user.name}</span>
              <Button onClick={logout} variant="secondary">
                Logout
              </Button>
            </>
          ) : (
            <>
              <Button asChild variant="outline">
                <Link to="/login">Login</Link>
              </Button>
              <Button asChild variant="default">
                <Link to="/register">Register</Link>
              </Button>
            </>
          )}
        </div>
      </nav>
      <Separator />
    </header>
  );
};

export default Navbar;
