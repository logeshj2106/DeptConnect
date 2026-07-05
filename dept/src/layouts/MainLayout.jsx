import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Chatbot from '../components/Chatbot'

export default function MainLayout() {
    return (
        <div className="min-h-screen flex flex-col bg-primary relative overflow-hidden">
            {/* Animated Background Effects */}
            <div className="fixed inset-0 pointer-events-none z-0">
                {/* Gradient Orbs */}
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent-blue/10 rounded-full blur-[120px] animate-pulse-slow" />
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent-violet/10 rounded-full blur-[120px] animate-pulse-slow" style={{ animationDelay: '2s' }} />
                <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-accent-teal/5 rounded-full blur-[100px] animate-pulse-slow" style={{ animationDelay: '4s' }} />
                
                {/* Grid Pattern */}
                <div 
                    className="absolute inset-0 opacity-[0.03]"
                    style={{ 
                        backgroundImage: 'linear-gradient(rgba(14, 165, 233, 1) 1px, transparent 1px), linear-gradient(90deg, rgba(14, 165, 233, 1) 1px, transparent 1px)',
                        backgroundSize: '80px 80px'
                    }} 
                />
                
                {/* Floating Particles */}
                <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-accent-blue/40 rounded-full animate-float" />
                <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-accent-violet/30 rounded-full animate-float" style={{ animationDelay: '1s' }} />
                <div className="absolute top-1/2 right-1/3 w-2 h-2 bg-accent-teal/40 rounded-full animate-float" style={{ animationDelay: '2s' }} />
                <div className="absolute bottom-1/4 left-1/3 w-4 h-4 bg-accent-blue/20 rounded-full animate-float" style={{ animationDelay: '3s' }} />
            </div>

            <Navbar />
            <main className="flex-1 relative z-10">
                <Outlet />
            </main>
            <Footer />
            <Chatbot />
        </div>
    )
}
