export const mockOfficeRecords = [
  { 
    id: "1", date: "24 ก.พ. 2026", 
    neckPain: true, backPain: true, eyeStrain: false, wristPain: false, tookBreaks: false, 
    stressLevel: 4, note: "นั่งปั่นโปรเจกต์ไม่ได้ลุกเลย" 
  },
  { 
    id: "2", date: "23 ก.พ. 2026", 
    neckPain: false, backPain: false, eyeStrain: true, wristPain: true, tookBreaks: true, 
    stressLevel: 2, note: "วันนี้ยืดเส้นดีขึ้นเยอะ" 
  }
];

export function getRecords() {
  return mockOfficeRecords;
}