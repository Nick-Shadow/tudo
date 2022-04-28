struct User {
	id: String,
	username: String,
	email: String,
	password: String,
}

impl User {
		fn new(name: &str, email: &str, password: &str) -> User {
			return User {
				id: String::from("123"),
				username: name.to_string(),
				email: email.to_string(),
				password: password.to_string(),
			}
		}
}