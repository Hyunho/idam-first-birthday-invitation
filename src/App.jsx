import React, { useEffect } from 'react';
import Hero from './components/Hero';
import InvitationMessage from './components/InvitationMessage';
import Timeline from './components/Timeline';
import Gallery from './components/Gallery';
import GrowthGallery from './components/GrowthGallery';
import Location from './components/Location';

function App() {
  useEffect(() => {
    // Basic title update
    document.title = "이담이의 첫 돌잔치에 초대합니다";
  }, []);

  return (
    <div className="App" style={{ paddingBottom: '4rem' }}>
      <Hero />
      <InvitationMessage />
      <Timeline />
      {/* <Gallery /> */}
      <Location />
      <GrowthGallery />

      <footer style={{
        textAlign: 'center',
        padding: '2rem',
        fontSize: '0.8rem',
        color: '#aaa',
        marginTop: '2rem'
      }}>
        Thank you for coming
      </footer>
    </div>
  );
}

export default App;
