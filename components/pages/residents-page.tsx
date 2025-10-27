"use client"

import { useState, useMemo } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { ChevronLeft, ChevronRight } from "lucide-react"

export function ResidentsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 20

  const allResidents = [
    {
      id: 1,
      name: "John Smith",
      email: "john.smith@email.com",
      phone: "(555) 123-4567",
      property: "Riverside Apartments",
      unit: "12A",
      moveInDate: "2023-06-15",
      status: "Active",
    },
    {
      id: 2,
      name: "Sarah Johnson",
      email: "sarah.j@email.com",
      phone: "(555) 234-5678",
      property: "Green Valley Housing",
      unit: "5B",
      moveInDate: "2022-03-20",
      status: "Active",
    },
    {
      id: 3,
      name: "Michael Chen",
      email: "mchen@email.com",
      phone: "(555) 345-6789",
      property: "Downtown Residences",
      unit: "23C",
      moveInDate: "2024-01-10",
      status: "Active",
    },
    {
      id: 4,
      name: "Emily Rodriguez",
      email: "emily.r@email.com",
      phone: "(555) 456-7890",
      property: "Riverside Apartments",
      unit: "8F",
      moveInDate: "2023-09-05",
      status: "Active",
    },
    {
      id: 5,
      name: "David Williams",
      email: "dwilliams@email.com",
      phone: "(555) 567-8901",
      property: "Northside Complex",
      unit: "15D",
      moveInDate: "2022-11-12",
      status: "Inactive",
    },
    {
      id: 6,
      name: "Jessica Martinez",
      email: "jmartinez@email.com",
      phone: "(555) 678-9012",
      property: "Westside Towers",
      unit: "7G",
      moveInDate: "2023-04-08",
      status: "Active",
    },
    {
      id: 7,
      name: "Robert Taylor",
      email: "rtaylor@email.com",
      phone: "(555) 789-0123",
      property: "Eastside Manor",
      unit: "19H",
      moveInDate: "2022-08-22",
      status: "Active",
    },
    {
      id: 8,
      name: "Amanda Brown",
      email: "abrown@email.com",
      phone: "(555) 890-1234",
      property: "Central Park Housing",
      unit: "11I",
      moveInDate: "2023-11-30",
      status: "Active",
    },
    {
      id: 9,
      name: "Christopher Lee",
      email: "clee@email.com",
      phone: "(555) 901-2345",
      property: "Sunset Gardens",
      unit: "6J",
      moveInDate: "2024-02-14",
      status: "Active",
    },
    {
      id: 10,
      name: "Michelle Davis",
      email: "mdavis@email.com",
      phone: "(555) 012-3456",
      property: "Hillside Residences",
      unit: "25K",
      moveInDate: "2023-07-19",
      status: "Active",
    },
    {
      id: 11,
      name: "James Wilson",
      email: "jwilson@email.com",
      phone: "(555) 123-4568",
      property: "Lakeside Apartments",
      unit: "14L",
      moveInDate: "2022-05-10",
      status: "Active",
    },
    {
      id: 12,
      name: "Lisa Anderson",
      email: "landerson@email.com",
      phone: "(555) 234-5679",
      property: "Mountain View Complex",
      unit: "3M",
      moveInDate: "2023-12-01",
      status: "Active",
    },
    {
      id: 13,
      name: "Daniel Thomas",
      email: "dthomas@email.com",
      phone: "(555) 345-6790",
      property: "Valley Heights",
      unit: "9N",
      moveInDate: "2024-03-15",
      status: "Active",
    },
    {
      id: 14,
      name: "Karen Jackson",
      email: "kjackson@email.com",
      phone: "(555) 456-7891",
      property: "Riverside Park",
      unit: "20O",
      moveInDate: "2022-09-25",
      status: "Inactive",
    },
    {
      id: 15,
      name: "Mark White",
      email: "mwhite@email.com",
      phone: "(555) 567-8902",
      property: "Meadow Lane Housing",
      unit: "4P",
      moveInDate: "2023-10-12",
      status: "Active",
    },
    {
      id: 16,
      name: "Patricia Harris",
      email: "pharris@email.com",
      phone: "(555) 678-9013",
      property: "Sunset Ridge",
      unit: "16Q",
      moveInDate: "2023-01-20",
      status: "Active",
    },
    {
      id: 17,
      name: "Steven Martin",
      email: "smartin@email.com",
      phone: "(555) 789-0124",
      property: "Brookside Manor",
      unit: "8R",
      moveInDate: "2024-04-05",
      status: "Active",
    },
    {
      id: 18,
      name: "Nancy Garcia",
      email: "ngarcia@email.com",
      phone: "(555) 890-1235",
      property: "Parkside Towers",
      unit: "22S",
      moveInDate: "2023-06-30",
      status: "Active",
    },
    {
      id: 19,
      name: "Paul Robinson",
      email: "probinson@email.com",
      phone: "(555) 901-2346",
      property: "Creekside Apartments",
      unit: "10T",
      moveInDate: "2022-12-08",
      status: "Active",
    },
    {
      id: 20,
      name: "Sandra Clark",
      email: "sclark@email.com",
      phone: "(555) 012-3457",
      property: "Woodland Heights",
      unit: "17U",
      moveInDate: "2023-08-14",
      status: "Active",
    },
    {
      id: 21,
      name: "Kevin Rodriguez",
      email: "krodriguez@email.com",
      phone: "(555) 123-4569",
      property: "Stonegate Complex",
      unit: "2V",
      moveInDate: "2024-01-22",
      status: "Active",
    },
    {
      id: 22,
      name: "Donna Lewis",
      email: "dlewis@email.com",
      phone: "(555) 234-5680",
      property: "Clearwater Residences",
      unit: "13W",
      moveInDate: "2023-05-17",
      status: "Active",
    },
  ]

  const filteredResidents = useMemo(
    () =>
      allResidents.filter(
        (resident) =>
          resident.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          resident.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
          resident.property.toLowerCase().includes(searchTerm.toLowerCase()),
      ),
    [searchTerm],
  )

  const totalPages = Math.ceil(filteredResidents.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const paginatedResidents = filteredResidents.slice(startIndex, startIndex + itemsPerPage)

  const handleAddResident = () => {
    alert("Add Resident functionality - would open a form to add new resident")
  }

  const handleViewProfile = (residentId: number) => {
    alert(`View Profile for resident ${residentId}`)
  }

  const handleContact = (residentId: number) => {
    alert(`Contact resident ${residentId}`)
  }

  return (
    <main className="p-4 md:p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">Residents</h1>
        <p className="text-muted-foreground">View occupants with their names and details</p>
      </div>

      {/* Search */}
      <div className="flex flex-col md:flex-row gap-4">
        <Input
          placeholder="Search by name, email, or property..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex-1"
        />
        <Button className="bg-primary hover:bg-primary/90" onClick={handleAddResident}>
          Add Resident
        </Button>
      </div>

      <div className="overflow-x-auto border border-border rounded-lg">
        <table className="w-full">
          <thead className="bg-muted border-b border-border">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Name</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Email</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Phone</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Property</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Unit</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Move-in Date</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Status</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Actions</th>
            </tr>
          </thead>
          <tbody>
            {paginatedResidents.map((resident) => (
              <tr key={resident.id} className="border-b border-border hover:bg-muted/50 transition-colors">
                <td className="px-6 py-4 text-sm font-medium text-foreground">{resident.name}</td>
                <td className="px-6 py-4 text-sm text-muted-foreground">{resident.email}</td>
                <td className="px-6 py-4 text-sm text-muted-foreground">{resident.phone}</td>
                <td className="px-6 py-4 text-sm text-foreground">{resident.property}</td>
                <td className="px-6 py-4 text-sm text-foreground">{resident.unit}</td>
                <td className="px-6 py-4 text-sm text-muted-foreground">{resident.moveInDate}</td>
                <td className="px-6 py-4 text-sm">
                  <Badge variant={resident.status === "Active" ? "default" : "secondary"}>{resident.status}</Badge>
                </td>
                <td className="px-6 py-4 text-sm space-x-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="bg-transparent"
                    onClick={() => handleViewProfile(resident.id)}
                  >
                    Profile
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="bg-transparent"
                    onClick={() => handleContact(resident.id)}
                  >
                    Contact
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex items-center justify-between">
        <p className="text-sm text-muted-foreground">
          Showing {startIndex + 1} to {Math.min(startIndex + itemsPerPage, filteredResidents.length)} of{" "}
          {filteredResidents.length} residents
        </p>
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
            <ChevronLeft className="w-4 h-4" />
            Previous
          </Button>
          <div className="flex items-center gap-2">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <Button
                key={page}
                variant={currentPage === page ? "default" : "outline"}
                size="sm"
                onClick={() => setCurrentPage(page)}
                className={currentPage === page ? "bg-primary hover:bg-primary/90" : ""}
              >
                {page}
              </Button>
            ))}
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
          >
            Next
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </main>
  )
}
