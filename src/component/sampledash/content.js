import React from 'react';
import "./dd.css"


const bookings = [
    { banner: 'M&N', name: 'Louise Clancy', moveDate: '01-03-2024', origin: 'Alberta,AB', destn: 'British Columbia,BC', moveSize: '1 Bedroom, 1300 lbs', crewAssigned: 'Bruce', status: 'Open' },
    { banner: 'ACVL', name: 'Kevin Archer', moveDate: '01-02-2024', origin: 'Toronto,ON', destn: 'Toronto,ON', moveSize: '3 Bedroom, 3000 lbs', crewAssigned: 'karan', status: 'Open' }
  ];
  
function Content12({ selectedContent }) {
    const getContent = () => {
        switch (selectedContent) {
            case 'dashboard':
                return (
                    <>
                        <main className="main-content">
                        <header className="main-header">
                        <h2>My Bookings</h2>
                        </header>
                        <table className="bookings-table">
                        <thead>
            <tr>
              <th>Banner</th>
              <th>Name</th>
              <th>Move Date</th>
              <th>Origin</th>
              <th>Destn</th>
              <th>Move Size</th>
              <th>Crew Assigned</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking, index) => (
              <tr key={index}>
                <td>{booking.banner}</td>
                <td>{booking.name}</td>
                <td>{booking.moveDate}</td>
                <td>{booking.origin}</td>
                <td>{booking.destn}</td>
                <td>{booking.moveSize}</td>
                <td>{booking.crewAssigned}</td>
                <td>{booking.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="pagination">
          <button>Previous</button>
          <span>1</span>
          <button>Next</button>
        </div>
      </main>
                    </>
                );
                case 'onboarding':
                    return (
                        <>
                            <h2>Onboarding</h2>
                            <p>This is the onboarding form content.</p>
                        </>
                    );
            case 'gallery':
                return (
                    <>
                        <h2>Gallery</h2>
                        <p>This is the gallery content.</p>
                    </>
                );
            case 'access':
                return (
                    <>
                        <h2>Access</h2>
                        <p>This is the access content.</p>
                    </>
                );
            case 'details':
                return (
                    <>
                        <h2>Details</h2>
                        <p>This is the details content.</p>
                    </>
                );
            case 'onboardingStudio':
                return (
                    <>
                        <h2>Onboarding Studio</h2>
                        <p>This is the onboarding studio content.</p>
                    </>
                );
            case 'onboardingOrganizer':
                return (
                    <>
                        <h2>Onboarding Organizer</h2>
                        <p>This is the onboarding organizer content.</p>
                    </>
                );
            default:
                return (
                    <>
                        <h2>Welcome to the Dashboard</h2>
                        <p>This is the main content area where you can display various dashboard elements.</p>
                    </>
                );
        }
    };

    return (
        <div className="content">
            {getContent()}
        </div>
    );
}

export default Content12;