import { Link } from "react-router-dom";
import { MapPin, Star, Award, Video } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Specialist } from "@/data/mockData";

interface SpecialistCardProps {
  specialist: Specialist;
}

const SpecialistCard = ({ specialist }: SpecialistCardProps) => {
  return (
    <div className="group flex flex-col rounded-2xl border bg-card p-6 shadow-card transition-all duration-300 hover:shadow-hover">
      <div className="mb-4 flex items-center gap-4">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-secondary text-xl font-bold text-primary">
          {specialist.name.split(" ").map(n => n[0]).join("").slice(0, 2)}
        </div>
        <div className="flex-1">
          <h3 className="font-display font-semibold text-foreground">{specialist.name}</h3>
          <p className="text-sm text-muted-foreground">{specialist.title}</p>
        </div>
      </div>

      <div className="mb-4 grid grid-cols-2 gap-3">
        <div className="rounded-xl bg-secondary px-3 py-2">
          <p className="text-xs text-muted-foreground">Experience</p>
          <p className="font-semibold text-foreground">{specialist.yearsExperience} years</p>
        </div>
        <div className="rounded-xl bg-secondary px-3 py-2">
          <p className="text-xs text-muted-foreground">Procedures</p>
          <p className="font-semibold text-foreground">{specialist.proceduresPerformed.toLocaleString()}+</p>
        </div>
      </div>

      <div className="mb-4 space-y-2">
        <p className="flex items-center gap-1.5 text-sm text-muted-foreground">
          <MapPin className="h-3.5 w-3.5" />
          {specialist.primaryHospital}, {specialist.primaryCity}
        </p>
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1 text-sm font-medium" style={{ color: "hsl(var(--premium-gold))" }}>
            <Star className="h-3.5 w-3.5 fill-current" />
            {specialist.rating}
          </span>
          <span className="flex items-center gap-1 text-sm text-trust-green">
            <Award className="h-3.5 w-3.5" />
            {specialist.successRate}% success
          </span>
        </div>
      </div>

      <div className="mb-4 flex items-center justify-between text-sm">
        <span className="text-muted-foreground">Consultation</span>
        <span className="font-semibold text-foreground">${specialist.consultationFee}</span>
      </div>

      {specialist.consultationModes.includes("Online") && (
        <div className="mb-4 flex items-center gap-1.5 text-xs text-medical-blue">
          <Video className="h-3.5 w-3.5" />
          Online consultation available
        </div>
      )}

      <Link to={`/specialist/${specialist.id}`}>
        <Button className="w-full" variant="outline">View Profile</Button>
      </Link>
    </div>
  );
};

export default SpecialistCard;
