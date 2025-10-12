/* import React, { useState, useEffect } from "react";
import Card from "./Card";

export default function CoffeeList({ showAvailable }) {
  const [coffeeData, setCoffeeData] = useState([]);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/devchallenges-io/curriculum/refs/heads/main/4-frontend-libaries/challenges/group_1/data/simple-coffee-listing-data.json"
    )
      .then((res) => res.json())
      .then((data) => setCoffeeData(data))
      .catch((err) => console.error("Error fetching data:", err));
  }, []);

  const filtered = showAvailable
    ? coffeeData.filter((c) => c.available)
    : coffeeData;

  return (
    <section className="mt-10 grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
      {filtered.map((coffee) => (
        <Card key={coffee.id} coffee={coffee} />
      ))}
    </section>
  );
}
 */