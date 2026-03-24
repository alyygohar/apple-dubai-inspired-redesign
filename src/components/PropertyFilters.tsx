import { Search, SlidersHorizontal, X } from "lucide-react";
import { useState } from "react";

interface PropertyFiltersProps {
  searchQuery: string;
  setSearchQuery: (v: string) => void;
  actionFilter: string;
  setActionFilter: (v: string) => void;
  statusFilter: string;
  setStatusFilter: (v: string) => void;
  developerFilter: string;
  setDeveloperFilter: (v: string) => void;
  categoryFilter: string;
  setCategoryFilter: (v: string) => void;
  typeFilter: string;
  setTypeFilter: (v: string) => void;
  bedsFilter: string;
  setBedsFilter: (v: string) => void;
  priceMin: string;
  setPriceMin: (v: string) => void;
  priceMax: string;
  setPriceMax: (v: string) => void;
  onResetPage: () => void;
}

const selectClass =
  "w-full bg-muted/50 border border-border rounded-xl py-2.5 px-4 text-sm text-foreground focus:outline-none focus:border-accent/50 transition-colors appearance-none cursor-pointer";

const priceRanges = [
  { label: "No Min", value: "" },
  { label: "100K", value: "100000" },
  { label: "500K", value: "500000" },
  { label: "1M", value: "1000000" },
  { label: "2M", value: "2000000" },
  { label: "5M", value: "5000000" },
  { label: "10M", value: "10000000" },
  { label: "15M", value: "15000000" },
  { label: "25M", value: "25000000" },
];

const PropertyFilters = ({
  searchQuery, setSearchQuery,
  actionFilter, setActionFilter,
  statusFilter, setStatusFilter,
  developerFilter, setDeveloperFilter,
  categoryFilter, setCategoryFilter,
  typeFilter, setTypeFilter,
  bedsFilter, setBedsFilter,
  priceMin, setPriceMin,
  priceMax, setPriceMax,
  onResetPage,
}: PropertyFiltersProps) => {
  const [showFilters, setShowFilters] = useState(false);

  const change = (setter: (v: string) => void) => (e: React.ChangeEvent<HTMLSelectElement>) => {
    setter(e.target.value);
    onResetPage();
  };

  return (
    <div className="bg-card rounded-2xl p-4 md:p-6 border border-border">
      {/* Search row */}
      <div className="flex gap-3 mb-4">
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search by location or property name..."
            value={searchQuery}
            onChange={(e) => { setSearchQuery(e.target.value); onResetPage(); }}
            className="w-full bg-muted/50 border border-border rounded-xl py-2.5 pl-10 pr-4 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-accent/50 transition-colors"
          />
        </div>
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="flex items-center gap-2 bg-muted/50 border border-border rounded-xl px-4 py-2.5 text-sm text-muted-foreground hover:text-foreground transition-colors md:hidden"
        >
          <SlidersHorizontal className="w-4 h-4" />
        </button>
      </div>

      {/* Filter rows */}
      <div className={`space-y-3 ${showFilters ? "block" : "hidden md:block"}`}>
        {/* Row 1 */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <div>
            <label className="block text-[10px] font-medium tracking-[0.2em] uppercase text-muted-foreground mb-1.5 px-1">Action</label>
            <select value={actionFilter} onChange={change(setActionFilter)} className={selectClass}>
              <option value="All">All</option>
              <option value="Buy">Buy</option>
              <option value="Rent">Rent</option>
              <option value="Sale">Sale</option>
            </select>
          </div>
          <div>
            <label className="block text-[10px] font-medium tracking-[0.2em] uppercase text-muted-foreground mb-1.5 px-1">Status</label>
            <select value={statusFilter} onChange={change(setStatusFilter)} className={selectClass}>
              <option value="All">All</option>
              <option value="Off Plan">Off Plan</option>
              <option value="Completed">Completed</option>
            </select>
          </div>
          <div>
            <label className="block text-[10px] font-medium tracking-[0.2em] uppercase text-muted-foreground mb-1.5 px-1">Developer</label>
            <select value={developerFilter} onChange={change(setDeveloperFilter)} className={selectClass}>
              <option value="All">All</option>
              <option value="Emaar">Emaar</option>
              <option value="DAMAC">DAMAC</option>
              <option value="Sobha">Sobha</option>
              <option value="Nakheel">Nakheel</option>
              <option value="Meraas">Meraas</option>
            </select>
          </div>
          <div>
            <label className="block text-[10px] font-medium tracking-[0.2em] uppercase text-muted-foreground mb-1.5 px-1">Category</label>
            <select value={categoryFilter} onChange={change(setCategoryFilter)} className={selectClass}>
              <option value="All">All</option>
              <option value="Commercial">Commercial</option>
              <option value="Residential">Residential</option>
            </select>
          </div>
        </div>

        {/* Row 2 */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <div>
            <label className="block text-[10px] font-medium tracking-[0.2em] uppercase text-muted-foreground mb-1.5 px-1">Type</label>
            <select value={typeFilter} onChange={change(setTypeFilter)} className={selectClass}>
              <option value="All">All</option>
              <option value="Apartments">Apartments</option>
              <option value="Villas">Villas</option>
              <option value="Penthouses">Penthouses</option>
              <option value="Townhouses">Townhouses</option>
              <option value="Offices">Offices</option>
              <option value="Plots">Plots</option>
              <option value="Retail">Retail</option>
            </select>
          </div>
          <div>
            <label className="block text-[10px] font-medium tracking-[0.2em] uppercase text-muted-foreground mb-1.5 px-1">Beds</label>
            <select value={bedsFilter} onChange={change(setBedsFilter)} className={selectClass}>
              <option value="All">All</option>
              <option value="1">1 Bed</option>
              <option value="2">2 Beds</option>
              <option value="3">3 Beds</option>
              <option value="4">4 Beds</option>
              <option value="5">5 Beds</option>
            </select>
          </div>
          <div>
            <label className="block text-[10px] font-medium tracking-[0.2em] uppercase text-muted-foreground mb-1.5 px-1">Price Min</label>
            <select value={priceMin} onChange={change(setPriceMin)} className={selectClass}>
              {priceRanges.map((r) => (
                <option key={`min-${r.value}`} value={r.value}>{r.label}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-[10px] font-medium tracking-[0.2em] uppercase text-muted-foreground mb-1.5 px-1">Price Max</label>
            <select value={priceMax} onChange={change(setPriceMax)} className={selectClass}>
              <option value="">No Max</option>
              {priceRanges.slice(1).map((r) => (
                <option key={`max-${r.value}`} value={r.value}>{r.label}</option>
              ))}
              <option value="50000000">50M+</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyFilters;
