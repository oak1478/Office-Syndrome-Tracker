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
]);

//# sourceMappingURL=app_components_SymptomsPieChart_tsx_1c68b5c7._.js.map