import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ThumbsUp, MessageSquare, Trash } from "lucide-react";

const posts = [
  {
    id: 1,
    author: "John Doe",
    content: "This is a sample post content.",
    likes: 5,
    comments: 2,
  },
  {
    id: 2,
    author: "Jane Smith",
    content: "Another sample post for demonstration.",
    likes: 10,
    comments: 3,
  },
];

export function PostList() {
  return (
    <div className="space-y-4">
      {posts.map((post) => (
        <Card key={post.id}>
          <CardHeader className="flex flex-row items-center gap-4">
            <Avatar>
              <AvatarImage src={`/avatars/0${post.id}.png`} alt={post.author} />
              <AvatarFallback>{post.author[0]}</AvatarFallback>
            </Avatar>
            <div>
              <h3 className="text-lg font-semibold">{post.author}</h3>
            </div>
          </CardHeader>
          <CardContent>
            <p>{post.content}</p>
          </CardContent>
          <CardFooter className="flex justify-between">
            <div className="flex space-x-2">
              <Button variant="ghost" size="sm">
                <ThumbsUp className="w-4 h-4 mr-2" />
                {post.likes}
              </Button>
              <Button variant="ghost" size="sm">
                <MessageSquare className="w-4 h-4 mr-2" />
                {post.comments}
              </Button>
            </div>
            <Button variant="ghost" size="sm">
              <Trash className="w-4 h-4" />
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
