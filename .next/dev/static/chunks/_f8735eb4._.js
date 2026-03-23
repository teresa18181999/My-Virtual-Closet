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
"[project]/app/(app)/feed/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FeedPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/heart.js [app-client] (ecmascript) <export default as Heart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bookmark$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bookmark$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/bookmark.js [app-client] (ecmascript) <export default as Bookmark>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mock$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/mock-data.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function StoryBubble({ username, avatar, hasNew, isCurrentUser = false }) {
    const content = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col items-center gap-1",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `rounded-full p-0.5 ${hasNew ? "bg-gradient-to-br from-primary to-accent" : "bg-border"}`,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-full border-2 border-background",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            src: avatar,
                            alt: username,
                            width: 56,
                            height: 56,
                            className: "h-14 w-14 rounded-full object-cover"
                        }, void 0, false, {
                            fileName: "[project]/app/(app)/feed/page.tsx",
                            lineNumber: 15,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/(app)/feed/page.tsx",
                        lineNumber: 14,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/(app)/feed/page.tsx",
                    lineNumber: 13,
                    columnNumber: 9
                }, this),
                isCurrentUser && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: "/camera/story",
                    className: "absolute -bottom-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-primary-foreground",
                    "aria-label": "Subir historia",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                        className: "h-3 w-3",
                        strokeWidth: 3
                    }, void 0, false, {
                        fileName: "[project]/app/(app)/feed/page.tsx",
                        lineNumber: 30,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/(app)/feed/page.tsx",
                    lineNumber: 25,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/(app)/feed/page.tsx",
            lineNumber: 12,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/(app)/feed/page.tsx",
        lineNumber: 11,
        columnNumber: 5
    }, this);
    if (isCurrentUser) {
        return content;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        href: `/stories/${username}`,
        children: content
    }, void 0, false, {
        fileName: "[project]/app/(app)/feed/page.tsx",
        lineNumber: 42,
        columnNumber: 5
    }, this);
}
_c = StoryBubble;
function PostCard({ post, onToggleLike, onToggleSave }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
        className: "flex flex-col",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                href: `/profile/${post.username}`,
                className: "flex items-center gap-3 px-4 py-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        src: post.avatar,
                        alt: post.username,
                        width: 32,
                        height: 32,
                        className: "h-8 w-8 rounded-full object-cover"
                    }, void 0, false, {
                        fileName: "[project]/app/(app)/feed/page.tsx",
                        lineNumber: 60,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-sm font-medium text-foreground",
                        children: post.username
                    }, void 0, false, {
                        fileName: "[project]/app/(app)/feed/page.tsx",
                        lineNumber: 67,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(app)/feed/page.tsx",
                lineNumber: 59,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative aspect-[3/4] w-full",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    src: post.image,
                    alt: `Publicación de ${post.username}`,
                    fill: true,
                    className: "object-cover",
                    sizes: "(max-width: 512px) 100vw, 512px"
                }, void 0, false, {
                    fileName: "[project]/app/(app)/feed/page.tsx",
                    lineNumber: 71,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/(app)/feed/page.tsx",
                lineNumber: 70,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between px-4 py-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onToggleLike,
                        className: "flex items-center gap-1.5",
                        "aria-label": post.liked ? "Quitar me gusta" : "Me gusta",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"], {
                                className: `h-6 w-6 ${post.liked ? "fill-primary text-primary" : "text-foreground"}`,
                                strokeWidth: 1.5
                            }, void 0, false, {
                                fileName: "[project]/app/(app)/feed/page.tsx",
                                lineNumber: 86,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-sm font-medium text-foreground",
                                children: post.likes.toString()
                            }, void 0, false, {
                                fileName: "[project]/app/(app)/feed/page.tsx",
                                lineNumber: 90,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(app)/feed/page.tsx",
                        lineNumber: 81,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onToggleSave,
                        "aria-label": post.saved ? "Quitar guardado" : "Guardar",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bookmark$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bookmark$3e$__["Bookmark"], {
                            className: `h-6 w-6 ${post.saved ? "fill-foreground text-foreground" : "text-foreground"}`,
                            strokeWidth: 1.5
                        }, void 0, false, {
                            fileName: "[project]/app/(app)/feed/page.tsx",
                            lineNumber: 96,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/(app)/feed/page.tsx",
                        lineNumber: 92,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(app)/feed/page.tsx",
                lineNumber: 80,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/(app)/feed/page.tsx",
        lineNumber: 58,
        columnNumber: 5
    }, this);
}
_c1 = PostCard;
function FeedPage() {
    _s();
    const [posts, setPosts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mock$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["feedPosts"]);
    function toggleLike(id) {
        setPosts((prev)=>prev.map((p)=>p.id === id ? {
                    ...p,
                    liked: !p.liked,
                    likes: p.liked ? p.likes - 1 : p.likes + 1
                } : p));
    }
    function toggleSave(id) {
        setPosts((prev)=>prev.map((p)=>p.id === id ? {
                    ...p,
                    saved: !p.saved
                } : p));
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col min-h-full bg-background",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "flex items-center justify-between px-4 py-3 bg-background",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "font-serif text-xl font-bold italic text-primary",
                        children: "MyVirtualCloset"
                    }, void 0, false, {
                        fileName: "[project]/app/(app)/feed/page.tsx",
                        lineNumber: 129,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/search",
                        "aria-label": "Buscar",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                            className: "h-6 w-6 text-foreground",
                            strokeWidth: 1.5
                        }, void 0, false, {
                            fileName: "[project]/app/(app)/feed/page.tsx",
                            lineNumber: 131,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/(app)/feed/page.tsx",
                        lineNumber: 130,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(app)/feed/page.tsx",
                lineNumber: 128,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mx-4 border-b border-border/60"
            }, void 0, false, {
                fileName: "[project]/app/(app)/feed/page.tsx",
                lineNumber: 136,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-4 overflow-x-auto px-4 py-2 bg-background scrollbar-hide",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StoryBubble, {
                        username: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mock$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["currentUser"].username,
                        avatar: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mock$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["currentUser"].avatar,
                        hasNew: false,
                        isCurrentUser: true
                    }, void 0, false, {
                        fileName: "[project]/app/(app)/feed/page.tsx",
                        lineNumber: 141,
                        columnNumber: 9
                    }, this),
                    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mock$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stories"].filter((s)=>s.username !== __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mock$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["currentUser"].username).map((story)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StoryBubble, {
                            ...story
                        }, story.id, false, {
                            fileName: "[project]/app/(app)/feed/page.tsx",
                            lineNumber: 149,
                            columnNumber: 11
                        }, this))
                ]
            }, void 0, true, {
                fileName: "[project]/app/(app)/feed/page.tsx",
                lineNumber: 139,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-px bg-border"
            }, void 0, false, {
                fileName: "[project]/app/(app)/feed/page.tsx",
                lineNumber: 154,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col flex-1 pb-20 bg-background",
                children: posts.map((post)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PostCard, {
                        post: post,
                        onToggleLike: ()=>toggleLike(post.id),
                        onToggleSave: ()=>toggleSave(post.id)
                    }, post.id, false, {
                        fileName: "[project]/app/(app)/feed/page.tsx",
                        lineNumber: 159,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/(app)/feed/page.tsx",
                lineNumber: 157,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/(app)/feed/page.tsx",
        lineNumber: 126,
        columnNumber: 5
    }, this);
}
_s(FeedPage, "UWrkRYnrAyZLDpjdhMMRlI07YYs=");
_c2 = FeedPage;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "StoryBubble");
__turbopack_context__.k.register(_c1, "PostCard");
__turbopack_context__.k.register(_c2, "FeedPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_f8735eb4._.js.map