import React from 'react'
import AddUser from './AddUser'
import UserList from './UserList'

export default function Home() {
  return (
		<div className="container">
			<section style={{display : "block"}} className="transactions-crypto-lodgement-area">
				<div className="coin-area">
					<AddUser />
					<UserList />
				</div>
			</section>
		</div>
  )
}
