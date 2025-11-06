import { useState } from "react";
import { Card, CardContent } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

const coffeeItems = [
  {
    name: "Espresso",
    description: "Rich and bold, our signature espresso blend",
    price: "₱120",
    image: "https://images.unsplash.com/photo-1705952285570-113e76f63fb0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlc3ByZXNzbyUyMHNob3R8ZW58MXx8fHwxNzYxOTg5MjgzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    name: "Latte",
    description: "Smooth espresso with steamed milk and art",
    price: "₱150",
    image: "https://images.unsplash.com/photo-1635090976010-d3f6dfbb1bac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBjdXAlMjBsYXR0ZXxlbnwxfHx8fDE3NjIwNjg4MDB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    name: "Cappuccino",
    description: "Espresso with velvety foam and a dusting of cocoa",
    price: "₱140",
    image: "https://images.unsplash.com/photo-1634465748196-acd5b091f049?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXBwdWNjaW5vJTIwY3VwJTIwZm9hbXxlbnwxfHx8fDE3NjIwNjg4MDF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    name: "Cold Brew",
    description: "Smooth, refreshing coffee steeped for 24 hours",
    price: "₱160",
    image: "https://images.unsplash.com/photo-1570470752239-78e3fe00c416?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xkJTIwYnJldyUyMGdsYXNzfGVufDF8fHx8MTc2MjA2ODgwMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    name: "Americano",
    description: "Espresso with hot water for a lighter taste",
    price: "₱130",
    image: "https://images.unsplash.com/photo-1622465413095-2ee67c192522?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbWVyaWNhbm8lMjBjb2ZmZWUlMjBjdXB8ZW58MXx8fHwxNzYyMDY4ODAyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    name: "Flat White",
    description: "Velvety microfoam poured over a double shot",
    price: "₱150",
    image: "https://images.unsplash.com/photo-1727080409436-356bdc609899?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmbGF0JTIwd2hpdGUlMjBjb2ZmZWV8ZW58MXx8fHwxNzYxOTc3MDI2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
];

const pastryItems = [
  {
    name: "Classic Croissant",
    description: "Buttery, flaky French pastry, baked fresh daily",
    price: "₱90",
    image: "https://images.unsplash.com/photo-1733754348873-feeb45df3bab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcm9pc3NhbnQlMjBwYXN0cnl8ZW58MXx8fHwxNzYyMDUzMDQ2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    name: "Blueberry Muffin",
    description: "Moist muffin bursting with fresh blueberries",
    price: "₱85",
    image: "https://images.unsplash.com/photo-1607958996333-41aef7caefaa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibHVlYmVycnklMjBtdWZmaW58ZW58MXx8fHwxNzYyMDY4OTgyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    name: "Cinnamon Roll",
    description: "Sweet rolls with cinnamon swirl and cream cheese icing",
    price: "₱95",
    image: "https://images.unsplash.com/photo-1650626105236-2e3b1f933fa0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaW5uYW1vbiUyMHJvbGwlMjBwYXN0cnl8ZW58MXx8fHwxNzYyMDY4OTgyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    name: "Chocolate Brownie",
    description: "Rich, fudgy brownie with chocolate chunks",
    price: "₱80",
    image: "https://images.unsplash.com/photo-1672867458764-2a04080005fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicm93bmllJTIwY2hvY29sYXRlfGVufDF8fHx8MTc2MTk4Njc0OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    name: "Chocolate Cake",
    description: "Decadent chocolate layer cake with ganache",
    price: "₱120",
    image: "https://images.unsplash.com/photo-1700448293876-07dca826c161?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaG9jb2xhdGUlMjBjYWtlJTIwc2xpY2V8ZW58MXx8fHwxNzYyMDY4OTgyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    name: "Cheesecake",
    description: "Creamy New York-style cheesecake with berry compote",
    price: "₱140",
    image: "https://images.unsplash.com/photo-1716579866950-54abe7d4286f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGVlc2VjYWtlJTIwc2xpY2V8ZW58MXx8fHwxNzYyMDMwMDU0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
];

const foodItems = [
  {
    name: "Club Sandwich",
    description: "Triple-decker with turkey, bacon, lettuce, and tomato",
    price: "₱180",
    image: "https://images.unsplash.com/photo-1712725213059-a05103ed48e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYW5kd2ljaCUyMGNhZmV8ZW58MXx8fHwxNzYxOTY5NzkzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    name: "Bagel & Cream Cheese",
    description: "Fresh bagel toasted with herb cream cheese spread",
    price: "₱110",
    image: "https://images.unsplash.com/photo-1707079408137-cc73e9ef71c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWdlbCUyMGNyZWFtJTIwY2hlZXNlfGVufDF8fHx8MTc2MTk4OTI4NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
];

const nonCoffeeItems = [
  {
    name: "Matcha Latte",
    description: "Premium Japanese matcha with steamed milk",
    price: "₱160",
    image: "https://images.unsplash.com/photo-1582785513054-8d1bf9d69c1a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXRjaGElMjBsYXR0ZXxlbnwxfHx8fDE3NjE5ODA4NjF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    name: "Hot Chocolate",
    description: "Rich hot chocolate topped with whipped cream",
    price: "₱140",
    image: "https://images.unsplash.com/photo-1589402669377-f7ac773e7f84?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3QlMjBjaG9jb2xhdGUlMjBjdXB8ZW58MXx8fHwxNzYyMDY4OTg0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    name: "Fruit Smoothie",
    description: "Fresh mixed berries blended with yogurt",
    price: "₱150",
    image: "https://images.unsplash.com/photo-1638176066781-31ad97feacc9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcnVpdCUyMHNtb290aGllJTIwZ2xhc3N8ZW58MXx8fHwxNzYyMDA1NjA1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    name: "Iced Tea",
    description: "Refreshing house-brewed iced tea with lemon",
    price: "₱100",
    image: "https://images.unsplash.com/photo-1516638352197-2a528822bf6c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpY2VkJTIwdGVhJTIwZ2xhc3N8ZW58MXx8fHwxNzYyMDY4OTg0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
];

interface MenuItemProps {
  name: string;
  description: string;
  price: string;
  image: string;
}

function MenuItem({ name, description, price, image }: MenuItemProps) {
  return (
    <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="relative h-64">
        <ImageWithFallback
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>
      <CardContent className="p-6">
        <div className="flex justify-between items-start mb-3">
          <h3>{name}</h3>
          <span className="text-amber-700">{price}</span>
        </div>
        <p className="text-gray-600">{description}</p>
      </CardContent>
    </Card>
  );
}

export function MenuSection() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="mb-4">Our Menu</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our carefully curated selection of beverages, pastries, and food items,
            each crafted to perfection.
          </p>
        </div>

        <Tabs defaultValue="coffee" className="w-full">
          <TabsList className="grid w-full grid-cols-4 max-w-2xl mx-auto mb-12">
            <TabsTrigger value="coffee">Coffee</TabsTrigger>
            <TabsTrigger value="pastries">Pastries</TabsTrigger>
            <TabsTrigger value="food">Food</TabsTrigger>
            <TabsTrigger value="beverages">Beverages</TabsTrigger>
          </TabsList>

          <TabsContent value="coffee">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {coffeeItems.map((item, index) => (
                <MenuItem key={index} {...item} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="pastries">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {pastryItems.map((item, index) => (
                <MenuItem key={index} {...item} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="food">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {foodItems.map((item, index) => (
                <MenuItem key={index} {...item} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="beverages">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {nonCoffeeItems.map((item, index) => (
                <MenuItem key={index} {...item} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
