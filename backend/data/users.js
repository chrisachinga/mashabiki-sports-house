import bcrypt from 'bcryptjs'

const users = [
	{
		name: 'Admin User',
		email: 'admin@email.com',
		phone: '123456789',
		password: bcrypt.hashSync('123456', 10),
		isAdmin: true,
	},
	{
		name: 'John Doe',
		email: 'john@email.com',
		phone: '987654425',
		password: bcrypt.hashSync('123456', 10),
	},
	{
		name: 'Jane Doe',
		email: 'jane@email.com',
		phone: '464828123',
		password: bcrypt.hashSync('123456', 10),
	},
]

export default users
