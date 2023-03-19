import { useState, useEffect, useRef } from 'react'
import axios from 'axios'

export default function UserList() {
	const [users, setUsers] = useState([])
	const [filter, setFilter] = useState({})

	useEffect(() => {
		if (filter.value) {
			axios.get('https://dummyjson.com/users/filter?key=' + filter.key  + "&value=" + filter.value)
			.then(response => {
				setUsers(response.data.users)
			})
			.catch( e => console.log(e));
		} else {
			axios.get('https://dummyjson.com/users')
			.then(response => {
				setUsers(response.data.users)
			}).catch(error => {
				console.log(error)
			})
		}

	}, [filter])

  return (
	<div className="coin-table area">
		<Filter setFilter={setFilter}></Filter>
		<Table users={users}></Table>
	</div>
  )
}

function Filter({setFilter}){
	const e = useRef();
	const [formData, setFormData] = useState("");
	// multi keyde dummyjson api nasıl çalışır bulamadığım için böyle bir hardcode yaptım
	const [limit, setLimit] = useState({name : 'age', type : "number" });
	const allFilters = [{name : 'age', type : "number" }, {name : 'firstName', type : "text"}, {name : 'lastName', type : "text"}, {name : 'email', type : "email"}, {name : 'birthDate', type : "date"}];
	const [count, setCount] = useState(1);

	function filterBox (){
		e.current.classList.toggle("opened")
	}

	function handleChange(event) {
		setFormData(event.target.value);
	}

	function handleFilter(event){
		setLimit(allFilters[count]);
		setCount(count + 1);
		if (count === allFilters.length - 1) {
			setCount(0);
		}
	}


	function handleSubmit(event){
		event.preventDefault();
		setFilter({key : limit.name, value : formData});
	}

	return (
		<div className="section-title title title--normal title--primary-1">
			<h2>
				User List 
			</h2>
			<div className="filter">
				<div className="filter-button" onClick={filterBox}>
					<i className="icon-filter"></i>
				</div>
				<form ref={e} className="filter-box" onSubmit={handleSubmit}>
					<div className="title title--small title--primary-1">Filter</div>
					<div className='f-row'>
						<div className='btn btn-secondary' style={{width : "100%", backgroundColor : "#e9e9ed", borderColor: "#e9e9ed", color:  "#181819"}} onClick={handleFilter}>Next Filter</div>
					</div>
					<FilterDiv limit={limit} handleChange={handleChange}></FilterDiv>
					<div className="f-row">
						<button className="bttn--primary-1">Listele</button>
					</div>
				</form>
			</div>
		</div>
	)
}

function FilterDiv({limit, handleChange}){
	const capitalize = limit.name.charAt(0).toUpperCase() + limit.name.slice(1);

	return(
		//key input sıfırlanması için
		<div key={limit.name} className="f-row">
			<div className="input-wrap">
				<label htmlFor={limit.name}>{capitalize}</label>
				<input type={limit.type} placeholder={capitalize} id={limit.name} name={limit.name} onChange={handleChange} />
			</div>
		</div>
	)
};

function Table({users}) {

	const data = users.map(user => {
		return (
			<TableBody key={user.id} user={user}></TableBody>
			)
		})

	return (
		<div className="content-table">
		<table>
			<thead>
				<tr>
					<th>
						<div>ID</div>
					</th>

					<th>
						<div>Fullname</div>
					</th>

					<th>
						<div>Age</div>
					</th>

					<th>
						<div>Birth Date</div>
					</th>

					<th>
						<div>Gender</div>
					</th>
					<th>
						<div>Email</div>
					</th>
					<th>
						<div></div>
					</th>
				</tr>
			</thead>
			{data}
		</table>
	</div>
	)
}

function TableBody({user}){

	function UserDelete(){
		axios.delete('https://dummyjson.com/users/' + user.id)
		.then(response => {
			console.log(response)
		}).catch(error => {
			console.log(error)
		})
	}

	return (
		<tbody>
			<tr>
				<td>{user.id}</td>
				<td>{user.firstName + " "  + user.lastName}</td>
				<td>{user.age}</td>
				<td>{user.birthDate}</td>
				<td>{user.gender}</td>
				<td>{user.email}</td>
				<td> <button className="bttn--primary-1--outline bttn--mini" onClick={UserDelete}>Delete User</button></td>
			</tr>
		</tbody>
	)
}
