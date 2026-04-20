"use client";
import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";

// สร้าง Component ย่อยเพื่อให้อ่านค่า URL ได้
function ExerciseGallery() {
  // ข้อมูลวิดีโอท่าบริหารออฟฟิศซินโดรม
  const exerciseVideos = [
    {
      id: "XQ381ekpNyc",
      title: "ยืดกล้ามเนื้อ คอ บ่า ไหล่ 15 นาที",
      category: "คอ บ่า ไหล่",
      description: "ทำตามง่ายๆ แค่ 15 นาทีต่อวัน ช่วยคลายกล้ามเนื้อที่ตึงเครียดจากการจ้องหน้าจอคอมพิวเตอร์นานๆ",
      instructor: "หมอนุ่ม (คุยเรื่องสมอง)"
    },
    {
      id: "WpiLotOHTo8",
      title: "โยคะ 8 นาที แก้ปวดคอบ่าไหล่",
      category: "คอ บ่า ไหล่",
      description: "พักเบรกสั้นๆ ด้วยท่าโยคะเบื้องต้นที่สามารถทำได้ที่โต๊ะทำงาน ไม่ต้องใช้พื้นที่เยอะ",
      instructor: "Pordipor Yoga"
    },
    {
      id: "ZM0xfQt0YK4",
      title: "ท่ายืดบริหารกล้ามเนื้อ ลดอาการปวดหลัง",
      category: "หลัง และ เอว",
      description: "รวม 4 ท่ายืดลดอาการปวดหลัง เหมาะกับผู้ที่นั่งทำงานหรือยืนเป็นเวลานานๆ ช่วยยืดกระดูกสันหลัง",
      instructor: "Bewell Official"
    },
    {
      id: "FAhwH8jwfU4",
      title: "บริหารข้อมือป้องกันออฟฟิศซินโดรม",
      category: "ข้อมือ และ นิ้ว",
      description: "เพิ่มความยืดหยุ่นและเสริมความแข็งแรง ป้องกันอาการพังผืดทับเส้นประสาทจากการใช้เมาส์และคีย์บอร์ด",
      instructor: "Thai PBS"
    }
  ];

  const categories = ["รวมทั้งหมด", "คอ บ่า ไหล่", "หลัง และ เอว", "ข้อมือ และ นิ้ว"];
  
  // 📡 เรดาร์จับค่า URL Parameter
  const searchParams = useSearchParams();
  const urlCategory = searchParams.get("category");
  
  const [activeCategory, setActiveCategory] = useState("รวมทั้งหมด");

  // ถ้ามีค่าส่งมาจาก URL ให้เปลี่ยนหมวดหมู่อัตโนมัติ
  useEffect(() => {
    if (urlCategory && categories.includes(urlCategory)) {
      setActiveCategory(urlCategory);
    }
  }, [urlCategory]);

  const filteredVideos = activeCategory === "รวมทั้งหมด" 
    ? exerciseVideos 
    : exerciseVideos.filter(video => video.category === activeCategory);

  return (
    <main style={mainStyle}>
      <header style={headerStyle}>
        <h1 style={titleStyle}>คลังวิดีโอท่าบริหาร (Exercises)</h1>
        <p style={subtitleStyle}>
          เลือกรักษาให้ตรงจุด พักสายตาและลุกขึ้นมายืดเส้นยืดสายกับวิดีโอที่คัดสรรมาเพื่อคุณ
        </p>
      </header>

      <div style={filterContainerStyle}>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            style={{
              ...filterButtonStyle,
              background: activeCategory === category ? '#0f172a' : '#f1f5f9',
              color: activeCategory === category ? '#ffffff' : '#475569',
            }}
          >
            {category}
          </button>
        ))}
      </div>

      <div style={gridStyle}>
        {filteredVideos.map((video) => (
          <article key={video.id} style={cardStyle}>
            <div style={videoWrapperStyle}>
              <iframe
                style={iframeStyle}
                src={`https://www.youtube.com/embed/${video.id}`}
                title={video.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            
            <div style={contentStyle}>
              <span style={categoryBadgeStyle}>{video.category}</span>
              <h2 style={videoTitleStyle}>{video.title}</h2>
              <p style={videoDescStyle}>{video.description}</p>
              <div style={instructorStyle}>
                <strong>ผู้สอน:</strong> {video.instructor}
              </div>
            </div>
          </article>
        ))}

        {filteredVideos.length === 0 && (
          <div style={emptyStateStyle}>
            ไม่พบวิดีโอในหมวดหมู่นี้
          </div>
        )}
      </div>
    </main>
  );
}

// 🛡️ ครอบด้วย Suspense ตามมาตรฐาน Next.js เพื่อป้องกัน Hydration Error
export default function ExercisesPage() {
  return (
    <Suspense fallback={<div style={{ textAlign: 'center', padding: '100px', color: '#64748b' }}>กำลังโหลดคลังวิดีโอ...</div>}>
      <ExerciseGallery />
    </Suspense>
  );
}

// โครงสร้างสไตล์ระดับ Enterprise
const mainStyle = { padding: '60px 20px', maxWidth: '1200px', margin: '0 auto' };
const headerStyle = { marginBottom: '30px', textAlign: 'center' as const };
const titleStyle = { fontSize: '32px', fontWeight: '900', color: '#0f172a' };
const subtitleStyle = { fontSize: '16px', color: '#64748b', marginTop: '12px', maxWidth: '600px', margin: '12px auto 0' };

const filterContainerStyle = { display: 'flex', justifyContent: 'center', gap: '12px', flexWrap: 'wrap' as const, marginBottom: '40px' };
const filterButtonStyle = { padding: '10px 20px', borderRadius: '30px', fontSize: '15px', fontWeight: '700', border: 'none', cursor: 'pointer', transition: 'all 0.2s ease', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' };

const gridStyle = { display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '30px' };
const cardStyle = { background: '#ffffff', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.05)', border: '1px solid #e2e8f0' };
const videoWrapperStyle = { position: 'relative' as const, paddingBottom: '56.25%', height: 0, overflow: 'hidden' };
const iframeStyle = { position: 'absolute' as const, top: 0, left: 0, width: '100%', height: '100%', border: 'none' };
const contentStyle = { padding: '24px' };
const categoryBadgeStyle = { display: 'inline-block', background: '#e0f2fe', color: '#0284c7', padding: '6px 12px', borderRadius: '8px', fontSize: '13px', fontWeight: '700', marginBottom: '12px' };
const videoTitleStyle = { fontSize: '18px', fontWeight: '800', color: '#1e293b', marginBottom: '10px', lineHeight: '1.4' };
const videoDescStyle = { fontSize: '14px', color: '#64748b', lineHeight: '1.6', marginBottom: '16px' };
const instructorStyle = { fontSize: '13px', color: '#475569', borderTop: '1px solid #f1f5f9', paddingTop: '16px' };
const emptyStateStyle = { gridColumn: '1 / -1', textAlign: 'center' as const, padding: '40px', color: '#94a3b8', fontSize: '16px' };