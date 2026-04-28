import './Dashboard.css';

export default function Dashboard() {
  // Mock data
  const services = [
    { id: 1, name: 'Netflix', status: 'ONLINE', failures: 0 },
    { id: 2, name: 'Instagram', status: 'OFFLINE', failures: 14 },
    { id: 3, name: 'GitHub', status: 'ONLINE', failures: 2 }
  ];

  return (
    <div className="dashboard-container">
    
      <main className="services-list">
        <h2>Service Status</h2>
        
        <div className="cards-grid">
          {services.map(service => (
            <div key={service.id} className="service-card">
              <h3>{service.name}</h3>
              <div className={`status-badge ${service.status.toLowerCase()}`}>
                {service.status}
              </div>
              <p>Number of failures: {service.failures}</p>
              <button className="report-btn">Report a problem</button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}