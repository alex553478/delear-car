import React from "react";
import "./cariere.css";

const Cariere = () => {
  const jobs = [
    {
      title: "Consultant vânzări auto",
      type: "Full-time",
      location: "Ploiești",
      description:
        "Vei consilia clienții în procesul de achiziție, prezentare autoturisme, negociere și finalizare contract."
    },
    {
      title: "Specialist finanțare auto",
      type: "Full-time",
      location: "Ploiești",
      description:
        "Analize dosare de finanțare, colaborare cu instituții bancare și prezentare soluții clienților."
    },
    {
      title: "Reprezentant Customer Support",
      type: "Full-time",
      location: "Remote / Ploiești",
      description:
        "Gestionarea solicitărilor clienților, programări la test-drive și comunicare post-achiziție."
    }
  ];

  return (
    <div className="careers-container">
      <h1>Cariere</h1>
      <p className="careers-intro">
        Alătură-te echipei noastre! Căutăm oameni pasionați, serioși și
        orientați spre rezultate în industria auto.
      </p>

      <div className="jobs-list">
        {jobs.map((job, index) => (
          <div className="job-card" key={index}>
            <h3>{job.title}</h3>
            <p className="job-meta">
              {job.type} • {job.location}
            </p>
            <p className="job-desc">{job.description}</p>
            <button className="job-btn">Aplică</button>
          </div>
        ))}
      </div>

      <div className="careers-footer">
        <p>
          Nu vezi un rol potrivit? Trimite-ne CV-ul la{" "}
          <strong>recrutare@dealerauto.ro</strong>
        </p>
      </div>
    </div>
  );
};

export default Cariere;
