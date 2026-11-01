import lifting from "@/assets/workforce-lifting.webp.asset.json";
import rigger from "@/assets/workforce-rigger.webp.asset.json";
import welder from "@/assets/workforce-welder.webp.asset.json";
import rebar from "@/assets/workforce-rebar.webp.asset.json";
import general from "@/assets/workforce-general.webp.asset.json";
import electrician from "@/assets/workforce-electrician.webp.asset.json";
import me from "@/assets/workforce-me.webp.asset.json";
import engineer from "@/assets/workforce-engineer.webp.asset.json";
import supervisor from "@/assets/workforce-supervisor.webp.asset.json";
import excavator from "@/assets/workforce-excavator.webp.asset.json";
import scaffold from "@/assets/workforce-scaffold.webp.asset.json";
import manpower from "@/assets/workforce-manpower.webp.asset.json";

export const workforceCover = manpower.url;
export const workforceCategories = ["All roles", "Construction", "Technical", "Site supervision"] as const;
export const workforce = [
  { name: "General Workers", category: "Construction", image: general.url, description: "General site support for construction and day-to-day operations." },
  { name: "Riggers & Signalmen", category: "Construction", image: rigger.url, description: "Rigging and signalling support for site lifting operations." },
  { name: "Welders", category: "Technical", image: welder.url, description: "Welding personnel for fabrication and installation works." },
  { name: "Rebar & Formwork Workers", category: "Construction", image: rebar.url, description: "Workforce support for reinforcement and concrete formwork." },
  { name: "Electrical Workers", category: "Technical", image: electrician.url, description: "Electrical installation and maintenance workforce." },
  { name: "M&E Technicians", category: "Technical", image: me.url, description: "Mechanical and electrical support for building and industrial works." },
  { name: "Site Engineers", category: "Site supervision", image: engineer.url, description: "Engineering coordination and technical support on site." },
  { name: "Site Supervisors", category: "Site supervision", image: supervisor.url, description: "On-site coordination of workers and daily activities." },
  { name: "Lifting Supervisors", category: "Site supervision", image: lifting.url, description: "Supervision and coordination for lifting activities." },
  { name: "Excavator Operators", category: "Construction", image: excavator.url, description: "Operator support for excavation and earthworks." },
  { name: "Scaffolding Workers", category: "Construction", image: scaffold.url, description: "Scaffolding workforce for access and construction works." },
];