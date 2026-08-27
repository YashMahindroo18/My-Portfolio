export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="border-b border-gray-800 sticky top-0 bg-black/90 backdrop-blur">
        <div className="max-w-4xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Yash Mahindroo</h1>
          <div className="flex gap-6">
            <a href="#about" className="hover:text-gray-400">About</a>
            <a href="#skills" className="hover:text-gray-400">Skills</a>
            <a href="#projects" className="hover:text-gray-400">Projects</a>
            <a href="#contact" className="hover:text-gray-400">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <div className="mb-8">
          <h2 className="text-5xl font-bold mb-4">B.Tech Student</h2>
          <p className="text-xl text-gray-400">Building Full-Stack Applications | JavaScript | TypeScript | React | Next.js</p>
        </div>
        <div className="flex gap-4">
          <a href="#projects" className="bg-white text-black px-6 py-2 rounded hover:bg-gray-200">View My Work</a>
          <a href="#contact" className="border border-white px-6 py-2 rounded hover:bg-gray-900">Get in Touch</a>
        </div>
      </section>

      {/* About */}
      <section id="about" className="max-w-4xl mx-auto px-6 py-16 border-t border-gray-800">
        <h3 className="text-3xl font-bold mb-6">About</h3>
        <p className="text-gray-400 leading-relaxed">
          Hi, I'm Yash, a Computer Science student passionate about building intelligent, user-focused software. I develop full-stack applications using React, Node.js, JavaScript, and Java, and build AI solutions with Python, computer vision, retrieval-augmented generation (RAG), and agentic AI workflows. I enjoy turning ideas into practical projects and continuously expanding my software engineering and problem-solving skills.

        </p>
      </section>

      {/* Skills */}
      <section id="skills" className="max-w-4xl mx-auto px-6 py-16 border-t border-gray-800">
        <h3 className="text-3xl font-bold mb-6">Skills</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div className="bg-gray-900 p-4 rounded">
            <p className="font-semibold">Frontend</p>
            <p className="text-gray-400 text-sm">React, Next.js, Tailwind CSS</p>
          </div>
          <div className="bg-gray-900 p-4 rounded">
            <p className="font-semibold">Backend</p>
            <p className="text-gray-400 text-sm">Node.js, JavaScript, FastAPI, REST APIs</p>
          </div>
          <div className="bg-gray-900 p-4 rounded">
            <p className="font-semibold">Database</p>
            <p className="text-gray-400 text-sm">MySQL, MongoDB</p>
          </div>
          <div className="bg-gray-900 p-4 rounded">
            <p className="font-semibold">Tools</p>
            <p className="text-gray-400 text-sm">Git, GitHub, API Design</p>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="max-w-4xl mx-auto px-6 py-16 border-t border-gray-800">
        <h3 className="text-3xl font-bold mb-6">Projects</h3>
        <div className="space-y-6">
          <div className="border border-gray-800 p-6 rounded hover:border-gray-600">
            <h4 className="text-xl font-semibold mb-2">CrowdSense - Real-time Pedestrian Counting System</h4>
            <p className="text-gray-400 mb-3">Built a real-time pedestrian counting system with Python, OpenCV, and SORT for multi-object tracking. Used bounding boxes and persistent tracking IDs to accurately count unique pedestrians in live video streams, preventing duplicate counts and enabling real-time footfall analytics.</p>
            <p className="text-sm text-gray-500 mb-3">Tech: FastAPI, YOLO-V8/V10, OpenCV, SORT, TensorFlow</p>
            <div className="flex gap-3">
              <a href="https://github.com/YashMahindroo18/Crowd_Sense" className="text-blue-400 hover:underline">GitHub Repository</a>
              <a href="#" className="text-blue-400 hover:underline">Live Demo</a>
            </div>
          </div>
        </div>
        
      </section>

      {/* Contact */}
      <section id="contact" className="max-w-4xl mx-auto px-6 py-16 border-t border-gray-800">
        <h3 className="text-3xl font-bold mb-6">Get in Touch</h3>
        <div className="flex gap-6">
          <a href="mailto:yashmahindroo10@gmail.com" className="hover:text-gray-400">Email</a>
          <a href="https://github.com/YashMahindroo18" className="hover:text-gray-400">GitHub</a>
          <a href="https://www.linkedin.com/in/yash-mahindroo/" className="hover:text-gray-400">LinkedIn</a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 mt-20 py-6">
        <div className="max-w-4xl mx-auto px-6 text-center text-gray-500">
          <p>© 2024 Yash Mahindroo. All rights reserved.</p>
        </div>
      </footer>
    </main>
  )
}