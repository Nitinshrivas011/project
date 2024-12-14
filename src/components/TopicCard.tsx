import React from 'react';
import { LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';

interface TopicCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay?: number;
}

export function TopicCard({ icon: Icon, title, description, delay = 0 }: TopicCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
      className="group relative bg-white/10 dark:bg-gray-800/20 backdrop-blur-lg p-6 rounded-xl border border-white/20 dark:border-gray-700/30 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-blue-600/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <Icon className="h-12 w-12 text-purple-500 mb-4" />
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
    </motion.div>
  );
}