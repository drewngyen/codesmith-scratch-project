## Database SQL Examples
- be sure to use double quotes for columns, 

```

CREATE TABLE users (
  _id serial PRIMARY KEY,
  username VARCHAR(80) UNIQUE NOT NULL,
  name VARCHAR(100) NOT NULL,
  notes TEXT,
  interests TEXT
);
```
```
// TABLE NAME AND KEYS MUST BE IN DOUBLE QUOTE
// check CANNOT be used as key name
CREATE TABLE gifts (
	_id serial PRIMARY KEY,
  u_name VARCHAR(80) REFERENCES users(username) NOT NULL,
  gift varchar(255) NOT NULL,
  completed BOOLEAN NOT NULL
  );
  u_id INTEGER REFERENCES users(_id),
```
```
CREATE TABLE interests (
	_id serial PRIMARY KEY,
	u_id INTEGER REFERENCES users(_id),
  interest varchar(255) NOT NULL
);
```
```
CREATE TABLE notes (
	_id serial PRIMARY KEY,
	u_id INTEGER REFERENCES users(_id),
  note TEXT NOT NULL
);
```