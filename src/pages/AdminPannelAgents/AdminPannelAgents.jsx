import React from 'react';
import { SidebarProvider } from '../../components/AdminPannelAgents/context/SidebarContext';
import { AgentProvider } from '../../components/AdminPannelAgents/context/AgentContext';
import AgentsPage from '../../components/AdminPannelAgents/AgentsPage';
import Layout from '../../components/AdminPannelAgents/layout/Layout';

function AdminPanelAgents() {
  return (
    <SidebarProvider>
      <AgentProvider>
        <Layout>
          <AgentsPage />
        </Layout>
      </AgentProvider>
    </SidebarProvider>
  );
}

export default AdminPanelAgents;