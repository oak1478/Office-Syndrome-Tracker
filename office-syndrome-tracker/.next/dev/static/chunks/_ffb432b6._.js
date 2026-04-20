(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/profile/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProfilePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-auth/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function ProfilePage() {
    _s();
    const { data: session, status, update } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"])();
    const [isEditing, setIsEditing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isSaving, setIsSaving] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        name: "",
        image: ""
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProfilePage.useEffect": ()=>{
            if (session?.user) {
                setFormData({
                    name: session.user.name || "",
                    image: session.user.image || ""
                });
            }
        }
    }["ProfilePage.useEffect"], [
        session
    ]);
    if (status === "unauthenticated") (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["redirect"])("/login");
    // ระบบอัปโหลดรูปภาพและประมวลผลเป็น Base64
    const handleImageChange = (e)=>{
        const file = e.target.files?.[0];
        if (file) {
            if (file.size > 1024 * 1024) {
                alert("ขนาดไฟล์ภาพใหญ่เกินกว่าที่กำหนด (จำกัดที่ 1MB ค่ะ)");
                return;
            }
            const reader = new FileReader();
            reader.onloadend = ()=>{
                setFormData({
                    ...formData,
                    image: reader.result
                });
            };
            reader.readAsDataURL(file);
        }
    };
    const handleSave = async ()=>{
        setIsSaving(true);
        try {
            // ส่งข้อมูลไปอัปเดต Session ของ NextAuth
            await update({
                ...session,
                user: {
                    ...session?.user,
                    name: formData.name,
                    image: formData.image
                }
            });
            setIsEditing(false);
            alert("ระบบบันทึกการเปลี่ยนแปลงเรียบร้อยแล้วค่ะ");
        } catch (error) {
            alert("เกิดข้อผิดพลาดในการบันทึกข้อมูล กรุณาลองใหม่อีกครั้ง");
        } finally{
            setIsSaving(false);
        }
    };
    if (status === "loading") return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: centerStyle,
        children: "กำลังเข้าสู่ระบบจัดการโปรไฟล์..."
    }, void 0, false, {
        fileName: "[project]/app/profile/page.tsx",
        lineNumber: 66,
        columnNumber: 36
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        style: containerStyle,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                style: headerStyle,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        style: titleStyle,
                        children: "การตั้งค่าโปรไฟล์"
                    }, void 0, false, {
                        fileName: "[project]/app/profile/page.tsx",
                        lineNumber: 71,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: subtitleStyle,
                        children: "จัดการข้อมูลบัญชีและรูปภาพประจำตัวสำหรับผู้ใช้งาน Medi-Tap"
                    }, void 0, false, {
                        fileName: "[project]/app/profile/page.tsx",
                        lineNumber: 72,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/profile/page.tsx",
                lineNumber: 70,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: cardStyle,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        style: avatarUploadSection,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: avatarPreview,
                                children: formData.image ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: formData.image,
                                    alt: "Profile",
                                    style: imgStyle
                                }, void 0, false, {
                                    fileName: "[project]/app/profile/page.tsx",
                                    lineNumber: 80,
                                    columnNumber: 15
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: avatarPlaceholder,
                                    children: formData.name?.[0] || "U"
                                }, void 0, false, {
                                    fileName: "[project]/app/profile/page.tsx",
                                    lineNumber: 82,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/profile/page.tsx",
                                lineNumber: 78,
                                columnNumber: 11
                            }, this),
                            isEditing && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: uploadTrigger,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        htmlFor: "imageUpload",
                                        style: uploadLabel,
                                        children: "อัปโหลดรูปภาพใหม่"
                                    }, void 0, false, {
                                        fileName: "[project]/app/profile/page.tsx",
                                        lineNumber: 87,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        id: "imageUpload",
                                        type: "file",
                                        accept: "image/*",
                                        onChange: handleImageChange,
                                        style: {
                                            display: 'none'
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/app/profile/page.tsx",
                                        lineNumber: 88,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/profile/page.tsx",
                                lineNumber: 86,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/profile/page.tsx",
                        lineNumber: 77,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: formGrid,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: inputGroup,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        style: fieldLabel,
                                        children: "ชื่อที่แสดงผล (Display Name)"
                                    }, void 0, false, {
                                        fileName: "[project]/app/profile/page.tsx",
                                        lineNumber: 102,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        placeholder: "กรุณาระบุชื่อของท่าน",
                                        value: formData.name,
                                        disabled: !isEditing,
                                        onChange: (e)=>setFormData({
                                                ...formData,
                                                name: e.target.value
                                            }),
                                        style: isEditing ? inputStyleActive : inputStyle
                                    }, void 0, false, {
                                        fileName: "[project]/app/profile/page.tsx",
                                        lineNumber: 103,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/profile/page.tsx",
                                lineNumber: 101,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: inputGroup,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        style: fieldLabel,
                                        children: "อีเมล (Email Address)"
                                    }, void 0, false, {
                                        fileName: "[project]/app/profile/page.tsx",
                                        lineNumber: 114,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "email",
                                        value: session?.user?.email || "",
                                        disabled: true,
                                        style: inputStyleDisabled
                                    }, void 0, false, {
                                        fileName: "[project]/app/profile/page.tsx",
                                        lineNumber: 115,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: hintText,
                                        children: "อีเมลไม่สามารถเปลี่ยนแปลงได้เนื่องจากเป็นบัญชีหลัก"
                                    }, void 0, false, {
                                        fileName: "[project]/app/profile/page.tsx",
                                        lineNumber: 121,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/profile/page.tsx",
                                lineNumber: 113,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/profile/page.tsx",
                        lineNumber: 100,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: divider
                    }, void 0, false, {
                        fileName: "[project]/app/profile/page.tsx",
                        lineNumber: 125,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: actionRow,
                        children: isEditing ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setIsEditing(false),
                                    style: cancelBtn,
                                    disabled: isSaving,
                                    children: "ยกเลิก"
                                }, void 0, false, {
                                    fileName: "[project]/app/profile/page.tsx",
                                    lineNumber: 131,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleSave,
                                    style: saveBtn,
                                    disabled: isSaving,
                                    children: isSaving ? "กำลังบันทึก..." : "บันทึกการเปลี่ยนแปลง"
                                }, void 0, false, {
                                    fileName: "[project]/app/profile/page.tsx",
                                    lineNumber: 132,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setIsEditing(true),
                            style: editBtn,
                            children: "แก้ไขข้อมูลโปรไฟล์"
                        }, void 0, false, {
                            fileName: "[project]/app/profile/page.tsx",
                            lineNumber: 137,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/profile/page.tsx",
                        lineNumber: 128,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/profile/page.tsx",
                lineNumber: 75,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["signOut"])({
                        callbackUrl: "/"
                    }),
                style: logoutBtn,
                children: "ออกจากระบบ"
            }, void 0, false, {
                fileName: "[project]/app/profile/page.tsx",
                lineNumber: 142,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/profile/page.tsx",
        lineNumber: 69,
        columnNumber: 5
    }, this);
}
_s(ProfilePage, "RmLlvZMiWVyW51enhrB+brFPApk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"]
    ];
});
_c = ProfilePage;
// --- Enterprise Public Styles ---
const containerStyle = {
    maxWidth: '700px',
    margin: '0 auto',
    padding: '60px 24px'
};
const headerStyle = {
    marginBottom: '40px',
    textAlign: 'center'
};
const titleStyle = {
    fontSize: '32px',
    fontWeight: '900',
    color: '#0f172a',
    letterSpacing: '-0.5px'
};
const subtitleStyle = {
    fontSize: '16px',
    color: '#64748b',
    marginTop: '10px'
};
const cardStyle = {
    background: '#fff',
    padding: '48px',
    borderRadius: '32px',
    border: '1px solid #f1f5f9',
    boxShadow: '0 10px 25px -5px rgba(0,0,0,0.04)'
};
const avatarUploadSection = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: '40px'
};
const avatarPreview = {
    width: '130px',
    height: '130px',
    borderRadius: '50%',
    overflow: 'hidden',
    background: '#0ea5e9',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '4px solid #fff',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
};
const imgStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover'
};
const avatarPlaceholder = {
    fontSize: '52px',
    color: '#fff',
    fontWeight: '800'
};
const uploadTrigger = {
    marginTop: '16px'
};
const uploadLabel = {
    fontSize: '15px',
    fontWeight: '700',
    color: '#0ea5e9',
    cursor: 'pointer',
    textDecoration: 'underline'
};
const formGrid = {
    display: 'grid',
    gap: '28px'
};
const inputGroup = {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px'
};
const fieldLabel = {
    fontSize: '15px',
    fontWeight: '800',
    color: '#1e293b'
};
const inputStyle = {
    padding: '14px 18px',
    borderRadius: '14px',
    border: '1px solid #e2e8f0',
    background: '#ffffff',
    fontSize: '16px',
    color: '#1e293b',
    transition: 'all 0.2s',
    outline: 'none'
};
const inputStyleActive = {
    ...inputStyle,
    borderColor: '#0ea5e9',
    boxShadow: '0 0 0 4px rgba(14, 165, 233, 0.1)'
};
const inputStyleDisabled = {
    ...inputStyle,
    background: '#f8fafc',
    color: '#94a3b8',
    cursor: 'not-allowed'
};
const hintText = {
    fontSize: '12px',
    color: '#94a3b8',
    marginTop: '2px'
};
const divider = {
    height: '1px',
    background: '#f1f5f9',
    margin: '40px 0'
};
const actionRow = {
    display: 'flex',
    gap: '14px',
    justifyContent: 'flex-end'
};
const editBtn = {
    padding: '14px 28px',
    borderRadius: '14px',
    background: '#0f172a',
    color: '#fff',
    border: 'none',
    fontWeight: '700',
    cursor: 'pointer',
    fontSize: '15px'
};
const saveBtn = {
    ...editBtn,
    background: '#0ea5e9'
};
const cancelBtn = {
    padding: '14px 28px',
    borderRadius: '14px',
    background: '#fff',
    color: '#64748b',
    border: '1px solid #e2e8f0',
    fontWeight: '700',
    cursor: 'pointer',
    fontSize: '15px'
};
const logoutBtn = {
    width: '100%',
    marginTop: '32px',
    padding: '16px',
    borderRadius: '16px',
    border: 'none',
    background: '#fff',
    color: '#ef4444',
    fontWeight: '800',
    cursor: 'pointer',
    border: '1px solid #fee2e2'
};
const centerStyle = {
    textAlign: 'center',
    padding: '100px',
    color: '#64748b'
};
var _c;
__turbopack_context__.k.register(_c, "ProfilePage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/next/navigation.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/navigation.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=_ffb432b6._.js.map