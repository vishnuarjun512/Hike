import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

const requests = [
  { id: 4, name: "David Lee" },
  { id: 5, name: "Emma Davis" },
];

export function FriendRequests() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Friend Requests</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-4">
          {requests.map((request) => (
            <li key={request.id} className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <Avatar>
                  <AvatarImage
                    src={`/avatars/0${request.id}.png`}
                    alt={request.name}
                  />
                  <AvatarFallback>{request.name[0]}</AvatarFallback>
                </Avatar>
                <span>{request.name}</span>
              </div>
              <div className="space-x-2">
                <Button variant="default" size="sm">
                  Accept
                </Button>
                <Button variant="outline" size="sm">
                  Decline
                </Button>
              </div>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
