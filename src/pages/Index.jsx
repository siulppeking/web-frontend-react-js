import { useNavigate } from 'react-router-dom';

export const Index = () => {
    const navigate = useNavigate();
    
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
    };

    const handleSectionClick = (e, id) => {
        e.preventDefault();
        scrollToSection(id);
    };
    
    const handleLogin = () => {
        navigate('/login');
    };

    return (
        <div className="landing">
            <header className="nav">
                <div className="container nav-inner">
                    <button className="brand" onClick={() => scrollToSection('hero')}>
                        <span className="brand-icon">✨</span> Acme<span>Co</span>
                    </button>
                    <nav className="nav-links">
                        <button onClick={(e) => handleSectionClick(e, 'features')}>Features</button>
                        <button onClick={(e) => handleSectionClick(e, 'pricing')}>Pricing</button>
                        <button onClick={(e) => handleSectionClick(e, 'testimonials')}>Reviews</button>
                        <button className="btn btn-login" onClick={handleLogin}>Login</button>
                        <button className="btn btn-primary" onClick={(e) => handleSectionClick(e, 'contact')}>Get Started</button>
                    </nav>
                </div>
            </header>

            <main>
                <section id="hero" className="hero">
                    <div className="container hero-inner">
                        <div className="hero-content">
                            <div className="hero-badge">✨ New: AI-powered features</div>
                            <h1>Ship your next project <span className="highlight">10x faster</span></h1>
                            <p className="lead">Beautiful components, intuitive tools, and powerful workflows. Everything you need to build world-class products with confidence.</p>
                            <div className="hero-features">
                                <div className="hero-feature-item">
                                    <span className="hero-check">✓</span>
                                    <span>Deploy in minutes</span>
                                </div>
                                <div className="hero-feature-item">
                                    <span className="hero-check">✓</span>
                                    <span>No credit card required</span>
                                </div>
                                <div className="hero-feature-item">
                                    <span className="hero-check">✓</span>
                                    <span>24/7 support</span>
                                </div>
                            </div>
                            <div className="hero-cta">
                                <button className="btn btn-primary" onClick={(e) => handleSectionClick(e, 'contact')}>Start Free Trial</button>
                                <button className="btn btn-secondary" onClick={(e) => handleSectionClick(e, 'features')}>See how it works →</button>
                            </div>
                            <p className="hero-footer">30-day free trial • Enterprise security • Cancel anytime</p>
                            <div className="hero-stats">
                                <div className="hero-stat">
                                    <div className="hero-stat-value">500+</div>
                                    <div className="hero-stat-label">Companies</div>
                                </div>
                                <div className="hero-stat">
                                    <div className="hero-stat-value">2M+</div>
                                    <div className="hero-stat-label">Projects</div>
                                </div>
                                <div className="hero-stat">
                                    <div className="hero-stat-value">99.99%</div>
                                    <div className="hero-stat-label">Uptime</div>
                                </div>
                            </div>
                        </div>
                        <div className="hero-visual">
                            <div className="mockup">
                                <div className="mockup-header"></div>
                                <div className="mockup-body"></div>
                                <div className="mockup-footer"></div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="features" className="features">
                    <div className="container">
                        <div className="section-header">
                            <h2>Powerful features, simply designed</h2>
                            <p className="lead">Everything you need to create, collaborate, and launch.</p>
                        </div>
                        <div className="features-grid">
                            <div className="feature">
                                <div className="feature-icon">⚡</div>
                                <h3>Lightning Fast Setup</h3>
                                <p>Get started in minutes. Pre-built templates and one-click deployment make launching effortless.</p>
                            </div>
                            <div className="feature">
                                <div className="feature-icon">📱</div>
                                <h3>Fully Responsive</h3>
                                <p>Looks pixel-perfect on mobile, tablet, and desktop. Your users get the best experience everywhere.</p>
                            </div>
                            <div className="feature">
                                <div className="feature-icon">🎨</div>
                                <h3>Endless Customization</h3>
                                <p>Personalize every detail with our powerful design system. Match your brand perfectly.</p>
                            </div>
                            <div className="feature">
                                <div className="feature-icon">🔒</div>
                                <h3>Enterprise Security</h3>
                                <p>Bank-grade encryption, SSO, and compliance certifications built in from day one.</p>
                            </div>
                            <div className="feature">
                                <div className="feature-icon">⚙️</div>
                                <h3>Smart Automation</h3>
                                <p>Workflows that adapt to your team. Save hours every week with intelligent automation.</p>
                            </div>
                            <div className="feature">
                                <div className="feature-icon">🤝</div>
                                <h3>World-Class Support</h3>
                                <p>Dedicated support team available 24/7. We succeed when you succeed.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="pricing" className="pricing">
                    <div className="container">
                        <div className="section-header">
                            <h2>Transparent pricing</h2>
                            <p className="lead">Pay only for what you use. No hidden fees.</p>
                        </div>
                        <div className="pricing-grid">
                            <div className="price-card">
                                <h3>Starter</h3>
                                <div className="price">Free</div>
                                <p className="price-desc">Perfect for exploring</p>
                                <ul>
                                    <li>✓ Up to 5 projects</li>
                                    <li>✓ Basic analytics</li>
                                    <li>✓ Community support</li>
                                    <li>✗ Advanced features</li>
                                </ul>
                                <button className="btn btn-secondary" onClick={(e) => handleSectionClick(e, 'contact')}>Get Started</button>
                            </div>
                            <div className="price-card featured">
                                <div className="badge-featured">Most Popular</div>
                                <h3>Professional</h3>
                                <div className="price">$29<span>/month</span></div>
                                <p className="price-desc">For growing teams</p>
                                <ul>
                                    <li>✓ Unlimited projects</li>
                                    <li>✓ Advanced analytics</li>
                                    <li>✓ Priority support</li>
                                    <li>✓ Custom integrations</li>
                                </ul>
                                <button className="btn btn-primary" onClick={(e) => handleSectionClick(e, 'contact')}>Start Free Trial</button>
                            </div>
                            <div className="price-card">
                                <h3>Enterprise</h3>
                                <div className="price">Custom</div>
                                <p className="price-desc">For large organizations</p>
                                <ul>
                                    <li>✓ Everything in Pro</li>
                                    <li>✓ Advanced security</li>
                                    <li>✓ Dedicated account</li>
                                    <li>✓ Custom SLA</li>
                                </ul>
                                <button className="btn btn-secondary" onClick={(e) => handleSectionClick(e, 'contact')}>Contact Sales</button>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="testimonials" className="testimonials">
                    <div className="container">
                        <div className="section-header">
                            <h2>Loved by 500+ companies worldwide</h2>
                            <p className="lead">Join teams building the future</p>
                        </div>
                        <div className="testimonials-grid">
                            <div className="testimonial">
                                <div className="stars">⭐⭐⭐⭐⭐</div>
                                <p>"AcmeCo saved us 3 months of development time. The quality is outstanding."</p>
                                <div className="author">
                                    <div className="avatar">👨‍💼</div>
                                    <div>
                                        <strong>Alex Johnson</strong>
                                        <span>Product Manager, TechCorp</span>
                                    </div>
                                </div>
                            </div>
                            <div className="testimonial">
                                <div className="stars">⭐⭐⭐⭐⭐</div>
                                <p>"The design system is intuitive and beautiful. My team loves using it every day."</p>
                                <div className="author">
                                    <div className="avatar">👩‍🎨</div>
                                    <div>
                                        <strong>Jamie Chen</strong>
                                        <span>Lead Designer, Creative Co</span>
                                    </div>
                                </div>
                            </div>
                            <div className="testimonial">
                                <div className="stars">⭐⭐⭐⭐⭐</div>
                                <p>"Best customer support I've experienced. They really care about your success."</p>
                                <div className="author">
                                    <div className="avatar">👨‍💻</div>
                                    <div>
                                        <strong>Marcus Lee</strong>
                                        <span>CTO, StartupHub</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="about" className="about">
                    <div className="container">
                        <div className="about-inner">
                            <div className="about-content">
                                <h2>Built for teams who care</h2>
                                <p>We started AcmeCo because we were frustrated with overly complex tools. We believed there had to be a better way.</p>
                                <p>Today, we're proud to work with innovative teams around the world who trust us to help them build amazing products.</p>
                                <div className="about-stats">
                                    <div className="stat">
                                        <div className="stat-number">500+</div>
                                        <div className="stat-label">Happy Customers</div>
                                    </div>
                                    <div className="stat">
                                        <div className="stat-number">2M+</div>
                                        <div className="stat-label">Projects Shipped</div>
                                    </div>
                                    <div className="stat">
                                        <div className="stat-number">99.99%</div>
                                        <div className="stat-label">Uptime</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="contact" className="cta">
                    <div className="container">
                        <div className="cta-content">
                            <h2>Transform your workflow today</h2>
                            <p>Join thousands of teams shipping faster with AcmeCo</p>
                            <div className="cta-buttons">
                                <button className="btn btn-primary" onClick={(e) => handleSectionClick(e, 'contact')}>Start Your Free Trial</button>
                                <button className="btn btn-secondary" onClick={(e) => handleSectionClick(e, 'pricing')}>View Pricing →</button>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <footer className="site-footer">
                <div className="container footer-inner">
                    <div>© {new Date().getFullYear()} AcmeCo. All rights reserved.</div>
                    <div className="footer-links">
                        <a href="#privacy">Privacy</a>
                        <a href="#terms">Terms</a>
                    </div>
                </div>
            </footer>
        </div>
    )
}
