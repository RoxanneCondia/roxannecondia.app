"use client";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

import { useToast } from "@/components/ui/use-toast";
import { Suspense, useState } from "react";
import Loading from "../loading";

export const CardGrid = ({ className }: { className?: string }) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const { toast } = useToast();

  return (
    <Suspense fallback={<Loading />}>
      <motion.section
        id="list"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring", duration: 0.5, ease: "easeInOut" }}
        className={cn(
          "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  w-full",
          className
        )}
      >

      </motion.section>
    </Suspense>
  );
};
