"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Beef, Coffee, Utensils, Fish, IceCream2, Pizza, Search, ShoppingBag } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarProvider } from "@/components/ui/sidebar";

const categories = [
  {
    name: "Popular",
    icon: Pizza,
    items: ["Best Sellers", "Top Rated", "Most Ordered"],
  },
  {
    name: "Breakfast",
    icon: Coffee,
    items: ["Pancakes", "Eggs & Bacon", "Coffee", "Pastries"],
  },
  {
    name: "Lunch",
    icon: Utensils,
    items: ["Sandwiches", "Salads", "Soups", "Combos"],
  },
  {
    name: "Dinner",
    icon: Beef,
    items: ["Steaks", "Pasta", "Burgers", "Rice Bowls"],
  },
  {
    name: "Seafood",
    icon: Fish,
    items: ["Fish", "Shrimp", "Sushi", "Seafood Platters"],
  },
  {
    name: "Desserts",
    icon: IceCream2,
    items: ["Ice Cream", "Cakes", "Cookies", "Pies"],
  },
];

function SidebarContainer() {
  const [activeItem, setActiveItem] = React.useState("Best Sellers");
  const [isHovered, setIsHovered] = React.useState(false);
  const [hoveredCategory, setHoveredCategory] = React.useState<string | null>(null);

  return (
    <Sidebar
      className={`border-r transition-all duration-300 ${isHovered ? "w-72" : "w-16"}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setHoveredCategory(null);
      }}
    >
      <SidebarHeader className="border-b py-4">
        <div className={`flex items-center ${isHovered ? "px-4" : "justify-center"}`}>
          <ShoppingBag className="h-8 w-8" aria-hidden="true" />
          <span
            className={`ml-2 text-xl font-bold text-primary overflow-hidden transition-all duration-300 ${
              isHovered ? "w-auto opacity-100" : "w-0 opacity-0"
            }`}
          >
            FoodDash
          </span>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <div
          className={`overflow-hidden transition-all duration-300 ${isHovered ? "h-16 opacity-100" : "h-0 opacity-0"}`}
        >
          <div className="p-4">
            <div className="relative">
              <Search className="absolute left-2 top-2.5 h-5 w-5 text-muted-foreground" aria-hidden="true" />
              <Input placeholder="Search menu items" className="pl-9" />
            </div>
          </div>
        </div>
        <ScrollArea className="h-[calc(100vh-10rem)]">
          {categories.map((category, idx) => (
            <motion.div
              key={category.name}
              className="relative py-3"
              initial={false}
              animate={{
                backgroundColor: hoveredCategory === category.name ? "var(--accent)" : "transparent",
              }}
              transition={{ duration: 0.2 }}
              onMouseEnter={() => isHovered && setHoveredCategory(category.name)}
              onMouseLeave={() => setHoveredCategory(null)}
            >
              <div className={`flex items-center ${isHovered ? "px-4" : "justify-center"}`}>
                <motion.div
                  initial={false}
                  animate={{ rotate: hoveredCategory === category.name ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <category.icon className="h-7 w-7" aria-hidden="true" />
                </motion.div>
                {isHovered && (
                  <motion.span
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    className="ml-2"
                  >
                    {category.name}
                  </motion.span>
                )}
              </div>
              <AnimatePresence initial={false}>
                {isHovered && hoveredCategory === category.name && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2, ease: "easeInOut" }}
                    className="space-y-1 overflow-hidden pl-8 border-l ml-4"
                  >
                    {category.items.map((item, itemIdx) => (
                      <motion.div
                        key={item}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -10 }}
                        transition={{ delay: itemIdx * 0.05 }}
                      >
                        <Button
                          variant={activeItem === item ? "secondary" : "ghost"}
                          onClick={() => setActiveItem(item)}
                          className="w-full justify-start py-1 h-8 text-sm font-normal"
                        >
                          {item}
                        </Button>
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </ScrollArea>
      </SidebarContent>
      <SidebarFooter className="border-t p-4">
        <Button className={`flex items-center ${isHovered ? "justify-start w-full" : "justify-center w-8"} h-10`}>
          <ShoppingBag className="h-6 w-6" aria-hidden="true" />
          <span className={`ml-2 transition-all duration-300 ${isHovered ? "w-auto opacity-100" : "w-0 opacity-0"}`}>
            View Cart
          </span>
        </Button>
      </SidebarFooter>
    </Sidebar>
  );
}

export default function SidebarNew() {
  return (
    <SidebarProvider>
      <SidebarContainer />
    </SidebarProvider>
  );
}
