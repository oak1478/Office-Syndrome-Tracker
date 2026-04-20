"use client";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const { data: session } = useSession();
  const router = useRouter();

  // ฟังก์ชันตรวจสอบสิทธิ์การเข้าถึงหน้าประวัติสุขภาพ
  const handleProtectedAction = (e: React.MouseEvent<HTMLAnchorElement>, targetPath: string) => {
    if (!session) {
      e.preventDefault();
      router.push("/login");
    }
  };

  return (
    <section className="container" style={sectionStyle}>
      <div className="card" style={cardStyle}>
        <h1 style={titleStyle}>Office Syndrome Tracker</h1>
        <p style={subtitleStyle}>
          ระบบติดตามและวิเคราะห์สุขภาพสำหรับสาย Tech เพื่อการทำงานอย่างยั่งยืน ไร้อาการปวดหลัง
        </p>
        
        <div style={actionGroupStyle}>
          {/* ปุ่มที่ถูกป้องกันด้วยฟังก์ชันตรวจสอบสิทธิ์ */}
          <Link 
            href="/records" 
            className="btn" 
            style={primaryBtnStyle}
            onClick={(e) => handleProtectedAction(e, "/records")}
          >
            ดูประวัติสุขภาพของคุณ
          </Link>

          {/* ปุ่มสำหรับเช็กอินอาการ สามารถตั้งค่าให้ล็อกด้วยวิธีเดียวกันได้ */}
          <Link 
            href="/records/new" 
            className="btn" 
            style={successBtnStyle}
            onClick={(e) => handleProtectedAction(e, "/records/new")}
          >
            เช็กอินอาการวันนี้
          </Link>
        </div>
      </div>
    </section>
  );
}

// การประกาศรูปแบบการแสดงผล
const sectionStyle = {
  textAlign: 'center' as const,
  marginTop: '60px'
};

const cardStyle = {
  padding: '50px',
  background: 'rgba(255, 255, 255, 0.9)'
};

const titleStyle = {
  fontSize: '3rem',
  marginBottom: '20px'
};

const subtitleStyle = {
  fontSize: '1.2rem',
  color: '#64748b',
  marginBottom: '40px'
};

const actionGroupStyle = {
  display: 'flex',
  gap: '20px',
  justifyContent: 'center'
};

const primaryBtnStyle = {
  padding: '15px 30px',
  fontSize: '1.1rem'
};

const successBtnStyle = {
  background: '#10b981',
  padding: '15px 30px',
  fontSize: '1.1rem'
};