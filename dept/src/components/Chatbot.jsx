import React, { useState, useRef, useEffect } from 'react'
import { MessageCircle, X, Send, Bot } from 'lucide-react'

const faqs = [
    { q: "What programs does CSE offer?", a: "We offer B.E. CSE (4 years), M.E. CSE (2 years), and Ph.D in Computer Science." },
    { q: "How many students are placed?", a: "Our department maintains a 95%+ placement record. Top recruiters include TCS, Infosys, Google, Amazon, and more!" },
    { q: "How do I access the student portal?", a: "Click 'Portal Login' in the navigation bar, select Student, and enter your credentials." },
    { q: "What labs are available?", a: "We have 10+ labs including AI Lab, Cloud Computing Lab, Cyber Security Lab, IoT Lab, and Full Stack Lab." },
    { q: "How do I apply for leave?", a: "Login to the Student Portal → Go to Leave Application section → Fill the form and submit." },
    { q: "Contact HOD?", a: "You can contact the HoD at hod.cse@dept.edu or visit the CSE Block, Room 101." },
]

export default function Chatbot() {
    const [isOpen, setIsOpen] = useState(false)
    const [messages, setMessages] = useState([
        { from: 'bot', text: "👋 Hi! I'm DeptBot. How can I help you today?" }
    ])
    const [input, setInput] = useState('')
    const [showSuggestions, setShowSuggestions] = useState(true)
    const endRef = useRef(null)

    useEffect(() => {
        endRef.current?.scrollIntoView({ behavior: 'smooth' })
    }, [messages])

    const handleSend = (text = input) => {
        if (!text.trim()) return
        const newMessages = [...messages, { from: 'user', text }]
        setMessages(newMessages)
        setInput('')
        setShowSuggestions(false)

        // Find matching FAQ
        const matched = faqs.find(f =>
            f.q.toLowerCase().includes(text.toLowerCase()) ||
            text.toLowerCase().includes(f.q.toLowerCase().split(' ')[1] || '')
        )
        setTimeout(() => {
            setMessages(prev => [...prev, {
                from: 'bot',
                text: matched?.a || "I'm not sure about that. Please contact the department office at cse@department.edu.in or call +91 98765 43210."
            }])
        }, 600)
    }

    return (
        <>
            {/* Floating Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`fixed bottom-6 right-6 z-50 w-14 h-14 rounded-2xl bg-gradient-to-br from-accent-blue to-accent-violet shadow-glow flex items-center justify-center transition-all duration-300 hover:scale-110 ${isOpen ? 'rotate-0' : 'animate-float'}`}>
                {isOpen ? <X className="w-6 h-6 text-white" /> : <MessageCircle className="w-6 h-6 text-white" />}
            </button>

            {/* Chat Panel */}
            {isOpen && (
                <div className="fixed bottom-24 right-6 z-50 w-80 sm:w-96 bg-slate-800 border border-slate-700 rounded-2xl shadow-2xl overflow-hidden animate-slide-up flex flex-col" style={{ height: '480px' }}>
                    {/* Header */}
                    <div className="bg-gradient-to-r from-blue-600 to-violet-600 p-4 flex items-center gap-3 shadow-lg">
                        <div className="w-10 h-10 bg-white/30 rounded-xl flex items-center justify-center shadow-inner">
                            <Bot className="w-6 h-6 text-white" />
                        </div>
                        <div>
                            <h4 className="text-white font-semibold font-heading text-base">DeptBot</h4>
                            <p className="text-white/80 text-xs">CSE Department Assistant</p>
                        </div>
                        <div className="ml-auto flex items-center gap-2">
                            <div className="w-2.5 h-2.5 bg-lime-400 rounded-full animate-pulse"></div>
                            <span className="text-white/80 text-xs">Online</span>
                        </div>
                    </div>

                    {/* Messages */}
                    <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-slate-900/50">
                        {messages.map((msg, i) => (
                            <div key={i} className={`flex ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`}>
                                <div className={`max-w-[85%] px-4 py-3 rounded-2xl text-sm leading-relaxed shadow-md ${msg.from === 'user'
                                        ? 'bg-gradient-to-r from-accent-blue to-accent-violet text-white rounded-br-sm border border-accent-violet/30'
                                        : 'bg-gradient-to-br from-slate-600 to-slate-700 text-white rounded-bl-sm border border-slate-500/30'
                                    }`}>
                                    {msg.from === 'bot' && <span className="mr-2">🤖</span>}
                                    <span>{msg.text}</span>
                                </div>
                            </div>
                        ))}

                        {/* Suggestions */}
                        {showSuggestions && (
                            <div className="space-y-2 pt-2">
                                <p className="text-slate-400 text-xs font-medium">💡 Quick questions:</p>
                                {faqs.slice(0, 4).map((f) => (
                                    <button key={f.q} onClick={() => handleSend(f.q)}
                                        className="block w-full text-left text-xs bg-slate-700/50 hover:bg-accent-blue/30 border border-slate-600/50 rounded-xl px-3 py-2.5 text-slate-200 transition-all hover:border-accent-blue/50 hover:shadow-lg hover:shadow-accent-blue/10">
                                        <span className="font-medium">→</span> {f.q}
                                    </button>
                                ))}
                            </div>
                        )}
                        <div ref={endRef} />
                    </div>

                    {/* Input */}
                    <div className="p-3 border-t border-slate-700 bg-slate-800/50 flex gap-2">
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                            placeholder="Type your question..."
                            className="flex-1 bg-slate-700/50 border border-slate-600 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-400 focus:outline-none focus:border-accent-blue focus:shadow-glow transition-all"
                        />
                        <button onClick={() => handleSend()}
                            className="w-10 h-10 bg-gradient-to-br from-accent-blue to-accent-violet rounded-xl flex items-center justify-center hover:opacity-90 hover:shadow-lg hover:shadow-accent-blue/30 transition-all">
                            <Send className="w-4 h-4 text-white" />
                        </button>
                    </div>
                </div>
            )}
        </>
    )
}
