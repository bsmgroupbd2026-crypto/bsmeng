import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";
import ceiling from "@/assets/svc-ceiling.jpg";
import electrical from "@/assets/svc-electrical.jpg";
import warehouse from "@/assets/ind-warehouse.jpg";
import commercial from "@/assets/ind-commercial.jpg";

// Real photography from bsmengg.com
const wp = (f: string) => `https://bsmengg.com/wp-content/uploads/2024/${f}`;
export const real = {
  manpower: wp("11/Manpower-Suppy-Services.jpg.webp"),
  welder: wp("10/welder.jpeg.webp"),
  rigger: wp("10/Rigger-Signalsman.jpeg.webp"),
  electrician: wp("10/Electrical-Worker.png.webp"),
  me: wp("10/ME-Technicians.jpg.webp"),
  supervisor: wp("10/Site-Supervisor.jpg.webp"),
  engineer: wp("10/Site-Supervisor-or-foreman.jpg.webp"),
  general: wp("10/General-Worker-in-singapore.png.webp"),
  scaffold: wp("10/Scaffolding-service-1.jpeg.webp"),
  rebar: wp("10/Rebaur-Formwork.jpeg.webp"),
  lifting: wp("10/lifting-supervisor.jpeg.webp"),
  excavator: wp("10/Excavator-Operator.jpg.webp"),
  blueprint: wp("10/vecteezy_businessman-and-engineer-looking-at-a-building-blueprint-at_2439959-1-scaled-1.jpg.webp"),
};

export const img = { hero1, hero2, hero3, ceiling, electrical, warehouse, commercial };

export const slides = [
  { image: hero1, kicker: "Engineering & Construction", title: ["Engineering Excellence.", "Built for Singapore."], text: "Construction, reinstatement and M&E works delivered with precision across Singapore." },
  { image: hero2, kicker: "Manpower Solutions", title: ["The Right Workforce.", "For Every Project."], text: "Skilled, site-ready workers, supervisors and engineers — when you need them." },
  { image: hero3, kicker: "Industrial Services", title: ["Reliable Solutions.", "Exceptional Execution."], text: "Technicians and engineers supporting complex industrial environments." },
];

export const manpower = [
  { name: "Construction Workers", image: real.general },
  { name: "Site Engineers", image: real.engineer },
  { name: "Riggers & Signalmen", image: real.rigger },
  { name: "Welders", image: real.welder },
  { name: "M&E Technicians", image: real.me },
  { name: "Site Supervisors", image: real.supervisor },
];

export const engineering = [
  "Reinstatement", "Electrical Installations", "Ceiling Works", "Awning Works", "Plumbing",
  "Waterproofing", "Hacking", "Drywall Partitions", "Bus Duct Works", "Mezzanine Works",
];

export const industries = [
  { name: "Construction & Development", image: hero1 },
  { name: "Industrial & Manufacturing", image: hero3 },
  { name: "Commercial Properties", image: commercial },
  { name: "Infrastructure & Engineering", image: real.scaffold },
  { name: "Logistics & Warehousing", image: warehouse },
];

export const work = [
  { label: "Office Reinstatement", cat: "Reinstatement", image: ceiling },
  { label: "Bus Duct & Cable Tray", cat: "Electrical", image: electrical },
  { label: "Rebar & Formwork", cat: "Structural", image: real.rebar },
  { label: "Heavy Lifting Operations", cat: "Manpower", image: real.lifting },
  { label: "Earthworks Support", cat: "Manpower", image: real.excavator },
];
