module.exports = [
"[project]/app/icon.png.mjs { IMAGE => \"[project]/app/icon.png (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/icon.png.mjs { IMAGE => \"[project]/app/icon.png (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript)"));
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/app/template.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/template.tsx [app-rsc] (ecmascript)"));
}),
"[project]/app/admin/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

// import { getServerSession } from "next-auth";
// import { authOptions } from "../api/auth/[...nextauth]/route";
// import  prisma from "../lib/prisma"; 
// import { redirect } from "next/navigation";
// export default async function AdminDashboard() {
//   const session = await getServerSession(authOptions);
//   // กำหนดอีเมลของ Admin 
//   const ADMIN_EMAIL = "admin@meditap.com";
//   // ตรวจสอบสิทธิ์การเข้าถึงระดับ Admin
//   if (!session || session.user?.email !== ADMIN_EMAIL) {
//     redirect("/");
//   }
//   // ดึงข้อมูลสถิติจากฐานข้อมูล
//   const totalUsers = await prisma.user.count();
//   const totalRecords = await prisma.healthRecord.count();
//   return (
//     <main style={mainStyle}>
//       <header style={headerStyle}>
//         <h1 style={titleStyle}>ระบบจัดการสำหรับผู้ดูแลระบบ (Admin Panel)</h1>
//         <p style={subtitleStyle}>ภาพรวมข้อมูลผู้ใช้งานระบบ Office Syndrome Tracker</p>
//       </header>
//       <div style={gridStyle}>
//         {/* กล่องแสดงจำนวนผู้ใช้งาน */}
//         <div style={statCardStyle}>
//           <h2 style={statTitleStyle}>จำนวนผู้ใช้งานทั้งหมด</h2>
//           <p style={statValueStyle}>{totalUsers} <span style={statUnitStyle}>บัญชี</span></p>
//         </div>
//         {/* กล่องแสดงจำนวนประวัติที่ถูกบันทึก */}
//         <div style={statCardStyle}>
//           <h2 style={statTitleStyle}>ประวัติสุขภาพในระบบ</h2>
//           <p style={statValueStyle}>{totalRecords} <span style={statUnitStyle}>รายการ</span></p>
//         </div>
//       </div>
//     </main>
//   );
// }
// // รูปแบบการแสดงผลสำหรับหน้า Admin
// const mainStyle = { padding: '60px 20px', maxWidth: '1000px', margin: '0 auto' };
// const headerStyle = { marginBottom: '40px', textAlign: 'center' as const };
// const titleStyle = { fontSize: '28px', fontWeight: '900', color: '#0f172a' };
// const subtitleStyle = { fontSize: '16px', color: '#64748b', marginTop: '8px' };
// const gridStyle = { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' };
// const statCardStyle = { 
//   background: '#fff', 
//   padding: '32px', 
//   borderRadius: '24px', 
//   boxShadow: '0 10px 25px rgba(0,0,0,0.05)',
//   border: '1px solid #f1f5f9',
//   textAlign: 'center' as const
// };
// const statTitleStyle = { fontSize: '18px', fontWeight: '700', color: '#475569', marginBottom: '16px' };
// const statValueStyle = { fontSize: '48px', fontWeight: '900', color: '#0ea5e9' };
// const statUnitStyle = { fontSize: '16px', fontWeight: '600', color: '#94a3b8' };
}),
"[project]/app/admin/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/admin/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__072445d5._.js.map