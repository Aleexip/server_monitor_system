import './AddService.css';

export default function AddService() {
  return (
    <div className="add-service-container">
      <div className="add-service-card">
        <h2>Add a new monitor</h2>
        <p>Configure a new service that Sentinel should automatically check.</p>
        
        <form className="add-form" onSubmit={(e) => {
            e.preventDefault();
            alert("The service would have been saved to the database! (Functionality for the next sprint)");
        }}>
          <div className="form-group">
            <label>Name of Service (e.g., Spotify, Emag)</label>
            <input type="text" placeholder="Enter the name of the service..." required />
          </div>
          
          <div className="form-group">
            <label>URL Endpoint / Website</label>
            <input type="url" placeholder="https://" required />
          </div>

          <div className="form-group">
            <label>Check Interval (minutes)</label>
            <input type="number" defaultValue="5" min="1" max="60" />
          </div>

          <button type="submit" className="primary-btn">Save Monitor</button>
        </form>
      </div>
    </div>
  );
}