import React from 'react'
import { motion } from 'framer-motion';
import { TrendingUp, Users, Briefcase, Target } from 'lucide-react';

const Analytics = () => {

    const stats = [
        { icon: Users, value: "1.2M+", growth: '+15%', label: "Active Users", color: 'blue' },
        { icon: Briefcase, value: "150K+", growth: '+10%', label: "Jobs Posted", color: 'green' },
        { icon: Target, value: "39K+", growth: '+20%', label: "Successful Hires", color: 'purple' },   
        { icon: TrendingUp, value: "94%", growth: '+8%', label: "Platform Growth", color: 'orange' },
      ];

  return (
    <section className=''>
        <div className=''>
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true}}
                className=''
            >
  )
}

export default Analytics