"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Modal from "../components/Modal";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [modal, setModal] = useState({ isOpen: false, message: '', type: 'success' as 'success' | 'error' });
  const router = useRouter();

  const isPasswordValid = password.length >= 8;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isPasswordValid) return;

    const res = await fetch("/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, user, email, password, jobTitle })
    });

    if (res.ok) {
      setModal({ isOpen: true, message: 'สร้างบัญชีผู้ใช้งานสำเร็จแล้ว', type: 'success' });
    } else {
      const data = await res.json();
      setModal({ isOpen: true, message: data.error, type: 'error' });
    }
  };

  return (
    <main style={mainStyle}>
      <section style={cardStyle}>
        <h1 style={{ fontSize: '28px', color: '#1e293b', marginBottom: '32px' }}>สมัครสมาชิก</h1>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px', textAlign: 'left' }}>
          <input type="text" placeholder="ชื่อ-นามสกุล" style={inputStyle} value={name} onChange={(e) => setName(e.target.value)} required />
          <input type="email" placeholder="อีเมลส่วนตัว" style={inputStyle} value={email} onChange={(e) => setEmail(e.target.value)} required />
          <input type="text" placeholder="ตำแหน่งงาน" style={inputStyle} value={jobTitle} onChange={(e) => setJobTitle(e.target.value)} />
          <hr style={{ border: '0.5px solid #f1f5f9' }} />
          <input type="text" placeholder="User" style={{ ...inputStyle, background: '#f8fafc' }} value={user} onChange={(e) => setUser(e.target.value)} required />
          
          {/* ส่วนจัดการรหัสผ่านและข้อความแจ้งเตือน */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <div style={{ position: 'relative' }}>
              <input 
                type={showPassword ? "text" : "password"} 
                placeholder="รหัสผ่าน (8 ตัวขึ้นไป)" 
                style={{ ...inputStyle, background: '#f8fafc', border: `1px solid ${password.length > 0 && !isPasswordValid ? '#ef4444' : '#e2e8f0'}` }}
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                required 
              />
              <button type="button" onClick={() => setShowPassword(!showPassword)} style={eyeStyle}>
                {showPassword ? <EyeIcon /> : <EyeOffIcon />}
              </button>
            </div>
            {/* แสดงข้อความเตือนเมื่อผู้ใช้พิมพ์รหัสผ่านแต่น้อยกว่า 8 ตัว */}
            {password.length > 0 && !isPasswordValid && (
              <span style={{ fontSize: '12px', color: '#ef4444', fontWeight: '600', marginLeft: '4px' }}>
                * รหัสผ่านต้องมีความยาวอย่างน้อย 8 ตัวอักษร
              </span>
            )}
          </div>

          <button type="submit" disabled={!isPasswordValid && password.length > 0} style={{ ...btnStyle, background: isPasswordValid ? '#0ea5e9' : '#cbd5e1' }}>ลงทะเบียน</button>
        </form>
        <p style={{ marginTop: '20px', fontSize: '14px' }}>มีบัญชีอยู่แล้ว? <Link href="/login" style={{ color: '#0ea5e9', fontWeight: '600' }}>เข้าสู่ระบบ</Link></p>
        <Modal isOpen={modal.isOpen} message={modal.message} type={modal.type} onClose={() => { setModal({ ...modal, isOpen: false }); if (modal.type === 'success') router.push("/login"); }} />
      </section>
    </main>
  );
}

// สไตล์และไอคอน SVG
const mainStyle = { minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f0f9ff' };
const cardStyle = { width: '450px', padding: '40px', borderRadius: '24px', background: '#fff', boxShadow: '0 10px 25px rgba(0,0,0,0.05)', textAlign: 'center' as const };
const inputStyle = { width: '100%', padding: '14px', borderRadius: '12px', border: '1px solid #e2e8f0', outline: 'none', transition: 'border-color 0.2s' };
const btnStyle = { width: '100%', padding: '16px', borderRadius: '12px', color: '#fff', fontWeight: '600', border: 'none', marginTop: '10px', cursor: 'pointer', transition: 'background-color 0.2s' };
const eyeStyle = { position: 'absolute' as const, right: '15px', top: '15px', background: 'none', border: 'none', cursor: 'pointer', color: '#64748b' };
const EyeIcon = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>;
const EyeOffIcon = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/></svg>;