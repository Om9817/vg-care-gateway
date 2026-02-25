import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Search, Stethoscope, Building2, UserRound } from "lucide-react";
import { searchSuggestions } from "@/data/mockData";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const q = query.toLowerCase();
  const filteredTreatments = searchSuggestions.treatments.filter(t => t.toLowerCase().includes(q));
  const filteredSpecialists = searchSuggestions.specialists.filter(s => s.toLowerCase().includes(q));
  const filteredHospitals = searchSuggestions.hospitals.filter(h => h.toLowerCase().includes(q));

  const hasResults = filteredTreatments.length > 0 || filteredSpecialists.length > 0 || filteredHospitals.length > 0;

  const handleSelect = (type: string, value: string) => {
    setOpen(false);
    setQuery(value);
    if (type === "treatment") {
      const slug = value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
      navigate(`/treatment/${slug}`);
    }
  };

  return (
    <div ref={ref} className="relative w-full max-w-2xl mx-auto">
      <div className="relative">
        <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
        <input
          type="text"
          placeholder="Search treatments, specialists, hospitals…"
          value={query}
          onChange={(e) => { setQuery(e.target.value); setOpen(true); }}
          onFocus={() => setOpen(true)}
          className="w-full rounded-2xl border bg-card py-4 pl-12 pr-4 text-base shadow-elevated outline-none transition-shadow placeholder:text-muted-foreground focus:shadow-hover focus:ring-2 focus:ring-primary/20"
        />
      </div>

      {open && query.length > 0 && hasResults && (
        <div className="absolute top-full left-0 right-0 z-50 mt-2 rounded-xl border bg-card p-2 shadow-hover">
          {filteredTreatments.length > 0 && (
            <div className="mb-1">
              <p className="px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Treatments</p>
              {filteredTreatments.map(t => (
                <button
                  key={t}
                  onClick={() => handleSelect("treatment", t)}
                  className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition-colors hover:bg-secondary"
                >
                  <Stethoscope className="h-4 w-4 text-primary" />
                  {t}
                </button>
              ))}
            </div>
          )}
          {filteredSpecialists.length > 0 && (
            <div className="mb-1">
              <p className="px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Specialists</p>
              {filteredSpecialists.map(s => (
                <button
                  key={s}
                  onClick={() => handleSelect("specialist", s)}
                  className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition-colors hover:bg-secondary"
                >
                  <UserRound className="h-4 w-4 text-accent" />
                  {s}
                </button>
              ))}
            </div>
          )}
          {filteredHospitals.length > 0 && (
            <div>
              <p className="px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Hospitals</p>
              {filteredHospitals.map(h => (
                <button
                  key={h}
                  onClick={() => handleSelect("hospital", h)}
                  className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition-colors hover:bg-secondary"
                >
                  <Building2 className="h-4 w-4 text-medical-blue" />
                  {h}
                </button>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
