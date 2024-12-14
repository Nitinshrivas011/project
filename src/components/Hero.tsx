import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/Button';

export function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80')] opacity-5 bg-fixed"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold tracking-tight"
        >
          <span className="text-gray-900 dark:text-white">Master </span>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
            Cybersecurity
          </span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-6 text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
        >
          Explore the world of cybersecurity through comprehensive guides, tutorials,
          and real-world examples.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-10 flex justify-center gap-4"
        >
          <Button variant="primary" onClick={() => window.location.href = '/topics'}>
            Start Learning
          </Button>
          <Button variant="outline" onClick={() => window.location.href = '/blog'}>
            Read Blog
          </Button>
        </motion.div>
      </div>
    </div>
  );
}