"use client";

import { useState } from "react";
import SectionTitle from "@/components/SectionTitle";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function ContactSection({ id }: { id?: string }) {
  const links = [
    { label: "Portfolio", href: "https://mehedi-rakib.vercel.app/" },
    { label: "Email", href: "mailto:mehedirakib.dev@gmail.com", icon: MdEmail },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/mehedirakib", icon: FaLinkedin },
    { label: "GitHub", href: "https://github.com/mehedi-rakib", icon: FaGithub },
    { label: "Twitter", href: "https://twitter.com/replace", icon: FaTwitter },
  ];

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<null | { type: "success" | "error"; text: string }>(null);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus(null);

    // Simple client-side validation
    const emailValid = /.+@.+\..+/.test(email);
    if (!name || !emailValid || !message) {
      setStatus({ type: "error", text: "Please fill all fields with a valid email." });
      return;
    }

    try {
      setSubmitting(true);
      // Placeholder: integrate your backend or service here
      // await fetch("/api/contact", { method: "POST", body: JSON.stringify({ name, email, message }) });

      // Mailto fallback opens the email client
      const subject = encodeURIComponent(`New inquiry from ${name}`);
      const body = encodeURIComponent(message + "\n\n" + `Reply-to: ${email}`);
      window.location.href = `mailto:replace@your.email?subject=${subject}&body=${body}`;

      setStatus({ type: "success", text: "Thanks! Opening your email client…" });
      setName("");
      setEmail("");
      setMessage("");
    } catch (err) {
      setStatus({ type: "error", text: "Something went wrong. Please try again." });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id={id} className="section">
      <div className="container">
        <SectionTitle title="I’m all over the internet" eyebrow="{06}" />
        <div className="text-sm text-muted mb-4">Location: Dhaka, Bangladesh</div>
        <div className="flex flex-wrap gap-3">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="inline-flex items-center gap-2 rounded-full border border-zinc-800 px-4 py-2 hover:border-accent/70 hover:text-accent transition-colors"
            >
              {l.icon ? <l.icon /> : null}
              {l.label}
            </a>
          ))}
        </div>

        {/* Contact form */}
        <form onSubmit={onSubmit} className="mt-8 grid gap-4 max-w-xl">
          <div className="grid gap-2">
            <label htmlFor="name" className="text-sm text-muted">Your name</label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="John Doe"
              className="rounded-md border border-zinc-800 bg-zinc-950 px-3 py-2 focus:outline-none focus:border-[var(--accent)]"
              required
            />
          </div>
          <div className="grid gap-2">
            <label htmlFor="email" className="text-sm text-muted">Email address</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="rounded-md border border-zinc-800 bg-zinc-950 px-3 py-2 focus:outline-none focus:border-[var(--accent)]"
              required
            />
          </div>
          <div className="grid gap-2">
            <label htmlFor="message" className="text-sm text-muted">Message</label>
            <textarea
              id="message"
              rows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Tell me about your project…"
              className="rounded-md border border-zinc-800 bg-zinc-950 px-3 py-2 focus:outline-none focus:border-[var(--accent)]"
              required
            />
          </div>
          <div className="flex items-center gap-3">
            <button
              type="submit"
              disabled={submitting}
              className="inline-flex items-center gap-2 rounded-full px-5 py-2 accent-bg text-black text-sm font-medium shadow-[0_6px_30px_rgba(158,255,0,0.35)] disabled:opacity-60"
            >
              {submitting ? "Sending…" : "Send message"}
              <span aria-hidden>→</span>
            </button>
            {status && (
              <span className={status.type === "success" ? "text-accent" : "text-red-400"}>{status.text}</span>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}