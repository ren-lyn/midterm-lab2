import React from 'react';

function Contact() {
	return (
		<section id="contact" className="contact-section">
			<div className="container">
				<div className="row">
					<div className="col-lg-8 mx-auto text-center mb-5">
						<h2 className="mb-4">Get In Touch</h2>
						<p className="lead">
							Have questions or want to collaborate? We'd love to hear from you!
						</p>
					</div>
				</div>
				<div className="row justify-content-center">
					<div className="col-lg-8">
						<div className="card p-5">
							<form>
								<div className="row g-3">
									<div className="col-md-6">
										<label className="form-label fw-semibold">First Name</label>
										<input 
											type="text" 
											className="form-control" 
											placeholder="Enter your first name" 
										/>
									</div>
									<div className="col-md-6">
										<label className="form-label fw-semibold">Last Name</label>
										<input 
											type="text" 
											className="form-control" 
											placeholder="Enter your last name" 
										/>
									</div>
								</div>
								<div className="mb-3">
									<label className="form-label fw-semibold">Email Address</label>
									<input 
										type="email" 
										className="form-control" 
										placeholder="your.email@example.com" 
									/>
								</div>
								<div className="mb-3">
									<label className="form-label fw-semibold">Subject</label>
									<input 
										type="text" 
										className="form-control" 
										placeholder="What is this about?" 
									/>
								</div>
								<div className="mb-4">
									<label className="form-label fw-semibold">Message</label>
									<textarea 
										className="form-control" 
										rows="6" 
										placeholder="Tell us about your project, question, or how we can help you..."
									></textarea>
								</div>
								<div className="text-center">
									<button type="submit" className="btn btn-primary btn-lg px-5">
										Send Message
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Contact;
