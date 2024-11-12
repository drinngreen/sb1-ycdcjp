import React from 'react';
import { Smartphone, Globe, Database, LayoutDashboard, Users, Laptop, ArrowUpRight } from 'lucide-react';

const services = [
  {
    icon: Smartphone,
    title: 'App Native',
    description: 'Sviluppo di applicazioni mobile native per iOS e Android con prestazioni ottimali e user experience eccezionale.',
    features: ['Performance Ottimizzate', 'UI/UX Accattivante', 'Integrazioni API']
  },
  {
    icon: Globe,
    title: 'Progressive Web App',
    description: 'PWA che combinano il meglio del web e delle app native, accessibili da qualsiasi dispositivo.',
    features: ['Funziona Offline', 'Installabile', 'Cross-platform']
  },
  {
    icon: Laptop,
    title: 'Siti Web',
    description: 'Design e sviluppo di siti web responsive, ottimizzati per SEO e conversioni.',
    features: ['SEO Ottimizzato', 'Mobile First', 'Performance Elevate']
  },
  {
    icon: Database,
    title: 'Gestionali',
    description: 'Software gestionali personalizzati per ottimizzare i processi aziendali e aumentare l\'efficienza.',
    features: ['Workflow Automatizzati', 'Report Analytics', 'Multi-piattaforma']
  },
  {
    icon: Users,
    title: 'CRM',
    description: 'Sistemi CRM su misura per gestire clienti, vendite e marketing in modo integrato.',
    features: ['Lead Management', 'Automazione Marketing', 'Analytics Avanzate']
  },
  {
    icon: LayoutDashboard,
    title: 'Soluzioni Full Stack',
    description: 'Sviluppo end-to-end di soluzioni digitali complete per ogni esigenza aziendale.',
    features: ['Architettura Scalabile', 'API RESTful', 'Cloud Native']
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-black relative overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(#2cd4bd10 1px, transparent 1px), linear-gradient(90deg, #2cd4bd10 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Servizi <span className="text-[#2cd4bd]">All-in-One</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Dalla concezione al lancio, ti supportiamo in ogni fase del tuo progetto digitale
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} 
              className="group relative bg-black/50 border border-[#2cd4bd]/20 p-8 rounded-xl hover:border-[#2cd4bd] transition-all duration-300 hover:shadow-[0_0_30px_rgba(44,212,189,0.2)]">
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowUpRight className="h-5 w-5 text-[#2cd4bd]" />
              </div>
              
              <service.icon className="h-12 w-12 text-[#2cd4bd] mb-6" />
              <h3 className="text-2xl font-semibold text-white mb-4">{service.title}</h3>
              <p className="text-gray-300 mb-6">{service.description}</p>
              
              <ul className="space-y-3">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-400">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#2cd4bd] mr-2"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}