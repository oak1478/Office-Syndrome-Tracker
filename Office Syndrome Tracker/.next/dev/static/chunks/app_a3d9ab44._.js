(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/components/SymptomsPieChart.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SymptomsPieChart
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
// คำนวณพิกัดบนเส้นรอบวงกลมสำหรับสร้างเส้นกราฟ SVG
const getCoordinatesForPercent = (percent, radius)=>{
    const x = Math.cos(2 * Math.PI * percent) * radius;
    const y = Math.sin(2 * Math.PI * percent) * radius;
    return [
        x,
        y
    ];
};
function SymptomsPieChart({ data = [] }) {
    _s();
    const [activeIndex, setActiveIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // ตรวจสอบและจัดการกรณีไม่มีข้อมูล
    if (!data || !Array.isArray(data) || data.length === 0) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: emptyStateStyle,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: "กำลังเตรียมข้อมูล หรือยังไม่มีข้อมูลอาการทางกายภาพในระบบ"
            }, void 0, false, {
                fileName: "[project]/app/components/SymptomsPieChart.tsx",
                lineNumber: 23,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/components/SymptomsPieChart.tsx",
            lineNumber: 22,
            columnNumber: 7
        }, this);
    }
    // กรองเฉพาะอาการที่มีจำนวนมากกว่า 0 และเรียงลำดับจากมากไปน้อย
    const activeSymptoms = data.filter((item)=>item.count > 0).sort((a, b)=>b.count - a.count);
    const totalSymptoms = activeSymptoms.reduce((sum, item)=>sum + item.count, 0);
    const colors = [
        "#ef4444",
        "#f97316",
        "#f59e0b",
        "#10b981",
        "#3b82f6",
        "#8b5cf6",
        "#ec4899"
    ];
    if (totalSymptoms === 0) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: emptyStateStyle,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: "ไม่มีข้อมูลอาการทางกายภาพในระบบ"
            }, void 0, false, {
                fileName: "[project]/app/components/SymptomsPieChart.tsx",
                lineNumber: 40,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/components/SymptomsPieChart.tsx",
            lineNumber: 39,
            columnNumber: 7
        }, this);
    }
    const size = 300;
    const radius = size / 2;
    const holeRadius = radius * 0.65;
    let cumulativePercent = 0;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: containerStyle,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: chartWrapperStyle,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        width: size,
                        height: size,
                        viewBox: `0 0 ${size} ${size}`,
                        style: {
                            transform: 'rotate(-90deg)',
                            filter: 'drop-shadow(0px 4px 6px rgba(0,0,0,0.05))'
                        },
                        children: [
                            activeSymptoms.map((item, index)=>{
                                const percent = item.count / totalSymptoms;
                                const [startX, startY] = getCoordinatesForPercent(cumulativePercent, radius);
                                cumulativePercent += percent;
                                const [endX, endY] = getCoordinatesForPercent(cumulativePercent, radius);
                                const isFullCircle = percent === 1;
                                const largeArcFlag = percent > 0.5 ? 1 : 0;
                                const pathData = isFullCircle ? `M ${radius},${radius} m -${radius},0 a ${radius},${radius} 0 1,0 ${radius * 2},0 a ${radius},${radius} 0 1,0 -${radius * 2},0` : [
                                    `M ${radius} ${radius}`,
                                    `L ${radius + startX} ${radius + startY}`,
                                    `A ${radius} ${radius} 0 ${largeArcFlag} 1 ${radius + endX} ${radius + endY}`,
                                    'Z'
                                ].join(' ');
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: pathData,
                                    fill: colors[index % colors.length],
                                    stroke: "#ffffff",
                                    strokeWidth: "3",
                                    onMouseEnter: ()=>setActiveIndex(index),
                                    onMouseLeave: ()=>setActiveIndex(null),
                                    style: {
                                        transition: 'all 0.2s ease-in-out',
                                        cursor: 'pointer',
                                        opacity: activeIndex === null || activeIndex === index ? 1 : 0.4,
                                        transform: activeIndex === index ? 'scale(1.03)' : 'scale(1)',
                                        transformOrigin: 'center'
                                    }
                                }, index, false, {
                                    fileName: "[project]/app/components/SymptomsPieChart.tsx",
                                    lineNumber: 75,
                                    columnNumber: 15
                                }, this);
                            }),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                cx: radius,
                                cy: radius,
                                r: holeRadius,
                                fill: "#ffffff"
                            }, void 0, false, {
                                fileName: "[project]/app/components/SymptomsPieChart.tsx",
                                lineNumber: 95,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/SymptomsPieChart.tsx",
                        lineNumber: 54,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: centerOverlayStyle,
                        children: activeIndex !== null ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                animation: 'fadeIn 0.2s ease-in'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: tooltipValueStyle,
                                    children: [
                                        Math.round(activeSymptoms[activeIndex].count / totalSymptoms * 100),
                                        "%"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/SymptomsPieChart.tsx",
                                    lineNumber: 102,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: tooltipLabelStyle,
                                    children: activeSymptoms[activeIndex].label
                                }, void 0, false, {
                                    fileName: "[project]/app/components/SymptomsPieChart.tsx",
                                    lineNumber: 105,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/SymptomsPieChart.tsx",
                            lineNumber: 101,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                animation: 'fadeIn 0.2s ease-in'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: totalValueStyle,
                                    children: totalSymptoms
                                }, void 0, false, {
                                    fileName: "[project]/app/components/SymptomsPieChart.tsx",
                                    lineNumber: 111,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: totalLabelStyle,
                                    children: "รายการทั้งหมด"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/SymptomsPieChart.tsx",
                                    lineNumber: 112,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/SymptomsPieChart.tsx",
                            lineNumber: 110,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/components/SymptomsPieChart.tsx",
                        lineNumber: 99,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/SymptomsPieChart.tsx",
                lineNumber: 53,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: legendContainerStyle,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: summaryHeaderStyle,
                        children: "สรุปสัดส่วนอาการที่พบในระบบ"
                    }, void 0, false, {
                        fileName: "[project]/app/components/SymptomsPieChart.tsx",
                        lineNumber: 120,
                        columnNumber: 9
                    }, this),
                    activeSymptoms.map((item, index)=>{
                        const percentage = Math.round(item.count / totalSymptoms * 100);
                        const color = colors[index % colors.length];
                        const isActive = activeIndex === index;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                ...legendItemStyle,
                                opacity: activeIndex === null || isActive ? 1 : 0.4,
                                transform: isActive ? 'translateX(8px)' : 'translateX(0)',
                                transition: 'all 0.2s ease-in-out'
                            },
                            onMouseEnter: ()=>setActiveIndex(index),
                            onMouseLeave: ()=>setActiveIndex(null),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: legendHeaderStyle,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: legendLabelWrapperStyle,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        ...colorIndicatorStyle,
                                                        backgroundColor: color
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/SymptomsPieChart.tsx",
                                                    lineNumber: 143,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: legendLabelStyle,
                                                    children: item.label
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/SymptomsPieChart.tsx",
                                                    lineNumber: 144,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/SymptomsPieChart.tsx",
                                            lineNumber: 142,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: legendValueStyle,
                                            children: [
                                                percentage,
                                                "% ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: legendCountStyle,
                                                    children: [
                                                        "(",
                                                        item.count,
                                                        ")"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/components/SymptomsPieChart.tsx",
                                                    lineNumber: 147,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/SymptomsPieChart.tsx",
                                            lineNumber: 146,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/SymptomsPieChart.tsx",
                                    lineNumber: 141,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: trackStyle,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            ...progressFillStyle,
                                            backgroundColor: color,
                                            width: `${percentage}%`
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/SymptomsPieChart.tsx",
                                        lineNumber: 152,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/components/SymptomsPieChart.tsx",
                                    lineNumber: 151,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, index, true, {
                            fileName: "[project]/app/components/SymptomsPieChart.tsx",
                            lineNumber: 130,
                            columnNumber: 13
                        }, this);
                    })
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/SymptomsPieChart.tsx",
                lineNumber: 119,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/SymptomsPieChart.tsx",
        lineNumber: 51,
        columnNumber: 5
    }, this);
}
_s(SymptomsPieChart, "E8kOn+IkK/htiBGEqJWkEvOqULU=");
_c = SymptomsPieChart;
// การกำหนดรูปแบบการแสดงผลระดับ Enterprise
const containerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '48px',
    alignItems: 'center',
    marginTop: '20px',
    padding: '10px'
};
const emptyStateStyle = {
    padding: '40px',
    textAlign: 'center',
    color: '#64748b',
    fontSize: '16px',
    background: '#f8fafc',
    borderRadius: '12px',
    width: '100%'
};
const chartWrapperStyle = {
    flex: '1 1 300px',
    display: 'flex',
    justifyContent: 'center',
    position: 'relative'
};
const centerOverlayStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    pointerEvents: 'none',
    width: '160px',
    textAlign: 'center'
};
const tooltipValueStyle = {
    fontSize: '42px',
    fontWeight: '800',
    color: '#0f172a',
    lineHeight: '1'
};
const tooltipLabelStyle = {
    fontSize: '16px',
    fontWeight: '700',
    color: '#0ea5e9',
    marginTop: '8px'
};
const totalValueStyle = {
    fontSize: '36px',
    fontWeight: '800',
    color: '#334155',
    lineHeight: '1'
};
const totalLabelStyle = {
    fontSize: '14px',
    fontWeight: '600',
    color: '#64748b',
    marginTop: '8px'
};
const legendContainerStyle = {
    flex: '1 1 350px',
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
};
const summaryHeaderStyle = {
    fontSize: '18px',
    fontWeight: '700',
    color: '#1e293b',
    marginBottom: '8px',
    paddingBottom: '16px',
    borderBottom: '2px solid #f1f5f9'
};
const legendItemStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
    cursor: 'pointer',
    padding: '4px 0'
};
const legendHeaderStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
};
const legendLabelWrapperStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '12px'
};
const colorIndicatorStyle = {
    width: '14px',
    height: '14px',
    borderRadius: '4px'
};
const legendLabelStyle = {
    fontSize: '16px',
    fontWeight: '600',
    color: '#334155'
};
const legendValueStyle = {
    fontSize: '16px',
    fontWeight: '800',
    color: '#0f172a'
};
const legendCountStyle = {
    fontSize: '14px',
    fontWeight: '500',
    color: '#64748b'
};
const trackStyle = {
    width: '100%',
    height: '8px',
    backgroundColor: '#f1f5f9',
    borderRadius: '4px',
    overflow: 'hidden'
};
const progressFillStyle = {
    height: '100%',
    borderRadius: '4px',
    transition: 'width 1s cubic-bezier(0.4, 0, 0.2, 1)'
};
var _c;
__turbopack_context__.k.register(_c, "SymptomsPieChart");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/HealthMonitor.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HealthMonitor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
"use client";
;
;
function HealthMonitor({ symptomsCount, hasNumbness, breakRatio, topSymptom }) {
    // ประเมินระดับความเสี่ยงตามเกณฑ์
    const getRiskLevel = ()=>{
        if (hasNumbness || symptomsCount >= 5) {
            return {
                label: 'อันตราย',
                color: '#ef4444',
                desc: 'ตรวจพบสัญญาณอันตรายต่อเส้นประสาทหรือกล้ามเนื้อสะสม',
                advice: 'ควรปรึกษาแพทย์หรือนักกายภาพบำบัดโดยด่วน'
            };
        }
        if (symptomsCount >= 3) {
            return {
                label: 'เฝ้าระวัง',
                color: '#f59e0b',
                desc: 'เริ่มมีสัญญาณของ Office Syndrome ระยะเริ่มต้น',
                advice: 'ควรพักยืดเหยียดทุกๆ 1 ชั่วโมง'
            };
        }
        return {
            label: 'ปกติ',
            color: '#10b981',
            desc: 'สภาพร่างกายโดยรวมยังอยู่ในเกณฑ์ดีเยี่ยม',
            advice: 'รักษาวินัยการทำงานและการพักผ่อนแบบนี้ต่อไปนะคะ'
        };
    };
    const risk = getRiskLevel();
    // จัดกลุ่มอาการเพื่อเชื่อมโยงกับหมวดหมู่วิดีโอ
    const getTargetCategory = ()=>{
        if (!topSymptom) return "รวมทั้งหมด";
        if (topSymptom.includes("คอ") || topSymptom.includes("ไหล่") || topSymptom.includes("บ่า")) return "คอ บ่า ไหล่";
        if (topSymptom.includes("หลัง") || topSymptom.includes("เอว")) return "หลัง และ เอว";
        if (topSymptom.includes("มือ") || topSymptom.includes("นิ้ว")) return "ข้อมือ และ นิ้ว";
        return "รวมทั้งหมด";
    };
    const targetCategory = getTargetCategory();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: cardStyle,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
        .action-btn-hover { transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1); }
        .action-btn-hover:hover { transform: translateY(-2px); background-color: #0369a1 !important; box-shadow: 0 10px 15px -3px rgba(14, 165, 233, 0.3); }
      `
            }, void 0, false, {
                fileName: "[project]/app/components/HealthMonitor.tsx",
                lineNumber: 40,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: headerLayout,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            flex: 1
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                style: titleStyle,
                                children: "การประเมินสภาวะร่างกาย"
                            }, void 0, false, {
                                fileName: "[project]/app/components/HealthMonitor.tsx",
                                lineNumber: 47,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: descStyle,
                                children: risk.desc
                            }, void 0, false, {
                                fileName: "[project]/app/components/HealthMonitor.tsx",
                                lineNumber: 48,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/HealthMonitor.tsx",
                        lineNumber: 46,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            ...statusBadge,
                            backgroundColor: risk.color
                        },
                        children: risk.label
                    }, void 0, false, {
                        fileName: "[project]/app/components/HealthMonitor.tsx",
                        lineNumber: 50,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/HealthMonitor.tsx",
                lineNumber: 45,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: divider
            }, void 0, false, {
                fileName: "[project]/app/components/HealthMonitor.tsx",
                lineNumber: 53,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: recommendBox,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: hintLabel,
                        children: "คำแนะนำพิเศษ:"
                    }, void 0, false, {
                        fileName: "[project]/app/components/HealthMonitor.tsx",
                        lineNumber: 56,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                        style: exerciseTitle,
                        children: hasNumbness ? "ท่าบริหารลดการกดทับเส้นประสาท" : `ท่ายืดกล้ามเนื้อแก้${topSymptom || 'อาการล้า'}`
                    }, void 0, false, {
                        fileName: "[project]/app/components/HealthMonitor.tsx",
                        lineNumber: 57,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: adviceTextStyle,
                        children: risk.advice
                    }, void 0, false, {
                        fileName: "[project]/app/components/HealthMonitor.tsx",
                        lineNumber: 60,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: `/exercises?category=${encodeURIComponent(targetCategory)}`,
                        className: "action-btn-hover",
                        style: actionBtn,
                        children: [
                            "เปิดคลังวิดีโอ (",
                            targetCategory,
                            ")"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/HealthMonitor.tsx",
                        lineNumber: 63,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/HealthMonitor.tsx",
                lineNumber: 55,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: indicatorContainer,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: dot(breakRatio > 0.5 ? '#10b981' : '#f59e0b')
                    }, void 0, false, {
                        fileName: "[project]/app/components/HealthMonitor.tsx",
                        lineNumber: 73,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: indicatorText,
                        children: [
                            "การพักยืดเหยียด: ",
                            breakRatio > 0.5 ? 'อยู่ในเกณฑ์เหมาะสม' : 'ท่านพักน้อยกว่าที่กำหนด',
                            " (",
                            Math.round(breakRatio * 100),
                            "%)"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/HealthMonitor.tsx",
                        lineNumber: 74,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/HealthMonitor.tsx",
                lineNumber: 72,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/HealthMonitor.tsx",
        lineNumber: 39,
        columnNumber: 5
    }, this);
}
_c = HealthMonitor;
// โครงสร้างสไตล์การแสดงผล
const cardStyle = {
    background: '#ffffff',
    padding: '32px',
    borderRadius: '24px',
    boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)',
    border: '1px solid #f1f5f9',
    height: '100%'
};
const headerLayout = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    gap: '16px'
};
const titleStyle = {
    fontSize: '20px',
    fontWeight: '800',
    color: '#0f172a',
    margin: 0
};
const descStyle = {
    color: '#64748b',
    fontSize: '14px',
    marginTop: '6px',
    lineHeight: '1.5'
};
const statusBadge = {
    color: '#ffffff',
    padding: '8px 16px',
    borderRadius: '12px',
    fontSize: '14px',
    fontWeight: '800',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
};
const divider = {
    height: '1px',
    background: '#f1f5f9',
    margin: '24px 0'
};
const recommendBox = {
    background: '#f8fafc',
    padding: '24px',
    borderRadius: '20px',
    border: '1px solid #e2e8f0'
};
const hintLabel = {
    fontSize: '12px',
    color: '#0ea5e9',
    fontWeight: '800',
    textTransform: 'uppercase',
    letterSpacing: '0.05em'
};
const exerciseTitle = {
    fontSize: '19px',
    fontWeight: '800',
    color: '#1e293b',
    margin: '10px 0'
};
const adviceTextStyle = {
    fontSize: '14px',
    color: '#475569',
    marginBottom: '20px',
    lineHeight: '1.4'
};
const actionBtn = {
    display: 'inline-block',
    background: '#0ea5e9',
    color: '#ffffff',
    padding: '12px 24px',
    borderRadius: '12px',
    fontWeight: '700',
    fontSize: '15px',
    textDecoration: 'none',
    border: 'none',
    cursor: 'pointer'
};
const indicatorContainer = {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    marginTop: '24px',
    padding: '0 4px'
};
const indicatorText = {
    fontSize: '13px',
    fontWeight: '600',
    color: '#64748b'
};
const dot = (color)=>({
        width: '10px',
        height: '10px',
        borderRadius: '50%',
        backgroundColor: color,
        boxShadow: `0 0 8px ${color}`
    });
var _c;
__turbopack_context__.k.register(_c, "HealthMonitor");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/SmartNotifier.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SmartNotifier
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function SmartNotifier() {
    _s();
    const [permission, setPermission] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("default");
    const [isEnabled, setIsEnabled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SmartNotifier.useEffect": ()=>{
            if ("Notification" in window) {
                setPermission(Notification.permission);
                // ตรวจสอบสถานะที่ผู้ใช้เคยตั้งไว้ในเครื่อง (Persistence Settings)
                const savedStatus = localStorage.getItem("medi-tap-notify") === "true";
                setIsEnabled(savedStatus);
            }
        }
    }["SmartNotifier.useEffect"], []);
    const toggleNotification = async ()=>{
        if (permission !== "granted") {
            const status = await Notification.requestPermission();
            setPermission(status);
            if (status !== "granted") return;
        }
        const nextState = !isEnabled;
        setIsEnabled(nextState);
        localStorage.setItem("medi-tap-notify", String(nextState));
        if (nextState) {
            new Notification("Office Syndrome Tracker", {
                body: "เริ่มระบบแจ้งเตือนตารางการพักผ่อน"
            });
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SmartNotifier.useEffect": ()=>{
            if (!isEnabled || permission !== "granted") return;
            // ตั้งเวลาแจ้งเตือนทุก 1 ชั่วโมง
            const interval = setInterval({
                "SmartNotifier.useEffect.interval": ()=>{
                    new Notification("ประกาศ: ถึงเวลาพักยืดเหยียด", {
                        body: "กรุณาพักการทำงานและยืดกล้ามเนื้อเพื่อสุขภาพที่ดี",
                        icon: "/favicon.ico"
                    });
                }
            }["SmartNotifier.useEffect.interval"], 3600000);
            return ({
                "SmartNotifier.useEffect": ()=>clearInterval(interval)
            })["SmartNotifier.useEffect"];
        }
    }["SmartNotifier.useEffect"], [
        isEnabled,
        permission
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: containerStyle,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: infoGroup,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: labelStyle,
                        children: "ระบบแจ้งเตือนการพัก (Smart Reminder)"
                    }, void 0, false, {
                        fileName: "[project]/app/components/SmartNotifier.tsx",
                        lineNumber: 50,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: statusText,
                        children: [
                            "สถานะ: ",
                            isEnabled ? "เปิดการใช้งาน" : "ปิดการใช้งาน"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/SmartNotifier.tsx",
                        lineNumber: 51,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/SmartNotifier.tsx",
                lineNumber: 49,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: toggleNotification,
                style: {
                    ...toggleBase,
                    backgroundColor: isEnabled ? '#10b981' : '#cbd5e1'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        ...circleBase,
                        transform: isEnabled ? 'translateX(24px)' : 'translateX(0px)'
                    }
                }, void 0, false, {
                    fileName: "[project]/app/components/SmartNotifier.tsx",
                    lineNumber: 62,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/components/SmartNotifier.tsx",
                lineNumber: 55,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/SmartNotifier.tsx",
        lineNumber: 48,
        columnNumber: 5
    }, this);
}
_s(SmartNotifier, "3EbaMQC0pTsuhzib6iFuXuDdn2E=");
_c = SmartNotifier;
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
const infoGroup = {
    display: 'flex',
    flexDirection: 'column',
    gap: '4px'
};
const labelStyle = {
    fontSize: '14px',
    fontWeight: '700',
    color: '#1e293b'
};
const statusText = {
    fontSize: '12px',
    color: '#64748b',
    margin: 0
};
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
var _c;
__turbopack_context__.k.register(_c, "SmartNotifier");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/dashboard/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DashboardPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-auth/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jspdf$2f$dist$2f$jspdf$2e$es$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jspdf/dist/jspdf.es.min.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$html2canvas$2f$dist$2f$html2canvas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/html2canvas/dist/html2canvas.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$SymptomsPieChart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/SymptomsPieChart.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$HealthMonitor$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/HealthMonitor.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$SmartNotifier$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/SmartNotifier.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
function DashboardPage() {
    _s();
    const { data: session, status } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"])();
    const [allRecords, setAllRecords] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [isExporting, setIsExporting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // อ้างอิงพื้นที่สำหรับถ่ายภาพทำ PDF
    const reportRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [selectedMonth, setSelectedMonth] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(new Date().getMonth());
    const [selectedYear, setSelectedYear] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(new Date().getFullYear());
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DashboardPage.useEffect": ()=>{
            async function loadData() {
                if (status === "authenticated") {
                    try {
                        const res = await fetch("/api/records");
                        if (res.ok) {
                            const data = await res.json();
                            setAllRecords(data);
                        }
                    } catch (error) {
                        console.error("Data Fetching Error:", error);
                    } finally{
                        setLoading(false);
                    }
                }
            }
            loadData();
        }
    }["DashboardPage.useEffect"], [
        status
    ]);
    // Logic สรุปเดือนที่มีข้อมูล (เหมือนเดิม)
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
    const availableOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "DashboardPage.useMemo[availableOptions]": ()=>{
            const options = [];
            const seen = new Set();
            const curM = new Date().getMonth();
            const curY = new Date().getFullYear();
            options.push({
                month: curM,
                year: curY,
                label: `${monthNames[curM]} ${curY + 543}`
            });
            seen.add(`${curM}-${curY}`);
            allRecords.forEach({
                "DashboardPage.useMemo[availableOptions]": (rec)=>{
                    const d = new Date(rec.date || rec.createdAt);
                    const m = d.getMonth();
                    const y = d.getFullYear();
                    if (!seen.has(`${m}-${y}`)) {
                        seen.add(`${m}-${y}`);
                        options.push({
                            month: m,
                            year: y,
                            label: `${monthNames[m]} ${y + 543}`
                        });
                    }
                }
            }["DashboardPage.useMemo[availableOptions]"]);
            return options.sort({
                "DashboardPage.useMemo[availableOptions]": (a, b)=>b.year * 12 + b.month - (a.year * 12 + a.month)
            }["DashboardPage.useMemo[availableOptions]"]);
        }
    }["DashboardPage.useMemo[availableOptions]"], [
        allRecords
    ]);
    const filteredRecords = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "DashboardPage.useMemo[filteredRecords]": ()=>{
            return allRecords.filter({
                "DashboardPage.useMemo[filteredRecords]": (rec)=>{
                    const date = new Date(rec.date || rec.createdAt);
                    return date.getMonth() === selectedMonth && date.getFullYear() === selectedYear;
                }
            }["DashboardPage.useMemo[filteredRecords]"]);
        }
    }["DashboardPage.useMemo[filteredRecords]"], [
        allRecords,
        selectedMonth,
        selectedYear
    ]);
    // สรุปสถิติ
    const totalRecords = filteredRecords.length;
    const symptomData = [
        {
            label: "ปวดคอ/บ่า",
            count: filteredRecords.filter((r)=>r.neckPain).length
        },
        {
            label: "ปวดหลัง",
            count: filteredRecords.filter((r)=>r.backPain).length
        },
        {
            label: "ปวดตา",
            count: filteredRecords.filter((r)=>r.eyeStrain).length
        },
        {
            label: "ปวดข้อมือ",
            count: filteredRecords.filter((r)=>r.wristPain).length
        },
        {
            label: "ปวดหัว",
            count: filteredRecords.filter((r)=>r.headache).length
        },
        {
            label: "ชาปลายนิ้ว",
            count: filteredRecords.filter((r)=>r.fingerNumbness).length
        },
        {
            label: "ชาที่ขา",
            count: filteredRecords.filter((r)=>r.legNumbness).length
        }
    ];
    const stressAvg = totalRecords > 0 ? (filteredRecords.reduce((acc, curr)=>acc + curr.stressLevel, 0) / totalRecords).toFixed(1) : "0.0";
    const breakRatio = totalRecords > 0 ? filteredRecords.filter((r)=>r.tookBreaks).length / totalRecords : 0;
    const topSymptom = [
        ...symptomData
    ].sort((a, b)=>b.count - a.count)[0];
    // ฟังก์ชันส่งออก PDF
    const handleExportPDF = async ()=>{
        if (!reportRef.current) return;
        setIsExporting(true);
        try {
            const canvas = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$html2canvas$2f$dist$2f$html2canvas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(reportRef.current, {
                scale: 2,
                useCORS: true
            });
            const imgData = canvas.toDataURL("image/png");
            const pdf = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jspdf$2f$dist$2f$jspdf$2e$es$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]("p", "mm", "a4");
            const pdfWidth = pdf.internal.pageSize.getWidth();
            const pdfHeight = canvas.height * pdfWidth / canvas.width;
            pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
            pdf.save(`Medi-Tap_Report_${monthNames[selectedMonth]}_${selectedYear + 543}.pdf`);
        } catch (error) {
            console.error("PDF Export Error:", error);
        } finally{
            setIsExporting(false);
        }
    };
    if (status === "loading" || loading) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: centerStyle,
        children: "กำลังดึงข้อมูลระบบสุขภาพ..."
    }, void 0, false, {
        fileName: "[project]/app/dashboard/page.tsx",
        lineNumber: 108,
        columnNumber: 47
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        style: containerStyle,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$SmartNotifier$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/dashboard/page.tsx",
                lineNumber: 112,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                style: headerStyle,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                style: titleStyle,
                                children: "วิเคราะห์สุขภาพรายเดือน"
                            }, void 0, false, {
                                fileName: "[project]/app/dashboard/page.tsx",
                                lineNumber: 116,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    color: '#64748b',
                                    fontSize: '14px'
                                },
                                children: [
                                    "ผู้ใช้งาน: ",
                                    session?.user?.name || "Oak"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/dashboard/page.tsx",
                                lineNumber: 117,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/dashboard/page.tsx",
                        lineNumber: 115,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            gap: '12px',
                            alignItems: 'center'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleExportPDF,
                                disabled: isExporting,
                                style: exportButtonStyle,
                                children: isExporting ? "กำลังออกรายงาน..." : "📄 ส่งออก PDF"
                            }, void 0, false, {
                                fileName: "[project]/app/dashboard/page.tsx",
                                lineNumber: 122,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                value: `${selectedMonth}-${selectedYear}`,
                                onChange: (e)=>{
                                    const [m, y] = e.target.value.split("-");
                                    setSelectedMonth(Number(m));
                                    setSelectedYear(Number(y));
                                },
                                style: selectStyle,
                                children: availableOptions.map((opt, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: `${opt.month}-${opt.year}`,
                                        children: opt.label
                                    }, i, false, {
                                        fileName: "[project]/app/dashboard/page.tsx",
                                        lineNumber: 140,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/app/dashboard/page.tsx",
                                lineNumber: 130,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/dashboard/page.tsx",
                        lineNumber: 120,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/dashboard/page.tsx",
                lineNumber: 114,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: reportRef,
                style: {
                    background: '#f8fafc',
                    padding: '24px',
                    borderRadius: '24px'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: dashboardGrid,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                            style: leftSection,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$HealthMonitor$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    symptomsCount: totalRecords > 0 ? Math.ceil(symptomData.reduce((a, b)=>a + b.count, 0) / totalRecords) : 0,
                                    hasNumbness: filteredRecords.slice(0, 7).some((r)=>r.fingerNumbness || r.legNumbness),
                                    breakRatio: breakRatio,
                                    topSymptom: topSymptom.count > 0 ? topSymptom.label : "ข้อมูลทั่วไป"
                                }, void 0, false, {
                                    fileName: "[project]/app/dashboard/page.tsx",
                                    lineNumber: 150,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: metricsGrid,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                            style: metricCard,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    style: metricLabel,
                                                    children: "ความล้าสะสมสูงสุด"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dashboard/page.tsx",
                                                    lineNumber: 158,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    style: metricValue,
                                                    children: topSymptom.count > 0 ? topSymptom.label : "ไม่มีรายการ"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dashboard/page.tsx",
                                                    lineNumber: 159,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                                                    style: {
                                                        fontSize: '11px',
                                                        color: '#94a3b8',
                                                        marginTop: '8px'
                                                    },
                                                    children: "ข้อมูลประจำรอบเดือน"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dashboard/page.tsx",
                                                    lineNumber: 160,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/dashboard/page.tsx",
                                            lineNumber: 157,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                            style: metricCard,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    style: metricLabel,
                                                    children: "ดัชนีความเหนื่อยล้า"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dashboard/page.tsx",
                                                    lineNumber: 163,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    style: metricValue,
                                                    children: [
                                                        stressAvg,
                                                        " / 5.0"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/dashboard/page.tsx",
                                                    lineNumber: 164,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                                                    style: {
                                                        fontSize: '11px',
                                                        color: '#94a3b8',
                                                        marginTop: '8px'
                                                    },
                                                    children: [
                                                        "สถานะ: ",
                                                        Number(stressAvg) > 3 ? "ควรพักผ่อน" : "ปกติ"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/dashboard/page.tsx",
                                                    lineNumber: 165,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/dashboard/page.tsx",
                                            lineNumber: 162,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/dashboard/page.tsx",
                                    lineNumber: 156,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/dashboard/page.tsx",
                            lineNumber: 149,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                            style: rightSection,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: chartCardStyle,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        style: chartTitle,
                                        children: "สัดส่วนอาการประจำรอบเดือน"
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/page.tsx",
                                        lineNumber: 172,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$SymptomsPieChart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        data: symptomData
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/page.tsx",
                                        lineNumber: 173,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/dashboard/page.tsx",
                                lineNumber: 171,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/dashboard/page.tsx",
                            lineNumber: 170,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/dashboard/page.tsx",
                    lineNumber: 148,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/dashboard/page.tsx",
                lineNumber: 147,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/dashboard/page.tsx",
        lineNumber: 111,
        columnNumber: 5
    }, this);
}
_s(DashboardPage, "fAQUJ+ZyPOWfhhpcdKeQBN6Q+Ek=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"]
    ];
});
_c = DashboardPage;
// --- Styles (Enterprise Standard) ---
const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '40px 24px'
};
const headerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '32px'
};
const titleStyle = {
    fontSize: '26px',
    fontWeight: '800',
    color: '#1e293b',
    margin: 0
};
const selectStyle = {
    padding: '10px 16px',
    borderRadius: '12px',
    border: '1px solid #e2e8f0',
    fontWeight: '700',
    color: '#334155',
    cursor: 'pointer',
    background: '#fff'
};
const exportButtonStyle = {
    padding: '10px 20px',
    borderRadius: '12px',
    border: 'none',
    background: '#0f172a',
    color: '#fff',
    fontWeight: '700',
    cursor: 'pointer',
    fontSize: '14px'
};
const dashboardGrid = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))',
    gap: '32px'
};
const leftSection = {
    display: 'flex',
    flexDirection: 'column',
    gap: '24px'
};
const metricsGrid = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '20px'
};
const metricCard = {
    background: '#fff',
    padding: '24px',
    borderRadius: '16px',
    border: '1px solid #f1f5f9'
};
const metricLabel = {
    fontSize: '12px',
    fontWeight: '700',
    color: '#94a3b8',
    textTransform: 'uppercase'
};
const metricValue = {
    fontSize: '22px',
    fontWeight: '800',
    color: '#1e293b',
    margin: '8px 0 0 0'
};
const rightSection = {
    width: '100%'
};
const chartCardStyle = {
    background: '#fff',
    padding: '32px',
    borderRadius: '24px',
    border: '1px solid #e2e8f0',
    minHeight: '400px'
};
const chartTitle = {
    fontSize: '18px',
    fontWeight: '800',
    marginBottom: '24px'
};
const centerStyle = {
    textAlign: 'center',
    padding: '100px',
    color: '#64748b'
};
var _c;
__turbopack_context__.k.register(_c, "DashboardPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=app_a3d9ab44._.js.map