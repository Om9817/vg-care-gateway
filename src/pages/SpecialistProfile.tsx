import { useParams, Link } from "react-router-dom";
import { MapPin, Star, Award, Video, Globe, GraduationCap, Calendar, Languages } from "lucide-react";
import Navbar from "@/components/Navbar";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Button } from "@/components/ui/button";
import { specialists, hospitalPackages } from "@/data/mockData";

const SpecialistProfile = () => {
  const { id } = useParams();
  const specialist = specialists.find(s => s.id === id) ?? specialists[0];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container py-6">
        <Breadcrumbs items={[
          { label: "Treatments", href: "/" },
          { label: "Specialists" },
          { label: specialist.name },
        ]} />

        <div className="mt-6 grid gap-6 lg:grid-cols-3">
          {/* Main */}
          <div className="lg:col-span-2 space-y-6">
            {/* Profile Header */}
            <div className="rounded-2xl border bg-card p-6 shadow-card md:p-8">
              <div className="flex flex-col gap-6 md:flex-row md:items-center">
                <div className="flex h-24 w-24 items-center justify-center rounded-full bg-secondary text-2xl font-bold text-primary">
                  {specialist.name.split(" ").map(n => n[0]).join("").slice(0, 2)}
                </div>
                <div className="flex-1">
                  <h1 className="font-display text-2xl font-bold text-foreground md:text-3xl">{specialist.name}</h1>
                  <p className="mt-1 text-muted-foreground">{specialist.title}</p>
                  <p className="mt-0.5 flex items-center gap-1.5 text-sm text-muted-foreground">
                    <MapPin className="h-3.5 w-3.5" />
                    {specialist.primaryHospital}, {specialist.primaryCity}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-3">
                    <span className="flex items-center gap-1 text-sm font-medium" style={{ color: "hsl(var(--premium-gold))" }}>
                      <Star className="h-4 w-4 fill-current" />{specialist.rating}
                    </span>
                    <span className="flex items-center gap-1 text-sm text-trust-green">
                      <Award className="h-4 w-4" />{specialist.successRate}% success rate
                    </span>
                    {specialist.consultationModes.includes("Online") && (
                      <span className="flex items-center gap-1 text-sm text-medical-blue">
                        <Video className="h-4 w-4" />Online available
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Summary */}
            <div className="rounded-2xl border bg-card p-6 shadow-card">
              <h2 className="font-display text-lg font-semibold text-foreground">Professional Summary</h2>
              <p className="mt-3 text-muted-foreground leading-relaxed">{specialist.summary}</p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
              <div className="rounded-2xl border bg-card p-4 shadow-card text-center">
                <p className="font-display text-2xl font-bold text-primary">{specialist.yearsExperience}</p>
                <p className="text-xs text-muted-foreground">Years Experience</p>
              </div>
              <div className="rounded-2xl border bg-card p-4 shadow-card text-center">
                <p className="font-display text-2xl font-bold text-primary">{specialist.proceduresPerformed.toLocaleString()}+</p>
                <p className="text-xs text-muted-foreground">Procedures</p>
              </div>
              <div className="rounded-2xl border bg-card p-4 shadow-card text-center">
                <p className="font-display text-2xl font-bold text-trust-green">{specialist.successRate}%</p>
                <p className="text-xs text-muted-foreground">Success Rate</p>
              </div>
              <div className="rounded-2xl border bg-card p-4 shadow-card text-center">
                <p className="font-display text-2xl font-bold text-foreground">${specialist.consultationFee}</p>
                <p className="text-xs text-muted-foreground">Consultation Fee</p>
              </div>
            </div>

            {/* Qualifications */}
            <div className="rounded-2xl border bg-card p-6 shadow-card">
              <h2 className="font-display text-lg font-semibold text-foreground flex items-center gap-2">
                <GraduationCap className="h-5 w-5 text-medical-blue" />Qualifications
              </h2>
              <ul className="mt-4 space-y-2">
                {specialist.qualifications.map((q, i) => (
                  <li key={i} className="flex items-start gap-2 text-muted-foreground">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                    {q}
                  </li>
                ))}
              </ul>
            </div>

            {/* Languages */}
            <div className="rounded-2xl border bg-card p-6 shadow-card">
              <h2 className="font-display text-lg font-semibold text-foreground flex items-center gap-2">
                <Languages className="h-5 w-5 text-medical-blue" />Languages Spoken
              </h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {specialist.languages.map(lang => (
                  <span key={lang} className="rounded-full bg-secondary px-3 py-1.5 text-sm text-foreground">{lang}</span>
                ))}
              </div>
            </div>

            {/* Affiliated Hospitals */}
            <div className="rounded-2xl border bg-card p-6 shadow-card">
              <h2 className="font-display text-lg font-semibold text-foreground flex items-center gap-2">
                <Globe className="h-5 w-5 text-medical-blue" />Affiliated Hospitals
              </h2>
              <div className="mt-4 space-y-4">
                {specialist.affiliatedHospitals.map((h, i) => {
                  const relatedPackages = hospitalPackages.filter(p => h.packages.includes(p.id));
                  return (
                    <div key={i} className="rounded-xl border bg-muted/30 p-4">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="font-semibold text-foreground">{h.hospitalName}</h3>
                          <p className="flex items-center gap-1 text-sm text-muted-foreground">
                            <MapPin className="h-3.5 w-3.5" />{h.city}
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="flex items-center gap-1 text-xs text-muted-foreground">
                            <Calendar className="h-3 w-3" />Next Available
                          </p>
                          <p className="text-sm font-semibold text-trust-green">{h.nextAvailable}</p>
                        </div>
                      </div>
                      {relatedPackages.length > 0 && (
                        <div className="mt-3 flex flex-wrap gap-2">
                          {relatedPackages.map(rp => (
                            <Link key={rp.id} to={`/package/${rp.id}`}>
                              <Button variant="outline" size="sm">
                                View Package — ${rp.startingPrice.toLocaleString()}
                              </Button>
                            </Link>
                          ))}
                        </div>
                      )}
                      <div className="mt-3">
                        <Link to={`/booking?specialist=${specialist.id}&hospital=${h.hospitalName}`}>
                          <Button size="sm">Book Consultation</Button>
                        </Link>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div>
            <div className="rounded-2xl border bg-card p-6 shadow-card sticky top-24">
              <h3 className="font-display font-semibold text-foreground">Book a Consultation</h3>
              <p className="mt-2 text-sm text-muted-foreground">Consult with {specialist.name} online or in-person.</p>
              <div className="mt-4 space-y-2">
                {specialist.consultationModes.map(mode => (
                  <div key={mode} className="flex items-center justify-between rounded-lg bg-secondary px-3 py-2 text-sm">
                    <span className="text-foreground">{mode}</span>
                    {mode === "Online" && <Video className="h-4 w-4 text-medical-blue" />}
                  </div>
                ))}
              </div>
              <p className="mt-4 text-center text-sm text-muted-foreground">
                Fee: <span className="font-semibold text-foreground">${specialist.consultationFee}</span>
              </p>
              <Link to={`/booking?specialist=${specialist.id}`}>
                <Button className="mt-4 w-full">Book Now</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialistProfile;
