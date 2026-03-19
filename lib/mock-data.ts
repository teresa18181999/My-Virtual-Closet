// Mock data for MyVirtualCloset app

// Default pink avatar for all users
const defaultAvatar = "/images/default-avatar.png"

export const currentUser = {
  id: "1",
  username: "teresapedrero__",
  avatar: defaultAvatar,
  posts: 12,
  followers: 99,
}

export const stories = [
  { id: "1", username: "teresapedrero__", avatar: defaultAvatar, hasNew: true, storyImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/VER%20HISTORIA%20OOTD-Bqub96ME3lVVqfDdNlZLXNwEoRTpxK.png" },
  { id: "2", username: "saabiigg", avatar: defaultAvatar, hasNew: true, storyImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/VER%20HISTORIA%20OOTD%20%281%29-Aw36B2jUmHDqGc153Q7AWkqLDu6jyF.png" },
]

// New outfit images
const outfitImages = {
  grayHenley: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-RrJLC0babj6XyFrvFvTbhmhYvZIuEB.png",
  adidasShorts: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-eXIcXdG6kvWbT82BtNAxBzfVbQRz5D.png",
  whiteCropBrick: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-mtgaTLF1QYcTpCqw0vPXltgSvV23CN.png",
  whiteTeeBlue: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-EpjyNdyR3K4xBocL4SMNG3RfxUbfv7.png",
}

export const feedPosts = [
  {
    id: "1",
    username: "saabiigg",
    avatar: defaultAvatar,
    image: outfitImages.grayHenley,
    likes: 1111,
    liked: false,
    saved: false,
  },
  {
    id: "2",
    username: "teresapedrero__",
    avatar: defaultAvatar,
    image: outfitImages.whiteCropBrick,
    likes: 432,
    liked: true,
    saved: false,
  },
  {
    id: "3",
    username: "lorenaa",
    avatar: defaultAvatar,
    image: outfitImages.whiteTeeBlue,
    likes: 256,
    liked: false,
    saved: true,
  },
]

export const profilePosts = [
  outfitImages.grayHenley,
  outfitImages.adidasShorts,
  outfitImages.whiteCropBrick,
  outfitImages.whiteTeeBlue,
  outfitImages.grayHenley,
  outfitImages.whiteCropBrick,
  outfitImages.adidasShorts,
  outfitImages.whiteTeeBlue,
  outfitImages.grayHenley,
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
      outfitImages.whiteTeeBlue,
    ],
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
      outfitImages.grayHenley,
    ],
  },
}

export const exploreImages = [
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
  outfitImages.whiteTeeBlue,
]

// Follow requests list
export const followRequests = [
  { id: "1", username: "saraaaarribas_", avatar: defaultAvatar },
  { id: "2", username: "carlaaa_99", avatar: defaultAvatar },
  { id: "3", username: "paula.martinez", avatar: defaultAvatar },
  { id: "4", username: "lucia_gm", avatar: defaultAvatar },
  { id: "5", username: "marta.lopez_", avatar: defaultAvatar },
  { id: "6", username: "andreea.pop", avatar: defaultAvatar },
  { id: "7", username: "sofiaa_rr", avatar: defaultAvatar },
  { id: "8", username: "claaraa.22", avatar: defaultAvatar },
  { id: "9", username: "irene_dv", avatar: defaultAvatar },
  { id: "10", username: "albaa_mg", avatar: defaultAvatar },
  { id: "11", username: "noelia.castro", avatar: defaultAvatar },
  { id: "12", username: "lauraa_ps", avatar: defaultAvatar },
  { id: "13", username: "martaa.fg", avatar: defaultAvatar },
]

// Followers list for current user
export const followersList = [
  { id: "1", username: "saabiigg", avatar: defaultAvatar, isFollowing: true },
  { id: "2", username: "lorenaa", avatar: defaultAvatar, isFollowing: false },
  { id: "3", username: "mariialop_", avatar: defaultAvatar, isFollowing: true },
  { id: "4", username: "carmennn_r", avatar: defaultAvatar, isFollowing: false },
  { id: "5", username: "anaa.garcia", avatar: defaultAvatar, isFollowing: true },
]

// Followers for other users
export const otherUsersFollowers: Record<string, { id: string; username: string; avatar: string; isFollowing: boolean }[]> = {
  saabiigg: [
    { id: "1", username: "teresapedrero__", avatar: defaultAvatar, isFollowing: false },
    { id: "2", username: "lorenaa", avatar: defaultAvatar, isFollowing: false },
    { id: "3", username: "mariialop_", avatar: defaultAvatar, isFollowing: true },
  ],
  lorenaa: [
    { id: "1", username: "saabiigg", avatar: defaultAvatar, isFollowing: true },
    { id: "2", username: "teresapedrero__", avatar: defaultAvatar, isFollowing: false },
  ],
}

export const notifications = {
  followRequests: { username: "saraaaarribas_", count: 13 },
  today: [
    { id: "1", type: "like" as const, users: ["saabiigg", "4 personas"], avatar: defaultAvatar, postImage: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=100&h=100&fit=crop", text: "a saabiigg y a 4 personas les ha gustado tu publicación" },
    { id: "2", type: "like" as const, users: ["mariialop_"], avatar: defaultAvatar, postImage: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=100&h=100&fit=crop", text: "a mariialop_ y le ha gustado tu publicacion" },
  ],
  lastWeek: [
    { id: "3", type: "follow" as const, users: ["lorenaa"], avatar: defaultAvatar, text: "lorenaa ha comenzado a seguirte" },
    { id: "4", type: "like" as const, users: ["nxxv.bq", "22 personas más"], avatar: defaultAvatar, postImage: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=100&h=100&fit=crop", text: "a nxxv.bq y a 22 personas más le has gustado tu historia" },
    { id: "5", type: "save" as const, users: ["saabiigg"], avatar: defaultAvatar, postImage: "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=100&h=100&fit=crop", text: "saabiigg se ha guardado tu publicación" },
    { id: "6", type: "follow" as const, users: ["heelemartinn"], avatar: defaultAvatar, text: "heelemartinn ha comenzado a seguirte" },
  ],
}

export const searchUsers = [
  { id: "1", username: "lorenaa", avatar: defaultAvatar },
  { id: "2", username: "saabiigg", avatar: defaultAvatar },
  { id: "3", username: "mariialop_", avatar: defaultAvatar },
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
