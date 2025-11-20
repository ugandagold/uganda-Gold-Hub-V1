import React from 'react';
import { Mail, Phone } from 'lucide-react';

const SectionContact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-[#fafaf9]">
      <div className="container mx-auto px-6">
         <div className="max-w-3xl mx-auto bg-stone-900 rounded-[2.5rem] p-8 md:p-12 shadow-2xl">
            <div className="text-center mb-10">
               <h2 className="text-3xl md:text-4xl font-serif text-white mb-2">Get in Touch</h2>
               <p className="text-stone-400 text-sm mb-6">Fill out the form below to reach our team.</p>
               
               <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-8 text-sm">
                 <a href="https://wa.me/256761389093" target="_blank" rel="noopener noreferrer" className="text-amber-500 hover:text-white transition-colors font-bold tracking-widest flex items-center gap-2 justify-center">
                   <Phone size={16} />
                   +256 761 389 093
                 </a>
                 <a href="mailto:ugandagoldhub@gmail.com" className="text-amber-500 hover:text-white transition-colors font-bold tracking-widest flex items-center gap-2 justify-center">
                   <Mail size={16} />
                   ugandagoldhub@gmail.com
                 </a>
               </div>
            </div>

            <form className="space-y-6">
               <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-amber-500 text-xs font-bold uppercase tracking-widest">Name</label>
                  <input id="name" type="text" placeholder="John Doe" className="w-full bg-stone-800 border border-stone-700 text-white px-6 py-4 rounded-xl focus:outline-none focus:border-amber-500 transition-colors" />
               </div>

               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                     <label htmlFor="phone" className="text-amber-500 text-xs font-bold uppercase tracking-widest">Phone Number</label>
                     <input id="phone" type="tel" placeholder="(+62) 123-456-789" className="w-full bg-stone-800 border border-stone-700 text-white px-6 py-4 rounded-xl focus:outline-none focus:border-amber-500 transition-colors" />
                  </div>
                  <div className="flex flex-col gap-2">
                     <label htmlFor="subject" className="text-amber-500 text-xs font-bold uppercase tracking-widest">Subject</label>
                     <input id="subject" type="text" placeholder="Subject" className="w-full bg-stone-800 border border-stone-700 text-white px-6 py-4 rounded-xl focus:outline-none focus:border-amber-500 transition-colors" />
                  </div>
               </div>

               <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-amber-500 text-xs font-bold uppercase tracking-widest">Message</label>
                  <textarea id="message" rows={4} placeholder="Hello" className="w-full bg-stone-800 border border-stone-700 text-white px-6 py-4 rounded-xl focus:outline-none focus:border-amber-500 transition-colors"></textarea>
               </div>

               <button type="submit" className="w-full md:w-auto px-12 py-4 bg-amber-500 hover:bg-amber-400 text-stone-900 font-bold text-sm uppercase tracking-widest rounded-xl transition-colors mt-4">
                  Submit
               </button>
            </form>
         </div>
      </div>
    </section>
  );
};

export default SectionContact;