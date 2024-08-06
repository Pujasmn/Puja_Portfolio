import React from 'react';
import { FaTachometerAlt, FaHome, FaClipboardList, FaEnvelope, FaCog, FaLock } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <div style={{ width: '60px', background: '#333', color: '#fff', height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '10px 0' }}>
      <div style={{ padding: '20px 0' }}>
        <FaTachometerAlt style={{ color: '#0095ff' }} size={24} />
      </div>
      <div style={{ padding: '20px 0' }}>
        <FaHome style={{ color: '#0095ff' }} size={24} />
      </div>
      <div style={{ padding: '20px 0' }}>
        <FaClipboardList style={{ color: '#777' }} size={24} />
      </div>
      <div style={{ padding: '20px 0' }}>
        <FaEnvelope style={{ color: '#777' }} size={24} />
      </div>
      <div style={{ padding: '20px 0' }}>
        <FaCog style={{ color: '#777' }} size={24} />
      </div>
      <div style={{ padding: '20px 0' }}>
        <FaLock style={{ color: '#777' }} size={24} />
      </div>
    </div>
  );
}

export default Sidebar;

