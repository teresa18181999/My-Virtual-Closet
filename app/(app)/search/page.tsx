"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Search, X } from "lucide-react"
import { searchUsers, exploreImages } from "@/lib/mock-data"

export default function SearchPage() {
  const [query, setQuery] = useState("")
  const [showResults, setShowResults] = useState(false)

  const filteredUsers = searchUsers.filter((u) =>
    u.username.toLowerCase().includes(query.toLowerCase())
  )

  return (
    <div className="flex flex-col">
      {/* Search bar */}
      <div className="flex items-center gap-3 px-4 py-3">
        <div className="flex flex-1 items-center gap-2 rounded-lg bg-muted px-3 py-2.5">
          <Search className="h-5 w-5 text-muted-foreground" strokeWidth={1.5} />
          <input
            type="text"
            placeholder="Buscar"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value)
              setShowResults(e.target.value.length > 0)
            }}
            onFocus={() => setShowResults(true)}
            className="flex-1 bg-transparent text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
            aria-label="Buscar usuarios"
          />
        </div>
        {showResults && (
          <button
            onClick={() => {
              setQuery("")
              setShowResults(false)
            }}
            aria-label="Cerrar búsqueda"
          >
            <X className="h-6 w-6 text-foreground" strokeWidth={1.5} />
          </button>
        )}
      </div>

      {showResults ? (
        /* Search results */
        <div className="flex flex-col px-4">
          {filteredUsers.map((user) => (
            <Link key={user.id} href={`/profile/${user.username}`} className="flex items-center justify-between py-3 hover:opacity-70 transition-opacity">
              <div className="flex items-center gap-3">
                <Image
                  src={user.avatar}
                  alt={user.username}
                  width={40}
                  height={40}
                  className="h-10 w-10 rounded-full object-cover"
                />
                <span className="text-sm font-medium text-foreground">{user.username}</span>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        /* Explore grid */
        <div className="grid grid-cols-3 gap-0.5">
          {exploreImages.map((img, i) => (
            <Link key={i} href={`/posts/${i}`} className="relative aspect-[3/4]">
              <Image
                src={img}
                alt={`Explorar outfit ${i + 1}`}
                fill
                className="object-cover"
                sizes="33vw"
              />
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
