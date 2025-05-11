const endpoints = {
	email: {
		notification_hub: '/email/NotificationHub',
		notification_noise_hub: '/email/NotificationNoiseHub',
		notification_setting_user: {
			get_user_settings_notification: '/email/GetUserSettingsNotification',
			update_user_settings_notification: '/email/UpdateUserSettingsNotification'
		},
		update: {
			all_read: '/email/Update/AllRead',
			is_read: '/email/Update/IsRead'
		},
		user: {
			notification: {
				list: '/email/User/Notification/List',
				paging: '/email/User/Notification/List/Paging'
			}
		}
	},
	parameter: {
		dropdown: {
			get_format_export_file: '/parameter/Dropdown/GetFormatExportFile',
			get_type_export_file: '/parameter/Dropdown/GetTypeExportFile'
		},
		general_search: '/parameter/GeneralSearch',
		general_search_module: '/parameter/GeneralSearchModule'
	},
	user: {
		common: {
			authenticate: '/user/Common/Authenticate',
			change_pass: '/user/Common/ChangePassword',
			get_all_navigation_screen: '/user/Common/GetAllNavigationScreen',
			get_lookup_custom_view: '/user/Common/GetLookupCustomView',
			get_navigation_screen: '/user/Common/GetNavigationScreen',
			get_user_property: '/user/Common/GetUserProperty',
			logout: '/user/Common/Logout',
			refresh_token: '/user/Common/RefreshToken'
		},
		screen: {
			get_path_url_screen: '/user/Screen/GetPathUrlScreen'
		},
		security_role: {
			get_privilege: '/user/SecurityRole/GetPrivilege'
		},
		update_user_profile: '/user/UpdateUserProfile'
	}
}

export default endpoints
