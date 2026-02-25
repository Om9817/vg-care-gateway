import { useParams, Link } from "react-router-dom";
import { MapPin, Star, ShieldCheck, XCircle, BedDouble, Clock, Info } from "lucide-react";
import Navbar from "@/components/Navbar";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Button } from "@/components/ui/button";
import { hospitalPackages, specialists } from "@/data/mockData";

const PackageDetail = () => {
  const { id } = useParams();
  const pkg = hospitalPackages.find(p => p.id === id) ?? hospitalPackages[0];
  const assignedSpecialist = specialists.find(s =>
    s.affiliatedHospitals.some(h => h.packages.includes(pkg.id))
  );

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container py-6">
        <Breadcrumbs items={[
          { label: "Treatments", href: "/" },
          { label: "Knee Replacement", href: `/treatment/${pkg.treatmentId}` },
          { label: pkg.hospitalName },
        ]} />

        <div className="mt-6 grid gap-6 lg:grid-cols-3">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Header Card */}
            <div className="rounded-2xl border bg-card p-6 shadow-card md:p-8">
              <div className="flex items-start justify-between">
                <div>
                  <h1 className="font-display text-2xl font-bold text-foreground md:text-3xl">{pkg.hospitalName}</h1>
                  <p className="mt-1 flex items-center gap-1.5 text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    {pkg.city}, {pkg.country}
                  </p>
                </div>
                <div className="flex items-center gap-1 rounded-full bg-premium-gold/10 px-3 py-1 font-medium" style={{ color: "hsl(var(--premium-gold))" }}>
                  <Star className="h-4 w-4 fill-current" />
                  {pkg.rating}
                </div>
              </div>
              <div className="mt-6 flex items-baseline gap-2">
                <span className="font-display text-3xl font-bold text-primary">${pkg.startingPrice.toLocaleString()}</span>
                <span className="text-muted-foreground">starting price</span>
              </div>
              <div className="mt-4 flex flex-wrap gap-3">
                <span className="flex items-center gap-1.5 rounded-full bg-secondary px-3 py-1.5 text-sm text-foreground">
                  <Clock className="h-3.5 w-3.5 text-muted-foreground" />{pkg.lengthOfStay}
                </span>
                <span className="flex items-center gap-1.5 rounded-full bg-secondary px-3 py-1.5 text-sm text-foreground">
                  <BedDouble className="h-3.5 w-3.5 text-muted-foreground" />{pkg.roomCategory}
                </span>
                {pkg.refundable && (
                  <span className="rounded-full bg-trust-green-light px-3 py-1.5 text-sm font-medium text-trust-green">
                    Refundable
                  </span>
                )}
              </div>
            </div>

            {/* Inclusions */}
            <div className="rounded-2xl border bg-card p-6 shadow-card">
              <h2 className="font-display text-lg font-semibold text-foreground">What's Included</h2>
              <ul className="mt-4 space-y-3">
                {pkg.inclusions.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-foreground">
                    <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-trust-green" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Exclusions */}
            <div className="rounded-2xl border bg-card p-6 shadow-card">
              <h2 className="font-display text-lg font-semibold text-foreground">Not Included</h2>
              <ul className="mt-4 space-y-3">
                {pkg.exclusions.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-muted-foreground">
                    <XCircle className="mt-0.5 h-5 w-5 shrink-0 text-destructive/60" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Cancellation */}
            <div className="rounded-2xl border bg-card p-6 shadow-card">
              <h2 className="font-display text-lg font-semibold text-foreground flex items-center gap-2">
                <Info className="h-5 w-5 text-medical-blue" />
                Cancellation Policy
              </h2>
              <p className="mt-3 text-muted-foreground">{pkg.cancellationPolicy}</p>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Booking CTA */}
            <div className="rounded-2xl border bg-card p-6 shadow-card sticky top-24">
              <h3 className="font-display font-semibold text-foreground">Ready to proceed?</h3>
              <p className="mt-2 text-sm text-muted-foreground">Secure your treatment package with a free consultation.</p>
              <div className="mt-6 space-y-3">
                <Link to={`/booking?package=${pkg.id}`}>
                  <Button className="w-full">Select This Package</Button>
                </Link>
                <Link to={`/booking?package=${pkg.id}`}>
                  <Button variant="outline" className="w-full mt-2">Book Consultation</Button>
                </Link>
              </div>
            </div>

            {/* Assigned Specialist */}
            {assignedSpecialist && (
              <div className="rounded-2xl border bg-card p-6 shadow-card">
                <h3 className="font-display font-semibold text-foreground">Assigned Specialist</h3>
                <div className="mt-4 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-sm font-bold text-primary">
                    {assignedSpecialist.name.split(" ").map(n => n[0]).join("").slice(0, 2)}
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{assignedSpecialist.name}</p>
                    <p className="text-sm text-muted-foreground">{assignedSpecialist.title}</p>
                  </div>
                </div>
                <Link to={`/specialist/${assignedSpecialist.id}`}>
                  <Button variant="ghost" size="sm" className="mt-3 w-full">View Profile</Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackageDetail;
