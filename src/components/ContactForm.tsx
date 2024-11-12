import React, { useState } from 'react';
import { Send } from 'lucide-react';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const result = await emailjs.send(
        'service_vnz7a96',
        'template_xpgdcbb',
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          service: formData.service,
          message: formData.message,
          to_name: 'Zoli Web Team',
          to_email: 'info@zoliqua.com'
        },
        'nv4XDgB6QifyGGd4T'
      );

      if (result.status === 200) {
        toast.success('Messaggio inviato con successo! Ti ricontatteremo presto.');
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          message: ''
        });
      }
    } catch (error) {
      toast.error('Si è verificato un errore. Per favore riprova più tardi.');
      console.error('Email error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-black/95">
      <Toaster position="top-center" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Parliamo del Tuo Progetto</h2>
          <p className="mt-4 text-xl text-gray-300">
            Compila il form e ti ricontatteremo entro 24 ore con una proposta su misura
          </p>
        </div>

        <div className="max-w-xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300">Nome e Cognome</label>
              <input
                type="text"
                name="name"
                id="name"
                required
                className="mt-1 block w-full rounded-md bg-black border border-white/20 text-white placeholder-gray-400 focus:border-[#2cd4bd] focus:ring-[#2cd4bd] p-3"
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                required
                className="mt-1 block w-full rounded-md bg-black border border-white/20 text-white placeholder-gray-400 focus:border-[#2cd4bd] focus:ring-[#2cd4bd] p-3"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-300">Telefono</label>
              <input
                type="tel"
                name="phone"
                id="phone"
                className="mt-1 block w-full rounded-md bg-black border border-white/20 text-white placeholder-gray-400 focus:border-[#2cd4bd] focus:ring-[#2cd4bd] p-3"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="service" className="block text-sm font-medium text-gray-300">Servizio di Interesse</label>
              <select
                name="service"
                id="service"
                required
                className="mt-1 block w-full rounded-md bg-black border border-white/20 text-white focus:border-[#2cd4bd] focus:ring-[#2cd4bd] p-3"
                value={formData.service}
                onChange={handleChange}
              >
                <option value="">Seleziona un servizio</option>
                <option value="app">App Native</option>
                <option value="pwa">Progressive Web App</option>
                <option value="web">Siti Web</option>
                <option value="gestionale">Gestionali</option>
                <option value="crm">CRM</option>
                <option value="fullstack">Soluzioni Full Stack</option>
                <option value="non_so">Non so ancora</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300">Messaggio</label>
              <textarea
                name="message"
                id="message"
                rows={4}
                required
                className="mt-1 block w-full rounded-md bg-black border border-white/20 text-white placeholder-gray-400 focus:border-[#2cd4bd] focus:ring-[#2cd4bd] p-3"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full flex justify-center items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-black bg-[#2cd4bd] hover:bg-[#25b5a1] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#2cd4bd] transition disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                'Invio in corso...'
              ) : (
                <>
                  Invia Richiesta
                  <Send className="ml-2 h-5 w-5" />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}