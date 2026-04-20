"use client";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function LoginPage() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = await signIn("credentials", {
      user,
      password,
      redirect: false,
    });

    if (result?.ok) {
      router.push("/dashboard");
      router.refresh();
    } else {
      alert("ชื่อผู้ใช้งานหรือรหัสผ่านไม่ถูกต้อง");
    }
  };

  return (
    <main style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f0f9ff' }}>
      <section className="card" style={{ width: '100%', maxWidth: '450px', padding: '40px', textAlign: 'center', borderRadius: '20px', boxShadow: '0 10px 25px rgba(0,0,0,0.05)' }}>
        <h1 style={{ fontSize: '32px', color: '#1e293b', marginBottom: '10px' }}>เข้าสู่ระบบ </h1>
        <div style={{ fontSize: '40px', marginBottom: '20px' }}>🔐</div>
        <p style={{ color: '#64748b', marginBottom: '30px', lineHeight: '1.6' }}>
          จัดการข้อมูลสุขภาพของคุณอย่างปลอดภัยและเป็นระบบ
        </p>

        <form onSubmit={handleSubmit} style={{ textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div>
            <label style={{ display: 'block', fontWeight: '600', marginBottom: '8px', color: '#334155' }}>ชื่อผู้ใช้งาน (User)</label>
            <input 
              type="text" 
              placeholder="กรอกชื่อผู้ใช้งาน"
              style={{ width: '100%', padding: '12px 15px', borderRadius: '12px', border: '1px solid #e2e8f0', background: '#f8fafc' }}
              value={user} 
              onChange={(e) => setUser(e.target.value)} 
              required 
            />
          </div>

          <div>
            <label style={{ display: 'block', fontWeight: '600', marginBottom: '8px', color: '#334155' }}>รหัสผ่าน (Password)</label>
            <input 
              type="password" 
              placeholder="••••••••"
              style={{ width: '100%', padding: '12px 15px', borderRadius: '12px', border: '1px solid #e2e8f0', background: '#f8fafc' }}
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              required 
            />
          </div>

          <button type="submit" className="btn" style={{ width: '100%', padding: '14px', borderRadius: '12px', background: '#0ea5e9', color: 'white', fontWeight: '600', fontSize: '16px', border: 'none', cursor: 'pointer', marginTop: '10px' }}>
            เข้าสู่ระบบ
          </button>
        </form>

        <footer style={{ marginTop: '30px', borderTop: '1px solid #f1f5f9', paddingTop: '20px' }}>
          <p style={{ fontSize: '14px', color: '#64748b' }}>
            ยังไม่มีบัญชีผู้ใช้งานใช่หรือไม่? <Link href="/register" style={{ color: '#0ea5e9', fontWeight: '600', textDecoration: 'none' }}>สร้างบัญชีผู้ใช้งานใหม่</Link>
          </p>
        </footer>
      </section>
    </main>
  );
}