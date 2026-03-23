(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/lib/mock-data.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "closetItems",
    ()=>closetItems,
    "currentUser",
    ()=>currentUser,
    "exploreImages",
    ()=>exploreImages,
    "feedPosts",
    ()=>feedPosts,
    "followRequests",
    ()=>followRequests,
    "followersList",
    ()=>followersList,
    "notifications",
    ()=>notifications,
    "otherUsers",
    ()=>otherUsers,
    "otherUsersFollowers",
    ()=>otherUsersFollowers,
    "profilePosts",
    ()=>profilePosts,
    "savedPosts",
    ()=>savedPosts,
    "searchUsers",
    ()=>searchUsers,
    "stories",
    ()=>stories,
    "tagCategories",
    ()=>tagCategories
]);
// Mock data for MyVirtualCloset app
// Default pink avatar for all users
const defaultAvatar = "/images/default-avatar.png";
const currentUser = {
    id: "1",
    username: "teresapedrero__",
    avatar: defaultAvatar,
    posts: 12,
    followers: 99
};
const stories = [
    {
        id: "1",
        username: "teresapedrero__",
        avatar: defaultAvatar,
        hasNew: true,
        storyImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/VER%20HISTORIA%20OOTD-Bqub96ME3lVVqfDdNlZLXNwEoRTpxK.png"
    },
    {
        id: "2",
        username: "saabiigg",
        avatar: defaultAvatar,
        hasNew: true,
        storyImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/VER%20HISTORIA%20OOTD%20%281%29-Aw36B2jUmHDqGc153Q7AWkqLDu6jyF.png"
    }
];
// New outfit images
const outfitImages = {
    grayHenley: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-RrJLC0babj6XyFrvFvTbhmhYvZIuEB.png",
    adidasShorts: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-eXIcXdG6kvWbT82BtNAxBzfVbQRz5D.png",
    whiteCropBrick: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-mtgaTLF1QYcTpCqw0vPXltgSvV23CN.png",
    whiteTeeBlue: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-EpjyNdyR3K4xBocL4SMNG3RfxUbfv7.png"
};
const feedPosts = [
    {
        id: "1",
        username: "saabiigg",
        avatar: defaultAvatar,
        image: outfitImages.grayHenley,
        likes: 1111,
        liked: false,
        saved: false
    },
    {
        id: "2",
        username: "teresapedrero__",
        avatar: defaultAvatar,
        image: outfitImages.whiteCropBrick,
        likes: 432,
        liked: true,
        saved: false
    },
    {
        id: "3",
        username: "lorenaa",
        avatar: defaultAvatar,
        image: outfitImages.whiteTeeBlue,
        likes: 256,
        liked: false,
        saved: true
    }
];
const profilePosts = [
    outfitImages.grayHenley,
    outfitImages.adidasShorts,
    outfitImages.whiteCropBrick,
    outfitImages.whiteTeeBlue,
    outfitImages.grayHenley,
    outfitImages.whiteCropBrick,
    outfitImages.adidasShorts,
    outfitImages.whiteTeeBlue,
    outfitImages.grayHenley
];
const closetItems = [
    {
        id: "1",
        name: "Chaqueta marrón",
        image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=300&h=300&fit=crop",
        tags: [
            "Chaqueta",
            "Casual",
            "Invierno",
            "Marrón"
        ],
        description: "Chaqueta marrón de cuero, perfecta para otoño",
        favorite: true
    },
    {
        id: "2",
        name: "Top negro",
        image: "https://images.unsplash.com/photo-1562157873-818bc0726f68?w=300&h=300&fit=crop",
        tags: [
            "Top",
            "Casual",
            "Verano",
            "Negro"
        ],
        description: "Top básico negro de tirantes",
        favorite: false
    },
    {
        id: "3",
        name: "Sudadera oscura",
        image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=300&h=300&fit=crop",
        tags: [
            "Sudadera",
            "Casual",
            "Invierno",
            "Negro"
        ],
        description: "Sudadera oversize negra",
        favorite: true
    },
    {
        id: "4",
        name: "Pantalón negro",
        image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=300&h=300&fit=crop",
        tags: [
            "Pantalón",
            "Casual",
            "Todo el año",
            "Negro"
        ],
        description: "Pantalón de vestir negro",
        favorite: false
    },
    {
        id: "5",
        name: "Vaquero azul",
        image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=300&h=300&fit=crop",
        tags: [
            "Vaquero",
            "Casual",
            "Verano",
            "Azul"
        ],
        description: "Vaquero azul clarito, con un roto en la parte de atras, comprado en Zara",
        favorite: true
    },
    {
        id: "6",
        name: "Zapatillas rosa",
        image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=300&h=300&fit=crop",
        tags: [
            "Zapatillas",
            "Casual",
            "Todo el año",
            "Rosa"
        ],
        description: "Zapatillas deportivas rosas",
        favorite: false
    }
];
const otherUsers = {
    saabiigg: {
        id: "2",
        username: "saabiigg",
        avatar: defaultAvatar,
        posts: 12,
        followers: 99,
        following: true,
        postImages: [
            outfitImages.whiteTeeBlue,
            outfitImages.grayHenley,
            outfitImages.adidasShorts,
            outfitImages.whiteCropBrick,
            outfitImages.whiteTeeBlue,
            outfitImages.grayHenley,
            outfitImages.adidasShorts,
            outfitImages.whiteCropBrick,
            outfitImages.whiteTeeBlue
        ]
    },
    lorenaa: {
        id: "3",
        username: "lorenaa",
        avatar: defaultAvatar,
        posts: 8,
        followers: 156,
        following: false,
        postImages: [
            outfitImages.adidasShorts,
            outfitImages.whiteCropBrick,
            outfitImages.grayHenley
        ]
    }
};
const exploreImages = [
    outfitImages.grayHenley,
    outfitImages.adidasShorts,
    outfitImages.whiteCropBrick,
    outfitImages.whiteTeeBlue,
    outfitImages.grayHenley,
    outfitImages.adidasShorts,
    outfitImages.whiteCropBrick,
    outfitImages.whiteTeeBlue,
    outfitImages.grayHenley,
    outfitImages.adidasShorts,
    outfitImages.whiteCropBrick,
    outfitImages.whiteTeeBlue
];
const followRequests = [
    {
        id: "1",
        username: "saraaaarribas_",
        avatar: defaultAvatar
    },
    {
        id: "2",
        username: "carlaaa_99",
        avatar: defaultAvatar
    },
    {
        id: "3",
        username: "paula.martinez",
        avatar: defaultAvatar
    },
    {
        id: "4",
        username: "lucia_gm",
        avatar: defaultAvatar
    },
    {
        id: "5",
        username: "marta.lopez_",
        avatar: defaultAvatar
    },
    {
        id: "6",
        username: "andreea.pop",
        avatar: defaultAvatar
    },
    {
        id: "7",
        username: "sofiaa_rr",
        avatar: defaultAvatar
    },
    {
        id: "8",
        username: "claaraa.22",
        avatar: defaultAvatar
    },
    {
        id: "9",
        username: "irene_dv",
        avatar: defaultAvatar
    },
    {
        id: "10",
        username: "albaa_mg",
        avatar: defaultAvatar
    },
    {
        id: "11",
        username: "noelia.castro",
        avatar: defaultAvatar
    },
    {
        id: "12",
        username: "lauraa_ps",
        avatar: defaultAvatar
    },
    {
        id: "13",
        username: "martaa.fg",
        avatar: defaultAvatar
    }
];
const followersList = [
    {
        id: "1",
        username: "saabiigg",
        avatar: defaultAvatar,
        isFollowing: true
    },
    {
        id: "2",
        username: "lorenaa",
        avatar: defaultAvatar,
        isFollowing: false
    },
    {
        id: "3",
        username: "mariialop_",
        avatar: defaultAvatar,
        isFollowing: true
    },
    {
        id: "4",
        username: "carmennn_r",
        avatar: defaultAvatar,
        isFollowing: false
    },
    {
        id: "5",
        username: "anaa.garcia",
        avatar: defaultAvatar,
        isFollowing: true
    }
];
const otherUsersFollowers = {
    saabiigg: [
        {
            id: "1",
            username: "teresapedrero__",
            avatar: defaultAvatar,
            isFollowing: false
        },
        {
            id: "2",
            username: "lorenaa",
            avatar: defaultAvatar,
            isFollowing: false
        },
        {
            id: "3",
            username: "mariialop_",
            avatar: defaultAvatar,
            isFollowing: true
        }
    ],
    lorenaa: [
        {
            id: "1",
            username: "saabiigg",
            avatar: defaultAvatar,
            isFollowing: true
        },
        {
            id: "2",
            username: "teresapedrero__",
            avatar: defaultAvatar,
            isFollowing: false
        }
    ]
};
const notifications = {
    followRequests: {
        username: "saraaaarribas_",
        count: 13
    },
    today: [
        {
            id: "1",
            type: "like",
            users: [
                "saabiigg",
                "4 personas"
            ],
            avatar: defaultAvatar,
            postImage: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=100&h=100&fit=crop",
            text: "a saabiigg y a 4 personas les ha gustado tu publicación"
        },
        {
            id: "2",
            type: "like",
            users: [
                "mariialop_"
            ],
            avatar: defaultAvatar,
            postImage: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=100&h=100&fit=crop",
            text: "a mariialop_ y le ha gustado tu publicacion"
        }
    ],
    lastWeek: [
        {
            id: "3",
            type: "follow",
            users: [
                "lorenaa"
            ],
            avatar: defaultAvatar,
            text: "lorenaa ha comenzado a seguirte"
        },
        {
            id: "4",
            type: "like",
            users: [
                "nxxv.bq",
                "22 personas más"
            ],
            avatar: defaultAvatar,
            postImage: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=100&h=100&fit=crop",
            text: "a nxxv.bq y a 22 personas más le has gustado tu historia"
        },
        {
            id: "5",
            type: "save",
            users: [
                "saabiigg"
            ],
            avatar: defaultAvatar,
            postImage: "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=100&h=100&fit=crop",
            text: "saabiigg se ha guardado tu publicación"
        },
        {
            id: "6",
            type: "follow",
            users: [
                "heelemartinn"
            ],
            avatar: defaultAvatar,
            text: "heelemartinn ha comenzado a seguirte"
        }
    ]
};
const searchUsers = [
    {
        id: "1",
        username: "lorenaa",
        avatar: defaultAvatar
    },
    {
        id: "2",
        username: "saabiigg",
        avatar: defaultAvatar
    },
    {
        id: "3",
        username: "mariialop_",
        avatar: defaultAvatar
    }
];
const tagCategories = {
    "Tipo de prenda": [
        "Falda",
        "Camiseta",
        "Top",
        "Jersey",
        "Pantalón",
        "Vestido",
        "Chaqueta",
        "Sudadera",
        "Zapatillas",
        "Botas",
        "Abrigo",
        "Tacones",
        "Chandal",
        "Vaquero"
    ],
    "Temporada": [
        "Verano",
        "Invierno",
        "Entretiempo",
        "Todo el año"
    ],
    "Ocasion": [
        "Casual",
        "Formal",
        "Fiesta",
        "Deporte",
        "Trabajo"
    ],
    "Estilo": [
        "Clásico",
        "Moderno",
        "Vintage",
        "Deportivo",
        "Elegante"
    ],
    "Colores": [
        "Azul",
        "Negro",
        "Blanco",
        "Beige",
        "Amarillo",
        "Gris",
        "Marrón",
        "Rojo",
        "Granate",
        "Morado",
        "Verde",
        "Rosa",
        "Naranja"
    ]
};
const savedPosts = [
    "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=300&h=300&fit=crop",
    "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=300&h=300&fit=crop",
    "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=300&h=300&fit=crop"
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/(app)/lab/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LabPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-client] (ecmascript) <export default as ChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flask$2d$conical$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FlaskConical$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/flask-conical.js [app-client] (ecmascript) <export default as FlaskConical>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$aperture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Aperture$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/aperture.js [app-client] (ecmascript) <export default as Aperture>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shirt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shirt$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shirt.js [app-client] (ecmascript) <export default as Shirt>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mock$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/mock-data.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
// Icono de Vestido personalizado
function DressIcon({ className }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: className,
        viewBox: "0 0 24 24",
        fill: "currentColor",
        "aria-hidden": "true",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M12 2C10.5 2 9.5 3 9.5 3L7 8L9 9L8 22H16L15 9L17 8L14.5 3C14.5 3 13.5 2 12 2Z"
        }, void 0, false, {
            fileName: "[project]/app/(app)/lab/page.tsx",
            lineNumber: 18,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/(app)/lab/page.tsx",
        lineNumber: 12,
        columnNumber: 5
    }, this);
}
_c = DressIcon;
// Configuración de las dos vistas según las maquetas
const VIEW_CONFIG = {
    // Vista inicial: Vestido (LABORATORIO.png) - 3 secciones
    dress: {
        sections: [
            {
                label: "Parte Superior",
                filter: [
                    "Top",
                    "Camiseta",
                    "Jersey",
                    "Sudadera",
                    "Chaqueta",
                    "Abrigo"
                ]
            },
            {
                label: "Parte Inferior",
                filter: [
                    "Pantalón",
                    "Falda",
                    "Vaquero"
                ]
            },
            {
                label: "Calzado",
                filter: [
                    "Zapatillas",
                    "Botas",
                    "Tacones"
                ]
            }
        ],
        imageSize: "h-28 w-28",
        gap: "gap-2"
    },
    // Vista alternativa: Camiseta (LABORATORIO vestido.png) - 2 secciones
    shirt: {
        sections: [
            {
                label: "Parte Superior",
                filter: [
                    "Vestido"
                ]
            },
            {
                label: "Calzado",
                filter: [
                    "Zapatillas",
                    "Botas",
                    "Tacones"
                ]
            }
        ],
        imageSize: "h-40 w-40",
        gap: "gap-3"
    }
};
function OutfitCarousel({ label, items, imageSize }) {
    _s();
    const [currentIndex, setCurrentIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const safeItems = items.length > 0 ? items : [
        {
            id: "empty",
            name: "Sin prendas",
            image: "",
            tags: []
        }
    ];
    const current = safeItems[currentIndex];
    function prev() {
        setCurrentIndex((i)=>i === 0 ? safeItems.length - 1 : i - 1);
    }
    function next() {
        setCurrentIndex((i)=>i === safeItems.length - 1 ? 0 : i + 1);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col items-center gap-1",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-xs font-bold text-foreground",
                children: label
            }, void 0, false, {
                fileName: "[project]/app/(app)/lab/page.tsx",
                lineNumber: 68,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: prev,
                        "aria-label": "Anterior",
                        className: "text-foreground",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                            className: "h-6 w-6",
                            strokeWidth: 2.5
                        }, void 0, false, {
                            fileName: "[project]/app/(app)/lab/page.tsx",
                            lineNumber: 71,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/(app)/lab/page.tsx",
                        lineNumber: 70,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `relative overflow-hidden rounded-sm border-2 border-primary/30 bg-muted ${imageSize}`,
                        children: current?.image ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            src: current.image,
                            alt: current.name,
                            fill: true,
                            className: "object-cover",
                            sizes: "(max-width: 768px) 208px, 208px"
                        }, void 0, false, {
                            fileName: "[project]/app/(app)/lab/page.tsx",
                            lineNumber: 75,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex h-full items-center justify-center text-xs text-muted-foreground",
                            children: "Sin prendas"
                        }, void 0, false, {
                            fileName: "[project]/app/(app)/lab/page.tsx",
                            lineNumber: 83,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/(app)/lab/page.tsx",
                        lineNumber: 73,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: next,
                        "aria-label": "Siguiente",
                        className: "text-foreground",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                            className: "h-6 w-6",
                            strokeWidth: 2.5
                        }, void 0, false, {
                            fileName: "[project]/app/(app)/lab/page.tsx",
                            lineNumber: 89,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/(app)/lab/page.tsx",
                        lineNumber: 88,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(app)/lab/page.tsx",
                lineNumber: 69,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/(app)/lab/page.tsx",
        lineNumber: 67,
        columnNumber: 5
    }, this);
}
_s(OutfitCarousel, "tusBbsahUVevXfyh6oH5R6YDC9Q=");
_c1 = OutfitCarousel;
function LabPage() {
    _s1();
    // Estado toggle: "dress" = vista inicial, "shirt" = vista alternativa
    const [viewMode, setViewMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("dress");
    // Toggle entre las dos vistas
    function handleToggle() {
        setViewMode((prev)=>prev === "dress" ? "shirt" : "dress");
    }
    const config = VIEW_CONFIG[viewMode];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex h-full flex-col bg-background",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "flex items-center gap-3 bg-background px-4 py-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flask$2d$conical$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FlaskConical$3e$__["FlaskConical"], {
                        className: "h-7 w-7 text-foreground",
                        strokeWidth: 1.5
                    }, void 0, false, {
                        fileName: "[project]/app/(app)/lab/page.tsx",
                        lineNumber: 111,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "font-serif text-2xl font-bold italic text-primary",
                        children: "Laboratorio"
                    }, void 0, false, {
                        fileName: "[project]/app/(app)/lab/page.tsx",
                        lineNumber: 112,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(app)/lab/page.tsx",
                lineNumber: 110,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mx-4 border-b border-border/60"
            }, void 0, false, {
                fileName: "[project]/app/(app)/lab/page.tsx",
                lineNumber: 116,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-center pt-2",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: handleToggle,
                    className: "flex h-10 w-10 items-center justify-center rounded-full bg-primary transition-colors hover:bg-primary/90",
                    "aria-label": viewMode === "dress" ? "Cambiar a vista camiseta" : "Cambiar a vista vestido",
                    children: viewMode === "dress" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DressIcon, {
                        className: "h-5 w-5 text-primary-foreground"
                    }, void 0, false, {
                        fileName: "[project]/app/(app)/lab/page.tsx",
                        lineNumber: 126,
                        columnNumber: 13
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shirt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shirt$3e$__["Shirt"], {
                        className: "h-5 w-5 text-primary-foreground",
                        strokeWidth: 1.5
                    }, void 0, false, {
                        fileName: "[project]/app/(app)/lab/page.tsx",
                        lineNumber: 128,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/(app)/lab/page.tsx",
                    lineNumber: 120,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/(app)/lab/page.tsx",
                lineNumber: 119,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `flex flex-1 flex-col justify-center px-4 py-2 ${config.gap}`,
                children: config.sections.map((section)=>{
                    const items = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mock$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["closetItems"].filter((item)=>item.tags.some((t)=>section.filter.some((f)=>t.toLowerCase().includes(f.toLowerCase()))));
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(OutfitCarousel, {
                        label: section.label,
                        items: items,
                        imageSize: config.imageSize
                    }, section.label, false, {
                        fileName: "[project]/app/(app)/lab/page.tsx",
                        lineNumber: 140,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/app/(app)/lab/page.tsx",
                lineNumber: 134,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 flex shrink-0 justify-center bg-background px-4 pb-20",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: "/lab/advisor",
                    className: "flex items-center justify-center gap-3 rounded-full border border-primary bg-[#FDF8F8] px-8 py-3.5 transition-colors hover:bg-[#f5eeee]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$aperture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Aperture$3e$__["Aperture"], {
                            className: "h-5 w-5 text-primary",
                            strokeWidth: 1.5
                        }, void 0, false, {
                            fileName: "[project]/app/(app)/lab/page.tsx",
                            lineNumber: 156,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "font-serif text-lg font-bold italic text-primary",
                            children: "¿Qué me pongo?"
                        }, void 0, false, {
                            fileName: "[project]/app/(app)/lab/page.tsx",
                            lineNumber: 157,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/(app)/lab/page.tsx",
                    lineNumber: 152,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/(app)/lab/page.tsx",
                lineNumber: 151,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/(app)/lab/page.tsx",
        lineNumber: 108,
        columnNumber: 5
    }, this);
}
_s1(LabPage, "evw9VfYZTE9/60pCI/+NdDAuS68=");
_c2 = LabPage;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "DressIcon");
__turbopack_context__.k.register(_c1, "OutfitCarousel");
__turbopack_context__.k.register(_c2, "LabPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_9b6a6daa._.js.map