import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

const friends = [
  { id: 1, name: "Alice Johnson" },
  { id: 2, name: "Bob Williams" },
  { id: 3, name: "Charlie Brown" },
];

export function FriendList() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Your Friends</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-4">
          {friends.map((friend) => (
            <li key={friend.id} className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <Avatar>
                  <AvatarImage
                    src={`/avatars/0${friend.id}.png`}
                    alt={friend.name}
                  />
                  <AvatarFallback>{friend.name[0]}</AvatarFallback>
                </Avatar>
                <span>{friend.name}</span>
              </div>
              <Button variant="outline" size="sm">
                Unfriend
              </Button>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
