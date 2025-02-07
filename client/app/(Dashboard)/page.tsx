import { PostForm } from "./(DashboardComponents)/post-form";
import { PostList } from "./(DashboardComponents)/post-list";

export default function DashboardPage() {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Your Feed</h2>
      <PostForm />
      <PostList />
    </div>
  );
}
