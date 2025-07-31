import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function App() {
  const [flats, setFlats] = useState([
    {
      id: 1,
      title: "2BHK in Mumbai",
      location: "Andheri West",
      price: "₹85 Lakhs",
      reraId: "RERA-MH-2024-1234",
    },
    {
      id: 2,
      title: "1BHK in Pune",
      location: "Baner",
      price: "₹45 Lakhs",
      reraId: "RERA-MH-2024-5678",
    },
  ]);

  const [form, setForm] = useState({
    title: "",
    location: "",
    price: "",
    reraId: "",
  });

  const handleAddFlat = () => {
    if (form.title && form.reraId) {
      setFlats([...flats, { ...form, id: flats.length + 1 }]);
      setForm({ title: "", location: "", price: "", reraId: "" });
    }
  };

  return (
    <div className="p-6 space-y-10 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-center">🏠 RERA Flats Agent Portal</h1>

      {/* Flat Listing Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {flats.map((flat) => (
          <Card key={flat.id} className="shadow-md rounded-2xl">
            <CardContent className="p-4 space-y-2">
              <h2 className="text-xl font-semibold">{flat.title}</h2>
              <p>📍 {flat.location}</p>
              <p>💰 {flat.price}</p>
              <p>🆔 RERA: {flat.reraId}</p>
            </CardContent>
          </Card>
        ))}
      </section>

      {/* Add New Flat Form */}
      <section className="p-6 bg-white rounded-2xl shadow-md space-y-4">
        <h2 className="text-2xl font-semibold">Add New Flat</h2>
        <Input
          placeholder="Title (e.g. 2BHK in Thane)"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
        />
        <Input
          placeholder="Location"
          value={form.location}
          onChange={(e) => setForm({ ...form, location: e.target.value })}
        />
        <Input
          placeholder="Price (e.g. ₹75 Lakhs)"
          value={form.price}
          onChange={(e) => setForm({ ...form, price: e.target.value })}
        />
        <Input
          placeholder="RERA ID"
          value={form.reraId}
          onChange={(e) => setForm({ ...form, reraId: e.target.value })}
        />
        <Button onClick={handleAddFlat}>Add Flat</Button>
      </section>

      {/* Buyer Contact Form */}
      <section className="p-6 bg-white rounded-2xl shadow-md space-y-4">
        <h2 className="text-2xl font-semibold">Contact Agent</h2>
        <Input placeholder="Your Name" />
        <Input placeholder="Your Email" />
        <Textarea placeholder="Message or Inquiry" />
        <Button>Submit</Button>
      </section>
    </div>
  );
}
