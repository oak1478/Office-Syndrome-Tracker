"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import Link from "next/link";
import Modal from "../../../components/Modal";

export default function EditRecordPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = React.use(params);
  const recordId = resolvedParams.id;
  const { status } = useSession();
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
  const [showConfirmDelete, setShowConfirmDelete] = useState(false);

  useEffect(() => {
    const fetchRecord = async () => {
      try {
        const res = await fetch(`/api/records/${recordId}`);
        if (res.ok) {
          const data = await res.json();
          setNeckPain(data.neckPain);
          setBackPain(data.backPain);
          setEyeStrain(data.eyeStrain);
          setWristPain(data.wristPain);
          setHeadache(data.headache);
          setFingerNumbness(data.fingerNumbness);
          setLegNumbness(data.legNumbness);
          setTookBreaks(data.tookBreaks);
          setStressLevel(data.stressLevel);
          setNote(data.note || "");
        }
      } catch (error) {
        console.error("Fetch Data Error:", error);
      }
    };
    if (status === "authenticated") fetchRecord();
  }, [recordId, status]);

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch(`/api/records/${recordId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
          neckPain, backPain, eyeStrain, wristPain, headache, fingerNumbness, legNumbness, tookBreaks, 
          stressLevel: Number(stressLevel), note 
        }),
      });

      if (res.ok) {
        setModal({ isOpen: true, message: 'ดำเนินการบันทึกการแก้ไขเรียบร้อยแล้ว', type: 'success' });
      } else {
        setModal({ isOpen: true, message: 'เกิดข้อผิดพลาดในการบันทึกข้อมูล', type: 'error' });
      }
    } catch (error) {
      setModal({ isOpen: true, message: 'ระบบการเชื่อมต่อขัดข้อง', type: 'error' });
    }
  };

  const confirmDeleteAction = async () => {
    setShowConfirmDelete(false);
    try {
      const res = await fetch(`/api/records/${recordId}`, {
        method: "DELETE",
      });

      if (res.ok) {
        setModal({ isOpen: true, message: 'ลบข้อมูลออกจากระบบเรียบร้อยแล้ว', type: 'success' });
      } else {
        setModal({ isOpen: true, message: 'เกิดข้อผิดพลาด ไม่สามารถลบข้อมูลได้', type: 'error' });
      }
    } catch (error) {
      setModal({ isOpen: true, message: 'ระบบการเชื่อมต่อขัดข้อง', type: 'error' });
    }
  };

  if (status === "loading") return <div style={centerStyle}>กำลังดำเนินการตรวจสอบข้อมูล...</div>;

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
        <h1 style={titleStyle}>แก้ไขรายการบันทึก</h1>
        <form onSubmit={handleUpdate} style={formFlowStyle}>
          
          <div style={gridLayoutStyle}>
            {symptoms.map((item) => (
              <label key={item.id} style={{...symptomCardStyle, backgroundColor: item.state ? '#e0f2fe' : '#ffffff', borderColor: item.state ? '#0ea5e9' : '#cbd5e1'}}>
                <input type="checkbox" checked={item.state} onChange={(e) => item.setState(e.target.checked)} style={hideCheckStyle} />
                <span style={{fontWeight: '700', fontSize: '18px', color: item.state ? '#0369a1' : '#1e293b'}}>{item.label}</span>
              </label>
            ))}
          </div>

          <label style={{...symptomCardStyle, backgroundColor: tookBreaks ? '#dcfce7' : '#ffffff', borderColor: tookBreaks ? '#22c55e' : '#cbd5e1', marginTop: '8px'}}>
            <input type="checkbox" checked={tookBreaks} onChange={(e) => setTookBreaks(e.target.checked)} style={hideCheckStyle} />
            <span style={{fontWeight: '700', fontSize: '18px', color: tookBreaks ? '#15803d' : '#1e293b'}}>มีการพักยืดเหยียดระหว่างทำงาน</span>
          </label>

          <div style={{marginTop: '10px'}}>
            <label style={labelStyle}>ระดับความเหนื่อยล้า ({stressLevel}/5)</label>
            <input type="range" min="1" max="5" value={stressLevel} onChange={(e) => setStressLevel(Number(e.target.value))} style={rangeStyle} />
          </div>

          <textarea placeholder="ระบุหมายเหตุเพิ่มเติม (ถ้ามี)..." style={textInputStyle} value={note} onChange={(e) => setNote(e.target.value)} rows={3} />

          {/* ปรับตำแหน่งกลุ่มปุ่มกด: ยกเลิก (ซ้าย) | ลบข้อมูล (กลาง) | ยืนยัน (ขวา) */}
          <div style={buttonGroupStyle}>
            <Link href="/records" style={cancelButtonStyle}>ยกเลิก</Link>
            <button type="button" onClick={() => setShowConfirmDelete(true)} style={deleteButtonStyle}>ลบข้อมูล</button>
            <button type="submit" style={submitButtonStyle}>ยืนยันการแก้ไข</button>
          </div>
        </form>

        <Modal isOpen={modal.isOpen} message={modal.message} type={modal.type} onClose={() => {
          setModal({ ...modal, isOpen: false });
          if (modal.type === 'success') router.push("/records");
        }} />

        {showConfirmDelete && (
          <div style={overlayStyle}>
            <div style={confirmModalStyle}>
              <div style={{ fontSize: '48px', marginBottom: '16px', textAlign: 'center' }}>⚠️</div>
              <h3 style={{ fontSize: '24px', fontWeight: '800', color: '#0f172a', marginBottom: '16px', textAlign: 'center' }}>ยืนยันการลบข้อมูล</h3>
              <p style={{ fontSize: '18px', color: '#475569', marginBottom: '32px', textAlign: 'center', lineHeight: '1.5' }}>
                ท่านต้องการลบข้อมูลบันทึกนี้ใช่หรือไม่?<br/>การดำเนินการนี้ไม่สามารถกู้คืนได้
              </p>
              <div style={{ display: 'flex', gap: '16px' }}>
                <button type="button" onClick={() => setShowConfirmDelete(false)} style={cancelConfirmBtnStyle}>ยกเลิก</button>
                <button type="button" onClick={confirmDeleteAction} style={confirmActionBtnStyle}>ยืนยันการลบ</button>
              </div>
            </div>
          </div>
        )}

      </section>
    </main>
  );
}

const mainBgStyle = { minHeight: '100vh', background: '#f1f5f9', padding: '60px 20px', position: 'relative' as const };
const cardWrapperStyle = { maxWidth: '720px', margin: '0 auto', background: '#ffffff', padding: '48px', borderRadius: '32px', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.1)' };
const titleStyle = { fontSize: '32px', fontWeight: '800', color: '#0f172a', textAlign: 'center' as const, marginBottom: '32px' };
const formFlowStyle = { display: 'flex', flexDirection: 'column' as const, gap: '24px' };
const gridLayoutStyle = { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' };
const symptomCardStyle = { display: 'flex', alignItems: 'center', padding: '18px 24px', borderRadius: '20px', border: '2px solid', cursor: 'pointer' };
const hideCheckStyle = { marginRight: '14px', width: '22px', height: '22px' };
const labelStyle = { fontSize: '20px', fontWeight: '700', color: '#0f172a', marginBottom: '12px', display: 'block' };
const rangeStyle = { width: '100%', accentColor: '#0ea5e9' };
const textInputStyle = { width: '100%', padding: '20px', borderRadius: '20px', border: '2px solid #e2e8f0', background: '#f8fafc', fontSize: '18px', color: '#1e293b' };

// ปรับแต่ง Button Group Style สำหรับรองรับปุ่ม 3 ตำแหน่ง
const buttonGroupStyle = { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '12px', gap: '16px' };
const cancelButtonStyle = { flex: 1, padding: '18px', borderRadius: '16px', background: '#f1f5f9', color: '#64748b', textAlign: 'center' as const, textDecoration: 'none', fontWeight: '700', fontSize: '18px' };
const deleteButtonStyle = { flex: 1, padding: '18px', borderRadius: '16px', background: '#fef2f2', color: '#ef4444', fontWeight: '700', border: '2px solid #fecaca', cursor: 'pointer', fontSize: '18px', transition: 'all 0.2s' };
const submitButtonStyle = { flex: 2, padding: '18px', borderRadius: '16px', background: '#0ea5e9', color: '#ffffff', fontWeight: '800', border: 'none', cursor: 'pointer', fontSize: '18px' };
const centerStyle = { display: 'flex', justifyContent: 'center', marginTop: '120px', color: '#1e293b', fontSize: '20px', fontWeight: '700' };

const overlayStyle = { position: 'fixed' as const, top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(15, 23, 42, 0.6)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 1000, backdropFilter: 'blur(4px)' };
const confirmModalStyle = { background: '#ffffff', padding: '40px', borderRadius: '32px', maxWidth: '480px', width: '90%', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.25)' };
const cancelConfirmBtnStyle = { flex: 1, padding: '16px', borderRadius: '16px', background: '#f1f5f9', color: '#64748b', fontWeight: '700', border: 'none', cursor: 'pointer', fontSize: '18px' };
const confirmActionBtnStyle = { flex: 1, padding: '16px', borderRadius: '16px', background: '#ef4444', color: '#ffffff', fontWeight: '800', border: 'none', cursor: 'pointer', fontSize: '18px' };