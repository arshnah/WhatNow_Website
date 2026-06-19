"use client";

import React, { ButtonHTMLAttributes } from 'react';
import { motion } from 'framer-motion';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'outline';
    icon?: React.ReactNode;
}

export function Button({ 
    children, 
    variant = 'primary', 
    icon, 
    className = '', 
    ...props 
}: ButtonProps) {
    const baseStyles = "relative overflow-hidden px-6 py-3.5 rounded-2xl font-medium flex items-center justify-center gap-2 transition-all whitespace-nowrap cursor-pointer select-none";
    
    const variants = {
        primary: "bg-secondary text-white hover:bg-secondary-hover shadow-sm active:shadow-inner",
        outline: "bg-white dark:bg-slate-800 text-black/70 dark:text-slate-200 border border-gray-350 dark:border-slate-600 hover:bg-gray-50 dark:hover:bg-slate-700"
    };

    return (
        <motion.button 
            whileHover={{ scale: 1.03, y: -1 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className={`${baseStyles} ${variants[variant]} ${className}`} 
            {...props as any}
        >
            {/* Glossy shine sweep effect for primary button */}
            {variant === 'primary' && (
                <motion.div 
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.65, ease: "easeInOut" }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none skew-x-12"
                />
            )}
            
            <span className="flex items-center gap-2 relative z-10">
                {children}
                {icon && <span className="inline-flex shrink-0">{icon}</span>}
            </span>
        </motion.button>
    );
}

export default Button;
