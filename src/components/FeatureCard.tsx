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
    <Card
      className={` ${className} hover:bg-accent w-full transition-all duration-300 hover:scale-105 hover:shadow-lg`}
    >
      <CardHeader>
        <Icon className="size-8" />
        <h3 className="text-2xl font-semibold">{title}</h3>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
    </Card>
  );
}
