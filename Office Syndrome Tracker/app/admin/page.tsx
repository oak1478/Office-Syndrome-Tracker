import { getServerSession } from "next-auth";
import { authOptions } from "../lib/auth"; 
import {prisma} from "../lib/prisma"; 
import { redirect } from "next/navigation";
import RoleSelect from "./RoleSelect"; // 👈 ดึง Component ปุ่มเปลี่ยนสิทธิ์มาใช้

export default async function AdminDashboard() {
  const session = await getServerSession(authOptions);

  // 👑 เปลี่ยนมาเช็กจากระดับสิทธิ์ (Role) แทนการฟิกซ์อีเมล
  if (!session || (session.user as any)?.role !== "ADMIN") {
    redirect("/");
  }

  // ดึงข้อมูลสถิติ
  const totalUsers = await prisma.user.count();
  const totalRecords = await prisma.healthRecord.count();

  // ดึงข้อมูลผู้ใช้งานทั้งหมดมาแสดงในตาราง (เพิ่มการดึงฟิลด์ role)
  const users = await prisma.user.findMany({
    orderBy: { createdAt: 'desc' },
    select: {
      id: true,
      name: true,
      user: true,
      email: true,
      role: true, // 👈 ดึงฟิลด์ role ออกมาจากฐานข้อมูล
      createdAt: true,
    }
  });

  return (
    <main style={mainStyle}>
      <header style={headerStyle}>
        <h1 style={titleStyle}>ระบบจัดการสำหรับผู้ดูแลระบบ</h1>
        <p style={subtitleStyle}>จัดการข้อมูลและกำหนดสิทธิ์ผู้ใช้งานในระบบ Office Syndrome Tracker</p>
      </header>

      {/* ส่วนแสดงสถิติ */}
      <div style={gridStyle}>
        <div style={statCardStyle}>
          <h2 style={statTitleStyle}>จำนวนผู้ใช้งานทั้งหมด</h2>
          <p style={statValueStyle}>{totalUsers} <span style={statUnitStyle}>บัญชี</span></p>
        </div>
        <div style={statCardStyle}>
          <h2 style={statTitleStyle}>ประวัติสุขภาพในระบบ</h2>
          <p style={statValueStyle}>{totalRecords} <span style={statUnitStyle}>รายการ</span></p>
        </div>
      </div>

      {/* ส่วนแสดงตารางรายชื่อผู้ใช้งาน */}
      <section style={tableSectionStyle}>
        <h2 style={sectionTitleStyle}>รายชื่อผู้ใช้งานระบบ</h2>
        <div style={tableContainerStyle}>
          <table style={tableStyle}>
            <thead>
              <tr style={tableHeaderRowStyle}>
                <th style={tableHeaderStyle}>ชื่อ-นามสกุล</th>
                <th style={tableHeaderStyle}>Username</th>
                <th style={tableHeaderStyle}>อีเมล</th>
                <th style={tableHeaderStyle}>ระดับสิทธิ์</th> {/* 👈 เปลี่ยนหัวข้อตาราง */}
                <th style={tableHeaderStyle}>วันที่สมัคร</th>
              </tr>
            </thead>
            <tbody>
              {users.map((u) => (
                <tr key={u.id} style={tableRowStyle}>
                  <td style={tableCellStyle}>{u.name || "-"}</td>
                  <td style={tableCellStyle}>
                    <span style={userBadgeStyle}>{u.user}</span>
                  </td>
                  <td style={tableCellStyle}>{u.email}</td>
                  
                  {/* 👈 เรียกใช้ปุ่มเปลี่ยนสิทธิ์ตรงนี้เลยค่ะ */}
                  <td style={tableCellStyle}>
                    <RoleSelect userId={u.id} currentRole={u.role} />
                  </td>

                  <td style={tableCellStyle}>
                    {new Intl.DateTimeFormat('th-TH', { 
                      dateStyle: 'medium', 
                      timeStyle: 'short' 
                    }).format(u.createdAt)}
                  </td>
                </tr>
              ))}
              {users.length === 0 && (
                <tr>
                  <td colSpan={5} style={emptyTableStyle}>ยังไม่มีผู้ใช้งานในระบบ</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}

// --- Enterprise Style Definitions ---
const mainStyle = { padding: '60px 20px', maxWidth: '1200px', margin: '0 auto' };
const headerStyle = { marginBottom: '40px', textAlign: 'center' as const };
const titleStyle = { fontSize: '28px', fontWeight: '900', color: '#0f172a' };
const subtitleStyle = { fontSize: '16px', color: '#64748b', marginTop: '8px' };
const gridStyle = { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px', marginBottom: '40px' };
const statCardStyle = { background: '#fff', padding: '32px', borderRadius: '24px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)', border: '1px solid #e2e8f0', textAlign: 'center' as const };
const statTitleStyle = { fontSize: '18px', fontWeight: '700', color: '#475569', marginBottom: '16px' };
const statValueStyle = { fontSize: '48px', fontWeight: '900', color: '#0ea5e9' };
const statUnitStyle = { fontSize: '16px', fontWeight: '600', color: '#94a3b8' };
const tableSectionStyle = { background: '#fff', padding: '32px', borderRadius: '24px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)', border: '1px solid #e2e8f0' };
const sectionTitleStyle = { fontSize: '20px', fontWeight: '800', color: '#1e293b', marginBottom: '24px' };
const tableContainerStyle = { overflowX: 'auto' as const };
const tableStyle = { width: '100%', borderCollapse: 'collapse' as const, textAlign: 'left' as const };
const tableHeaderRowStyle = { background: '#f8fafc', borderBottom: '2px solid #e2e8f0' };
const tableHeaderStyle = { padding: '16px', fontSize: '14px', fontWeight: '700', color: '#475569' };
const tableRowStyle = { borderBottom: '1px solid #f1f5f9', transition: 'background 0.2s' };
const tableCellStyle = { padding: '16px', fontSize: '15px', color: '#334155' };
const userBadgeStyle = { background: '#e0f2fe', color: '#0369a1', padding: '4px 10px', borderRadius: '8px', fontSize: '13px', fontWeight: '700' };
const emptyTableStyle = { padding: '32px', textAlign: 'center' as const, color: '#94a3b8', fontSize: '15px' };