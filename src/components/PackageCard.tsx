import { Link } from "react-router-dom";
import { MapPin, Clock, ShieldCheck, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { HospitalPackage } from "@/data/mockData";

interface PackageCardProps {
  pkg: HospitalPackage;
}

const PackageCard = ({ pkg }: PackageCardProps) => {
  return (
    <div className="group flex flex-col rounded-2xl border bg-card p-6 shadow-card transition-all duration-300 hover:shadow-hover">
      <div className="mb-4 flex items-start justify-between">
        <div>
          <h3 className="font-display text-lg font-semibold text-foreground">{pkg.hospitalName}</h3>
          <p className="mt-0.5 flex items-center gap-1 text-sm text-muted-foreground">
            <MapPin className="h-3.5 w-3.5" />
            {pkg.city}, {pkg.country}
          </p>
        </div>
        <div className="flex items-center gap-1 rounded-full bg-premium-gold/10 px-2.5 py-1 text-sm font-medium" style={{ color: "hsl(var(--premium-gold))" }}>
          <Star className="h-3.5 w-3.5 fill-current" />
          {pkg.rating}
        </div>
      </div>

      <div className="mb-4 flex items-baseline gap-1">
        <span className="font-display text-2xl font-bold text-primary">${pkg.startingPrice.toLocaleString()}</span>
        <span className="text-sm text-muted-foreground">starting</span>
      </div>

      <ul className="mb-4 space-y-2 flex-1">
        {pkg.inclusions.slice(0, 4).map((item, i) => (
          <li key={i} className="flex items-start gap-2 text-sm text-foreground">
            <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-trust-green" />
            {item}
          </li>
        ))}
      </ul>

      <div className="mb-4 flex items-center gap-3 text-sm text-muted-foreground">
        <span className="flex items-center gap-1">
          <Clock className="h-3.5 w-3.5" />
          {pkg.lengthOfStay}
        </span>
        {pkg.refundable && (
          <span className="rounded-full bg-trust-green-light px-2.5 py-0.5 text-xs font-medium text-trust-green">
            Refundable
          </span>
        )}
      </div>

      <Link to={`/package/${pkg.id}`}>
        <Button className="w-full" variant="outline">View Package</Button>
      </Link>
    </div>
  );
};

export default PackageCard;
