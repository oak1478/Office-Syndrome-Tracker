module.exports = [
"[project]/app/records/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>RecordsPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-auth/react/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function RecordsPage() {
    const { status } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSession"])();
    const [allRecords, setAllRecords] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    // สถานะสำหรับการเลือกเดือนและปี (Default เป็นเดือนปัจจุบัน)
    const [selectedMonth, setSelectedMonth] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(new Date().getMonth());
    const [selectedYear, setSelectedYear] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(new Date().getFullYear());
    const fetchRecords = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async ()=>{
        try {
            setLoading(true);
            const res = await fetch("/api/records", {
                cache: 'no-store'
            });
            if (res.ok) {
                const data = await res.json();
                setAllRecords(data);
            }
        } catch (error) {
            console.error("Fetch Error:", error);
        } finally{
            setLoading(false);
        }
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (status === "authenticated") fetchRecords();
    }, [
        status,
        fetchRecords
    ]);
    /**
   * Logic: สร้างรายการเดือนและปีที่มีข้อมูลจริง เพื่อแสดงใน Dropdown
   */ const availableOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const options = [];
        const seen = new Set();
        const monthNames = [
            "มกราคม",
            "กุมภาพันธ์",
            "มีนาคม",
            "เมษายน",
            "พฤษภาคม",
            "มิถุนายน",
            "กรกฎาคม",
            "สิงหาคม",
            "กันยายน",
            "ตุลาคม",
            "พฤศจิกายน",
            "ธันวาคม"
        ];
        // เพิ่มเดือนปัจจุบันไว้เป็นตัวเลือกหลักเสมอ
        const curM = new Date().getMonth();
        const curY = new Date().getFullYear();
        options.push({
            month: curM,
            year: curY,
            label: `${monthNames[curM]} ${curY + 543}`
        });
        seen.add(`${curM}-${curY}`);
        // วนลูปเช็คจากข้อมูลที่มีทั้งหมด
        allRecords.forEach((rec)=>{
            const d = new Date(rec.date || rec.createdAt || "");
            const m = d.getMonth();
            const y = d.getFullYear();
            const key = `${m}-${y}`;
            if (!seen.has(key)) {
                seen.add(key);
                options.push({
                    month: m,
                    year: y,
                    label: `${monthNames[m]} ${y + 543}`
                });
            }
        });
        // เรียงจากใหม่ไปเก่า
        return options.sort((a, b)=>b.year * 12 + b.month - (a.year * 12 + a.month));
    }, [
        allRecords
    ]);
    // กรองข้อมูลเพื่อแสดงผลเฉพาะเดือนที่เลือก
    const filteredRecords = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        return allRecords.filter((record)=>{
            const recDate = new Date(record.date || record.createdAt || "");
            return recDate.getMonth() === selectedMonth && recDate.getFullYear() === selectedYear;
        });
    }, [
        allRecords,
        selectedMonth,
        selectedYear
    ]);
    if (status === "loading" || loading) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: centerStyle,
        children: "กำลังตรวจสอบข้อมูลบันทึกสุขภาพ..."
    }, void 0, false, {
        fileName: "[project]/app/records/page.tsx",
        lineNumber: 88,
        columnNumber: 47
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        style: containerStyle,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                style: headerStyle,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                style: titleStyle,
                                children: "ประวัติสุขภาพรายวัน"
                            }, void 0, false, {
                                fileName: "[project]/app/records/page.tsx",
                                lineNumber: 94,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: subtitleStyle,
                                children: "การแสดงผลบันทึกข้อมูลย้อนหลังแยกตามรายเดือน"
                            }, void 0, false, {
                                fileName: "[project]/app/records/page.tsx",
                                lineNumber: 95,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/records/page.tsx",
                        lineNumber: 93,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: headerActionStyle,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                value: `${selectedMonth}-${selectedYear}`,
                                onChange: (e)=>{
                                    const [m, y] = e.target.value.split("-");
                                    setSelectedMonth(Number(m));
                                    setSelectedYear(Number(y));
                                },
                                style: selectStyle,
                                children: availableOptions.map((opt, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: `${opt.month}-${opt.year}`,
                                        children: opt.label
                                    }, i, false, {
                                        fileName: "[project]/app/records/page.tsx",
                                        lineNumber: 110,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/app/records/page.tsx",
                                lineNumber: 100,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "/records/new",
                                style: addButtonStyle,
                                children: "เพิ่มบันทึกใหม่"
                            }, void 0, false, {
                                fileName: "[project]/app/records/page.tsx",
                                lineNumber: 113,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/records/page.tsx",
                        lineNumber: 98,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/records/page.tsx",
                lineNumber: 92,
                columnNumber: 7
            }, this),
            filteredRecords.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                style: emptyStateStyle,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        style: {
                            fontSize: '20px',
                            color: '#1e293b',
                            margin: 0
                        },
                        children: "ไม่พบรายการบันทึกในรอบเดือนนี้"
                    }, void 0, false, {
                        fileName: "[project]/app/records/page.tsx",
                        lineNumber: 119,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            color: '#64748b',
                            fontSize: '16px',
                            marginTop: '8px'
                        },
                        children: "ท่านสามารถเริ่มต้นการบันทึกใหม่เพื่อวิเคราะห์สภาวะร่างกาย"
                    }, void 0, false, {
                        fileName: "[project]/app/records/page.tsx",
                        lineNumber: 120,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/records/page.tsx",
                lineNumber: 118,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: gridStyle,
                children: filteredRecords.map((record)=>{
                    const rawDate = record.date || record.createdAt;
                    const formattedDate = rawDate && !isNaN(Date.parse(rawDate)) ? new Date(rawDate).toLocaleDateString('th-TH', {
                        day: 'numeric',
                        month: 'long'
                    }) : "ไม่ระบุวันที่";
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                        style: cardStyle,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: cardTopStyle,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: dateStyle,
                                        children: formattedDate
                                    }, void 0, false, {
                                        fileName: "[project]/app/records/page.tsx",
                                        lineNumber: 133,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: statusTagStyle,
                                        children: [
                                            "ความเหนื่อยล้า: ",
                                            record.stressLevel,
                                            "/5"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/records/page.tsx",
                                        lineNumber: 134,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/records/page.tsx",
                                lineNumber: 132,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: tagContainerStyle,
                                children: [
                                    record.neckPain && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: tagStyle,
                                        children: "ปวดคอ/บ่า"
                                    }, void 0, false, {
                                        fileName: "[project]/app/records/page.tsx",
                                        lineNumber: 138,
                                        columnNumber: 39
                                    }, this),
                                    record.backPain && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: tagStyle,
                                        children: "ปวดหลัง"
                                    }, void 0, false, {
                                        fileName: "[project]/app/records/page.tsx",
                                        lineNumber: 139,
                                        columnNumber: 39
                                    }, this),
                                    record.eyeStrain && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: tagStyle,
                                        children: "ปวดตา"
                                    }, void 0, false, {
                                        fileName: "[project]/app/records/page.tsx",
                                        lineNumber: 140,
                                        columnNumber: 40
                                    }, this),
                                    record.wristPain && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: tagStyle,
                                        children: "ปวดข้อมือ"
                                    }, void 0, false, {
                                        fileName: "[project]/app/records/page.tsx",
                                        lineNumber: 141,
                                        columnNumber: 40
                                    }, this),
                                    record.headache && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: tagStyle,
                                        children: "ปวดหัว"
                                    }, void 0, false, {
                                        fileName: "[project]/app/records/page.tsx",
                                        lineNumber: 142,
                                        columnNumber: 39
                                    }, this),
                                    record.fingerNumbness && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: tagStyle,
                                        children: "ชาปลายนิ้ว"
                                    }, void 0, false, {
                                        fileName: "[project]/app/records/page.tsx",
                                        lineNumber: 143,
                                        columnNumber: 45
                                    }, this),
                                    record.legNumbness && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: tagStyle,
                                        children: "ชาที่ขา"
                                    }, void 0, false, {
                                        fileName: "[project]/app/records/page.tsx",
                                        lineNumber: 144,
                                        columnNumber: 42
                                    }, this),
                                    record.tookBreaks && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: positiveTagStyle,
                                        children: "ยืดเหยียดแล้ว"
                                    }, void 0, false, {
                                        fileName: "[project]/app/records/page.tsx",
                                        lineNumber: 145,
                                        columnNumber: 41
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/records/page.tsx",
                                lineNumber: 137,
                                columnNumber: 17
                            }, this),
                            record.note && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: noteContainerStyle,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    style: noteTextStyle,
                                    children: record.note
                                }, void 0, false, {
                                    fileName: "[project]/app/records/page.tsx",
                                    lineNumber: 150,
                                    columnNumber: 21
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/records/page.tsx",
                                lineNumber: 149,
                                columnNumber: 19
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: actionAreaStyle,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: `/records/${record.id}/edit`,
                                    style: editBtnStyle,
                                    children: "แก้ไขข้อมูล"
                                }, void 0, false, {
                                    fileName: "[project]/app/records/page.tsx",
                                    lineNumber: 155,
                                    columnNumber: 19
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/records/page.tsx",
                                lineNumber: 154,
                                columnNumber: 17
                            }, this)
                        ]
                    }, record.id, true, {
                        fileName: "[project]/app/records/page.tsx",
                        lineNumber: 131,
                        columnNumber: 15
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/app/records/page.tsx",
                lineNumber: 123,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/records/page.tsx",
        lineNumber: 91,
        columnNumber: 5
    }, this);
}
// --- Enterprise Visual Configurations ---
const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '60px 24px'
};
const headerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginBottom: '40px',
    flexWrap: 'wrap',
    gap: '20px'
};
const titleStyle = {
    fontSize: '28px',
    fontWeight: '800',
    color: '#0f172a',
    margin: 0
};
const subtitleStyle = {
    color: '#64748b',
    fontSize: '16px',
    marginTop: '4px'
};
const headerActionStyle = {
    display: 'flex',
    gap: '12px',
    alignItems: 'center'
};
const selectStyle = {
    padding: '10px 16px',
    borderRadius: '12px',
    border: '1px solid #e2e8f0',
    background: '#fff',
    fontSize: '14px',
    fontWeight: '700',
    color: '#334155',
    cursor: 'pointer',
    outline: 'none'
};
const addButtonStyle = {
    padding: '10px 20px',
    background: '#0ea5e9',
    color: '#fff',
    borderRadius: '10px',
    fontWeight: '700',
    textDecoration: 'none',
    fontSize: '14px'
};
const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
    gap: '24px'
};
const cardStyle = {
    background: '#ffffff',
    padding: '28px',
    borderRadius: '20px',
    boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)',
    border: '1px solid #f1f5f9',
    display: 'flex',
    flexDirection: 'column'
};
const cardTopStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '20px'
};
const dateStyle = {
    fontSize: '20px',
    fontWeight: '800',
    color: '#0f172a'
};
const statusTagStyle = {
    fontSize: '12px',
    fontWeight: '700',
    color: '#0ea5e9',
    background: '#f0f9ff',
    padding: '6px 12px',
    borderRadius: '8px'
};
const tagContainerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '8px',
    marginBottom: '20px'
};
const tagStyle = {
    padding: '5px 10px',
    background: '#f8fafc',
    borderRadius: '8px',
    fontSize: '13px',
    fontWeight: '600',
    color: '#475569',
    border: '1px solid #e2e8f0'
};
const positiveTagStyle = {
    padding: '5px 10px',
    background: '#f0fdf4',
    borderRadius: '8px',
    fontSize: '13px',
    fontWeight: '700',
    color: '#166534',
    border: '1px solid #bbf7d0'
};
const noteContainerStyle = {
    background: '#f8fafc',
    padding: '16px',
    borderRadius: '12px',
    marginBottom: '20px',
    borderLeft: '4px solid #cbd5e1'
};
const noteTextStyle = {
    margin: 0,
    color: '#475569',
    fontSize: '14px',
    lineHeight: '1.5',
    fontStyle: 'italic'
};
const actionAreaStyle = {
    borderTop: '1px solid #f1f5f9',
    paddingTop: '16px',
    textAlign: 'right',
    marginTop: 'auto'
};
const editBtnStyle = {
    color: '#0ea5e9',
    fontWeight: '700',
    textDecoration: 'none',
    fontSize: '14px'
};
const centerStyle = {
    textAlign: 'center',
    marginTop: '100px',
    color: '#64748b'
};
const emptyStateStyle = {
    textAlign: 'center',
    padding: '80px',
    background: '#ffffff',
    borderRadius: '24px',
    border: '1px solid #e2e8f0'
};
}),
];

//# sourceMappingURL=app_records_page_tsx_c0809d30._.js.map