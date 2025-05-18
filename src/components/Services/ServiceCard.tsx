
import { Clock, Edit } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface ServiceProps {
  title: string;
  duration: string;
  price: number;
  color?: string;
}

export function ServiceCard({ title, duration, price, color = "#1a73e8" }: ServiceProps) {
  return (
    <Card>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-center">
          <CardTitle className="text-lg">{title}</CardTitle>
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <Edit className="h-4 w-4" />
          </Button>
        </div>
        <div className="flex items-center gap-2 text-muted-foreground text-sm">
          <Clock className="h-4 w-4" />
          <span>{duration}</span>
        </div>
      </CardHeader>
      
      <CardContent>
        <div className="flex justify-between items-center">
          <Badge style={{ backgroundColor: color }} variant="secondary">
            ${price.toFixed(2)}
          </Badge>
          <Badge variant="outline">Default</Badge>
        </div>
      </CardContent>
      
      <CardFooter>
        <Button variant="outline" size="sm" className="w-full">
          Book Service
        </Button>
      </CardFooter>
    </Card>
  );
}
