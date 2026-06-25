'use client';
import { useState, type FormEvent, type ChangeEvent } from 'react';

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const set = (field: string) => (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm(prev => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const fd = new FormData();
      fd.append('access_key', process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || '');
      fd.append('name', form.name);
      fd.append('email', form.email);
      fd.append('subject', 'New Contact Form – Sowers Ministry International');
      fd.append('from_name', form.name);
      fd.append('replyto', form.email);
      fd.append('message', form.subject ? `[${form.subject}]\n\n${form.message}` : form.message);
      fd.append('botcheck', '');
      const res = await fetch('https://api.web3forms.com/submit', { method: 'POST', body: fd });
      const data = await res.json();
      if (data.success) {
        setStatus('sent');
        setForm({ name: '', email: '', subject: '', message: '' });
      } else {
        setErrorMsg(data.message || 'Something went wrong. Please try again.');
        setStatus('error');
      }
    } catch {
      setErrorMsg('Network error. Please try again later.');
      setStatus('error');
    }
  };

  const inputCls = 'w-full rounded-xl border border-amber-200 bg-amber-50/40 px-4 py-3 text-gray-800 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-400 transition';

  if (status === 'sent') {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <div className="text-5xl mb-4">✉️</div>
        <h3 className="text-blue-900 font-semibold text-xl mb-2" style={{ fontFamily: 'var(--font-cormorant), Georgia, serif' }}>
          Message Received!
        </h3>
        <p className="text-gray-500 text-sm mb-6">Thank you for reaching out. Pastor Jay&apos;s team will reply soon.</p>
        <button
          onClick={() => setStatus('idle')}
          className="px-6 py-2 rounded-full text-sm font-medium text-white"
          style={{ background: 'linear-gradient(135deg,#d97706,#b45309)' }}
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">Your Name *</label>
          <input
            type="text"
            required
            value={form.name}
            onChange={set('name')}
            placeholder="Full name"
            className={inputCls}
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">Email Address *</label>
          <input
            type="email"
            required
            value={form.email}
            onChange={set('email')}
            placeholder="your@email.com"
            className={inputCls}
          />
        </div>
      </div>

      <div>
        <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">Subject</label>
        <input
          type="text"
          value={form.subject}
          onChange={set('subject')}
          placeholder="How can we help?"
          className={inputCls}
        />
      </div>

      <div>
        <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">Message *</label>
        <textarea
          required
          rows={5}
          value={form.message}
          onChange={set('message')}
          placeholder="Share your prayer request, partnership inquiry, or message…"
          className={inputCls}
          style={{ resize: 'vertical' }}
        />
      </div>

      {status === 'error' && (
        <p className="text-red-500 text-sm bg-red-50 border border-red-200 rounded-lg px-4 py-3">{errorMsg}</p>
      )}

      <button
        type="submit"
        disabled={status === 'sending'}
        className="w-full py-3.5 rounded-xl font-semibold text-white tracking-wide transition disabled:opacity-60"
        style={{ background: 'linear-gradient(135deg,#d97706,#b45309)', fontSize: '0.95rem' }}
      >
        {status === 'sending' ? 'Sending…' : 'Send Message →'}
      </button>
    </form>
  );
}
