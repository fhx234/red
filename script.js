<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>多功能互动页面</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background: linear-gradient(135deg, #ff9a9e 0%, #fad0c4 100%);
            color: #333;
        }

        header {
            background: #333;
            color: #fff;
            padding: 10px 0;
            text-align: center;
        }

        nav {
            background: #444;
            padding: 10px 0;
        }

        nav ul {
            list-style-type: none;
            padding: 0;
            margin: 0;
            display: flex;
            justify-content: center;
        }

        nav ul li {
            margin: 0 15px;
        }

        nav ul li a {
            color: #fff;
            text-decoration: none;
            font-weight: bold;
            transition: color 0.3s ease;
        }

        nav ul li a:hover {
            color: #ff6b6b;
        }

        .dropdown {
            position: relative;
            display: inline-block;
        }

        .dropbtn {
            background-color: #4CAF50;
            color: white;
            padding: 16px;
            font-size: 16px;
            border: none;
            cursor: pointer;
        }

        .dropdown-content {
            display: none;
            position: absolute;
            background-color: #f9f9f9;
            min-width: 160px;
            box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
            z-index: 1;
        }

        .dropdown-content a {
            color: black;
            padding: 12px 16px;
            text-decoration: none;
            display: block;
        }

        .dropdown-content a:hover {
            background-color: #f1f1f1;
        }

        .dropdown:hover .dropdown-content {
            display: block;
        }

        .dropdown:hover .dropbtn {
            background-color: #3e8e41;
        }

        .carousel {
            position: relative;
            overflow: hidden;
            height: 400px;
        }

        .carousel img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        .carousel .prev, .carousel .next {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            cursor: pointer;
            color: #fff;
            font-size: 2em;
            padding: 10px;
            background: rgba(0, 0, 0, 0.5);
            border-radius: 50%;
        }

        .carousel .prev {
            left: 10px;
        }

        .carousel .next {
            right: 10px;
        }

        .cards {
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            gap: 20px;
            padding: 20px;
        }

        .card {
            background: #fff;
            border-radius: 10px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            width: 300px;
            padding: 20px;
            text-align: center;
            transition: transform 0.3s ease;
        }

        .card:hover {
            transform: scale(1.05);
        }

        .card h3 {
            margin: 0 0 10px;
        }

        .card p {
            color: #777;
        }

        .card i {
            font-size: 2em;
            color: #ff6b6b;
            margin-bottom: 10px;
        }

        footer {
            background: #333;
            color: #fff;
            text-align: center;
            padding: 10px 0;
            margin-top: 20px;
        }

        /* 弹窗样式 */
        .popup {
            display: none;
            position: fixed;
            z-index: 1;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            overflow: auto;
            background-color: rgb(0,0,0);
            background-color: rgba(0,0,0,0.4);
            align-items: center;
            justify-content: center;
        }

        .popup-content {
            background-color: #fefefe;
            margin: 15% auto;
            padding: 20px;
            border: 1px solid #888;
            width: 80%;
            max-width: 500px;
            border-radius: 10px;
            text-align: center;
        }

        .popup-content h2 {
            margin: 0 0 10px;
        }

        .popup-content p {
            margin: 10px 0;
        }

        .popup-content button {
            background-color: #4CAF50;
            color: white;
            padding: 10px 20px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
        }

        .popup-content button:hover {
            background-color: #45a049;
        }

        /* 滚动到顶部按钮 */
        .scroll-to-top {
            display: none;
            position: fixed;
            bottom: 20px;
            right: 20px;
            background-color: #4CAF50;
            color: white;
            padding: 10px;
            border: none;
            border-radius: 50%;
            cursor: pointer;
            font-size: 16px;
        }

        .scroll-to-top:hover {
            background-color: #45a049;
        }
    </style>
</head>
<body>
    <header>
        <h1>多功能互动页面</h1>
    </header>

    <nav>
        <ul>
            <li><a href="#">首页</a></li>
            <li><a href="#">关于我们</a></li>
            <li><a href="#">服务</a></li>
            <li class="dropdown">
                <button class="dropbtn">更多选项</button>
                <div class="dropdown-content">
                    <a href="#">选项1</a>
                    <a href="#">选项2</a>
                    <a href="#">选项3</a>
                </div>
            </li>
            <li><a href="#" onclick="learnMore()">了解更多</a></li>
        </ul>
    </nav>

    <div class="carousel">
        <img src="https://via.placeholder.com/1200x400?text=Image+1" alt="Image 1">
        <span class="prev" onclick="changeSlide(-1)">&#10094;</span>
        <span class="next" onclick="changeSlide(1)">&#10095;</span>
    </div>

    <div class="cards">
        <div class="card">
            <i class="fas fa-lightbulb"></i>
            <h3>创意无限</h3>
            <p>激发您的创造力，带来无限可能。</p>
        </div>
        <div class="card">
            <i class="fas fa-code"></i>
            <h3>代码世界</h3>
            <p>探索编程的魅力，编写未来的代码。</p>
        </div>
        <div class="card">
            <i class="fas fa-paint-brush"></i>
            <h3>设计之美</h3>
            <p>用设计装点生活，创造美好未来。</p>
        </div>
    </div>

    <form id="contactForm">
        <h2>联系我们</h2>
        <label for="name">姓名:</label>
        <input type="text" id="name" name="name" required>
        <label for="email">邮箱:</label>
        <input type="email" id="email" name="email" required>
        <label for="message">消息:</label>
        <textarea id="message" name="message" required></textarea>
        <button type="submit">提交</button>
    </form>

    <footer>
        <p>© 2024 多功能互动页面 | 保留所有权利</p>
    </footer>

    <div id="popup" class="popup">
        <div class="popup-content">
            <h2 id="popup-title"></h2>
            <p id="popup-text"></p>
            <button onclick="closePopup()">关闭</button>
        </div>
    </div>

    <button id="scrollToTop" class="scroll-to-top" onclick="scrollToTop()">↑</button>

    <script>
        function learnMore() {
            showPopup("感谢您的兴趣！", "敬请期待更多内容。");
        }

        document.getElementById("contactForm").addEventListener("submit", function(event) {
            event.preventDefault();
            const name = document.getElementById("name").value;
            const email = document.getElementById("email").value;
            const message = document.getElementById("message").value;

            if (name && email && message) {
                showPopup("感谢您的联系我们！", `您的信息已提交成功。\n姓名: ${name}\n邮箱: ${email}`);
                document.getElementById("contactForm").reset();
            } else {
                alert("请填写所有必填项。");
            }
        });

        let slideIndex = 1;
        showSlides(slideIndex);

        function changeSlide(n) {
            showSlides(slideIndex += n);
        }

        function showSlides(n) {
            const slides = document.querySelectorAll('.carousel img');
            if (n > slides.length) { slideIndex = 1 }
            if (n < 1) { slideIndex = slides.length }
            slides.forEach(img => img.style.display = "none");
            slides[slideIndex - 1].style.display = "block";
        }

        function showPopup(title, text) {
            const popup = document.getElementById('popup');
            document.getElementById('popup-title').innerText = title;
            document.getElementById('popup-text').innerText = text;
            popup.style.display = 'flex'; // 显示弹窗
        }

        function closePopup() {
            const popup = document.getElementById('popup');
            popup.style.display = 'none'; // 隐藏弹窗
        }

        function scrollToTop() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        window.addEventListener('scroll', function() {
            const scrollToTopButton = document.getElementById('scrollToTop');
            if (window.pageYOffset > 200) {
                scrollToTopButton.style.display = 'block';
            } else {
                scrollToTopButton.style.display = 'none';
            }
        });
    </script>
</body>
</html>
