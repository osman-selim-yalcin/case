import AddUser from './AddUser'
import UserList from './UserList'
import Home from './Home'
import { BrowserRouter, Route, Routes, Link} from "react-router-dom"

function App() {

  return (
    <div className="App">
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/addUser" element={<AddUser />} />
				<Route path="/userList" element={<UserList />} />
			</Routes>
		</BrowserRouter>
    </div>
  )
}

export default App
