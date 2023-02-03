import CardCourse from "../../components/TeacherSide/CardCourse"
import "../../index.css"


const Dashboard = () => {
    return (
        <div className="h-screen">
            <div className="instructorMain bg-[#566bad] px-44 py-16">
                <h1 className="text-white text-4xl">List Class</h1>
            </div>
            <div className="px-44 py-16">
                <CardCourse/>
            </div>
        </div>
    )
}

export default Dashboard