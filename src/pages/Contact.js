import React, { useState } from 'react';

function Contact() {
	const [formData, setFormData] = useState({
		firstName: '',
		lastName: '',
		email: '',
		subject: '',
		message: ''
	});

	const handleChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		// Handle form submission here
		alert('Thank you for your message! We will get back to you soon.');
		console.log('Form submitted:', formData);
		// Reset form
		setFormData({
			firstName: '',
			lastName: '',
			email: '',
			subject: '',
			message: ''
		});
	};

	return (
		<section className="contact-section py-3 w-100">
			<div className="container">
				{/* Header */}
				<div className="row">
					<div className="col-lg-8 mx-auto text-center mb-3">
						<h1 className="display-4 fw-bold mb-4" style={{ color: '#2e7d32' }}>
							Get In Touch
						</h1>
						<p className="lead text-muted">
							Have questions about PNC or want to connect with our team? We'd love to hear from you!
						</p>
						<hr className="w-25 mx-auto mb-3" style={{height: '3px', backgroundColor: '#2e7d32'}} />
					</div>
				</div>

				<div className="row g-3">
					{/* Contact Form */}
					<div className="col-lg-8">
						<div className="card border-0 shadow-lg p-5">
							<div className="card-body">
								<h3 className="fw-bold mb-4" style={{ color: '#2e7d32' }}>
									<i className="fas fa-paper-plane me-2"></i>
									Send us a Message
								</h3>
								<form onSubmit={handleSubmit}>
									<div className="row g-3 mb-3">
										<div className="col-md-6">
											<label className="form-label fw-semibold">
												<i className="fas fa-user me-1"></i>First Name *
											</label>
											<input 
												type="text" 
												name="firstName"
												className="form-control form-control-lg" 
												placeholder="Enter your first name"
												value={formData.firstName}
												onChange={handleChange}
												required
											/>
										</div>
										<div className="col-md-6">
											<label className="form-label fw-semibold">
												<i className="fas fa-user me-1"></i>Last Name *
											</label>
											<input 
												type="text" 
												name="lastName"
												className="form-control form-control-lg" 
												placeholder="Enter your last name"
												value={formData.lastName}
												onChange={handleChange}
												required
											/>
										</div>
									</div>
									<div className="mb-3">
										<label className="form-label fw-semibold">
											<i className="fas fa-envelope me-1"></i>Email Address *
										</label>
										<input 
											type="email" 
											name="email"
											className="form-control form-control-lg" 
											placeholder="your.email@example.com"
											value={formData.email}
											onChange={handleChange}
											required
										/>
									</div>
									<div className="mb-3">
										<label className="form-label fw-semibold">
											<i className="fas fa-tag me-1"></i>Subject *
										</label>
										<select 
											name="subject"
											className="form-select form-select-lg"
											value={formData.subject}
											onChange={handleChange}
											required
										>
											<option value="">Select a subject</option>
											<option value="general">General Inquiry</option>
											<option value="admissions">Admissions</option>
											<option value="academic">Academic Programs</option>
											<option value="collaboration">Collaboration</option>
											<option value="support">Technical Support</option>
											<option value="other">Other</option>
										</select>
									</div>
									<div className="mb-4">
										<label className="form-label fw-semibold">
											<i className="fas fa-comment me-1"></i>Message *
										</label>
										<textarea 
											name="message"
											className="form-control form-control-lg" 
											rows="6" 
											placeholder="Tell us about your inquiry, question, or how we can help you..."
											value={formData.message}
											onChange={handleChange}
											required
										></textarea>
									</div>
									<div className="text-center">
										<button type="submit" className="btn btn-success btn-lg px-5 py-3 rounded-pill">
											<i className="fas fa-paper-plane me-2"></i>
											Send Message
										</button>
									</div>
								</form>
							</div>
						</div>
					</div>

					{/* Contact Information */}
					<div className="col-lg-4">
						<div className="contact-info">
							<div className="card border-0 shadow-sm p-4 mb-4">
								<h4 className="fw-bold mb-4" style={{ color: '#2e7d32' }}>
									<i className="fas fa-info-circle me-2"></i>
									Contact Information
								</h4>
								
								<div className="contact-item d-flex align-items-start mb-3">
									<div className="contact-icon me-3 mt-1">
										<i className="fas fa-map-marker-alt fa-lg" style={{ color: '#2e7d32' }}></i>
									</div>
									<div>
										<h6 className="fw-bold mb-1">Address</h6>
										<p className="text-muted mb-0">
											Katapatan Subd., Brgy. Banay-banay,<br />
											City of Cabuyao, Laguna 4025
										</p>
									</div>
								</div>

								<div className="contact-item d-flex align-items-start mb-3">
									<div className="contact-icon me-3 mt-1">
										<i className="fas fa-phone fa-lg" style={{ color: '#2e7d32' }}></i>
									</div>
									<div>
										<h6 className="fw-bold mb-1">Facebook</h6>
										<p className="text-muted mb-0">https://www.facebook.com/ucpncofficial</p>
									</div>
								</div>

								<div className="contact-item d-flex align-items-start mb-3">
									<div className="contact-icon me-3 mt-1">
										<i className="fas fa-envelope fa-lg" style={{ color: '#2e7d32' }}></i>
									</div>
									<div>
										<h6 className="fw-bold mb-1">Website</h6>
										<p className="text-muted mb-0">https://pnc.edu.ph/</p>
									</div>
								</div>

								<div className="contact-item d-flex align-items-start">
									<div className="contact-icon me-3 mt-1">
										<i className="fas fa-clock fa-lg" style={{ color: '#2e7d32' }}></i>
									</div>
									<div>
										<h6 className="fw-bold mb-1">Office Hours</h6>
										<p className="text-muted mb-0">
											Monday - Friday: 8:00 AM - 5:00 PM<br />
											Saturday: 8:00 AM - 12:00 PM
										</p>
									</div>
								</div>
							</div>

							{/* Team Members Quick Contact */}
							<div className="card border-0 shadow-sm p-4">
								<h5 className="fw-bold mb-3" style={{ color: '#2e7d32' }}>
									<i className="fas fa-users me-2"></i>
									Our Team
								</h5>
								<p className="text-muted small mb-3">
									Meet the developers behind this project
								</p>
								<div className="d-flex gap-2 flex-wrap">
									<span className="badge bg-success">Donna Mae</span>
									<span className="badge bg-success">Clarisse</span>
									<span className="badge bg-success">John Marvin</span>
									<span className="badge bg-success">Renelyn</span>
									<span className="badge bg-success">Hans Axle</span>
									<span className="badge bg-success">Marc Jeremie</span>
									<span className="badge bg-success">Jude Christian</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Contact;
