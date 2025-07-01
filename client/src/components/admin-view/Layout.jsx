import { Sidebar } from "lucide-react"
import { Outlet } from "react-router-dom"
import Header from "./Header"

function AdminLayout(){
    return(
        <div className="flex flex-col min-h-screen w-full">
           {/* Admin sidebar */}
              <Sidebar/>
            <div className="flex flex-1 flex-col">
                 <Header/>
               <main className="flex-1 flex bg-muted/40 p-4 md:p-6">
                  <Outlet/>
               </main>
            </div>
        </div>
    )
}

export default AdminLayout