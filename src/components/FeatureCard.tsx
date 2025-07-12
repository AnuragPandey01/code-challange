import { Card, CardDescription, CardHeader } from "@/components/ui/card";
import { type LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
}

export function FeatureCard({
  icon: Icon,
  title,
  description,
  className,
}: FeatureCardProps) {
  return (
    <Card className={` ${className} w-full hover:bg-accent hover:shadow-lg hover:scale-105 transition-all duration-300`}>
      <CardHeader>
        <Icon className="size-8" />
        <h3 className="text-2xl font-semibold">{title}</h3>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
    </Card>
  );
}
