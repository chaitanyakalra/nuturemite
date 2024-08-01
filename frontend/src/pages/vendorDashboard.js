import React from 'react';
import InventoryManagement from './inventoryPage';

const VendorPage = () => (
  <div>
    <h2>Vendor Dashboard</h2>
    {/* Render vendor-specific information and management tools */}
    <InventoryManagement/>
  </div>
);

export default VendorPage;