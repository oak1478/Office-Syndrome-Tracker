"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import Link from "next/link";
import Modal from "../../components/Modal";

export default function NewRecordPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  const [neckPain, setNeckPain] = useState(false);
  const [backPain, setBackPain] = useState(false);
  const [eyeStrain, setEyeStrain] = useState(false);
  const [wristPain, setWristPain] = useState(false);
  const [headache, setHeadache] = useState(false);
  const [fingerNumbness, setFingerNumbness] = useState(false);
  const [legNumbness, setLegNumbness] = useState(false);
  const [tookBreaks, setTookBreaks] = useState(false);
  const [stressLevel, setStressLevel] = useState(1);
  const [note, setNote] = useState("");
  
  const [modal, setModal] = useState({ isOpen: false, message: '', type: 'success' as 'success' | 'error' });

  useEffect(() => {
    if (status === "unauthenticated") router.push("/login");
  }, [status, router]);

  if (status === "loading") return <div style={centerStyle}>กำลังตรวจสอบสิทธิ์...</div>;
  if (!session) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/records", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
          neckPain, backPain, eyeStrain, wristPain, 
          headache, fingerNumbness, legNumbness,
          tookBreaks, stressLevel: Number(stressLevel), note 
        }),
      });

      if (res.ok) {
        setModal({ isOpen: true, message: 'บันทึกข้อมูลเรียบร้อยแล้ว', type: 'success' });
      } else {
        const data = await res.json();
        setModal({ isOpen: true, message: data.error, type: 'error' });
      }
    } catch (error) {
      setModal({ isOpen: true, message: 'การเชื่อมต่อล้มเหลว', type: 'error' });
    }
  };

  const symptoms = [
    { id: 'neck', label: 'ปวดคอ/บ่า', state: neckPain, setState: setNeckPain },
    { id: 'back', label: 'ปวดหลัง', state: backPain, setState: setBackPain },
    { id: 'eye', label: 'ปวดตา', state: eyeStrain, setState: setEyeStrain },
    { id: 'wrist', label: 'ปวดข้อมือ', state: wristPain, setState: setWristPain },
    { id: 'head', label: 'ปวดหัว', state: headache, setState: setHeadache },
    { id: 'finger', label: 'ชาปลายนิ้ว', state: fingerNumbness, setState: setFingerNumbness },
    { id: 'leg', label: 'ชาที่ขา', state: legNumbness, setState: setLegNumbness },
  ];

  return (
    <main style={mainBgStyle}>
      <section style={cardWrapperStyle}>
        <header style={{ textAlign: 'center', marginBottom: '32px' }}>
          <h1 style={{ fontSize: '32px', fontWeight: '800', color: '#0f172a' }}>บันทึกอาการประจำวัน</h1>
          <p style={{ color: '#475569', marginTop: '10px', fontSize: '18px' }}>ติดตามสุขภาพเพื่อชีวิตที่คลีนกว่าเดิม</p>
        </header>
        
        <form onSubmit={handleSubmit} style={formFlowStyle}>
          <label style={sectionTitleStyle}>อาการที่พบวันนี้ (ติ๊กเพื่อเลือก)</label>
          <div style={gridLayoutStyle}>
            {symptoms.map((item) => (
              <label key={item.id} style={{
                ...symptomCardStyle,
                backgroundColor: item.state ? '#e0f2fe' : '#ffffff',
                borderColor: item.state ? '#0ea5e9' : '#cbd5e1',
                borderWidth: item.state ? '2px' : '1px'
              }}>
                <input type="checkbox" checked={item.state} onChange={(e) => item.setState(e.target.checked)} style={hideCheckStyle} />
                <span style={{ color: item.state ? '#0369a1' : '#1e293b', fontWeight: item.state ? '700' : '600', fontSize: '18px' }}>
                   {item.label}
                </span>
              </label>
            ))}
          </div>

          <label style={{
            ...symptomCardStyle,
            backgroundColor: tookBreaks ? '#dcfce7' : '#ffffff',
            borderColor: tookBreaks ? '#22c55e' : '#cbd5e1',
            borderWidth: tookBreaks ? '2px' : '1px',
            marginTop: '10px'
          }}>
            <input type="checkbox" checked={tookBreaks} onChange={(e) => setTookBreaks(e.target.checked)} style={hideCheckStyle} />
            <span style={{ color: tookBreaks ? '#15803d' : '#1e293b', fontWeight: '700', fontSize: '18px' }}>
               วันนี้มีการพักยืดเหยียดระหว่างทำงาน
            </span>
          </label>

          <div style={{ marginTop: '15px' }}>
            <label style={inputLabelStyle}>ระดับความเหนื่อยล้า ({stressLevel}/5)</label>
            <input type="range" min="1" max="5" value={stressLevel} onChange={(e) => setStressLevel(Number(e.target.value))} style={rangeInputStyle} />
            <div style={rangeDescStyle}><span>ชิลมาก</span><span>ร่างแหลก</span></div>
          </div>

          <textarea placeholder="หมายเหตุเพิ่มเติม (ถ้ามี)..." style={textInputStyle} value={note} onChange={(e) => setNote(e.target.value)} rows={3} />

          <button type="submit" style={primaryButtonStyle}>ยืนยันการบันทึกข้อมูล</button>
        </form>

        <Modal isOpen={modal.isOpen} message={modal.message} type={modal.type} onClose={() => {
          setModal({ ...modal, isOpen: false });
          if (modal.type === 'success') router.push("/records");
        }} />
      </section>
    </main>
  );
}

// สไตล์ฉบับปรับปรุงใหม่ (เน้น Contrast และ Size)
const mainBgStyle = { minHeight: '100vh', background: '#f1f5f9', padding: '60px 20px' };
const cardWrapperStyle = { maxWidth: '600px', margin: '0 auto', background: '#ffffff', padding: '48px', borderRadius: '32px', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.1)' };
const formFlowStyle = { display: 'flex', flexDirection: 'column' as const, gap: '24px' };
const sectionTitleStyle = { fontSize: '16px', fontWeight: '800', color: '#64748b', textTransform: 'uppercase' as const, letterSpacing: '0.1em' };
const gridLayoutStyle = { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' };

const symptomCardStyle = {
  display: 'flex', alignItems: 'center', padding: '18px 24px', borderRadius: '20px',
  border: '1px solid', cursor: 'pointer', transition: 'all 0.2s ease', fontSize: '18px'
};
const hideCheckStyle = { marginRight: '14px', width: '22px', height: '22px', cursor: 'pointer' };

const inputLabelStyle = { fontSize: '20px', fontWeight: '700', color: '#0f172a', marginBottom: '12px', display: 'block' };
const rangeInputStyle = { width: '100%', accentColor: '#0ea5e9', cursor: 'pointer', height: '10px' };
const rangeDescStyle = { display: 'flex', justifyContent: 'space-between', fontSize: '14px', color: '#475569', marginTop: '10px', fontWeight: '600' };

const textInputStyle = { 
  width: '100%', padding: '20px', borderRadius: '20px', border: '2px solid #e2e8f0', 
  background: '#f8fafc', fontSize: '18px', outline: 'none', resize: 'none' as const, color: '#1e293b'
};

const primaryButtonStyle = { 
  width: '100%', padding: '20px', borderRadius: '20px', background: '#0ea5e9', 
  color: '#fff', fontWeight: '800', border: 'none', cursor: 'pointer', 
  boxShadow: '0 10px 15px -3px rgba(14, 165, 233, 0.3)', fontSize: '20px', marginTop: '12px'
};

const centerStyle = { display: 'flex', justifyContent: 'center', marginTop: '120px', color: '#1e293b', fontSize: '20px', fontWeight: '700' };