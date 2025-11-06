import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface StatsCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  variant?: "default" | "success" | "warning" | "primary";
}

export const StatsCard = ({ title, value, icon: Icon, variant = "default" }: StatsCardProps) => {
  const variantClasses = {
    default: "border-muted",
    success: "border-accent/20 bg-accent/5",
    warning: "border-warning/20 bg-warning/5",
    primary: "border-primary/20 bg-primary/5"
  };

  const iconVariantClasses = {
    default: "text-muted-foreground",
    success: "text-accent",
    warning: "text-warning",
    primary: "text-primary"
  };

  return (
    <Card className={cn("transition-all hover:shadow-md", variantClasses[variant])}>
      <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
        <CardTitle className="text-base md:text-lg font-medium text-muted-foreground">
          {title}
        </CardTitle>
        <Icon className={cn("w-6 h-6", iconVariantClasses[variant])} />
      </CardHeader>
      <CardContent>
        <div className="text-3xl md:text-4xl font-bold">{value}</div>
      </CardContent>
    </Card>
  );
};
