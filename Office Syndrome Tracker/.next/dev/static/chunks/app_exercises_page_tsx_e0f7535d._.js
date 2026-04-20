(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/exercises/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ExercisesPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function ExercisesPage() {
    _s();
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
    // รายการหมวดหมู่ทั้งหมด
    const categories = [
        "รวมทั้งหมด",
        "คอ บ่า ไหล่",
        "หลัง และ เอว",
        "ข้อมือ และ นิ้ว"
    ];
    // สถานะสำหรับเก็บหมวดหมู่ที่ถูกเลือก
    const [activeCategory, setActiveCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("รวมทั้งหมด");
    // กรองวิดีโอตามหมวดหมู่ที่เลือก
    const filteredVideos = activeCategory === "รวมทั้งหมด" ? exerciseVideos : exerciseVideos.filter((video)=>video.category === activeCategory);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        style: mainStyle,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                style: headerStyle,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        style: titleStyle,
                        children: "คลังวิดีโอท่าบริหาร (Exercises)"
                    }, void 0, false, {
                        fileName: "[project]/app/exercises/page.tsx",
                        lineNumber: 51,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: subtitleStyle,
                        children: "เลือกรักษาให้ตรงจุด พักสายตาและลุกขึ้นมายืดเส้นยืดสายกับวิดีโอที่คัดสรรมาเพื่อคุณ"
                    }, void 0, false, {
                        fileName: "[project]/app/exercises/page.tsx",
                        lineNumber: 52,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/exercises/page.tsx",
                lineNumber: 50,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: filterContainerStyle,
                children: categories.map((category)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setActiveCategory(category),
                        style: {
                            ...filterButtonStyle,
                            background: activeCategory === category ? '#0f172a' : '#f1f5f9',
                            color: activeCategory === category ? '#ffffff' : '#475569'
                        },
                        children: category
                    }, category, false, {
                        fileName: "[project]/app/exercises/page.tsx",
                        lineNumber: 60,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/exercises/page.tsx",
                lineNumber: 58,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: gridStyle,
                children: [
                    filteredVideos.map((video)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                            style: cardStyle,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: videoWrapperStyle,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("iframe", {
                                        style: iframeStyle,
                                        src: `https://www.youtube.com/embed/${video.id}`,
                                        title: video.title,
                                        allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
                                        allowFullScreen: true
                                    }, void 0, false, {
                                        fileName: "[project]/app/exercises/page.tsx",
                                        lineNumber: 79,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/exercises/page.tsx",
                                    lineNumber: 78,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: contentStyle,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: categoryBadgeStyle,
                                            children: video.category
                                        }, void 0, false, {
                                            fileName: "[project]/app/exercises/page.tsx",
                                            lineNumber: 89,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            style: videoTitleStyle,
                                            children: video.title
                                        }, void 0, false, {
                                            fileName: "[project]/app/exercises/page.tsx",
                                            lineNumber: 90,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            style: videoDescStyle,
                                            children: video.description
                                        }, void 0, false, {
                                            fileName: "[project]/app/exercises/page.tsx",
                                            lineNumber: 91,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: instructorStyle,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: "ผู้สอน:"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/exercises/page.tsx",
                                                    lineNumber: 93,
                                                    columnNumber: 17
                                                }, this),
                                                " ",
                                                video.instructor
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/exercises/page.tsx",
                                            lineNumber: 92,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/exercises/page.tsx",
                                    lineNumber: 88,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, video.id, true, {
                            fileName: "[project]/app/exercises/page.tsx",
                            lineNumber: 77,
                            columnNumber: 11
                        }, this)),
                    filteredVideos.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: emptyStateStyle,
                        children: "ไม่พบวิดีโอในหมวดหมู่นี้"
                    }, void 0, false, {
                        fileName: "[project]/app/exercises/page.tsx",
                        lineNumber: 100,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/exercises/page.tsx",
                lineNumber: 75,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/exercises/page.tsx",
        lineNumber: 49,
        columnNumber: 5
    }, this);
}
_s(ExercisesPage, "P783MpA/xIxSwVE66ty/xguANxQ=");
_c = ExercisesPage;
// โครงสร้างสไตล์ระดับ Enterprise
const mainStyle = {
    padding: '60px 20px',
    maxWidth: '1200px',
    margin: '0 auto'
};
const headerStyle = {
    marginBottom: '30px',
    textAlign: 'center'
};
const titleStyle = {
    fontSize: '32px',
    fontWeight: '900',
    color: '#0f172a'
};
const subtitleStyle = {
    fontSize: '16px',
    color: '#64748b',
    marginTop: '12px',
    maxWidth: '600px',
    margin: '12px auto 0'
};
const filterContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    gap: '12px',
    flexWrap: 'wrap',
    marginBottom: '40px'
};
const filterButtonStyle = {
    padding: '10px 20px',
    borderRadius: '30px',
    fontSize: '15px',
    fontWeight: '700',
    border: 'none',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
};
const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
    gap: '30px'
};
const cardStyle = {
    background: '#ffffff',
    borderRadius: '20px',
    overflow: 'hidden',
    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.05)',
    border: '1px solid #e2e8f0'
};
const videoWrapperStyle = {
    position: 'relative',
    paddingBottom: '56.25%',
    height: 0,
    overflow: 'hidden'
};
const iframeStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    border: 'none'
};
const contentStyle = {
    padding: '24px'
};
const categoryBadgeStyle = {
    display: 'inline-block',
    background: '#e0f2fe',
    color: '#0284c7',
    padding: '6px 12px',
    borderRadius: '8px',
    fontSize: '13px',
    fontWeight: '700',
    marginBottom: '12px'
};
const videoTitleStyle = {
    fontSize: '18px',
    fontWeight: '800',
    color: '#1e293b',
    marginBottom: '10px',
    lineHeight: '1.4'
};
const videoDescStyle = {
    fontSize: '14px',
    color: '#64748b',
    lineHeight: '1.6',
    marginBottom: '16px'
};
const instructorStyle = {
    fontSize: '13px',
    color: '#475569',
    borderTop: '1px solid #f1f5f9',
    paddingTop: '16px'
};
const emptyStateStyle = {
    gridColumn: '1 / -1',
    textAlign: 'center',
    padding: '40px',
    color: '#94a3b8',
    fontSize: '16px'
};
var _c;
__turbopack_context__.k.register(_c, "ExercisesPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=app_exercises_page_tsx_e0f7535d._.js.map