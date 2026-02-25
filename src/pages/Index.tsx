import { Heart, Shield, Globe, Clock, Search, ArrowRight, CheckCircle2, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import SearchBar from "@/components/SearchBar";
import { treatments } from "@/data/mockData";
import { Link } from "react-router-dom";

const stats = [
  { icon: Globe, label: "Countries Served", value: "45+" },
  { icon: CheckCircle2, label: "Successful Treatments", value: "50,000+" },
  { icon: Star, label: "Patient Satisfaction", value: "4.9/5" },
  { icon: Shield, label: "Accredited Hospitals", value: "120+" },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden gradient-hero">
        <div className="container py-20 md:py-32">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border bg-card px-4 py-1.5 text-sm shadow-card">
              <Heart className="h-4 w-4 text-primary" />
              <span className="text-muted-foreground">Trusted by 50,000+ international patients</span>
            </div>
            <h1 className="font-display text-4xl font-bold leading-tight text-foreground md:text-6xl">
              World-Class Healthcare,{" "}
              <span className="text-primary">Within Reach</span>
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground">
              Access top hospitals, leading specialists, and transparent treatment packages across Asia — at a fraction of the cost.
            </p>
            <div className="mt-10">
              <SearchBar />
            </div>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5" />Quick results</span>
              <span className="flex items-center gap-1"><Shield className="h-3.5 w-3.5" />Verified hospitals</span>
              <span className="flex items-center gap-1"><Globe className="h-3.5 w-3.5" />International support</span>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y bg-card">
        <div className="container grid grid-cols-2 gap-6 py-10 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <stat.icon className="mx-auto mb-2 h-6 w-6 text-primary" />
              <p className="font-display text-2xl font-bold text-foreground">{stat.value}</p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Popular Treatments */}
      <section className="container py-16">
        <div className="mb-10 text-center">
          <h2 className="font-display text-3xl font-bold text-foreground">Popular Treatments</h2>
          <p className="mt-2 text-muted-foreground">Explore our most sought-after medical procedures</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {treatments.map((t) => (
            <Link
              key={t.id}
              to={`/treatment/${t.id}`}
              className="group rounded-2xl border bg-card p-6 shadow-card transition-all duration-300 hover:shadow-hover"
            >
              <div className="mb-3 inline-flex rounded-full bg-secondary px-3 py-1 text-xs font-medium text-primary">
                {t.category}
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground group-hover:text-primary transition-colors">{t.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{t.description}</p>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-sm text-muted-foreground">From <span className="font-semibold text-primary">{t.priceRange.split("–")[0].trim()}</span></span>
                <ArrowRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* How it Works */}
      <section className="border-t bg-muted/50">
        <div className="container py-16">
          <div className="mb-10 text-center">
            <h2 className="font-display text-3xl font-bold text-foreground">How VG Care Works</h2>
            <p className="mt-2 text-muted-foreground">Your journey to better health, simplified</p>
          </div>
          <div className="grid gap-8 md:grid-cols-4">
            {[
              { step: "01", title: "Search Treatment", desc: "Find the right treatment from our comprehensive database" },
              { step: "02", title: "Compare Packages", desc: "Review hospital packages, prices, and specialist profiles" },
              { step: "03", title: "Book Consultation", desc: "Connect with specialists online or schedule an in-person visit" },
              { step: "04", title: "Travel & Heal", desc: "We handle logistics so you can focus on your recovery" },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl gradient-primary text-sm font-bold text-primary-foreground">
                  {item.step}
                </div>
                <h3 className="font-display font-semibold text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-card">
        <div className="container py-10">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg gradient-primary">
                <Heart className="h-4 w-4 text-primary-foreground" />
              </div>
              <span className="font-display font-bold text-foreground">VG <span className="text-primary">Care</span></span>
            </div>
            <p className="text-sm text-muted-foreground">© 2026 VG Care. All rights reserved. Your health, our priority.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
