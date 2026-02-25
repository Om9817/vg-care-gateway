import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Upload, Calendar, CheckCircle2, FileText, Clock } from "lucide-react";
import Navbar from "@/components/Navbar";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Button } from "@/components/ui/button";

const steps = ["Upload Reports", "Select Appointment", "Confirm Booking"];

const timeSlots = [
  "09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM",
  "11:00 AM", "02:00 PM", "02:30 PM", "03:00 PM",
  "03:30 PM", "04:00 PM",
];

const dates = [
  "Mon, Mar 3", "Tue, Mar 4", "Wed, Mar 5",
  "Thu, Mar 6", "Fri, Mar 7", "Mon, Mar 10",
];

const Booking = () => {
  const [searchParams] = useSearchParams();
  const initialStep = searchParams.get("step") === "upload" ? 0 : 0;
  const [currentStep, setCurrentStep] = useState(initialStep);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [uploaded, setUploaded] = useState(false);

  const canProceed = () => {
    if (currentStep === 0) return true;
    if (currentStep === 1) return selectedDate && selectedTime;
    return true;
  };

  const handleNext = () => {
    if (currentStep < steps.length - 1) setCurrentStep(prev => prev + 1);
  };

  if (currentStep === 3 || (currentStep === 2 && false)) {
    // This won't trigger, confirmation is rendered inline
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container max-w-3xl py-6">
        <Breadcrumbs items={[{ label: "Treatment", href: "/" }, { label: "Booking" }]} />

        {/* Steps */}
        <div className="mt-8 flex items-center justify-center gap-2">
          {steps.map((step, i) => (
            <div key={step} className="flex items-center gap-2">
              <div className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-semibold transition-colors ${
                i <= currentStep ? "gradient-primary text-primary-foreground" : "bg-secondary text-muted-foreground"
              }`}>
                {i < currentStep ? <CheckCircle2 className="h-4 w-4" /> : i + 1}
              </div>
              <span className={`hidden text-sm md:inline ${i <= currentStep ? "font-medium text-foreground" : "text-muted-foreground"}`}>{step}</span>
              {i < steps.length - 1 && <div className={`mx-2 h-px w-8 md:w-16 ${i < currentStep ? "bg-primary" : "bg-border"}`} />}
            </div>
          ))}
        </div>

        {/* Step Content */}
        <div className="mt-8">
          {currentStep === 0 && (
            <div className="rounded-2xl border bg-card p-8 shadow-card text-center">
              <Upload className="mx-auto h-12 w-12 text-primary" />
              <h2 className="mt-4 font-display text-xl font-semibold text-foreground">Upload Medical Reports</h2>
              <p className="mt-2 text-muted-foreground">Share your medical records for the specialist to review before your consultation.</p>
              <div className="mt-6 rounded-xl border-2 border-dashed border-primary/30 bg-secondary/50 p-8">
                <FileText className="mx-auto h-8 w-8 text-muted-foreground" />
                <p className="mt-2 text-sm text-muted-foreground">Drag & drop files here, or click to browse</p>
                <p className="mt-1 text-xs text-muted-foreground">PDF, JPG, PNG up to 10MB</p>
                <Button
                  variant="outline"
                  className="mt-4"
                  onClick={() => setUploaded(true)}
                >
                  {uploaded ? "✓ Files Uploaded" : "Select Files"}
                </Button>
              </div>
              <div className="mt-6 flex justify-end gap-3">
                <Button variant="ghost" onClick={handleNext}>Skip for now</Button>
                <Button onClick={handleNext} disabled={false}>Continue</Button>
              </div>
            </div>
          )}

          {currentStep === 1 && (
            <div className="rounded-2xl border bg-card p-8 shadow-card">
              <h2 className="font-display text-xl font-semibold text-foreground flex items-center gap-2">
                <Calendar className="h-5 w-5 text-primary" />Select Appointment
              </h2>
              <p className="mt-2 text-muted-foreground">Choose your preferred date and time.</p>

              <div className="mt-6">
                <h3 className="text-sm font-medium text-foreground mb-3">Select Date</h3>
                <div className="flex flex-wrap gap-2">
                  {dates.map(d => (
                    <button
                      key={d}
                      onClick={() => setSelectedDate(d)}
                      className={`rounded-xl px-4 py-2.5 text-sm font-medium transition-all ${
                        selectedDate === d
                          ? "gradient-primary text-primary-foreground shadow-card"
                          : "bg-secondary text-foreground hover:bg-secondary/80"
                      }`}
                    >
                      {d}
                    </button>
                  ))}
                </div>
              </div>

              {selectedDate && (
                <div className="mt-6">
                  <h3 className="text-sm font-medium text-foreground mb-3 flex items-center gap-1.5">
                    <Clock className="h-4 w-4 text-muted-foreground" />Select Time
                  </h3>
                  <div className="grid grid-cols-3 gap-2 md:grid-cols-5">
                    {timeSlots.map(t => (
                      <button
                        key={t}
                        onClick={() => setSelectedTime(t)}
                        className={`rounded-xl px-3 py-2.5 text-sm font-medium transition-all ${
                          selectedTime === t
                            ? "gradient-primary text-primary-foreground shadow-card"
                            : "bg-secondary text-foreground hover:bg-secondary/80"
                        }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <div className="mt-8 flex justify-end">
                <Button onClick={handleNext} disabled={!canProceed()}>Continue</Button>
              </div>
            </div>
          )}

          {currentStep === 2 && (
            <div className="rounded-2xl border bg-card p-8 shadow-card text-center">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-trust-green-light">
                <CheckCircle2 className="h-10 w-10 text-trust-green" />
              </div>
              <h2 className="mt-6 font-display text-2xl font-bold text-foreground">Booking Confirmed!</h2>
              <p className="mt-3 text-muted-foreground">Your appointment has been successfully scheduled.</p>

              <div className="mx-auto mt-6 max-w-sm rounded-xl bg-secondary p-4 text-left">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Date</span>
                  <span className="font-medium text-foreground">{selectedDate || "Mar 5, 2026"}</span>
                </div>
                <div className="mt-2 flex justify-between text-sm">
                  <span className="text-muted-foreground">Time</span>
                  <span className="font-medium text-foreground">{selectedTime || "10:00 AM"}</span>
                </div>
                <div className="mt-2 flex justify-between text-sm">
                  <span className="text-muted-foreground">Type</span>
                  <span className="font-medium text-foreground">Online Consultation</span>
                </div>
              </div>

              <p className="mt-6 text-sm text-muted-foreground">A confirmation email has been sent. Our patient coordinator will contact you within 24 hours.</p>
              <Button className="mt-6" onClick={() => window.location.href = "/"}>Back to Home</Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Booking;
