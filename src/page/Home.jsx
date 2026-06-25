import { PageMeta } from "../common/PageMeta"
import { Header } from "../components/Header"
import './Home.css'

export const Home = () => {
    return (
        <>
            <PageMeta
                title="Home Page - Web Frontend React JS"
                description="This is the home page of the Web Frontend React JS application."
            />
            <Header />
            <main className="home">

                <section className="page-header">
                    <h1>Dashboard</h1>
                    <p>Overview of the learning platform</p>
                </section>

                <section className="stats-grid">

                    <div className="card red">
                        <span className="card-title">Courses</span>
                        <h2>12</h2>
                        <p className="card-description">
                            Total available courses
                        </p>
                        <span className="card-footer">
                            3 currently running
                        </span>
                    </div>

                    <div className="card yellow">
                        <span className="card-title">Sessions</span>
                        <h2>48</h2>
                        <p className="card-description">
                            Scheduled learning sessions
                        </p>
                        <span className="card-footer">
                            5 planned for today
                        </span>
                    </div>

                    <div className="card green">
                        <span className="card-title">Students</span>
                        <h2>198</h2>
                        <p className="card-description">
                            Active learners enrolled
                        </p>
                        <span className="card-footer">
                            +12 new this week
                        </span>
                    </div>

                    <div className="card blue">
                        <span className="card-title">Instructors</span>
                        <h2>18</h2>
                        <p className="card-description">
                            Certified instructors
                        </p>
                        <span className="card-footer">
                            2 currently online
                        </span>
                    </div>

                    <div className="card red">
                        <span className="card-title">Certificates</span>
                        <h2>154</h2>
                        <p className="card-description">
                            Certificates issued
                        </p>
                        <span className="card-footer">
                            8 pending approval
                        </span>
                    </div>

                    <div className="card yellow">
                        <span className="card-title">Attendance</span>
                        <h2>92%</h2>
                        <p className="card-description">
                            Average attendance rate
                        </p>
                        <span className="card-footer">
                            Above monthly target
                        </span>
                    </div>

                    <div className="card green">
                        <span className="card-title">Assessments</span>
                        <h2>86</h2>
                        <p className="card-description">
                            Completed evaluations
                        </p>
                        <span className="card-footer">
                            14 awaiting review
                        </span>
                    </div>

                    <div className="card blue">
                        <span className="card-title">Activity</span>
                        <h2>324</h2>
                        <p className="card-description">
                            Learning activities logged
                        </p>
                        <span className="card-footer">
                            Updated 5 minutes ago
                        </span>
                    </div>

                </section>

            </main>
        </>
    )
}
