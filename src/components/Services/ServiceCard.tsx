
import { Clock, Edit } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useUserPreferences } from "@/context/UserPreferencesContext";

interface ServiceProps {
  title: string;
  duration: string;
  price: number;
  color?: string;
  urgency?: "high" | "medium" | "low";
}

export function ServiceCard({ title, duration, price, urgency = "low" }: ServiceProps) {
  const { preferences } = useUserPreferences();
  
  // Map urgency levels to colors and French labels
  const urgencyMap = {
    high: { color: "#ea384c", label: "Haute" },
    medium: { color: "#F97316", label: "Moyenne" },
    low: { color: "#34a853", label: "Basse" }
  };
  
  // Get color and label from urgency
  const badgeColor = urgencyMap[urgency].color;
  const urgencyLabel = urgencyMap[urgency].label;

  // Format price with currency - ensure currency is always defined
  const formattedPrice = new Intl.NumberFormat(preferences.locale || 'fr-FR', {
    style: 'currency',
    currency: preferences.currency || 'EUR'
  }).format(price);

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
          <span className="font-medium">{formattedPrice}</span>
          <Badge style={{ backgroundColor: badgeColor }} variant="secondary">
            Urgence: {urgencyLabel}
          </Badge>
        </div>
      </CardContent>
      
      <CardFooter>
        <Button variant="outline" size="sm" className="w-full">
          Réserver Intervention
        </Button>
      </CardFooter>
    </Card>
  );
}
