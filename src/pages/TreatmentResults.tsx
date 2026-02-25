import { useParams, Link } from "react-router-dom";
import { Clock, BedDouble, DollarSign, Calendar, Filter, ArrowUpDown } from "lucide-react";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Breadcrumbs from "@/components/Breadcrumbs";
import PackageCard from "@/components/PackageCard";
import SpecialistCard from "@/components/SpecialistCard";
import { Button } from "@/components/ui/button";
import { treatments, hospitalPackages, specialists } from "@/data/mockData";

const TreatmentResults = () => {
  const { id } = useParams();
  const treatment = treatments.find(t => t.id === id) ?? treatments[0];
  const packages = hospitalPackages.filter(p => p.treatmentId === treatment.id);
  const [sortBy, setSortBy] = useState<"price" | "rating">("price");
  const [cityFilter, setCityFilter] = useState<string>("all");

  const cities = [...new Set(packages.map(p => p.city))];
  const filteredPackages = packages
    .filter(p => cityFilter === "all" || p.city === cityFilter)
    .sort((a, b) => sortBy === "price" ? a.startingPrice - b.startingPrice : b.rating - a.rating);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container py-6">
        <Breadcrumbs items={[{ label: "Treatments", href: "/" }, { label: treatment.name }]} />

        {/* Treatment Overview */}
        <section className="mt-6 rounded-2xl border bg-card p-6 shadow-card md:p-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
            <div className="flex-1">
              <div className="mb-2 inline-flex rounded-full bg-secondary px-3 py-1 text-xs font-medium text-primary">{treatment.category}</div>
              <h1 className="font-display text-3xl font-bold text-foreground">{treatment.name}</h1>
              <p className="mt-3 max-w-2xl text-muted-foreground">{treatment.description}</p>
              <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-4">
                <div className="rounded-xl bg-secondary px-4 py-3">
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground"><Clock className="h-3.5 w-3.5" />Recovery</div>
                  <p className="mt-1 font-semibold text-foreground">{treatment.recoveryTime}</p>
                </div>
                <div className="rounded-xl bg-secondary px-4 py-3">
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground"><BedDouble className="h-3.5 w-3.5" />Hospital Stay</div>
                  <p className="mt-1 font-semibold text-foreground">{treatment.hospitalStay}</p>
                </div>
                <div className="rounded-xl bg-secondary px-4 py-3">
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground"><DollarSign className="h-3.5 w-3.5" />Starting From</div>
                  <p className="mt-1 font-semibold text-primary">${treatment.startingPrice.toLocaleString()}</p>
                </div>
                <div className="rounded-xl bg-secondary px-4 py-3">
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground"><Calendar className="h-3.5 w-3.5" />Price Range</div>
                  <p className="mt-1 font-semibold text-foreground">{treatment.priceRange}</p>
                </div>
              </div>
            </div>
            <div className="flex gap-3">
              <Link to={`/booking?treatment=${treatment.id}`}>
                <Button>Book Consultation</Button>
              </Link>
              <Link to={`/booking?treatment=${treatment.id}&step=upload`}>
                <Button variant="outline">Upload Reports</Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Hospital Packages */}
        <section className="mt-10">
          <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <h2 className="font-display text-2xl font-bold text-foreground">Available Hospital Packages</h2>
            <div className="flex gap-3">
              <div className="flex items-center gap-2">
                <Filter className="h-4 w-4 text-muted-foreground" />
                <select
                  value={cityFilter}
                  onChange={(e) => setCityFilter(e.target.value)}
                  className="rounded-lg border bg-card px-3 py-2 text-sm outline-none"
                >
                  <option value="all">All Cities</option>
                  {cities.map(c => <option key={c} value={c}>{c}</option>)}
                </select>
              </div>
              <div className="flex items-center gap-2">
                <ArrowUpDown className="h-4 w-4 text-muted-foreground" />
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as "price" | "rating")}
                  className="rounded-lg border bg-card px-3 py-2 text-sm outline-none"
                >
                  <option value="price">Sort by Price</option>
                  <option value="rating">Sort by Rating</option>
                </select>
              </div>
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredPackages.map(pkg => <PackageCard key={pkg.id} pkg={pkg} />)}
          </div>
          {filteredPackages.length === 0 && (
            <p className="py-10 text-center text-muted-foreground">No packages found for the selected filters.</p>
          )}
        </section>

        {/* Top Specialists */}
        <section className="mt-10 pb-16">
          <h2 className="mb-6 font-display text-2xl font-bold text-foreground">Top Specialists</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {specialists.map(s => <SpecialistCard key={s.id} specialist={s} />)}
          </div>
        </section>
      </div>
    </div>
  );
};

export default TreatmentResults;
