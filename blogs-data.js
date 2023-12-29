const blogsData = [
  {
    thumbnail: "https://miro.medium.com/v2/resize:fit:1400/0*xEJ-vzT5nSsnT0SK",
    title: "Exploring the Wonders of AI",
    content:
      "Embark on a journey into the fascinating world of Artificial Intelligence (AI). From machine learning to neural networks, this blog delves deep into the transformative impact of AI on our daily lives and industries. Discover the latest advancements, real-world applications, and ethical considerations surrounding this cutting-edge technology.",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Alex Smith",
    role: "AI Enthusiast",
  },
  {
    thumbnail: "https://miro.medium.com/v2/resize:fit:1400/0*jW9YlaK0CWRdls_y",
    title: "Cooking Adventures: A Culinary Journey",
    content:
      "Join me on a culinary journey through the lens of a passionate chef exploring diverse cuisines, unique flavors, and the artistry of gastronomy. This blog unravels the secrets behind delightful dishes, culinary creativity, and the joy of cooking. Explore the world of culinary excellence with a touch of adventure.",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bWFsZSUyMGltYWdlfGVufDB8fDB8fHww",
    name: "Sophie Davis",
    role: "Chef",
  },
  {
    thumbnail: "https://miro.medium.com/v2/resize:fit:1400/0*4Kmnc4Y21tSMo9Gx",
    title: "The Green Revolution: Sustainable Living",
    content:
      "Embark on a discovery of sustainable living practices and their positive impact on the environment. Explore eco-friendly choices, conservation efforts, and personal actions that contribute to a greener, healthier planet. Dive deep into the principles of sustainability and embrace a lifestyle that cares for our Earth and future generations.",
    image:
      "https://images.unsplash.com/photo-1536840362362-9241939f8874?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bWFsZSUyMGltYWdlfGVufDB8fDB8fHww",
    name: "Eco Warrior",
    role: "Environmental Activist",
  },
  {
    thumbnail:
      "https://jtsofttech.com/image.axd?picture=/medium/programmerslife.webp",
    title: "Coding Chronicles: A Developer's Tale",
    content:
      "Unravel the challenges and triumphs of a software developer navigating the dynamic world of coding. This blog delves into coding techniques, problem-solving strategies, and the evolving landscape of software development. Join the journey of turning complex ideas into functional code and the excitement of being a part of the coding community.",
    image:
      "https://plus.unsplash.com/premium_photo-1661680986546-fdb7dd4690c1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fG1hbGUlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D",
    name: "Chris Taylor",
    role: "Software Developer",
  },
  {
    thumbnail:
      "https://www.inspiredlivingsa.co.za/wp-content/uploads/2017/03/For-the-love-of-travel.jpg",
    title: "Wanderlust Diaries: Travel Adventures",
    content:
      "Embark on thrilling travel adventures, exploring diverse cultures, and marveling at breathtaking landscapes. This blog takes you on a journey to hidden gems, travel tips, and cultural experiences that ignite the wanderlust spirit. Join the exploration of the world's wonders and the joy of discovering new destinations.",
    image:
      "https://plus.unsplash.com/premium_photo-1661780207595-e88bafd3df2e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fG1hbGUlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D",
    name: "Jessica Brown",
    role: "Travel Blogger",
  },
  {
    thumbnail:
      "https://elements-template-kits-cover-images-0.imgix.net/files/452189556/Cover.jpg?auto=compress%2Cformat&w=900&fit=max&s=28eece97fa1ca07d730a899df8729193",
    title: "Fitness Fusion: Health and Wellness",
    content:
      "Navigate the world of fitness, blending different workout routines for a holistic and healthy lifestyle. This blog covers fitness trends, nutrition tips, and motivational insights to inspire your fitness journey. Join the community of health enthusiasts and embark on a path to overall well-being and vitality.",
    image:
      "https://images.unsplash.com/photo-1533175069760-268143ce2e51?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fG1hbGUlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D",
    name: "Ryan Johnson",
    role: "Fitness Trainer",
  },
  {
    thumbnail:
      "https://media.licdn.com/dms/image/D5612AQF5bzBEWbnWNg/article-cover_image-shrink_720_1280/0/1689011441638?e=2147483647&v=beta&t=lCt2By5URLg8wCYmMARNOTIMblWUQhooF29xqWz0LSM",
    title: "Innovations in Tech: A Futuristic Glimpse",
    content:
      "Explore groundbreaking technological innovations shaping the future of our digital world. From AI and IoT to the latest gadgets, this blog provides insights into the tech landscape and its profound impact on society. Join the conversation about the future, where technology transforms the way we live, work, and connect.",
    image:
      "https://images.unsplash.com/photo-1503235930437-8c6293ba41f5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fG1hbGUlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D",
    name: "Emily White",
    role: "Tech Enthusiast",
  },
  {
    thumbnail:
      "https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/file-uploads/blogs/16263/images/d0c8715-5b27-44b0-044-e4f7277e8f4_creative_expressions_blog.jpg",
    title: "Artistry Unleashed: Creative Expressions",
    content:
      "Dive into the world of art and creativity, celebrating unique expressions of artistic vision. This blog explores various art forms, profiles talented artists, and delves into the inspiration behind their creations. Join the artistic journey, where imagination knows no bounds and creativity becomes a powerful force of self-expression.",
    image:
      "https://images.unsplash.com/photo-1504791635568-fa4993808e0a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fG1hbGUlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D",
    name: "Michael Turner",
    role: "Artist",
  },
  {
    thumbnail:
      "https://images.squarespace-cdn.com/content/v1/5dcbf9eaa39a5c466f69b0f3/1650360887529-D7197H40F96K62AOTQRH/mindfulness-doesnt-work-for-me-what-now-thewalkercenter.jpg?format=1500w",
    title: "The Science of Mindfulness",
    content:
      "Explore the profound benefits of mindfulness and its impact on mental well-being and personal growth. Learn practical techniques, meditation tips, and scientific insights into cultivating a mindful and balanced life. Join the journey towards inner peace, emotional resilience, and a deeper understanding of the transformative power of mindfulness.",
    image:
      "https://images.unsplash.com/photo-1702449269565-8bbe32972f65?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTF8fG1hbGUlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D",
    name: "Olivia Lee",
    role: "Mindfulness Practitioner",
  },
];

export default blogsData;
