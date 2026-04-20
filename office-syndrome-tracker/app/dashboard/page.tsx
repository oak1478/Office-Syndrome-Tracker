"use client";

import { useState, useEffect, useMemo, useRef } from "react";
import { useSession } from "next-auth/react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import SymptomsPieChart from "../components/SymptomsPieChart";
import HealthMonitor from "../components/HealthMonitor";
import SmartNotifier from "../components/SmartNotifier";

export default function DashboardPage() {
  const { data: session, status } = useSession();
  const [allRecords, setAllRecords] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [isExporting, setIsExporting] = useState(false);
  
  // อ้างอิงพื้นที่สำหรับถ่ายภาพทำ PDF
  const reportRef = useRef<HTMLDivElement>(null);

  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());

  useEffect(() => {
    async function loadData() {
      if (status === "authenticated") {
        try {
          const res = await fetch("/api/records");
          if (res.ok) {
            const data = await res.json();
            setAllRecords(data);
          }
        } catch (error) {
          console.error("Data Fetching Error:", error);
        } finally {
          setLoading(false);
        }
      }
    }
    loadData();
  }, [status]);

  // Logic สรุปเดือนที่มีข้อมูล (เหมือนเดิม)
  const monthNames = ["มกราคม", "กุมภาพันธ์", "มีนาคม", "เมษายน", "พฤษภาคม", "มิถุนายน", "กรกฎาคม", "สิงหาคม", "กันยายน", "ตุลาคม", "พฤศจิกายน", "ธันวาคม"];
  
  const availableOptions = useMemo(() => {
    const options: { month: number; year: number; label: string }[] = [];
    const seen = new Set();
    const curM = new Date().getMonth();
    const curY = new Date().getFullYear();
    options.push({ month: curM, year: curY, label: `${monthNames[curM]} ${curY + 543}` });
    seen.add(`${curM}-${curY}`);

    allRecords.forEach(rec => {
      const d = new Date(rec.date || rec.createdAt);
      const m = d.getMonth();
      const y = d.getFullYear();
      if (!seen.has(`${m}-${y}`)) {
        seen.add(`${m}-${y}`);
        options.push({ month: m, year: y, label: `${monthNames[m]} ${y + 543}` });
      }
    });
    return options.sort((a, b) => (b.year * 12 + b.month) - (a.year * 12 + a.month));
  }, [allRecords]);

  const filteredRecords = useMemo(() => {
    return allRecords.filter((rec) => {
      const date = new Date(rec.date || rec.createdAt);
      return date.getMonth() === selectedMonth && date.getFullYear() === selectedYear;
    });
  }, [allRecords, selectedMonth, selectedYear]);

  // สรุปสถิติ
  const totalRecords = filteredRecords.length;
  const symptomData = [
    { label: "ปวดคอ/บ่า", count: filteredRecords.filter(r => r.neckPain).length },
    { label: "ปวดหลัง", count: filteredRecords.filter(r => r.backPain).length },
    { label: "ปวดตา", count: filteredRecords.filter(r => r.eyeStrain).length },
    { label: "ปวดข้อมือ", count: filteredRecords.filter(r => r.wristPain).length },
    { label: "ปวดหัว", count: filteredRecords.filter(r => r.headache).length },
    { label: "ชาปลายนิ้ว", count: filteredRecords.filter(r => r.fingerNumbness).length },
    { label: "ชาที่ขา", count: filteredRecords.filter(r => r.legNumbness).length },
  ];

  const stressAvg = totalRecords > 0 ? (filteredRecords.reduce((acc, curr) => acc + curr.stressLevel, 0) / totalRecords).toFixed(1) : "0.0";
  const breakRatio = totalRecords > 0 ? filteredRecords.filter(r => r.tookBreaks).length / totalRecords : 0;
  const topSymptom = [...symptomData].sort((a, b) => b.count - a.count)[0];

  // ฟังก์ชันส่งออก PDF
  const handleExportPDF = async () => {
    if (!reportRef.current) return;
    setIsExporting(true);
    try {
      const canvas = await html2canvas(reportRef.current, { scale: 2, useCORS: true });
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
      
      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.save(`Medi-Tap_Report_${monthNames[selectedMonth]}_${selectedYear + 543}.pdf`);
    } catch (error) {
      console.error("PDF Export Error:", error);
    } finally {
      setIsExporting(false);
    }
  };

  if (status === "loading" || loading) return <div style={centerStyle}>กำลังดึงข้อมูลระบบสุขภาพ...</div>;

  return (
    <main style={containerStyle}>
      <SmartNotifier />

      <header style={headerStyle}>
        <div>
          <h1 style={titleStyle}>วิเคราะห์สุขภาพรายเดือน</h1>
          <p style={{ color: '#64748b', fontSize: '14px' }}>ผู้ใช้งาน: {session?.user?.name || "Oak"}</p>
        </div>

        <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
          {/* ปุ่มส่งออกรายงาน PDF */}
          <button 
            onClick={handleExportPDF} 
            disabled={isExporting}
            style={exportButtonStyle}
          >
            {isExporting ? "กำลังออกรายงาน..." : "📄 ส่งออก PDF"}
          </button>

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
        </div>
      </header>

      {/* ส่วนที่ถูกนำไปสร้าง PDF */}
      <div ref={reportRef} style={{ background: '#f8fafc', padding: '24px', borderRadius: '24px' }}>
        <div style={dashboardGrid}>
          <section style={leftSection}>
            <HealthMonitor 
              symptomsCount={totalRecords > 0 ? Math.ceil(symptomData.reduce((a, b) => a + b.count, 0) / totalRecords) : 0}
              hasNumbness={filteredRecords.slice(0, 7).some(r => r.fingerNumbness || r.legNumbness)}
              breakRatio={breakRatio}
              topSymptom={topSymptom.count > 0 ? topSymptom.label : "ข้อมูลทั่วไป"}
            />
            <div style={metricsGrid}>
              <article style={metricCard}>
                <h3 style={metricLabel}>ความล้าสะสมสูงสุด</h3>
                <p style={metricValue}>{topSymptom.count > 0 ? topSymptom.label : "ไม่มีรายการ"}</p>
                <footer style={{ fontSize: '11px', color: '#94a3b8', marginTop: '8px' }}>ข้อมูลประจำรอบเดือน</footer>
              </article>
              <article style={metricCard}>
                <h3 style={metricLabel}>ดัชนีความเหนื่อยล้า</h3>
                <p style={metricValue}>{stressAvg} / 5.0</p>
                <footer style={{ fontSize: '11px', color: '#94a3b8', marginTop: '8px' }}>สถานะ: {Number(stressAvg) > 3 ? "ควรพักผ่อน" : "ปกติ"}</footer>
              </article>
            </div>
          </section>

          <section style={rightSection}>
            <div style={chartCardStyle}>
              <h3 style={chartTitle}>สัดส่วนอาการประจำรอบเดือน</h3>
              <SymptomsPieChart data={symptomData} />
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}

// --- Styles (Enterprise Standard) ---
const containerStyle = { maxWidth: '1200px', margin: '0 auto', padding: '40px 24px' };
const headerStyle = { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' };
const titleStyle = { fontSize: '26px', fontWeight: '800', color: '#1e293b', margin: 0 };
const selectStyle = { padding: '10px 16px', borderRadius: '12px', border: '1px solid #e2e8f0', fontWeight: '700', color: '#334155', cursor: 'pointer', background: '#fff' };
const exportButtonStyle = { padding: '10px 20px', borderRadius: '12px', border: 'none', background: '#0f172a', color: '#fff', fontWeight: '700', cursor: 'pointer', fontSize: '14px' };

const dashboardGrid = { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))', gap: '32px' };
const leftSection = { display: 'flex', flexDirection: 'column' as const, gap: '24px' };
const metricsGrid = { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' };
const metricCard = { background: '#fff', padding: '24px', borderRadius: '16px', border: '1px solid #f1f5f9' };
const metricLabel = { fontSize: '12px', fontWeight: '700', color: '#94a3b8', textTransform: 'uppercase' as const };
const metricValue = { fontSize: '22px', fontWeight: '800', color: '#1e293b', margin: '8px 0 0 0' };
const rightSection = { width: '100%' };
const chartCardStyle = { background: '#fff', padding: '32px', borderRadius: '24px', border: '1px solid #e2e8f0', minHeight: '400px' };
const chartTitle = { fontSize: '18px', fontWeight: '800', marginBottom: '24px' };
const centerStyle = { textAlign: 'center' as const, padding: '100px', color: '#64748b' };