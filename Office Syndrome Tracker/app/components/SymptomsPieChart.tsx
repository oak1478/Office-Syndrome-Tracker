"use client";
import React, { useState } from "react";

interface SymptomData {
  label: string;
  count: number;
}

// คำนวณพิกัดบนเส้นรอบวงกลมสำหรับสร้างเส้นกราฟ SVG
const getCoordinatesForPercent = (percent: number, radius: number) => {
  const x = Math.cos(2 * Math.PI * percent) * radius;
  const y = Math.sin(2 * Math.PI * percent) * radius;
  return [x, y];
};

export default function SymptomsPieChart({ data = [] }: { data?: SymptomData[] }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  // ตรวจสอบและจัดการกรณีไม่มีข้อมูล
  if (!data || !Array.isArray(data) || data.length === 0) {
    return (
      <div style={emptyStateStyle}>
        <p>กำลังเตรียมข้อมูล หรือยังไม่มีข้อมูลอาการทางกายภาพในระบบ</p>
      </div>
    );
  }

  // กรองเฉพาะอาการที่มีจำนวนมากกว่า 0 และเรียงลำดับจากมากไปน้อย
  const activeSymptoms = data
    .filter((item) => item.count > 0)
    .sort((a, b) => b.count - a.count);

  const totalSymptoms = activeSymptoms.reduce((sum, item) => sum + item.count, 0);

  const colors = ["#ef4444", "#f97316", "#f59e0b", "#10b981", "#3b82f6", "#8b5cf6", "#ec4899"];

  if (totalSymptoms === 0) {
    return (
      <div style={emptyStateStyle}>
        <p>ไม่มีข้อมูลอาการทางกายภาพในระบบ</p>
      </div>
    );
  }

  const size = 300;
  const radius = size / 2;
  const holeRadius = radius * 0.65;
  let cumulativePercent = 0;

  return (
    <div style={containerStyle}>
      {/* ส่วนแสดงผลกราฟวงกลมทรงโดนัท */}
      <div style={chartWrapperStyle}>
        <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} style={{ transform: 'rotate(-90deg)', filter: 'drop-shadow(0px 4px 6px rgba(0,0,0,0.05))' }}>
          {activeSymptoms.map((item, index) => {
            const percent = item.count / totalSymptoms;
            
            const [startX, startY] = getCoordinatesForPercent(cumulativePercent, radius);
            cumulativePercent += percent;
            const [endX, endY] = getCoordinatesForPercent(cumulativePercent, radius);

            const isFullCircle = percent === 1;
            const largeArcFlag = percent > 0.5 ? 1 : 0;

            const pathData = isFullCircle
              ? `M ${radius},${radius} m -${radius},0 a ${radius},${radius} 0 1,0 ${radius * 2},0 a ${radius},${radius} 0 1,0 -${radius * 2},0`
              : [
                  `M ${radius} ${radius}`, 
                  `L ${radius + startX} ${radius + startY}`, 
                  `A ${radius} ${radius} 0 ${largeArcFlag} 1 ${radius + endX} ${radius + endY}`, 
                  'Z' 
                ].join(' ');

            return (
              <path
                key={index}
                d={pathData}
                fill={colors[index % colors.length]}
                stroke="#ffffff"
                strokeWidth="3"
                onMouseEnter={() => setActiveIndex(index)}
                onMouseLeave={() => setActiveIndex(null)}
                style={{
                  transition: 'all 0.2s ease-in-out',
                  cursor: 'pointer',
                  opacity: activeIndex === null || activeIndex === index ? 1 : 0.4,
                  transform: activeIndex === index ? 'scale(1.03)' : 'scale(1)',
                  transformOrigin: 'center',
                }}
              />
            );
          })}
          
          {/* วงกลมตรงกลางสำหรับสร้างช่องว่างของโดนัท */}
          <circle cx={radius} cy={radius} r={holeRadius} fill="#ffffff" />
        </svg>

        {/* ส่วนแสดงข้อมูลตรงกลางกราฟ */}
        <div style={centerOverlayStyle}>
          {activeIndex !== null ? (
            <div style={{ animation: 'fadeIn 0.2s ease-in' }}>
              <div style={tooltipValueStyle}>
                {Math.round((activeSymptoms[activeIndex].count / totalSymptoms) * 100)}%
              </div>
              <div style={tooltipLabelStyle}>
                {activeSymptoms[activeIndex].label}
              </div>
            </div>
          ) : (
            <div style={{ animation: 'fadeIn 0.2s ease-in' }}>
              <div style={totalValueStyle}>{totalSymptoms}</div>
              <div style={totalLabelStyle}>รายการทั้งหมด</div>
            </div>
          )}
        </div>
      </div>

      {/* ส่วนแสดงคำอธิบายและแถบสัดส่วนด้านข้าง */}
      <div style={legendContainerStyle}>
        <div style={summaryHeaderStyle}>
          สรุปสัดส่วนอาการที่พบในระบบ
        </div>
        
        {activeSymptoms.map((item, index) => {
          const percentage = Math.round((item.count / totalSymptoms) * 100);
          const color = colors[index % colors.length];
          const isActive = activeIndex === index;

          return (
            <div 
              key={index} 
              style={{
                ...legendItemStyle,
                opacity: activeIndex === null || isActive ? 1 : 0.4,
                transform: isActive ? 'translateX(8px)' : 'translateX(0)',
                transition: 'all 0.2s ease-in-out'
              }}
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
            >
              <div style={legendHeaderStyle}>
                <div style={legendLabelWrapperStyle}>
                  <span style={{ ...colorIndicatorStyle, backgroundColor: color }} />
                  <span style={legendLabelStyle}>{item.label}</span>
                </div>
                <div style={legendValueStyle}>
                  {percentage}% <span style={legendCountStyle}>({item.count})</span>
                </div>
              </div>
              
              <div style={trackStyle}>
                <div style={{
                  ...progressFillStyle,
                  backgroundColor: color,
                  width: `${percentage}%`
                }} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// การกำหนดรูปแบบการแสดงผลระดับ Enterprise
const containerStyle = { display: 'flex', flexWrap: 'wrap' as const, gap: '48px', alignItems: 'center', marginTop: '20px', padding: '10px' };
const emptyStateStyle = { padding: '40px', textAlign: 'center' as const, color: '#64748b', fontSize: '16px', background: '#f8fafc', borderRadius: '12px', width: '100%' };

const chartWrapperStyle = { flex: '1 1 300px', display: 'flex', justifyContent: 'center', position: 'relative' as const };

const centerOverlayStyle = { 
  position: 'absolute' as const, 
  top: '50%', 
  left: '50%', 
  transform: 'translate(-50%, -50%)', 
  display: 'flex', 
  flexDirection: 'column' as const, 
  alignItems: 'center', 
  justifyContent: 'center', 
  pointerEvents: 'none' as const, // แก้ไขข้อผิดพลาด TypeScript เรียบร้อย
  width: '160px', 
  textAlign: 'center' as const 
};

const tooltipValueStyle = { fontSize: '42px', fontWeight: '800', color: '#0f172a', lineHeight: '1' };
const tooltipLabelStyle = { fontSize: '16px', fontWeight: '700', color: '#0ea5e9', marginTop: '8px' };
const totalValueStyle = { fontSize: '36px', fontWeight: '800', color: '#334155', lineHeight: '1' };
const totalLabelStyle = { fontSize: '14px', fontWeight: '600', color: '#64748b', marginTop: '8px' };

const legendContainerStyle = { flex: '1 1 350px', display: 'flex', flexDirection: 'column' as const, gap: '16px' };
const summaryHeaderStyle = { fontSize: '18px', fontWeight: '700', color: '#1e293b', marginBottom: '8px', paddingBottom: '16px', borderBottom: '2px solid #f1f5f9' };

const legendItemStyle = { display: 'flex', flexDirection: 'column' as const, gap: '8px', cursor: 'pointer', padding: '4px 0' };
const legendHeaderStyle = { display: 'flex', justifyContent: 'space-between', alignItems: 'center' };
const legendLabelWrapperStyle = { display: 'flex', alignItems: 'center', gap: '12px' };
const colorIndicatorStyle = { width: '14px', height: '14px', borderRadius: '4px' };
const legendLabelStyle = { fontSize: '16px', fontWeight: '600', color: '#334155' };
const legendValueStyle = { fontSize: '16px', fontWeight: '800', color: '#0f172a' };
const legendCountStyle = { fontSize: '14px', fontWeight: '500', color: '#64748b' };
const trackStyle = { width: '100%', height: '8px', backgroundColor: '#f1f5f9', borderRadius: '4px', overflow: 'hidden' };
const progressFillStyle = { height: '100%', borderRadius: '4px', transition: 'width 1s cubic-bezier(0.4, 0, 0.2, 1)' };