// Mock data for MyVirtualCloset app

export const currentUser = {
  id: "1",
  username: "teresapedrero__",
  avatar: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PERFIL-ZsZvI1SRBCrWyv3XE4fFHoUvFKKtzo.png",
  posts: 12,
  followers: 99,
}

export const stories = [
  { id: "1", username: "teresapedrero__", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face", hasNew: true, storyImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/VER%20HISTORIA%20OOTD-Bqub96ME3lVVqfDdNlZLXNwEoRTpxK.png" },
  { id: "2", username: "saabiigg", avatar: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ENTRAR%20EN%20OTRO%20PERFIL%20siguiendolo-ECbR57rhDqlThfoUFm63zaWr7bEBIa.png", hasNew: true, storyImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/VER%20HISTORIA%20OOTD%20%281%29-Aw36B2jUmHDqGc153Q7AWkqLDu6jyF.png" },
]

export const feedPosts = [
  {
    id: "1",
    username: "saabiigg",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&h=800&fit=crop",
    likes: 1111,
    liked: false,
    saved: false,
  },
  {
    id: "2",
    username: "teresapedrero__",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&h=800&fit=crop",
    likes: 432,
    liked: true,
    saved: false,
  },
  {
    id: "3",
    username: "lorenaa",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    image: "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=600&h=800&fit=crop",
    likes: 256,
    liked: false,
    saved: true,
  },
]

export const profilePosts = [
  "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=300&h=300&fit=crop",
  "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=300&h=300&fit=crop",
  "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=300&h=300&fit=crop",
  "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=300&h=300&fit=crop",
  "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=300&h=300&fit=crop",
  "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?w=300&h=300&fit=crop",
  "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=300&h=300&fit=crop",
  "https://images.unsplash.com/photo-1475180098004-ca77a66827be?w=300&h=300&fit=crop",
  "https://images.unsplash.com/photo-1502716119720-b23a1e3b2bf5?w=300&h=300&fit=crop",
]

export const closetItems = [
  { id: "1", name: "Chaqueta marrón", image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=300&h=300&fit=crop", tags: ["Chaqueta", "Casual", "Invierno", "Marrón"], description: "Chaqueta marrón de cuero, perfecta para otoño", favorite: true },
  { id: "2", name: "Top negro", image: "https://images.unsplash.com/photo-1562157873-818bc0726f68?w=300&h=300&fit=crop", tags: ["Top", "Casual", "Verano", "Negro"], description: "Top básico negro de tirantes", favorite: false },
  { id: "3", name: "Sudadera oscura", image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=300&h=300&fit=crop", tags: ["Sudadera", "Casual", "Invierno", "Negro"], description: "Sudadera oversize negra", favorite: true },
  { id: "4", name: "Pantalón negro", image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=300&h=300&fit=crop", tags: ["Pantalón", "Casual", "Todo el año", "Negro"], description: "Pantalón de vestir negro", favorite: false },
  { id: "5", name: "Vaquero azul", image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=300&h=300&fit=crop", tags: ["Vaquero", "Casual", "Verano", "Azul"], description: "Vaquero azul clarito, con un roto en la parte de atras, comprado en Zara", favorite: true },
  { id: "6", name: "Zapatillas rosa", image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=300&h=300&fit=crop", tags: ["Zapatillas", "Casual", "Todo el año", "Rosa"], description: "Zapatillas deportivas rosas", favorite: false },
]

// Other users data for profile viewing
export const otherUsers: Record<string, {
  id: string
  username: string
  avatar: string
  posts: number
  followers: number
  following: boolean
  postImages: string[]
}> = {
  saabiigg: {
    id: "2",
    username: "saabiigg",
    avatar: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ENTRAR%20EN%20OTRO%20PERFIL%20siguiendolo-ECbR57rhDqlThfoUFm63zaWr7bEBIa.png",
    posts: 12,
    followers: 99,
    following: true,
    postImages: [
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=300&h=300&fit=crop",
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=300&h=300&fit=crop",
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=300&h=300&fit=crop",
      "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=300&h=300&fit=crop",
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=300&h=300&fit=crop",
      "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?w=300&h=300&fit=crop",
      "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=300&h=300&fit=crop",
      "https://images.unsplash.com/photo-1475180098004-ca77a66827be?w=300&h=300&fit=crop",
      "https://images.unsplash.com/photo-1502716119720-b23a1e3b2bf5?w=300&h=300&fit=crop",
    ],
  },
  lorenaa: {
    id: "3",
    username: "lorenaa",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    posts: 8,
    followers: 156,
    following: false,
    postImages: [
      "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=300&h=300&fit=crop",
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=300&h=300&fit=crop",
      "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?w=300&h=300&fit=crop",
    ],
  },
}

export const exploreImages = [
  "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=300&h=400&fit=crop",
  "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=300&h=400&fit=crop",
  "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=300&h=400&fit=crop",
  "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=300&h=400&fit=crop",
  "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=300&h=400&fit=crop",
  "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?w=300&h=400&fit=crop",
  "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=300&h=400&fit=crop",
  "https://images.unsplash.com/photo-1475180098004-ca77a66827be?w=300&h=400&fit=crop",
  "https://images.unsplash.com/photo-1502716119720-b23a1e3b2bf5?w=300&h=400&fit=crop",
  "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=300&h=400&fit=crop",
  "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=300&h=400&fit=crop",
  "https://images.unsplash.com/photo-1581044777550-4cfa60707998?w=300&h=400&fit=crop",
]

export const notifications = {
  followRequests: { username: "saraaaarribas_", count: 12 },
  today: [
    { id: "1", type: "like" as const, users: ["saabiigg", "4 personas"], avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face", postImage: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=100&h=100&fit=crop", text: "a saabiigg y a 4 personas les ha gustado tu publicación" },
    { id: "2", type: "like" as const, users: ["mariialop_"], avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face", postImage: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=100&h=100&fit=crop", text: "a mariialop_ y le ha gustado tu publicacion" },
  ],
  lastWeek: [
    { id: "3", type: "follow" as const, users: ["lorenaa"], avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face", text: "lorenaa ha comenzado a seguirte" },
    { id: "4", type: "like" as const, users: ["nxxv.bq", "22 personas más"], avatar: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=100&h=100&fit=crop&crop=face", postImage: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=100&h=100&fit=crop", text: "a nxxv.bq y a 22 personas más le has gustado tu historia" },
    { id: "5", type: "save" as const, users: ["saabiigg"], avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face", postImage: "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=100&h=100&fit=crop", text: "saabiigg se ha guardado tu publicación" },
    { id: "6", type: "follow" as const, users: ["heelemartinn"], avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=100&h=100&fit=crop&crop=face", text: "heelemartinn ha comenzado a seguirte" },
  ],
}

export const searchUsers = [
  { id: "1", username: "lorenaa", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face" },
  { id: "2", username: "saabiigg", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face" },
  { id: "3", username: "mariialop_", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face" },
]

export const tagCategories = {
  "Tipo de prenda": ["Falda", "Camiseta", "Top", "Jersey", "Pantalón", "Vestido", "Chaqueta", "Sudadera", "Zapatillas", "Botas", "Abrigo", "Tacones", "Chandal", "Vaquero"],
  "Temporada": ["Verano", "Invierno", "Entretiempo", "Todo el año"],
  "Ocasion": ["Casual", "Formal", "Fiesta", "Deporte", "Trabajo"],
  "Estilo": ["Clásico", "Moderno", "Vintage", "Deportivo", "Elegante"],
  "Colores": ["Azul", "Negro", "Blanco", "Beige", "Amarillo", "Gris", "Marrón", "Rojo", "Granate", "Morado", "Verde", "Rosa", "Naranja"],
}

// Saved posts from other users
export const savedPosts = [
  "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=300&h=300&fit=crop",
  "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=300&h=300&fit=crop",
  "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=300&h=300&fit=crop",
]
