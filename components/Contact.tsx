"use client";

import { useState } from "react";
import { useInView } from "@/hooks/useInView";
import { Mail, MapPin, Send, Code2, Globe } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export function Contact() {
  const { ref, inView } = useInView();
  const { t } = useLanguage();
  const { contact } = t;
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setTimeout(() => setStatus("sent"), 1500);
  };

  const inputStyle: React.CSSProperties = {
    width: "100%", padding: "12px 16px", borderRadius: "10px", border: "1px solid var(--border)",
    background: "var(--background-secondary)", color: "var(--foreground)", fontSize: "15px",
    outline: "none", transition: "border-color 0.2s ease", fontFamily: "inherit",
  };

  const infoItems = [
    { icon: <Mail size={18} />, label: contact.email_label, value: "walasb2001@gmail.com" },
    { icon: <MapPin size={18} />, label: contact.location_label, value: contact.location_value },
  ];

  const socialItems = [
    { icon: <Code2 size={18} />, label: contact.github, href: "https://github.com/youcef1712" },
    { icon: <Globe size={18} />, label: contact.linkedin, href: "https://www.linkedin.com/in/youcef-bendra-006aa5314/" },
  ];

  return (
    <section id="contact" style={{ padding: "120px 24px", background: "var(--background)" }}>
      <div ref={ref} style={{ maxWidth: "900px", margin: "0 auto", opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(32px)", transition: "all 0.7s ease" }}>

        <div style={{ textAlign: "center", marginBottom: "64px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", justifyContent: "center", marginBottom: "16px" }}>
            <span style={{ width: "32px", height: "2px", background: "var(--accent)", display: "inline-block" }} />
            <span style={{ fontSize: "13px", fontWeight: 600, color: "var(--accent)", letterSpacing: "1.5px", textTransform: "uppercase" }}>{contact.tag}</span>
            <span style={{ width: "32px", height: "2px", background: "var(--accent)", display: "inline-block" }} />
          </div>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 42px)", fontWeight: 700, letterSpacing: "-1px", color: "var(--foreground)", marginBottom: "16px" }}>
            {contact.heading}<span style={{ color: "var(--accent)" }}>.</span>
          </h2>
          <p style={{ fontSize: "16px", color: "var(--foreground-muted)", maxWidth: "480px", margin: "0 auto", lineHeight: 1.7 }}>
            {contact.subheading}
          </p>
        </div>

        <div className="contact-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1.6fr", gap: "48px", alignItems: "start" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {infoItems.map((item) => (
              <div key={item.label}
                style={{ display: "flex", alignItems: "flex-start", gap: "16px", padding: "20px", borderRadius: "12px", border: "1px solid var(--border)", background: "var(--background-secondary)", transition: "all 0.2s ease" }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--accent)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--border)"; }}>
                <div style={{ width: "40px", height: "40px", borderRadius: "10px", background: "color-mix(in srgb, var(--accent) 12%, transparent)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--accent)", flexShrink: 0 }}>
                  {item.icon}
                </div>
                <div>
                  <div style={{ fontSize: "12px", color: "var(--foreground-muted)", marginBottom: "4px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.5px" }}>{item.label}</div>
                  <div style={{ fontSize: "14px", color: "var(--foreground-secondary)", fontWeight: 500 }}>{item.value}</div>
                </div>
              </div>
            ))}

            <div style={{ display: "flex", gap: "12px" }}>
              {socialItems.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
                  style={{ flex: 1, padding: "12px", borderRadius: "10px", border: "1px solid var(--border)", background: "var(--background-secondary)", color: "var(--foreground-muted)", textDecoration: "none", display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", fontSize: "14px", fontWeight: 500, transition: "all 0.2s ease" }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--accent)"; e.currentTarget.style.color = "var(--accent)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.color = "var(--foreground-muted)"; }}>
                  {s.icon}<span>{s.label}</span>
                </a>
              ))}
            </div>
          </div>

          <div style={{ padding: "36px", borderRadius: "16px", border: "1px solid var(--border)", background: "var(--background-secondary)" }}>
            {status === "sent" ? (
              <div style={{ textAlign: "center", padding: "40px 0" }}>
                <div style={{ width: "64px", height: "64px", borderRadius: "50%", background: "color-mix(in srgb, #22c55e 12%, transparent)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px", fontSize: "28px", color: "#22c55e" }}>✓</div>
                <h3 style={{ fontSize: "18px", fontWeight: 700, color: "var(--foreground)", marginBottom: "8px" }}>{contact.form.success_title}</h3>
                <p style={{ fontSize: "14px", color: "var(--foreground-muted)" }}>{contact.form.success_msg}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                <div className="form-row" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                  {[
                    { key: "name", label: contact.form.name, placeholder: contact.form.name_placeholder, type: "text" },
                    { key: "email", label: contact.form.email, placeholder: contact.form.email_placeholder, type: "email" },
                  ].map((field) => (
                    <div key={field.key}>
                      <label style={{ display: "block", fontSize: "13px", fontWeight: 600, color: "var(--foreground-secondary)", marginBottom: "6px" }}>{field.label}</label>
                      <input type={field.type} placeholder={field.placeholder} required
                        value={formState[field.key as "name" | "email"]}
                        onChange={(e) => setFormState({ ...formState, [field.key]: e.target.value })}
                        style={inputStyle}
                        onFocus={(e) => { e.target.style.borderColor = "var(--accent)"; }}
                        onBlur={(e) => { e.target.style.borderColor = "var(--border)"; }} />
                    </div>
                  ))}
                </div>

                <div>
                  <label style={{ display: "block", fontSize: "13px", fontWeight: 600, color: "var(--foreground-secondary)", marginBottom: "6px" }}>{contact.form.message}</label>
                  <textarea placeholder={contact.form.message_placeholder} required rows={5}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    style={{ ...inputStyle, resize: "vertical", minHeight: "120px" }}
                    onFocus={(e) => { e.target.style.borderColor = "var(--accent)"; }}
                    onBlur={(e) => { e.target.style.borderColor = "var(--border)"; }} />
                </div>

                <button type="submit" disabled={status === "sending"}
                  style={{ padding: "13px 24px", borderRadius: "10px", background: "var(--accent)", color: "#ffffff", border: "none", fontSize: "15px", fontWeight: 600, cursor: status === "sending" ? "not-allowed" : "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", transition: "all 0.2s ease", opacity: status === "sending" ? 0.7 : 1 }}
                  onMouseEnter={(e) => { if (status !== "sending") { e.currentTarget.style.background = "var(--accent-hover)"; e.currentTarget.style.transform = "translateY(-1px)"; } }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = "var(--accent)"; e.currentTarget.style.transform = "translateY(0)"; }}>
                  {status === "sending" ? (
                    <><div style={{ width: "16px", height: "16px", borderRadius: "50%", border: "2px solid rgba(255,255,255,0.3)", borderTopColor: "#fff", animation: "spin 0.6s linear infinite" }} />{contact.form.sending}</>
                  ) : (
                    <><Send size={16} />{contact.form.submit}</>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
