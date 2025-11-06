import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface DashboardCardProps {
  title: string;
  icon: LucideIcon;
  to: string;
  gradient?: boolean;
  variant?: "default" | "success" | "warning";
}

export const DashboardCard = ({ 
  title, 
  icon: Icon, 
  to, 
  gradient = false,
  variant = "default" 
}: DashboardCardProps) => {
  const variantClasses = {
    default: "bg-primary hover:bg-primary/90",
    success: "bg-accent hover:bg-accent/90",
    warning: "bg-warning hover:bg-warning/90"
  };

  return (
    <Link to={to}>
      <Card className={cn(
        "h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer border-0",
        gradient && "bg-gradient-to-br from-primary to-primary/80"
      )}>
        <CardContent className={cn(
          "flex flex-col items-center justify-center p-8 md:p-12 text-center h-full min-h-[180px]",
          variantClasses[variant]
        )}>
          <Icon className="w-16 h-16 mb-4 text-primary-foreground" strokeWidth={1.5} />
          <h3 className="text-xl md:text-2xl font-bold text-primary-foreground">
            {title}
          </h3>
        </CardContent>
      </Card>
    </Link>
  );
};
