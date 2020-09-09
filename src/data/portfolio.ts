const portfolio = {
    "title": "Portfolio",
    "data": [
        {
            "id": 9,
            "title": "Currency Converter",
            "description": "<p>NodeJs app which allows to look up a country by name and returns the full name, population and a list of its official currencies including current exchange rate to SEK.</p><p>Requests require a valid JWT obtained from a separate /login endpoint and are rate limited to 30 requests per token per minute.</p>",
            "image": "",
            "url": "https://github.com/l222p/currency-converter-fe",
            "tools": ["react", "redux", "node", "jwt", "docker"]
        },
        {
            "id": 8,
            "title": "Nasa Gallery App",
            "description": "<p>NASA Daily Gallery app inspired on Instagram UI, you can add favorites photos and look for previous photos of the NASA Image API.</p>",
            "image": "",
            "url": "https://github.com/l222p/nasa-gallery-app",
            "tools": ["react", "redux", "typescript", "node", "docker"]
        },
        
        {
            "id": 7,
            "title": "Todo App - Microservices",
            "description": "<p>This is a TODO manager, it is build using Spring Boot and Spring Cloud. Deployed on AWS using Docker containers.</p>",
            "image": "",
            "url": "https://github.com/l222p/microservice-app-todo",
            "tools": ["java", "docker", "aws", "spring-boot", "mysql"]
        },
        {
            "id": 6,
            "title": "Distributed Video Coding App",
            "description": "<p>Master's Thesis about the development of a distributed application for encoding videos in a cloud architecture. The application analyzes a video and splits it into scenes that will be distributed to different machines for coding. The results obtained are analyzed and compared with the operation of encoding the video by splitting it into segments of fixed size in terms of time, quality and size. </p><p>Code and results are being considered to be published in an  article.</p>",
            "image": "",
            "url": "",
            "tools": ["java", "docker", "openstack", "etcd", "ffmpeg", "distributed-programming"]
        },
        {
            "id": 5,
            "title": "Microservices App",
            "description": "<p>Final Proyect - Master's Degree</p> <p>This is a application developed in a microservices environment, it's about flight tickets and airport's shops, the first one service is an API built in Spring Boot and connected to MySQL. The second services is a Reactive API built in Spring Boot and connected to MongoDB.</p> <p>Both services are <em>containerized</em> in Docker and deployed in a Openstack infrastructure.</p>",
            "image": "",
            "url": "https://github.com/l222p/microservices-app",
            "tools": ["sping-boot", "mysql", "mongodb", "docker", "openstack", "reactive-programming"]
        },
        {
            "id": 4,
            "title": "TechNews App",
            "description": "<p>Project based in an Angulat App TWCAM Master/Valencia University. It's a portal which implements basic concepts of Front-end development. It's build in Angular 7.</p>",
            "image": "",
            "url": "https://github.com/l222p/tech-news-app",
            "tools": ["angular-7"]
        },
        {
            "id": 3,
            "title": "GoVLC Mobile App",
            "description": "<p>Hybrid Application built in Xamarin. It's a <em>traveler</em> application, It shows all the Historical Monuments, Churchs, Parks and Turistics you can find in Valencia, Spain.</p> <p>You can choose you favorite places, set places you want to visit and rate them.</p>",
            "image": "",
            "url": "https://github.com/l222p/govlc-mobile-app",
            "tools": ["xamarin", "spring-boot", "mysql-lite", "c#"]
        },
        {
            "id": 2,
            "title": "Image Processing App",
            "description": "<p>Image Processing is an distributed application build in Java, it uses RabbbitMQ as message broker.</p> <p>It has three nodes which represent the pulisher, broker and worker. The worker processed the iamge in three ways blur, gray scales, and detect edges. </p>",
            "image": "",
            "url": "https://github.com/l222p/image-processing-distributed-app",
            "tools": ["openstack", "rabbit-mq", "java", "opencv", "distributed-programming"]
        },
        {
            "id": 1,
            "title": "Lunch Picker App",
            "description": "<p>This application solves the problem of What should I eat for lunch? It displays a random lunch, information about it and price, you can add your favorites meals and hopefully you will get it as your lunch recomendation.<p>",
            "image": "",
            "url": "https://github.com/l222p/lunch-app-fe",
            "tools": ["react", "nodejs", "postgresql", "auth0"]
        },
        
    ]
};

export default portfolio;
