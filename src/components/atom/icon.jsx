"use client";

import { FaCookieBite, FaUserCheck, FaTruck } from "react-icons/fa";
import { motion } from "framer-motion";

const features = [
  {
    icon: <FaCookieBite size={40} className="text-yellow-500" />,
    title: "Healthy & Tasty Food",
    description: "Purpose being screen drunk create the man there top a men.",
  },
  {
    icon: <FaUserCheck size={40} className="text-yellow-500" />,
    title: "Experienced Chef",
    description: "Purpose being screen drunk create the man there top a men.",
  },
  {
    icon: <FaTruck size={40} className="text-yellow-500" />,
    title: "Fast Delivery",
    description: "Purpose being screen drunk create the man there top a men.",
  },
];

const FeatureCard = ({ icon, title, description }) => (
  <motion.div
    className="flex flex-col items-center text-center p-6 transition-shadow"
  >
    <div className="mb-4">{icon}</div>
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    <p className="text-gray-500">{description}</p>
  </motion.div>
);

export default function Features() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-3 gap-8">
      {features.map((feature, idx) => (
        <FeatureCard
          key={idx}
          icon={feature.icon}
          title={feature.title}
          description={feature.description}
        />
      ))}
    </section>
  );
};