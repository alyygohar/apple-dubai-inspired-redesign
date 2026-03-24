import { MapPin, Bed, Bath, Maximize } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Property } from "@/lib/propertyData";

interface PropertyCardProps {
  property: Property;
  index: number;
}

const PropertyCard = ({ property, index }: PropertyCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
    >
      <Link
        to={`/properties/${property.id}`}
        className="group block bg-card rounded-2xl overflow-hidden border border-border hover:shadow-lg transition-shadow duration-500"
      >
        <div className="aspect-[4/3] overflow-hidden relative">
          <img
            src={property.image}
            alt={property.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            loading="lazy"
          />
          <div className="absolute top-3 left-3 flex gap-2">
            <span className="text-[10px] font-medium tracking-wider uppercase bg-accent text-accent-foreground px-3 py-1 rounded-full">
              {property.action}
            </span>
            <span className={`text-[10px] font-medium tracking-wider uppercase px-3 py-1 rounded-full ${
              property.status === "Off Plan"
                ? "bg-foreground/80 text-primary-foreground"
                : "bg-muted/90 text-foreground backdrop-blur-sm"
            }`}>
              {property.status}
            </span>
          </div>
        </div>
        <div className="p-5">
          <h3 className="text-sm font-semibold mb-2 line-clamp-1">{property.title}</h3>
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground mb-3">
            <MapPin className="w-3.5 h-3.5 text-accent" />
            <span>{property.location}</span>
          </div>
          <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
            {property.beds > 0 && (
              <span className="flex items-center gap-1"><Bed className="w-3.5 h-3.5" /> {property.beds}</span>
            )}
            {property.baths > 0 && (
              <span className="flex items-center gap-1"><Bath className="w-3.5 h-3.5" /> {property.baths}</span>
            )}
            <span className="flex items-center gap-1"><Maximize className="w-3.5 h-3.5" /> {property.area} sq.ft</span>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-base font-semibold text-accent">{property.price}</p>
            <span className="text-xs font-medium border border-accent text-accent px-4 py-2 rounded-full group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
              View Details
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default PropertyCard;
