"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

interface RoleSelectProps {
  userId: string;
  currentRole: string;
}

export default function RoleSelect({ userId, currentRole }: RoleSelectProps) {
  const [role, setRole] = useState(currentRole);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleChange = async (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newRole = e.target.value;
    setRole(newRole);
    setIsLoading(true);

    const res = await fetch("/api/admin/role", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userId, newRole })
    });

    setIsLoading(false);

    if (res.ok) {
      router.refresh();
    } else {
      alert("ไม่สามารถเปลี่ยนสิทธิ์ผู้ใช้งานได้ กรุณาลองใหม่อีกครั้ง");
      setRole(currentRole);
    }
  };

  return (
    <select 
      value={role} 
      onChange={handleChange} 
      disabled={isLoading} 
      style={{
        padding: "8px 12px",
        borderRadius: "8px",
        border: "1px solid #e2e8f0",
        background: isLoading ? "#f1f5f9" : "#ffffff",
        color: role === "ADMIN" ? "#0284c7" : "#475569",
        fontWeight: "600",
        cursor: isLoading ? "wait" : "pointer",
        outline: "none"
      }}
    >
      <option value="USER">ผู้ใช้งานปกติ</option>
      <option value="ADMIN">ผู้ดูแลระบบ</option>
    </select>
  );
}