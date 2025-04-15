USE foodie_app;

CREATE TABLE users (
  id BIGINT AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(50),
  last_name VARCHAR(50),
  email VARCHAR(100) UNIQUE,
  phone VARCHAR(20),
  address TEXT
);

CREATE TABLE restaurants (
  id BIGINT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100),
  location VARCHAR(255)
);

CREATE TABLE food_items (
  id BIGINT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100),
  description TEXT,
  price DECIMAL(10, 2),
  image_url TEXT,
  restaurant_id BIGINT,
  FOREIGN KEY (restaurant_id) REFERENCES restaurants(id)
);

CREATE TABLE orders (
  id BIGINT AUTO_INCREMENT PRIMARY KEY,
  user_id BIGINT,
  total_amount DECIMAL(10, 2),
  order_time DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE order_items (
  id INT AUTO_INCREMENT PRIMARY KEY,
  order_id BIGINT,
  food_item_id BIGINT,
  quantity BIGINT,
  FOREIGN KEY (order_id) REFERENCES orders(id),
  FOREIGN KEY (food_item_id) REFERENCES food_items(id)
);
