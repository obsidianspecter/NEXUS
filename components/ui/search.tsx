"use client"

import { Search } from "lucide-react"
import { Input } from "./input"

export function SearchBar() {
  return (
    <div className="relative">
      <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
      <Input placeholder="Search articles..." className="pl-8" />
    </div>
  )
}

