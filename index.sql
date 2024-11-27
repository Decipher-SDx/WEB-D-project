CREATE TABLE orders (
  id INT AUTO_INCREMENT PRIMARY KEY,
  customer_name VARCHAR(255),
  customer_email VARCHAR(255),
  total DECIMAL(10, 2),
  items TEXT, -- Store as JSON
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
