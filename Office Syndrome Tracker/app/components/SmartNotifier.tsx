"use client";
import React, { useEffect, useState } from 'react';

export default function SmartNotifier() {
  const [permission, setPermission] = useState<NotificationPermission>("default");
  const [isEnabled, setIsEnabled] = useState<boolean>(false);

  useEffect(() => {
    if ("Notification" in window) {
      setPermission(Notification.permission);
      // ตรวจสอบสถานะที่ผู้ใช้เคยตั้งไว้ในเครื่อง (Persistence Settings)
      const savedStatus = localStorage.getItem("medi-tap-notify") === "true";
      setIsEnabled(savedStatus);
    }
  }, []);

  const toggleNotification = async () => {
    if (permission !== "granted") {
      const status = await Notification.requestPermission();
      setPermission(status);
      if (status !== "granted") return;
    }

    const nextState = !isEnabled;
    setIsEnabled(nextState);
    localStorage.setItem("medi-tap-notify", String(nextState));

    if (nextState) {
      new Notification("Office Syndrome Tracker", { body: "เริ่มระบบแจ้งเตือนตารางการพักผ่อน" });
    }
  };

  useEffect(() => {
    if (!isEnabled || permission !== "granted") return;

    // ตั้งเวลาแจ้งเตือนทุก 1 ชั่วโมง
    const interval = setInterval(() => {
      new Notification("ประกาศ: ถึงเวลาพักยืดเหยียด", {
        body: "กรุณาพักการทำงานและยืดกล้ามเนื้อเพื่อสุขภาพที่ดี",
        icon: "/favicon.ico", 
      });
    }, 3600000); 

    return () => clearInterval(interval);
  }, [isEnabled, permission]);

  return (
    <div style={containerStyle}>
      <div style={infoGroup}>
        <span style={labelStyle}>ระบบแจ้งเตือนการพัก (Smart Reminder)</span>
        <p style={statusText}>สถานะ: {isEnabled ? "เปิดการใช้งาน" : "ปิดการใช้งาน"}</p>
      </div>
      
      {/* สวิตช์เปิด-ปิด (Toggle Switch) */}
      <button 
        onClick={toggleNotification}
        style={{
          ...toggleBase,
          backgroundColor: isEnabled ? '#10b981' : '#cbd5e1'
        }}
      >
        <div style={{
          ...circleBase,
          transform: isEnabled ? 'translateX(24px)' : 'translateX(0px)'
        }} />
      </button>
    </div>
  );
}

// --- Enterprise Toggle Styles ---
const containerStyle = {
  background: '#ffffff',
  padding: '20px 24px',
  borderRadius: '16px',
  border: '1px solid #f1f5f9',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '24px',
  boxShadow: '0 1px 2px rgba(0,0,0,0.05)'
};

const infoGroup = { display: 'flex', flexDirection: 'column' as const, gap: '4px' };
const labelStyle = { fontSize: '14px', fontWeight: '700', color: '#1e293b' };
const statusText = { fontSize: '12px', color: '#64748b', margin: 0 };

const toggleBase = {
  width: '52px',
  height: '28px',
  borderRadius: '20px',
  border: 'none',
  padding: '4px',
  cursor: 'pointer',
  transition: 'background-color 0.3s ease',
  display: 'flex',
  alignItems: 'center'
};

const circleBase = {
  width: '20px',
  height: '20px',
  backgroundColor: '#ffffff',
  borderRadius: '50%',
  transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  boxShadow: '0 1px 3px rgba(0,0,0,0.2)'
};