import { SearchIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ButtonGroup } from "@/components/ui/button-group"
import { Input } from "@/components/ui/input"

export function Searchbar() {
  return (
    <ButtonGroup className="w-full max-w-md rounded-lg border border-[#A8ABBD] p-1 h-auto ">
      <Input
        placeholder="Search your Tasks here..."
        className="border-none shadow-none focus-visible:ring-0 h-9 text-sm rounded-md px-4"
      />
      <Button
        variant="ghost"
        aria-label="Search"
        className="cursor-pointer rounded-md h-9 w-9 p-0 shrink-0"
      >
        <SearchIcon className="size-4" />
      </Button>
    </ButtonGroup>
  )
}