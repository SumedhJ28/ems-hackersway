import AdminLayout from "@/components/layout/AdminLayout"
import AnnouncementList from "@/components/dashboard/AnnouncementList"

export default function AnnouncementsPage() {
  return (
    <AdminLayout>
      <h2 className="mb-6 text-3xl font-bold">Announcements</h2>
      <AnnouncementList />
    </AdminLayout>
  )
}
