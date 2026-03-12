import React, { useEffect, useRef, useState } from "react";
import "./jobform.css";
import "./jobapply.css";
import "./jobdescription.css";
import {
  FaPaperPlane,
  FaBriefcase,
  FaClock,
  FaLocationDot,
  FaCircleInfo,
  FaListCheck,
  FaUser,
  FaPhone,
  FaEnvelope,
  FaFileArrowUp,
  FaFileLines,
  FaCalendarDays,
} from "react-icons/fa6";
import { FiUploadCloud } from "react-icons/fi";

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
  requirements: string[];
}

const JobCareers: React.FC = () => {
  const [selectedJob, setSelectedJob] = useState<string>("");
  const [openRequirements, setOpenRequirements] = useState<string>("");

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
  const applyFormRef = useRef<HTMLDivElement | null>(null);

  const jobs: Job[] = [
    {
      title: "Marketing Associate",
      type: "Full-Time / Part-Time",
      location: "Sri Lanka",
      requirements: [
        "Male or female candidates are welcome.",
        "Minimum 1 year relevant experience.",
        "Strong communication and presentation skills.",
        "Ability to work independently and with a team.",
      ],
    },
    {
      title: "Software Engineer",
      type: "Full-Time / Hybrid",
      location: "Sri Lanka",
      requirements: [
        "Experience in web or software application development.",
        "Good knowledge of React, TypeScript, Java, or related technologies.",
        "Strong problem-solving and debugging skills.",
        "Ability to collaborate on real-world projects.",
      ],
    },
    {
      title: "Project Manager",
      type: "Full-Time",
      location: "Sri Lanka",
      requirements: [
        "Experience managing teams and project timelines.",
        "Strong communication and client-handling skills.",
        "Ability to coordinate technical and business teams.",
        "Good leadership and planning ability.",
      ],
    },
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target as HTMLInputElement;

    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({
        ...prev,
        preferredContactMethod: checked
          ? [...prev.preferredContactMethod, value]
          : prev.preferredContactMethod.filter((item) => item !== value),
      }));
      return;
    }

    if (type === "file") {
      const files = (e.target as HTMLInputElement).files;
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

  const handleApplyClick = (jobTitle: string) => {
    setSelectedJob(jobTitle);
    setFormData((prev) => ({
      ...prev,
      position: jobTitle,
    }));

    setTimeout(() => {
      applyFormRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 120);
  };

  const handleRequirementToggle = (jobTitle: string) => {
    setOpenRequirements((prev) => (prev === jobTitle ? "" : jobTitle));
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
        if (coverLetterInputRef.current) coverLetterInputRef.current.value = "";
      } else {
        setResponseMessage(result?.message || "Submission failed");
      }
    } catch {
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
      <div className="job-positions-container">
        <div className="job-section-head">
          <div>Open Positions</div>
          <p>Explore available roles and apply for the opportunity that fits you best.</p>
        </div>

        <div className="job-cards">
          {jobs.map((job, index) => (
            <div key={index} className="job-wrapper">
              <div className="job-card">
                <div className="job-card-main">
                  <div className="job-title-row">
                    {/* <div className="job-icon-box">
                      <FaBriefcase className="job-main-icon" />
                    </div> */}

                    <div className="job-title-content">
                      <h3>{job.title}</h3>

                      <div className="job-meta">
                        <div className="job-info-pill">
                          <FaClock className="job-pill-icon" />
                          <span>{job.type}</span>
                        </div>

                        <div className="job-info-pill">
                          <FaLocationDot className="job-pill-icon" />
                          <span>{job.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="job-buttons">
                    <button
                      className="btn-outline"
                      type="button"
                      onClick={() => handleRequirementToggle(job.title)}
                    >

                      Requirements
                    </button>

                    <button
                      className="btn-apply"
                      type="button"
                      onClick={() => handleApplyClick(job.title)}
                    >
                      <FaPaperPlane />
                      Apply
                    </button>
                  </div>
                </div>
              </div>

              {openRequirements === job.title && (
                <div className="job-requirements">
                  <h4>
                    <FaListCheck />
                    {job.title} Requirements
                  </h4>

                  <ul>
                    {job.requirements.map((req, idx) => (
                      <li key={idx}>{req}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="job-apply-form-container" ref={applyFormRef}>
        <h2 className="form-header">Job Apply</h2>
        <p className="form-subtext">
          Fill in your details and submit your application.
        </p>

        <form onSubmit={handleSubmit} className="job-apply-form">
          <div className="form-grid">
            <div className="form-group">
              <label>
               
                Name
              </label>
              <input name="name" value={formData.name} onChange={handleChange} required />
            </div>

            <div className="form-group">
              <label>
                
                Phone
              </label>
              <input name="phone" value={formData.phone} onChange={handleChange} required />
            </div>

            <div className="form-group">
              <label>
                
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>
            
                Position
              </label>
              <input
                name="position"
                value={formData.position}
                readOnly
                placeholder="Select a position from above"
              />
            </div>

            <div className="form-group">
              <label>
                Availability
              </label>
              <input
                name="availability"
                value={formData.availability}
                onChange={handleChange}
                required
                placeholder="e.g. Immediate / 2 weeks"
              />
            </div>

            <div className="form-group">
              <label>
                Preferred Contact
              </label>

              <div className="checkbox-group">
                <label className="check-option">
                  <input
                    type="checkbox"
                    value="Phone"
                    checked={formData.preferredContactMethod.includes("Phone")}
                    onChange={handleChange}
                    name="preferredContactMethod"
                  />
                  <span>Phone</span>
                </label>

                <label className="check-option">
                  <input
                    type="checkbox"
                    value="Email"
                    checked={formData.preferredContactMethod.includes("Email")}
                    onChange={handleChange}
                    name="preferredContactMethod"
                  />
                  <span>Email</span>
                </label>
              </div>
            </div>

<div className="form-group">
  <label>Resume</label>

  <label className="file-upload">
    <input
      type="file"
      name="resume"
      ref={resumeInputRef}
      onChange={handleChange}
      required
    />

    <div className="file-upload-box">
      <div className="upload-icon-box">
        <FiUploadCloud className="upload-icon" />
      </div>

      <div className="upload-text">
        <span className="upload-title">Upload Resume</span>
        <span className="upload-sub">
          {formData.resume ? formData.resume.name : "PDF, max 10MB"}
        </span>
      </div>
    </div>
  </label>
</div>

<div className="form-group">
  <label>Cover Letter</label>

  <label className="file-upload">
    <input
      type="file"
      name="coverLetter"
      ref={coverLetterInputRef}
      onChange={handleChange}
    />

    <div className="file-upload-box">
      <div className="upload-icon-box">
        <FiUploadCloud className="upload-icon" />
      </div>

      <div className="upload-text">
        <span className="upload-title">Upload Cover Letter</span>
        <span className="upload-sub">
          {formData.coverLetter ? formData.coverLetter.name : "PDF, max 10MB"}
        </span>
      </div>
    </div>
  </label>
</div>
          </div>

          <button className="submit-btn" disabled={isSubmitting} type="submit">

            {isSubmitting ? "Submitting..." : "Submit Application"}
          </button>
        </form>

        {responseMessage && <div className="response-message">{responseMessage}</div>}
      </div>
    </div>
  );
};

export default JobCareers;