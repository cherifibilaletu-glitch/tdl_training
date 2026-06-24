import {
  Eye,
  Target,
  Award,
  Lightbulb,
  Users,
  Briefcase,
  BadgeCheck,
  Building2,
  LifeBuoy,
  Tag,
  Presentation,
  Calendar,
  Settings,
  MapPin,
  ClipboardCheck,
  GraduationCap,
  type LucideIcon,
} from "lucide-react";

const MAP: Record<string, LucideIcon> = {
  eye: Eye,
  target: Target,
  award: Award,
  lightbulb: Lightbulb,
  users: Users,
  briefcase: Briefcase,
  "badge-check": BadgeCheck,
  building: Building2,
  "life-buoy": LifeBuoy,
  tag: Tag,
  presentation: Presentation,
  calendar: Calendar,
  settings: Settings,
  "map-pin": MapPin,
  "clipboard-check": ClipboardCheck,
};

export default function Icon({
  name,
  className = "h-5 w-5",
}: {
  name: string;
  className?: string;
}) {
  const Cmp = MAP[name] ?? GraduationCap;
  return <Cmp className={className} strokeWidth={1.6} />;
}
