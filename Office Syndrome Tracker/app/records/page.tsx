"use client";
import { useState, useEffect, useCallback, useMemo } from "react";
import { useSession } from "next-auth/react";
import Link from "next/link";

interface HealthRecord {
  id: string;
  date?: string; 
  createdAt?: string; 
  neckPain: boolean;
  backPain: boolean;
  eyeStrain: boolean;
  wristPain: boolean;
  headache: boolean;
  fingerNumbness: boolean;
  legNumbness: boolean;
  tookBreaks: boolean;
  stressLevel: number;
  note?: string;
}

export default function RecordsPage() {
  const { status } = useSession();
  const [allRecords, setAllRecords] = useState<HealthRecord[]>([]);
  const [loading, setLoading] = useState(true);
  
  // สถานะสำหรับการเลือกเดือนและปี (Default เป็นเดือนปัจจุบัน)
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());

  const fetchRecords = useCallback(async () => {
    try {
      setLoading(true);
      const res = await fetch("/api/records", { cache: 'no-store' });
      if (res.ok) {
        const data = await res.json();
        setAllRecords(data);
      }
    } catch (error) {
      console.error("Fetch Error:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (status === "authenticated") fetchRecords();
  }, [status, fetchRecords]);

  /**
   * Logic: สร้างรายการเดือนและปีที่มีข้อมูลจริง เพื่อแสดงใน Dropdown
   */
  const availableOptions = useMemo(() => {
    const options: { month: number; year: number; label: string }[] = [];
    const seen = new Set();
    const monthNames = ["มกราคม", "กุมภาพันธ์", "มีนาคม", "เมษายน", "พฤษภาคม", "มิถุนายน", "กรกฎาคม", "สิงหาคม", "กันยายน", "ตุลาคม", "พฤศจิกายน", "ธันวาคม"];

    // เพิ่มเดือนปัจจุบันไว้เป็นตัวเลือกหลักเสมอ
    const curM = new Date().getMonth();
    const curY = new Date().getFullYear();
    options.push({ month: curM, year: curY, label: `${monthNames[curM]} ${curY + 543}` });
    seen.add(`${curM}-${curY}`);

    // วนลูปเช็คจากข้อมูลที่มีทั้งหมด
    allRecords.forEach(rec => {
      const d = new Date(rec.date || rec.createdAt || "");
      const m = d.getMonth();
      const y = d.getFullYear();
      const key = `${m}-${y}`;
      if (!seen.has(key)) {
        seen.add(key);
        options.push({ month: m, year: y, label: `${monthNames[m]} ${y + 543}` });
      }
    });

    // เรียงจากใหม่ไปเก่า
    return options.sort((a, b) => (b.year * 12 + b.month) - (a.year * 12 + a.month));
  }, [allRecords]);

  // กรองข้อมูลเพื่อแสดงผลเฉพาะเดือนที่เลือก
  const filteredRecords = useMemo(() => {
    return allRecords.filter((record) => {
      const recDate = new Date(record.date || record.createdAt || "");
      return recDate.getMonth() === selectedMonth && recDate.getFullYear() === selectedYear;
    });
  }, [allRecords, selectedMonth, selectedYear]);

  if (status === "loading" || loading) return <div style={centerStyle}>กำลังตรวจสอบข้อมูลบันทึกสุขภาพ...</div>;

  return (
    <main style={containerStyle}>
      <header style={headerStyle}>
        <div>
          <h1 style={titleStyle}>ประวัติสุขภาพรายวัน</h1>
          <p style={subtitleStyle}>การแสดงผลบันทึกข้อมูลย้อนหลังแยกตามรายเดือน</p>
        </div>
        
        <div style={headerActionStyle}>
          {/* ตัวเลือกเดือนที่มีข้อมูลจริง */}
          <select 
            value={`${selectedMonth}-${selectedYear}`} 
            onChange={(e) => {
              const [m, y] = e.target.value.split("-");
              setSelectedMonth(Number(m));
              setSelectedYear(Number(y));
            }} 
            style={selectStyle}
          >
            {availableOptions.map((opt, i) => (
              <option key={i} value={`${opt.month}-${opt.year}`}>{opt.label}</option>
            ))}
          </select>
          <Link href="/records/new" style={addButtonStyle}>เพิ่มบันทึกใหม่</Link>
        </div>
      </header>

      {filteredRecords.length === 0 ? (
        <section style={emptyStateStyle}>
          <h2 style={{ fontSize: '20px', color: '#1e293b', margin: 0 }}>ไม่พบรายการบันทึกในรอบเดือนนี้</h2>
          <p style={{ color: '#64748b', fontSize: '16px', marginTop: '8px' }}>ท่านสามารถเริ่มต้นการบันทึกใหม่เพื่อวิเคราะห์สภาวะร่างกาย</p>
        </section>
      ) : (
        <div style={gridStyle}>
          {filteredRecords.map((record) => {
            const rawDate = record.date || record.createdAt;
            const formattedDate = rawDate && !isNaN(Date.parse(rawDate))
              ? new Date(rawDate).toLocaleDateString('th-TH', { day: 'numeric', month: 'long' })
              : "ไม่ระบุวันที่";

            return (
              <article key={record.id} style={cardStyle}>
                <div style={cardTopStyle}>
                  <span style={dateStyle}>{formattedDate}</span>
                  <div style={statusTagStyle}>ความเหนื่อยล้า: {record.stressLevel}/5</div>
                </div>
                
                <div style={tagContainerStyle}>
                  {record.neckPain && <span style={tagStyle}>ปวดคอ/บ่า</span>}
                  {record.backPain && <span style={tagStyle}>ปวดหลัง</span>}
                  {record.eyeStrain && <span style={tagStyle}>ปวดตา</span>}
                  {record.wristPain && <span style={tagStyle}>ปวดข้อมือ</span>}
                  {record.headache && <span style={tagStyle}>ปวดหัว</span>}
                  {record.fingerNumbness && <span style={tagStyle}>ชาปลายนิ้ว</span>}
                  {record.legNumbness && <span style={tagStyle}>ชาที่ขา</span>}
                  {record.tookBreaks && <span style={positiveTagStyle}>ยืดเหยียดแล้ว</span>}
                </div>

                {record.note && (
                  <div style={noteContainerStyle}>
                    <p style={noteTextStyle}>{record.note}</p>
                  </div>
                )}

                <div style={actionAreaStyle}>
                  <Link href={`/records/${record.id}/edit`} style={editBtnStyle}>แก้ไขข้อมูล</Link>
                </div>
              </article>
            );
          })}
        </div>
      )}
    </main>
  );
}

// --- Enterprise Visual Configurations ---
const containerStyle = { maxWidth: '1200px', margin: '0 auto', padding: '60px 24px' };
const headerStyle = { display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '40px', flexWrap: 'wrap' as const, gap: '20px' };
const titleStyle = { fontSize: '28px', fontWeight: '800', color: '#0f172a', margin: 0 };
const subtitleStyle = { color: '#64748b', fontSize: '16px', marginTop: '4px' };
const headerActionStyle = { display: 'flex', gap: '12px', alignItems: 'center' };

const selectStyle = { padding: '10px 16px', borderRadius: '12px', border: '1px solid #e2e8f0', background: '#fff', fontSize: '14px', fontWeight: '700', color: '#334155', cursor: 'pointer', outline: 'none' };
const addButtonStyle = { padding: '10px 20px', background: '#0ea5e9', color: '#fff', borderRadius: '10px', fontWeight: '700', textDecoration: 'none', fontSize: '14px' };

const gridStyle = { display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '24px' };
const cardStyle = { background: '#ffffff', padding: '28px', borderRadius: '20px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)', border: '1px solid #f1f5f9', display: 'flex', flexDirection: 'column' as const };

const cardTopStyle = { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' };
const dateStyle = { fontSize: '20px', fontWeight: '800', color: '#0f172a' };
const statusTagStyle = { fontSize: '12px', fontWeight: '700', color: '#0ea5e9', background: '#f0f9ff', padding: '6px 12px', borderRadius: '8px' };

const tagContainerStyle = { display: 'flex', flexWrap: 'wrap' as const, gap: '8px', marginBottom: '20px' };
const tagStyle = { padding: '5px 10px', background: '#f8fafc', borderRadius: '8px', fontSize: '13px', fontWeight: '600', color: '#475569', border: '1px solid #e2e8f0' };
const positiveTagStyle = { padding: '5px 10px', background: '#f0fdf4', borderRadius: '8px', fontSize: '13px', fontWeight: '700', color: '#166534', border: '1px solid #bbf7d0' };

const noteContainerStyle = { background: '#f8fafc', padding: '16px', borderRadius: '12px', marginBottom: '20px', borderLeft: '4px solid #cbd5e1' };
const noteTextStyle = { margin: 0, color: '#475569', fontSize: '14px', lineHeight: '1.5', fontStyle: 'italic' };

const actionAreaStyle = { borderTop: '1px solid #f1f5f9', paddingTop: '16px', textAlign: 'right' as const, marginTop: 'auto' };
const editBtnStyle = { color: '#0ea5e9', fontWeight: '700', textDecoration: 'none', fontSize: '14px' };
const centerStyle = { textAlign: 'center' as const, marginTop: '100px', color: '#64748b' };
const emptyStateStyle = { textAlign: 'center' as const, padding: '80px', background: '#ffffff', borderRadius: '24px', border: '1px solid #e2e8f0' };