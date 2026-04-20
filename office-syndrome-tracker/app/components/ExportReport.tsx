"use client";
import React, { useState } from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

interface ExportReportProps {
  elementId: string; // ID ของส่วนที่ต้องการให้ไป "ถ่ายรูป" มาลง PDF
  fileName: string;
}

/**
 * คอมโพเนนต์สำหรับส่งออกข้อมูลเป็นรายงาน PDF (Enterprise PDF Exporter)
 */
export default function ExportReport({ elementId, fileName }: ExportReportProps) {
  const [isExporting, setIsExporting] = useState(false);

  const handleDownload = async () => {
    const element = document.getElementById(elementId);
    if (!element) return;

    setIsExporting(true);
    try {
      // ทำการ Render HTML เป็น Canvas
      const canvas = await html2canvas(element, {
        scale: 2, // เพิ่มความชัดระดับ Enterprise
        useCORS: true,
        logging: false,
      });

      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      
      const imgProps = pdf.getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

      pdf.addImage(imgData, 'PNG', 0, 10, pdfWidth, pdfHeight);
      pdf.save(`${fileName}.pdf`);
    } catch (error) {
      console.error("Export Error:", error);
    } finally {
      setIsExporting(false);
    }
  };

  return (
    <button 
      onClick={handleDownload} 
      disabled={isExporting}
      className="export-btn"
      style={btnStyle}
    >
      {isExporting ? "กำลังประมวลผลเอกสาร..." : "ส่งออกรายงานประจำเดือน (PDF)"}
      
      <style>{`
        .export-btn { transition: all 0.2s ease; cursor: pointer; }
        .export-btn:hover { background-color: #0f172a !important; transform: translateY(-1px); }
        .export-btn:disabled { opacity: 0.6; cursor: not-allowed; }
      `}</style>
    </button>
  );
}

const btnStyle = {
  background: '#1e293b',
  color: '#ffffff',
  padding: '10px 20px',
  borderRadius: '10px',
  border: 'none',
  fontSize: '14px',
  fontWeight: '700',
  display: 'flex',
  alignItems: 'center',
  gap: '8px'
};