"use client";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";

export default function Navbar() {
  const { data: session, status } = useSession();
  const loading = status === "loading";
  const isAuthenticated = !!session;

  // ตรวจสอบสิทธิ์จากฟิลด์ role ใน session โดยตรง
  const isAdmin = (session?.user as any)?.role === "ADMIN";

  return (
    <header className="site-header" style={headerWrapper}>
      <nav className="nav" style={navWrapper}>
        <Link className="brand" href="/" style={brandStyle}>Office Syndrome Tracker</Link>

        <div className="spacer" style={{ flex: 1 }} />
        
        {/* กลุ่มเมนูหลัก: ตรวจสอบสถานะก่อนให้กด */}
        <div style={menuGroup}>
          {isAuthenticated ? (
            <>
              <Link className="nav-link" href="/records" style={globalNavLink}>Records</Link>
              <Link className="nav-link" href="/dashboard" style={globalNavLink}>Dashboard</Link>
              <Link className="nav-link" href="/exercises" style={globalNavLink}>Exercises</Link>
              
              {/* โชว์ปุ่ม Admin Panel เฉพาะผู้ที่มีสิทธิ์ระดับ ADMIN เท่านั้น */}
              {isAdmin && (
                <Link className="nav-link" href="/admin" style={adminNavLinkStyle}>Admin Panel</Link>
              )}
            </>
          ) : (
            <>
              {/* แสดงผลแบบ Disabled เมื่อยังไม่ได้ Login */}
              <span style={disabledNavLink} title="กรุณา Login เพื่อใช้งานส่วนนี้">Records</span>
              <span style={disabledNavLink} title="กรุณา Login เพื่อใช้งานส่วนนี้">Dashboard</span>
              <span style={disabledNavLink} title="กรุณา Login เพื่อใช้งานส่วนนี้">Exercises</span>
            </>
          )}
        </div>

        <div style={userSection}>
          {loading ? (
            <span style={globalNavLink}>Loading...</span>
          ) : session ? (
            <div style={profileActionGroup}>
              <div style={profileDisplayOnly}>
                <div style={avatarWrapper}>
                  {session.user?.image ? (
                    <img src={session.user.image} alt="Profile" style={avatarImage} />
                  ) : (
                    <div style={avatarFallback}>{session.user?.name?.[0] || "U"}</div>
                  )}
                </div>
                <span style={userNameText}>
                  {session.user?.name}
                </span>
              </div>

              <button 
                className="btn" 
                onClick={() => signOut({ callbackUrl: "/" })} 
                style={logoutBtnStyle}
              >
                Logout
              </button>
            </div>
          ) : (
            <button className="btn" onClick={() => signIn()} style={logoutBtnStyle}>
              Login
            </button>
          )}
        </div>
      </nav>

      <style>{`
        .nav-link { 
          text-decoration: none !important; 
          transition: all 0.2s ease;
        }
        .nav-link:hover { color: #0ea5e9 !important; }
        .btn { transition: all 0.2s ease; border: none; cursor: pointer; }
        .btn:hover { transform: translateY(-1px); filter: brightness(1.1); }
      `}</style>
    </header>
  );
}

// โครงสร้างสไตล์การแสดงผล
const headerWrapper = {
  background: '#ffffff',
  borderBottom: '1px solid #f1f5f9',
  boxShadow: '0 2px 10px rgba(0,0,0,0.02)',
  position: 'sticky' as const,
  top: 0,
  zIndex: 1000
};

const navWrapper = { 
  display: 'flex', 
  alignItems: 'center', 
  height: '85px', 
  maxWidth: '1300px',
  margin: '0 auto',
  padding: '0 30px' 
};

const brandStyle = {
  fontSize: '22px', 
  fontWeight: '900',
  color: '#0f172a',
  textDecoration: 'none',
  letterSpacing: '-0.5px'
};

const menuGroup = { 
  display: 'flex', 
  gap: '35px', 
  alignItems: 'center' 
};

const globalNavLink = {
  fontSize: '16px', 
  fontWeight: '600',
  color: '#475569',
  textDecoration: 'none',
  cursor: 'pointer'
};

const adminNavLinkStyle = {
  fontSize: '15px', 
  fontWeight: '800',
  color: '#ffffff',
  background: '#0f172a', 
  padding: '8px 16px',
  borderRadius: '10px',
  textDecoration: 'none',
  cursor: 'pointer',
  boxShadow: '0 4px 10px rgba(15, 23, 42, 0.15)'
};

const disabledNavLink = {
  fontSize: '16px', 
  fontWeight: '600',
  color: '#cbd5e1', 
  textDecoration: 'none',
  cursor: 'not-allowed', 
  userSelect: 'none' as const
};

const userSection = { 
  display: 'flex', 
  alignItems: 'center', 
  marginLeft: '40px' 
};

const profileActionGroup = { 
  display: 'flex', 
  alignItems: 'center', 
  gap: '24px' 
};

const profileDisplayOnly = { 
  display: 'flex', 
  alignItems: 'center', 
  gap: '14px', 
  padding: '8px 18px',
  borderRadius: '15px',
  background: '#f8fafc',
  border: '1px solid #e2e8f0',
  cursor: 'default',
  userSelect: 'none' as const
};

const userNameText = { 
  fontSize: '16px', 
  fontWeight: '700', 
  color: '#1e293b'
};

const avatarWrapper = { 
  width: '40px', 
  height: '40px', 
  borderRadius: '50%', 
  overflow: 'hidden', 
  background: '#0ea5e9',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: '2px solid #fff',
  boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
};

const avatarImage = { width: '100%', height: '100%', objectFit: 'cover' as const };
const avatarFallback = { color: '#ffffff', fontWeight: '800', fontSize: '18px' };

const logoutBtnStyle = {
  padding: '12px 28px', 
  fontSize: '15px',     
  fontWeight: '700',
  borderRadius: '12px',
  backgroundColor: '#0ea5e9',
  color: '#ffffff',
  boxShadow: '0 4px 12px rgba(14, 165, 233, 0.25)'
};