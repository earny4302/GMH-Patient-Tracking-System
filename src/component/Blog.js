import React, { Component } from 'react';
import './blog.css';

class Blog extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            posts: [
                {
                    id: 1,
                    title: "Importance of Regular Health Checkups",
                    author: "Dr. Sarah Johnson",
                    date: "2024-01-15",
                    excerpt: "Regular health checkups are crucial for maintaining good health and preventing diseases. Learn why you should make them a priority.",
                    content: "Regular health checkups play a vital role in maintaining optimal health and detecting potential issues before they become serious problems. At Gwalior Medical Hospital, we recommend annual checkups for adults and more frequent visits for those with chronic conditions. During these visits, our healthcare professionals can monitor your vital signs, update vaccinations, and discuss any health concerns you may have. Early detection of conditions like diabetes, hypertension, and heart disease can significantly improve treatment outcomes and quality of life."
                },
                {
                    id: 2,
                    title: "Understanding Mental Health in Healthcare",
                    author: "Dr. Michael Chen",
                    date: "2024-01-10",
                    excerpt: "Mental health is an integral part of overall wellness. Discover how our hospital addresses mental health alongside physical health.",
                    content: "Mental health is just as important as physical health, yet it's often overlooked in traditional healthcare settings. At GMH, we take a holistic approach to patient care that includes mental health screening and support. Our team of psychiatrists and counselors work alongside our medical staff to ensure patients receive comprehensive care. We offer counseling services, stress management programs, and treatment for conditions like anxiety and depression. Remember, seeking help for mental health is a sign of strength, not weakness."
                },
                {
                    id: 3,
                    title: "Advances in Medical Technology at GMH",
                    author: "Dr. Priya Sharma",
                    date: "2024-01-05",
                    excerpt: "Explore the latest medical technologies we've implemented to provide better patient care and more accurate diagnoses.",
                    content: "Technology continues to revolutionize healthcare, and at Gwalior Medical Hospital, we're committed to staying at the forefront of medical innovation. Our recent investments include state-of-the-art imaging equipment, electronic health records systems, and telemedicine capabilities. These advances allow us to provide more accurate diagnoses, reduce wait times, and offer remote consultations when appropriate. Our digital patient tracking system ensures seamless communication between departments and helps us maintain comprehensive medical histories for all our patients."
                }
            ],
            selectedPost: null
        };
    }

    selectPost = (post) => {
        this.setState({ selectedPost: post });
    }

    goBack = () => {
        this.setState({ selectedPost: null });
    }

    render() {
        const { posts, selectedPost } = this.state;

        if (selectedPost) {
            return (
                <div className="blog-container">
                    <div className="blog-header">
                        <h1>GMH Medical Blog</h1>
                        <button className="back-button" onClick={this.goBack}>
                            ← Back to Blog
                        </button>
                    </div>
                    
                    <article className="blog-post-full">
                        <h2>{selectedPost.title}</h2>
                        <div className="post-meta">
                            <span className="author">By {selectedPost.author}</span>
                            <span className="date">{selectedPost.date}</span>
                        </div>
                        <div className="post-content">
                            {selectedPost.content}
                        </div>
                    </article>
                </div>
            );
        }

        return (
            <div className="blog-container">
                <div className="blog-header">
                    <h1>GMH Medical Blog</h1>
                    <p>Stay informed with the latest health tips and medical insights from our expert team</p>
                </div>
                
                <div className="blog-posts">
                    {posts.map(post => (
                        <article key={post.id} className="blog-post-preview" onClick={() => this.selectPost(post)}>
                            <h3>{post.title}</h3>
                            <div className="post-meta">
                                <span className="author">By {post.author}</span>
                                <span className="date">{post.date}</span>
                            </div>
                            <p className="excerpt">{post.excerpt}</p>
                            <button className="read-more">Read More →</button>
                        </article>
                    ))}
                </div>
            </div>
        );
    }
}

export default Blog;