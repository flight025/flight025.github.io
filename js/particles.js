<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>雪花特效</title>
    <style>
        body {
            margin: 0;
            padding: 0;
            overflow: hidden;
            background-color: #2a3d56;
        }

        .snowflake {
            position: absolute;
            top: -10px;
            z-index: 9999;
            user-select: none;
            font-size: 1.5em;
            color: #fff;
            pointer-events: none;
            animation: fall linear infinite;
        }

        @keyframes fall {
            to {
                transform: translateY(100vh);
            }
        }
    </style>
</head>
<body>

    <script>
        // 创建雪花
        function createSnowflake() {
            const snowflake = document.createElement('div');
            snowflake.classList.add('snowflake');
            snowflake.innerHTML = '❄';  // 你可以替换成其他雪花图标或者字符

            // 随机雪花的大小
            snowflake.style.fontSize = `${Math.random() * 10 + 15}px`;

            // 随机雪花的水平位置
            snowflake.style.left = `${Math.random() * window.innerWidth}px`;

            // 随机动画时长
            const fallDuration = Math.random() * 5 + 5; // 下落时间

            // 应用动画
            snowflake.style.animationDuration = `${fallDuration}s`;

            // 添加到页面
            document.body.appendChild(snowflake);

            // 雪花下落结束后删除
            snowflake.addEventListener('animationiteration', () => {
                snowflake.remove();
            });
        }

        // 每100毫秒生成一个雪花
        setInterval(createSnowflake, 100);
    </script>

</body>
</html>
