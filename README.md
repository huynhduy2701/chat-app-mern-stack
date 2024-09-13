Ở FE sử dụng vite với react
# npm create vite@latest .
chọn react và javascript

thoát ra ngoài tạo cái npm init -y
sau đó install express về 
# npm install express dotenv cookie-parser bcryptjs mongoose socket.io jsonwebtoken
Lệnh npm install express dotenv cookie-parser bcryptjs mongoose socket.io jsonwebtoken sẽ cài đặt một loạt các thư viện quan trọng trong Node.js. Dưới đây là giải thích chi tiết về từng thư viện và vai trò của chúng:

# Express:

Mục đích: Express là một framework web phổ biến cho Node.js, giúp tạo ra các ứng dụng web và API nhanh chóng và dễ dàng.
Chức năng: Nó cung cấp một bộ công cụ đơn giản để quản lý các yêu cầu HTTP, định tuyến URL, xử lý middleware, và nhiều chức năng khác để xây dựng server-side logic.

# dotenv:

Mục đích: dotenv giúp quản lý các biến môi trường trong ứng dụng bằng cách tải các biến từ tệp .env vào process.env.
Chức năng: Điều này giúp bảo mật thông tin nhạy cảm như API keys, thông tin kết nối cơ sở dữ liệu, và các cấu hình khác.
cookie-parser:

Mục đích: cookie-parser là middleware dùng để phân tích và xử lý cookies trong các yêu cầu HTTP.
Chức năng: Nó giúp dễ dàng đọc và ghi cookies từ phía server, cho phép quản lý phiên người dùng (session management) hiệu quả hơn.

# bcryptjs:

Mục đích: bcryptjs là một thư viện để mã hóa (hash) mật khẩu và kiểm tra tính hợp lệ của mật khẩu khi người dùng đăng nhập.
Chức năng: Nó giúp bảo mật mật khẩu của người dùng bằng cách mã hóa chúng trước khi lưu trữ vào cơ sở dữ liệu, giảm nguy cơ bị tấn công.

# mongoose:

Mục đích: mongoose là một Object Data Modeling (ODM) thư viện cho MongoDB và Node.js, giúp kết nối và tương tác với cơ sở dữ liệu MongoDB.
Chức năng: Nó cung cấp các schema và mô hình để xác định cấu trúc dữ liệu, xác thực, truy vấn và các thao tác cơ sở dữ liệu khác.

# socket.io:

Mục đích: socket.io là một thư viện giúp thiết lập giao tiếp hai chiều giữa client và server thông qua WebSockets.
Chức năng: Thư viện này rất hữu ích cho việc xây dựng các ứng dụng thời gian thực như chat, thông báo, hoặc cập nhật trạng thái trực tuyến.

# jsonwebtoken:

Mục đích: jsonwebtoken giúp tạo và xác thực JSON Web Tokens (JWT), một chuẩn để truyền thông tin an toàn giữa client và server.
Chức năng: JWT thường được dùng trong xác thực người dùng, bảo vệ các endpoint API, và quản lý phiên đăng nhập một cách bảo mật.
Kết hợp các thư viện này, bạn có thể xây dựng một ứng dụng web đầy đủ tính năng với khả năng xử lý backend mạnh mẽ, bảo mật, và khả năng mở rộng.
tải tiếp
# npm install nodemon --save-dev
  "server": "node back-end/server.js" thêm chữ nodemon vào thay thế node

ta sử dụng import thay vì const để sử dụng es6
# import express from "express";
Mục đích: Dòng này nhập thư viện Express sử dụng cú pháp import, là cú pháp của ES6 modules.
Tác dụng: Cho phép bạn truy cập tất cả các tính năng của Express, bao gồm việc tạo server, định nghĩa route, sử dụng middleware, và nhiều chức năng khác.

# giải thích file server.js
const express = require('express');
const dotenv = require('dotenv');
const app = express();
dotenv.config()
const PORT = process.env.PORT || 5000;

1. const express = require('express');
Mục đích: Đoạn mã này nhập (import) thư viện Express vào ứng dụng. Express là một framework web dành cho Node.js, cung cấp các công cụ và tính năng để xây dựng các ứng dụng web hoặc API một cách dễ dàng và hiệu quả.
2. const dotenv = require('dotenv');
Mục đích: Đoạn mã này nhập thư viện dotenv, cho phép ứng dụng tải các biến môi trường từ tệp .env. Các biến môi trường này thường chứa các thông tin nhạy cảm như cổng kết nối, thông tin cơ sở dữ liệu, hoặc các khóa API.
3. const app = express();
Mục đích: Khởi tạo một ứng dụng Express. app là một đối tượng đại diện cho ứng dụng web của bạn, nơi bạn có thể định nghĩa các route (đường dẫn), middleware, và các logic khác.
4. dotenv.config()
Mục đích: Đoạn mã này sẽ đọc các biến môi trường từ tệp .env và tải chúng vào process.env.
Chức năng: Điều này giúp bạn dễ dàng quản lý và bảo mật các cấu hình nhạy cảm mà không cần phải hard-code (viết trực tiếp) vào mã nguồn.
5. const PORT = process.env.PORT || 5000;
Mục đích: Đoạn mã này thiết lập cổng mà ứng dụng sẽ lắng nghe khi chạy. Nó sử dụng giá trị từ process.env.PORT nếu có (thường được cấu hình trong tệp .env hoặc bởi môi trường triển khai), hoặc mặc định là 5000 nếu không có.



=== mongodb ===
https://www.mongodb.com/
tạo tài khoản mongo rồi tạo project
sau khi tạo project xong vào Connect to Cluster0 để lấy thông tin điền vào .env của phần Add your connection string into your application code
sau đó điền mật khẩu vào 

# app.use(express.json());
app.use(express.json()) là một middleware được sử dụng trong Express.js để xử lý dữ liệu JSON từ các yêu cầu HTTP (thường là từ POST, PUT, PATCH)

# https://avatar-placeholder.iran.liara.run/ random avatar api

openssl rand -base64 32

FE
install tailwindcss # tailwindcss vite install
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
sử dụng daisyui để gọn css
npm i -D daisyui@latest





#env
PORT=5000
MONGO_DB_URL=mongodb+srv://nlhd2701:NblvXfbYCVjzICSt@cluster0.neoj2.mongodb.net/chat-app?retryWrites=true&w=majority&appName=Cluster0
JWT_SECRET=YEXYcRlB71NwuWu/XtnG44XQU6x3YjmWSQlc+F9+zGM=
NODE_ENV=development


fontend 
npm i react-router-dom

Trong React, Context được sử dụng để chia sẻ dữ liệu giữa các components mà không cần phải truyền props qua từng cấp của component tree. Điều này rất hữu ích khi bạn có dữ liệu hoặc trạng thái mà nhiều component cần truy cập mà không cần phải lồng quá sâu qua nhiều component con.

https://zustand.docs.pmnd.rs/getting-started/introduction
npm i socket.io-client