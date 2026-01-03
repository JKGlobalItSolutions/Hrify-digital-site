import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Services from './pages/Services';
import Clients from './pages/Clients';
import Careers from './pages/Careers';
import Internship from './pages/Internship';
import ReferralProgram from './pages/ReferralProgram';
import WebDesign from './pages/WebDesign';
import WebMaintenance from './pages/WebMaintenance';
import AWS from './pages/AWS';
import Cybersecurity from './pages/Cybersecurity';
import BusinessWebDesign from './pages/BusinessWebDesign';
import ResponsiveWebDesign from './pages/ResponsiveWebDesign';
import CMSWebDesign from './pages/CMSWebDesign';
import WebApplication from './pages/WebApplication';
import CustomWebApplications from './pages/CustomWebApplications';
import ECommerceWebSolutions from './pages/ECommerceWebSolutions';
import MatrimonyWebSolutions from './pages/MatrimonyWebSolutions';
import MobileApplication from './pages/MobileApplication';
import DomainsHostingCloud from './pages/DomainsHostingCloud';
import PersonalEnterpriseEmail from './pages/PersonalEnterpriseEmail';
import GoogleWorkPartner from './pages/GoogleWorkPartner';
import EmailCampaignManagement from './pages/EmailCampaignManagement';
import AWSImplementations from './pages/AWSImplementations';
import DesignBranding from './pages/DesignBranding';
import DigitalMarketingSocialMedia from './pages/DigitalMarketingSocialMedia';
import MarketingSupportServices from './pages/MarketingSupportServices';
import WebsiteAuditingConsulting from './pages/WebsiteAuditingConsulting';
import SystemIntegrationMaintenance from './pages/SystemIntegrationMaintenance';
import InfrastructureManagement from './pages/InfrastructureManagement';
import ServerStorage from './pages/ServerStorage';
import NetworkSecurity from './pages/NetworkSecurity';
import StructuredCabling from './pages/StructuredCabling';
import CloudNativeSolutions from './pages/CloudNativeSolutions';
import WorkplaceSurveillance from './pages/WorkplaceSurveillance';
import CIAM from './pages/CIAM';
import WorkforceIdentity from './pages/WorkforceIdentity';
import SecurityEngineering from './pages/SecurityEngineering';
import ZeroTrustArchitecture from './pages/ZeroTrustArchitecture';
import GovernanceRiskManagementCompliance from './pages/GovernanceRiskManagementCompliance';
import CyberDefenseInvestigation from './pages/CyberDefenseInvestigation';
import CyberAdvisory from './pages/CyberAdvisory';
import CyberResilience from './pages/CyberResilience';
import DistributedTrust from './pages/DistributedTrust';
import Ethereum from './pages/Ethereum';
import Hyperledger from './pages/Hyperledger';
import DApps from './pages/DApps';
import NFT from './pages/NFT';
import IPFS from './pages/IPFS';
import Enterprise from './pages/Enterprise';
import SecurityManagement from './pages/SecurityManagement';
import SiteReliability from './pages/SiteReliability';
import MonitoringMaintenance from './pages/MonitoringMaintenance';
import HelpDesk from './pages/HelpDesk';
import VendorManagement from './pages/VendorManagement';
import InternetOfThings from './pages/InternetOfThings';
import AiNlp from './pages/AiNlp';
import ComputerVision from './pages/ComputerVision';
import MlMlOps from './pages/MlMlOps';
import DataScience from './pages/DataScience';
import Analytics from './pages/Analytics';
import Reports from './pages/Reports';
import BigDataDataLake from './pages/BigDataDataLake';
import DataFabric from './pages/DataFabric';
import QAConsultingStrategy from './pages/QAConsultingStrategy';
import AgileTesting from './pages/AgileTesting';
import IndependentCertification from './pages/IndependentCertification';
import ManagedTestingServices from './pages/ManagedTestingServices';
import Sonachala from './pages/Sonachala';
import './App.css';

function App() {
  return (
    <BrowserRouter basename={import.meta.env.MODE === 'production' ? '/Hrify-digital-site/' : '/'}>
      <div className="App d-flex flex-column min-vh-100">
        <Header />
        <main className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services" element={<Services />} />
            <Route path="/clients" element={<Clients />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/internship" element={<Internship />} />
            <Route path="/referral-program" element={<ReferralProgram />} />
            <Route path="/webdesign" element={<WebDesign />} />
            <Route path="/webmaintenance" element={<WebMaintenance />} />
            <Route path="/aws" element={<AWS />} />
            <Route path="/cybersecurity" element={<Cybersecurity />} />
            <Route path="/businessweb" element={<BusinessWebDesign />} />
            <Route path="/resweb" element={<ResponsiveWebDesign />} />
            <Route path="/cmsweb" element={<CMSWebDesign />} />
            <Route path="/webapp" element={<WebApplication />} />
            <Route path="/customweb" element={<CustomWebApplications />} />
            <Route path="/ecommerceweb" element={<ECommerceWebSolutions />} />
            <Route path="/matrimonyweb" element={<MatrimonyWebSolutions />} />
            <Route path="/mobileapp" element={<MobileApplication />} />
            <Route path="/domains" element={<DomainsHostingCloud />} />
            <Route path="/personalemail" element={<PersonalEnterpriseEmail />} />
            <Route path="/googlework" element={<GoogleWorkPartner />} />
            <Route path="/emailcampaign" element={<EmailCampaignManagement />} />
            <Route path="/awsimpl" element={<AWSImplementations />} />
            <Route path="/designbranding" element={<DesignBranding />} />
            <Route path="/digitalmarketing" element={<DigitalMarketingSocialMedia />} />
            <Route path="/marketting" element={<MarketingSupportServices />} />
            <Route path="/webaudit" element={<WebsiteAuditingConsulting />} />
            <Route path="/systemintegration" element={<SystemIntegrationMaintenance />} />
            <Route path="/infrastructure" element={<InfrastructureManagement />} />
            <Route path="/serverstorage" element={<ServerStorage />} />
            <Route path="/networksecurity" element={<NetworkSecurity />} />
            <Route path="/structuredcabling" element={<StructuredCabling />} />
            <Route path="/cloudnative" element={<CloudNativeSolutions />} />
            <Route path="/workplace" element={<WorkplaceSurveillance />} />
            <Route path="/ciam" element={<CIAM />} />
            <Route path="/workforceidentity" element={<WorkforceIdentity />} />
            <Route path="/securityengineering" element={<SecurityEngineering />} />
            <Route path="/zerotrustarchitecture" element={<ZeroTrustArchitecture />} />
            <Route path="/governanceriskmanagementcompliance" element={<GovernanceRiskManagementCompliance />} />
            <Route path="/cyberdefenseinvestigation" element={<CyberDefenseInvestigation />} />
            <Route path="/cyberadvisory" element={<CyberAdvisory />} />
            <Route path="/cyberresilience" element={<CyberResilience />} />
            <Route path="/distributedtrust" element={<DistributedTrust />} />
            <Route path="/ethereum" element={<Ethereum />} />
            <Route path="/hyperledger" element={<Hyperledger />} />
            <Route path="/dapps" element={<DApps />} />
            <Route path="/nft" element={<NFT />} />
            <Route path="/ipfs" element={<IPFS />} />
            <Route path="/enterprise" element={<Enterprise />} />
          <Route path="/securitymanagement" element={<SecurityManagement />} />
          <Route path="/sitereliability" element={<SiteReliability />} />
          <Route path="/monitoringmaintenance" element={<MonitoringMaintenance />} />
          <Route path="/helpdesk" element={<HelpDesk />} />
          <Route path="/vendormanagement" element={<VendorManagement />} />
          <Route path="/internetofthings" element={<InternetOfThings />} />
          <Route path="/ai_nlp" element={<AiNlp />} />
          <Route path="/computervision" element={<ComputerVision />} />
          <Route path="/ml_mlops" element={<MlMlOps />} />
          <Route path="/datascience" element={<DataScience />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/bigdata_datalake" element={<BigDataDataLake />} />
          <Route path="/datafabric" element={<DataFabric />} />
          <Route path="/qa_consulting_strategy" element={<QAConsultingStrategy />} />
          <Route path="/agile_testing" element={<AgileTesting />} />
          <Route path="/independent_certification" element={<IndependentCertification />} />
          <Route path="/managed_testing_services" element={<ManagedTestingServices />} />
          <Route path="/sonachala" element={<Sonachala />} />
          {/* Add more routes for other pages */}
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
