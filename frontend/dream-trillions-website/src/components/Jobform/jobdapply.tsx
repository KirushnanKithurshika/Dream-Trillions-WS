import React, { useEffect, useRef, useState } from "react";
import "./jobform.css";
import "./jobapply.css";
import "./jobdescription.css";
import { FaPaperPlane } from "react-icons/fa";

interface JobFormData {
  name: string;
  phone: string;
  email: string;
  preferredContactMethod: string[];
  resume: File | null;
  coverLetter: File | null;
  position: string;
  availability: string;
}

interface Job {
  title: string;
  type: string;
  location: string;
}

const JobCareers: React.FC = () => {
  const [showDescription, setShowDescription] = useState<boolean>(false);
  const [selectedJob, setSelectedJob] = useState<string>("");

  const [formData, setFormData] = useState<JobFormData>({
    name: "",
    phone: "",
    email: "",
    preferredContactMethod: [],
    resume: null,
    coverLetter: null,
    position: "",
    availability: "",
  });

  const [responseMessage, setResponseMessage] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const resumeInputRef = useRef<HTMLInputElement | null>(null);
  const coverLetterInputRef = useRef<HTMLInputElement | null>(null);

  const jobs: Job[] = [
    {
      title: "Marketing Associate",
      type: "Full-Time / Part-Time",
      location: "Sri Lanka",
    },
    {
      title: "Software Engineer",
      type: "Full-Time",
      location: "Sri Lanka",
    },
    {
      title: "Project Manager",
      type: "Full-Time",
      location: "Sri Lanka",
    },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked, files } = e.target;

    if (type === "checkbox") {
      setFormData((prev) => ({
        ...prev,
        preferredContactMethod: checked
          ? [...prev.preferredContactMethod, value]
          : prev.preferredContactMethod.filter((item) => item !== value),
      }));
      return;
    }

    if (type === "file") {
      setFormData((prev) => ({
        ...prev,
        [name]: files && files.length > 0 ? files[0] : null,
      }));
      return;
    }

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setResponseMessage("");

    const data = new FormData();
    data.append("name", formData.name);
    data.append("phone", formData.phone);
    data.append("email", formData.email);
    data.append("position", formData.position);
    data.append("availability", formData.availability);
    data.append(
      "preferredContactMethod",
      JSON.stringify(formData.preferredContactMethod)
    );

    if (formData.resume) data.append("resume", formData.resume);
    if (formData.coverLetter) data.append("coverLetter", formData.coverLetter);

    try {
      const response = await fetch(
        "https://dt-backend-2257.onrender.com/send-job-application",
        {
          method: "POST",
          body: data,
        }
      );

      const result = await response.json();

      if (response.ok) {
        setResponseMessage("Application submitted successfully!");

        setFormData({
          name: "",
          phone: "",
          email: "",
          preferredContactMethod: [],
          resume: null,
          coverLetter: null,
          position: "",
          availability: "",
        });

        if (resumeInputRef.current) resumeInputRef.current.value = "";
        if (coverLetterInputRef.current)
          coverLetterInputRef.current.value = "";
      } else {
        setResponseMessage(result?.message || "Submission failed");
      }
    } catch (error) {
      setResponseMessage("Error submitting application");
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    if (!responseMessage) return;
    const timer = setTimeout(() => setResponseMessage(""), 5000);
    return () => clearTimeout(timer);
  }, [responseMessage]);

  return (
    <div className="job-description-container">
      {/* JOB LIST */}
      <div className="job-positions-container">
        <h2>Open Positions</h2>

        <table className="job-positions-table">
          <thead>
            <tr>
              <th>Job Title</th>
              <th>Job Type</th>
              <th>Location</th>
              <th>Requirement</th>
            </tr>
          </thead>

          <tbody>
            {jobs.map((job, index) => (
              <tr key={index}>
                <td>{job.title}</td>
                <td>{job.type}</td>
                <td>{job.location}</td>
                <td>
                  <button
                    className="apply-btn"
                    onClick={() => {
                      setShowDescription(true);
                      setSelectedJob(job.title);
                      setFormData((prev) => ({
                        ...prev,
                        position: job.title,
                      }));
                    }}
                  >
                    Show
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* JOB REQUIREMENTS */}
      {showDescription && (
        <div className="job-requirements">
          <h4>{selectedJob} – Job Requirements</h4>
          <ul>
            <li>Male or Female candidates are welcome.</li>
            <li>Minimum 1 year relevant experience.</li>
            <li>Good communication and teamwork skills.</li>
            <li>Ability to work independently.</li>
          </ul>

          <button className="close-btn" onClick={() => setShowDescription(false)}>
            Close
          </button>
        </div>
      )}

      {/* APPLY FORM */}
      <div className="job-apply-form-container">
        <h2 className="form-header">Job Apply</h2>

        <form onSubmit={handleSubmit} className="job-apply-form">
          <div className="form-group">
            <label>Name</label>
            <input name="name" value={formData.name} onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label>Phone</label>
            <input name="phone" value={formData.phone} onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label>Preferred Contact</label>
            <div className="checkbox-group">
              <label>
                <input
                  type="checkbox"
                  value="Phone"
                  checked={formData.preferredContactMethod.includes("Phone")}
                  onChange={handleChange}
                  name="preferredContactMethod"
                />
                Phone
              </label>
              <label>
                <input
                  type="checkbox"
                  value="Email"
                  checked={formData.preferredContactMethod.includes("Email")}
                  onChange={handleChange}
                  name="preferredContactMethod"
                />
                Email
              </label>
            </div>
          </div>

          <div className="form-group">
            <label>Resume</label>
            <input type="file" name="resume" ref={resumeInputRef} onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label>Cover Letter</label>
            <input type="file" name="coverLetter" ref={coverLetterInputRef} onChange={handleChange} />
          </div>

          <div className="form-group">
            <label>Position</label>
            <input name="position" value={formData.position} readOnly />
          </div>

          <div className="form-group">
            <label>Availability</label>
            <input name="availability" value={formData.availability} onChange={handleChange} required />
          </div>

          <button className="submit-btn" disabled={isSubmitting}>
            <FaPaperPlane /> {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </form>

        {responseMessage && <div className="response-message">{responseMessage}</div>}
      </div>
    </div>
  );
};

export default JobCareers;
