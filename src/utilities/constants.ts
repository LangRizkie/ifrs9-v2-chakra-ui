const routes = {
	crud: {
		create: '/create',
		update: '/update',
		view: '/view'
	},
	exception: {
		custom_view: '/custom_view',
		notification: '/notification',
		profile: '/profile',
		search: '/search'
	},
	forgot: '/forgot-password',
	login: '/',
	main: '/main'
}

const cookies = {
	credential: 'credential',
	refresh: 'refresh',
	session: 'session'
}

const storages = {
	histories: 'histories',
	username: 'username'
}

export { cookies, routes, storages }
