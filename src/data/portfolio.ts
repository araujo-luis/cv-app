const portfolio = {
    "title": "Portfolio",
    "data": [
        {
            "id": 5,
            "title": "Wimbledon Ticket Monitor",
            "description": "<p>Automated ticket monitoring tool that tracks Wimbledon ticket availability in real time and sends instant notifications when tickets become available. Built as a lightweight Node.js service with scheduled polling and alert integrations.</p>",
            "image": "",
            "url": "",
            "tools": ["node", "typescript", "docker", "notifications"]
        },
        {
            "id": 4,
            "title": "Currency Converter",
            "description": "<p>Node.js app that looks up a country by name and returns its full name, population and official currencies with current exchange rates to SEK.</p><p>Requests require a valid JWT obtained from a separate /login endpoint and are rate-limited to 30 requests per token per minute.</p>",
            "image": "",
            "url": "https://github.com/araujo-luis/currency-converter-fe",
            "tools": ["react", "redux", "node", "jwt", "docker"]
        },
        {
            "id": 3,
            "title": "Todo App - Microservices",
            "description": "<p>A TODO manager built with Spring Boot and Spring Cloud, demonstrating service discovery, config server, and API gateway patterns. Deployed on AWS using Docker containers.</p>",
            "image": "",
            "url": "https://github.com/araujo-luis/microservice-app-todo",
            "tools": ["java", "docker", "aws", "spring-boot", "mysql"]
        },
        {
            "id": 2,
            "title": "Distributed Video Coding App",
            "description": "<p>Master's Thesis: a distributed application for encoding videos in a cloud architecture. The system analyzes a video, splits it into scenes, and distributes them across multiple machines for parallel encoding. Results are compared against fixed-size segmentation in terms of time, quality and file size.</p>",
            "image": "",
            "url": "",
            "tools": ["java", "docker", "openstack", "etcd", "ffmpeg", "distributed-programming"]
        },
        {
            "id": 1,
            "title": "Microservices App",
            "description": "<p>Final Project — Master's Degree. A flight-tickets and airport-shops platform built in a microservices environment. One service is a REST API in Spring Boot connected to MySQL; the other is a Reactive API connected to MongoDB.</p><p>Both services are containerized with Docker and deployed on an OpenStack infrastructure.</p>",
            "image": "",
            "url": "https://github.com/araujo-luis/microservices-app",
            "tools": ["spring-boot", "mysql", "mongodb", "docker", "openstack", "reactive-programming"]
        }
    ]
};

export default portfolio;
