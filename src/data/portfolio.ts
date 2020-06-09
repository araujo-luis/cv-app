const portfolio = {
    "title": "Portfolio",
    "data": [
        {
            "id": 9,
            "title": "Todo App - Microservices",
            "description": "<p>This is a TODO manager, it is build using Spring Boot and Spring Cloud. Deployed on AWS using Docker containers.</p>",
            "image": "",
            "url": "https://github.com/l222p/microservice-app-todo",
            "tools": ["java", "docker", "openstack", "etcd", "ffmpeg", "distributed-programming"]
        },
        {
            "id": 8,
            "title": "Distributed Video Coding App",
            "description": "<p>Master's Thesis about the development of a distributed application for encoding videos in a cloud architecture. The application analyzes a video and splits it into scenes that will be distributed to different machines for coding. The results obtained are analyzed and compared with the operation of encoding the video by splitting it into segments of fixed size in terms of time, quality and size. </p><p>Code and results are being considered to be published in an  article.</p>",
            "image": "",
            "url": "",
            "tools": ["java", "docker", "openstack", "etcd", "ffmpeg", "distributed-programming"]
        },
        {
            "id": 7,
            "title": "Microservices App",
            "description": "<p>Final Proyect - Master's Degree in Web Technology, Cloud Computing and Mobile Applications - Valencia University.</p> <p>This is a application developed in a microservices environment, it's about flight tickets and airport's shops, the first one service is an API built in Spring Boot and connected to MySQL. The second services is a Reactive API built in Spring Boot and connected to MongoDB.</p> <p>Both services are <em>containerized</em> in Docker and deployed in a Openstack infrastructure.</p>",
            "image": "",
            "url": "https://github.com/l222p/microservices-app",
            "tools": ["sping-boot", "mysql", "mongodb", "docker", "openstack", "reactive-programming"]
        },
        {
            "id": 6,
            "title": "TechNews App",
            "description": "<p>Project based in an Angulat App TWCAM Master/Valencia University. It's a portal which implements basic concepts of Front-end development. It's build in Angular 7.</p>",
            "image": "",
            "url": "https://github.com/l222p/tech-news-app",
            "tools": ["angular-7"]
        },
        {
            "id": 5,
            "title": "GoVLC Mobile App",
            "description": "<p>Hybrid Application built in Xamarin. It's a <em>traveler</em> application, It shows all the Historical Monuments, Churchs, Parks and Turistics you can find in Valencia, Spain.</p> <p>You can choose you favorite places, set places you want to visit and rate them.</p>",
            "image": "",
            "url": "https://github.com/l222p/govlc-mobile-app",
            "tools": ["xamarin", "spring-boot", "mysql-lite", "c#"]
        },
        {
            "id": 4,
            "title": "Image Processing App",
            "description": "<p>Image Processing is an distributed application build in Java, it uses RabbbitMQ as message broker.</p> <p>It has three nodes which represent the pulisher, broker and worker. The worker processed the iamge in three ways blur, gray scales, and detect edges. </p>",
            "image": "",
            "url": "https://github.com/l222p/image-processing-distributed-app",
            "tools": ["openstack", "rabbit-mq", "java", "opencv", "distributed-programming"]
        },
        {
            "id": 3,
            "title": "LBaaS App",
            "description": " <p>Creation of a Load Balancer as a Service in Openstack. The experiment consists in creating the infrastructure, it means 3 nodes with tomcat installed which are identified with a HTML page and a Single Point Entry (Load Balancer). At the end, there are response time brought from JMeter.</p>",
            "image": "",
            "url": "https://github.com/l222p/lbaas-openstack",
            "tools": ["openstack", "bash"]
        },
        {
            "id": 2,
            "title": "Lunch Picker App",
            "description": "<p>This application solves the problem of What should I eat for lunch? It displays a random lunch, information about it and price, you can add your favorites meals and hopefully you will get it as your lunch recomendation.<p>",
            "image": "",
            "url": "https://github.com/l222p/lunch-app-fe",
            "tools": ["react", "nodejs", "postgresql", "auth0"]
        },
        {
            "id": 1,
            "title": "Concurrent Count Word App",
            "description": "<p>It's an app about counting works from documents hosted in a server. It has a pool of fixed-sized threads and a class which implements <code>Callable <Integer></code> and counts the number of times a word appears in a single file obtained from the server.</p> App",
            "image": "",
            "url": "https://github.com/l222p/concurrent-word-count",
            "tools": ["java", "concurrent-programming"]
        }
    ]
};

export default portfolio;
