"use client";
import React from 'react';
import Link from 'next/link';

interface HealthMonitorProps {
  symptomsCount: number; 
  hasNumbness: boolean;   
  breakRatio: number;     
  topSymptom: string;     
}

export default function HealthMonitor({ symptomsCount, hasNumbness, breakRatio, topSymptom }: HealthMonitorProps) {
  
  // ประเมินระดับความเสี่ยงตามเกณฑ์
  const getRiskLevel = () => {
    if (hasNumbness || symptomsCount >= 5) {
      return { label: 'อันตราย', color: '#ef4444', desc: 'ตรวจพบสัญญาณอันตรายต่อเส้นประสาทหรือกล้ามเนื้อสะสม', advice: 'ควรปรึกษาแพทย์หรือนักกายภาพบำบัดโดยด่วน' };
    }
    if (symptomsCount >= 3) {
      return { label: 'เฝ้าระวัง', color: '#f59e0b', desc: 'เริ่มมีสัญญาณของ Office Syndrome ระยะเริ่มต้น', advice: 'ควรพักยืดเหยียดทุกๆ 1 ชั่วโมง' };
    }
    return { label: 'ปกติ', color: '#10b981', desc: 'สภาพร่างกายโดยรวมยังอยู่ในเกณฑ์ดีเยี่ยม', advice: 'รักษาวินัยการทำงานและการพักผ่อนแบบนี้ต่อไปนะคะ' };
  };

  const risk = getRiskLevel();

  // จัดกลุ่มอาการเพื่อเชื่อมโยงกับหมวดหมู่วิดีโอ
  const getTargetCategory = () => {
    if (!topSymptom) return "รวมทั้งหมด";
    if (topSymptom.includes("คอ") || topSymptom.includes("ไหล่") || topSymptom.includes("บ่า")) return "คอ บ่า ไหล่";
    if (topSymptom.includes("หลัง") || topSymptom.includes("เอว")) return "หลัง และ เอว";
    if (topSymptom.includes("มือ") || topSymptom.includes("นิ้ว")) return "ข้อมือ และ นิ้ว";
    return "รวมทั้งหมด";
  };

  const targetCategory = getTargetCategory();

  return (
    <div style={cardStyle}>
      <style>{`
        .action-btn-hover { transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1); }
        .action-btn-hover:hover { transform: translateY(-2px); background-color: #0369a1 !important; box-shadow: 0 10px 15px -3px rgba(14, 165, 233, 0.3); }
      `}</style>
      
      <div style={headerLayout}>
        <div style={{ flex: 1 }}>
          <h3 style={titleStyle}>การประเมินสภาวะร่างกาย</h3>
          <p style={descStyle}>{risk.desc}</p>
        </div>
        <div style={{ ...statusBadge, backgroundColor: risk.color }}>{risk.label}</div>
      </div>

      <div style={divider} />

      <div style={recommendBox}>
        <div style={hintLabel}>คำแนะนำพิเศษ:</div>
        <h4 style={exerciseTitle}>
          {hasNumbness ? "ท่าบริหารลดการกดทับเส้นประสาท" : `ท่ายืดกล้ามเนื้อแก้${topSymptom || 'อาการล้า'}`}
        </h4>
        <p style={adviceTextStyle}>{risk.advice}</p>
        
        {/* ส่งค่าหมวดหมู่ไปกับ URL Parameter */}
        <Link 
          href={`/exercises?category=${encodeURIComponent(targetCategory)}`} 
          className="action-btn-hover"
          style={actionBtn}
        >
          เปิดคลังวิดีโอ ({targetCategory})
        </Link>
      </div>

      <div style={indicatorContainer}>
        <div style={dot(breakRatio > 0.5 ? '#10b981' : '#f59e0b')} />
        <span style={indicatorText}>
          การพักยืดเหยียด: {breakRatio > 0.5 ? 'อยู่ในเกณฑ์เหมาะสม' : 'ท่านพักน้อยกว่าที่กำหนด'} ({Math.round(breakRatio * 100)}%)
        </span>
      </div>
    </div>
  );
}

// โครงสร้างสไตล์การแสดงผล
const cardStyle = { background: '#ffffff', padding: '32px', borderRadius: '24px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)', border: '1px solid #f1f5f9', height: '100%' };
const headerLayout = { display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '16px' };
const titleStyle = { fontSize: '20px', fontWeight: '800', color: '#0f172a', margin: 0 };
const descStyle = { color: '#64748b', fontSize: '14px', marginTop: '6px', lineHeight: '1.5' };
const statusBadge = { color: '#ffffff', padding: '8px 16px', borderRadius: '12px', fontSize: '14px', fontWeight: '800', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' };
const divider = { height: '1px', background: '#f1f5f9', margin: '24px 0' };
const recommendBox = { background: '#f8fafc', padding: '24px', borderRadius: '20px', border: '1px solid #e2e8f0' };
const hintLabel = { fontSize: '12px', color: '#0ea5e9', fontWeight: '800', textTransform: 'uppercase' as const, letterSpacing: '0.05em' };
const exerciseTitle = { fontSize: '19px', fontWeight: '800', color: '#1e293b', margin: '10px 0' };
const adviceTextStyle = { fontSize: '14px', color: '#475569', marginBottom: '20px', lineHeight: '1.4' };
const actionBtn = { display: 'inline-block', background: '#0ea5e9', color: '#ffffff', padding: '12px 24px', borderRadius: '12px', fontWeight: '700', fontSize: '15px', textDecoration: 'none', border: 'none', cursor: 'pointer' };
const indicatorContainer = { display: 'flex', alignItems: 'center', gap: '10px', marginTop: '24px', padding: '0 4px' };
const indicatorText = { fontSize: '13px', fontWeight: '600', color: '#64748b' };
const dot = (color: string) => ({ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: color, boxShadow: `0 0 8px ${color}` });