import {useState } from 'react'

export default function AddUser() {
	const [formData, setFormData] = useState({});

	const handleSubmit = (event) => {
	  event.preventDefault(); 
  
	  fetch('https://dummyjson.com/users/add', {
		method: 'POST',
		body: JSON.stringify(formData),
		headers: {
		  'Content-Type': 'application/json'
		}
	  }).then(res => res.json())
	  .then(console.log);
	};
  
	const handleChange = (event) => {
	  setFormData({ ...formData, [event.target.name]: event.target.value });
	};

  return (
	<div className="coin area">
		<div className="section-title title title--normal title--primary-1">
			<h2>Add User</h2>
		</div>
		<form className="coin__transactions" onSubmit={handleSubmit}>
			<div className="coin__content">
				<div className="f-row">
					<div className="input-wrap">
						<label htmlFor="first">Firstname</label>
						<input type="text" placeholder="Firstname" name='firstName' id='first' onChange={handleChange} required/>
					</div>
				</div>
				<div className="f-row">
					<div className="input-wrap">
						<label htmlFor="last">Lastname</label>
						<input type="text" placeholder="Lastname" name='lastName' id='last' onChange={handleChange} required/>
					</div>
				</div>
				<div className="f-row">
					<div className="input-wrap">
						<label htmlFor="age">Age</label>
						<input type="number" placeholder="Age" id="age" name='age' onChange={handleChange} required/>
					</div>
				</div>
				<div className="f-row">
					<div className="input-wrap">
						<label htmlFor="email">Email</label>
						<input type="email" placeholder="Email" id="email" name='email' onChange={handleChange} required/>
					</div>
				</div>
				<div className="f-row">
					<div className="input-wrap">
						<label htmlFor="birth">Birth</label>
						<input type="date" placeholder="Birth" id="birth" name='birthDate'  onChange={handleChange}/>
					</div>
				</div>
				<div className="f-row">
					<button className="bttn--primary-1 bttn__f-w" >
						Confirm
					</button>
				</div>
			</div>
		</form>
	</div>
  )
}
