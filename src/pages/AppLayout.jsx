
import Map from "../components/AppNav"
import Sidebar from '../components/Sidebar'
import styles from "./Applayout.module.css"


function AppLayout() {
  return (
    <div className={styles.app}>
        <Sidebar />
        <Map />
    </div>
  )
}

export default AppLayout