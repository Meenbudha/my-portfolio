import React, { useState } from 'react';
import { Mail, Phone, Linkedin, Github, Download, CheckCircle2 } from 'lucide-react';

const WEB3FORMS_KEY = '01fec9be-5251-48c4-a0b7-905344131efb';

const Contact = ({ fadeClass, reg }) => {
  const [form, setForm] = useState({ name: '', email: '', type: 'Internship', subject: '', message: '' });
  const [formStatus, setFormStatus] = useState('idle');

  const handleChange = (e) => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('sending');
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          ...form,
          access_key: WEB3FORMS_KEY,
          subject: `[Portfolio Contact] ${form.type} — ${form.subject}`,
          from_name: `${form.name} (Portfolio)`,
          botcheck: '',
        }),
      });
      const data = await res.json();
      setFormStatus(data.success ? 'success' : 'error');
    } catch { setFormStatus('error'); }
  };

  return (
    <footer id="contact" ref={reg('contact')} className={`py-20 px-6 border-t border-slate-900 ${fadeClass('contact')}`}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-blue-500 font-mono mb-4 text-sm flex items-center justify-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" /> Open to new opportunities
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Let's build something great.</h2>
          <p className="text-slate-400 max-w-lg mx-auto text-base leading-relaxed">
            Fill in the form below — I'll get back to you within 24 hours. Or reach out directly via the links below.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Form */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8">
            <h3 className="text-white font-bold text-xl mb-6 flex items-center gap-2"><Mail className="w-5 h-5 text-blue-400" /> Send a Message</h3>
            {formStatus === 'success' ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-8 h-8 text-emerald-400" />
                </div>
                <h4 className="text-white font-bold text-lg mb-2">Message Sent!</h4>
                <p className="text-slate-400 text-sm">Thanks for reaching out. I'll reply to <span className="text-blue-400">{form.email}</span> within 24 hours.</p>
                <button onClick={() => { setFormStatus('idle'); setForm({ name: '', email: '', type: 'Internship', subject: '', message: '' }); }}
                  className="mt-6 text-blue-400 text-sm hover:text-blue-300 transition-colors underline underline-offset-2">
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <input type="checkbox" name="botcheck" className="hidden" />
                <div className="grid sm:grid-cols-2 gap-4">
                  {[['text','name','Full Name *','John Doe'],['email','email','Your Email *','you@company.com']].map(([type, name, label, ph]) => (
                    <div key={name}>
                      <label className="block text-xs text-slate-400 font-medium mb-1.5 uppercase tracking-wider">{label}</label>
                      <input type={type} name={name} required value={form[name]} onChange={handleChange} placeholder={ph}
                        className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-2.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 transition-colors" />
                    </div>
                  ))}
                </div>
                <div>
                  <label className="block text-xs text-slate-400 font-medium mb-1.5 uppercase tracking-wider">Opportunity Type *</label>
                  <select name="type" required value={form.type} onChange={handleChange}
                    className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors">
                    {['Internship','Full-time','Freelance','Collaboration','Other'].map(o => <option key={o}>{o}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-xs text-slate-400 font-medium mb-1.5 uppercase tracking-wider">Subject *</label>
                  <input type="text" name="subject" required value={form.subject} onChange={handleChange} placeholder="Backend Developer Internship at Acme Corp"
                    className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-2.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 transition-colors" />
                </div>
                <div>
                  <label className="block text-xs text-slate-400 font-medium mb-1.5 uppercase tracking-wider">Message *</label>
                  <textarea name="message" required rows={5} value={form.message} onChange={handleChange} placeholder="Hi Meen, I came across your portfolio and..."
                    className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-2.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 transition-colors resize-none" />
                </div>
                {formStatus === 'error' && <p className="text-red-400 text-sm">Something went wrong. Please try emailing directly at meenbudha124@gmail.com.</p>}
                <button type="submit" disabled={formStatus === 'sending'}
                  className="w-full bg-blue-600 hover:bg-blue-500 disabled:bg-slate-700 disabled:cursor-not-allowed text-white font-semibold py-3 rounded-lg transition-all shadow-lg shadow-blue-500/20 flex items-center justify-center gap-2">
                  {formStatus === 'sending'
                    ? <><span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /> Sending…</>
                    : <><Mail className="w-4 h-4" /> Send Message</>}
                </button>
              </form>
            )}
          </div>

          {/* Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-white font-bold text-xl mb-4">Get in touch</h3>
              <div className="space-y-3">
                {[
                  { href: 'mailto:meenbudha124@gmail.com', Icon: Mail, color: 'hover:text-blue-400', border: 'group-hover:border-blue-500/40', label: 'meenbudha124@gmail.com' },
                  { href: 'tel:+917073241096',             Icon: Phone, color: 'hover:text-violet-400', border: 'group-hover:border-violet-500/40', label: '+91 7073241096' },
                  { href: 'https://www.linkedin.com/in/meen-budha', Icon: Linkedin, color: 'hover:text-blue-400', border: 'group-hover:border-blue-500/40', label: 'linkedin.com/in/meen-budha', ext: true },
                  { href: 'https://github.com/Meenbudha',  Icon: Github, color: 'hover:text-white', border: 'group-hover:border-slate-600', label: 'github.com/Meenbudha', ext: true },
                ].map(({ href, Icon, color, border, label, ext }) => (
                  <a key={href} href={href} {...(ext ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    className={`flex items-center gap-3 text-slate-400 ${color} transition-colors group`}>
                    <div className={`w-10 h-10 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center ${border} transition-colors`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-sm">{label}</span>
                  </a>
                ))}
              </div>
            </div>

            <div className="p-6 bg-gradient-to-br from-blue-600/10 to-violet-600/10 border border-blue-500/20 rounded-2xl">
              <h4 className="text-white font-bold mb-1">Want my resume?</h4>
              <p className="text-slate-400 text-sm mb-4">Download a PDF copy of my latest resume with all my experience and projects.</p>
              <a href="/Meen_Resume.pdf" download className="inline-flex items-center gap-2 bg-white text-slate-950 hover:bg-slate-100 font-semibold px-5 py-2.5 rounded-lg text-sm transition-all">
                <Download className="w-4 h-4" /> Download Resume PDF
              </a>
            </div>

            <div className="flex items-center gap-3 p-4 bg-emerald-500/5 border border-emerald-500/20 rounded-xl">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shrink-0" />
              <p className="text-emerald-400 text-sm font-medium">Typically responds within 24 hours</p>
            </div>
          </div>
        </div>

        <div className="text-center mt-16 text-slate-600 text-sm font-mono">
          © 2026 Meen Bahadur Budha · Built with React &amp; ❤️
        </div>
      </div>
    </footer>
  );
};

export default Contact;
