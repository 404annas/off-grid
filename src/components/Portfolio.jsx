const Portfolio = () => {
    const portfolioItems = [
        { img: "https://images.unsplash.com/photo-1632187989763-c9c620420b4d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dmlkZW8lMjBwcm9kdWN0aW9ufGVufDB8fDB8fHww", title: "Live Concert Production" },
        { img: "https://images.unsplash.com/photo-1625690303837-654c9666d2d0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dmlkZW8lMjBwcm9kdWN0aW9ufGVufDB8fDB8fHww", title: "Singer Showcase" },
        { img: "https://plus.unsplash.com/premium_photo-1682146717223-874ac7dcc607?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dmlkZW8lMjBwcm9kdWN0aW9ufGVufDB8fDB8fHww", title: "Recording Studio Project" },
        { img: "https://images.unsplash.com/photo-1490971688337-f2c79913ea7d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dmlkZW8lMjBwcm9kdWN0aW9ufGVufDB8fDB8fHww", title: "Video Shoot Session" },
        { img: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bXVzaWMlMjBwcm9kdWN0aW9ufGVufDB8fDB8fHww", title: "Video Editing Project" },
        { img: "https://plus.unsplash.com/premium_photo-1664194584291-cfc411d05998?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG11c2ljJTIwcHJvZHVjdGlvbnxlbnwwfHwwfHx8MA%3D%3D", title: "Music Performance" },
        { img: "https://images.unsplash.com/photo-1563330232-57114bb0823c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG11c2ljJTIwcHJvZHVjdGlvbnxlbnwwfHwwfHx8MA%3D%3D", title: "Film Production" },
        { img: "https://images.unsplash.com/photo-1509310202330-aec5af561c6b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bXVzaWMlMjBwcm9kdWN0aW9ufGVufDB8fDB8fHww", title: "Stage Recording" },
        { img: "https://plus.unsplash.com/premium_photo-1682124293900-54bea8ca7e9f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bXVzaWMlMjBwcm9kdWN0aW9ufGVufDB8fDB8fHww", title: "Sound Mixing Project" },
    ];

    return (
        <div className="pb-20 px-6 sm:px-10 lg:px-16 bg-[#0f0f0f] text-white">
            {/* Heading */}
            <h1 className="text-3xl sm:text-4xl font-bold text-center mb-10">
                Portfolio Showcase
            </h1>

            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {portfolioItems.map((item, idx) => (
                    <div
                        key={idx}
                        className="bg-[#1a1a1a] rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all hover:-translate-y-2"
                    >
                        <img
                            src={item.img}
                            alt={item.title}
                            className="w-full h-56 object-cover hover:scale-105 transition-transform duration-500"
                        />
                        <div className="p-4 text-center">
                            <h2 className="text-lg font-semibold">{item.title}</h2>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Portfolio;
