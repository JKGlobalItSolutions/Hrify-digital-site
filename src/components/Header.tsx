import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';
const HrifyLogo = '/assets/images/Hrify-dark-bg.webp';

// Modular menu data to avoid duplication (DRY)
const menuData = {
  services: [
    {
      category: 'Web Development',
      items: [
        { to: '/businessweb', label: 'Business Web Design' },
        { to: '/resweb', label: 'Responsive Web Design' },
        { to: '/cmsweb', label: 'CMS Web Design' },
        { to: '/webapp', label: 'Web Applications' },
        { to: '/ecommerceweb', label: 'E-Commerce Solutions' },
      ],
    },
    {
      category: 'Digital Solutions',
      items: [
        { to: '/mobileapp', label: 'Mobile Applications' },
        { to: '/awsimpl', label: 'AWS Services' },
        { to: '/digitalmarketing', label: 'Digital Marketing' },
        { to: '/designbranding', label: 'Design & Branding' },
        { to: '/marketting', label: 'Marketing Support' },
      ],
    },
    {
      category: 'Security & IT',
      items: [
        { to: '/cybersecurity', label: 'Cybersecurity' },
        { to: '/networksecurity', label: 'Network Security' },
        { to: '/cloudnative', label: 'Cloud Solutions' },
        { to: '/infrastructure', label: 'Infrastructure' },
        { to: '/enterprise', label: 'Enterprise Solutions' },
      ],
    },
    {
      category: 'AI & ML',
      items: [
        { to: '/datascience', label: 'Data Science' },
        { to: '/analytics', label: 'Analytics' },
        { to: '/ai_nlp', label: 'AI & NLP' },
        { to: '/ml_mlops', label: 'ML & MLOps' },
        { to: '/bigdata_datalake', label: 'Big Data' },
      ],
    },
  ],
  products: [
    { to: '/sonachala', label: 'Sonachala' },
  ],
  careers: [
    { to: '/careers', label: 'Careers' },
    { to: '/internship', label: 'Internship' },
    { to: '/referral-program', label: 'Referral Program' },
  ],
};

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [expandedMobileItems, setExpandedMobileItems] = useState<string[]>([]);
  const [expandedMobileCategories, setExpandedMobileCategories] = useState<string[]>([]);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    const debouncedScroll = debounce(handleScroll, 100); // Debounce for performance
    window.addEventListener('scroll', debouncedScroll);
    return () => window.removeEventListener('scroll', debouncedScroll);
  }, []);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeMobileMenu();
    };
    if (isMobileMenuOpen) window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setExpandedMobileItems([]);
    setExpandedMobileCategories([]);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setExpandedMobileItems([]);
    setExpandedMobileCategories([]);
  };

  const toggleMobileDropdown = (item: keyof typeof menuData) => {
    setExpandedMobileItems(prev =>
      prev.includes(item) ? prev.filter(i => i !== item) : [...prev, item]
    );
  };

  const toggleMobileCategory = (category: string) => {
    setExpandedMobileCategories(prev =>
      prev.includes(category) ? prev.filter(c => c !== category) : [...prev, category]
    );
  };

  const isActive = (path: string) => location.pathname === path ? 'active' : '';

  // Debounce helper
  const debounce = (fn: Function, ms: number) => {
    let timeout: ReturnType<typeof setTimeout>;
    return (...args: any[]) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => fn(...args), ms);
    };
  };

  return (
    <header className={`modern-navbar-header ${isScrolled ? 'scrolled' : ''}`}>
      <nav className="navbar navbar-expand-lg navbar-light modern-navbar">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/" onClick={closeMobileMenu}>
            <img src={HrifyLogo} alt="Hrify Digital" height="40" />
          </Link>

          <button
            className={`navbar-toggler ${isMobileMenuOpen ? 'active' : ''}`}
            type="button"
            onClick={toggleMobileMenu}
            aria-controls="navbarNav"
            aria-expanded={isMobileMenuOpen}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse desktop-menu" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className={`nav-link ${isActive('/')}`} to="/" onClick={closeMobileMenu}>Home</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${isActive('/about')}`} to="/about" onClick={closeMobileMenu}>About</Link>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Services
                </a>
                <ul className="dropdown-menu services-dropdown">
                  <li className="dropdown-submenu">
                    <a className="dropdown-item dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">Design & Development</a>
                    <ul className="dropdown-menu">
                      <li className="dropdown-submenu">
                        <a className="dropdown-item dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">Web Design</a>
                        <ul className="dropdown-menu">
                          <li><Link className={`dropdown-item ${isActive('/businessweb')}`} to="/businessweb" onClick={closeMobileMenu}>Business Web Design</Link></li>
                          <li><Link className={`dropdown-item ${isActive('/resweb')}`} to="/resweb" onClick={closeMobileMenu}>Responsive Web Design</Link></li>
                          <li><Link className={`dropdown-item ${isActive('/cmsweb')}`} to="/cmsweb" onClick={closeMobileMenu}>CMS Web Design</Link></li>
                        </ul>
                      </li>
                      <li><Link className={`dropdown-item ${isActive('/webmaintenance')}`} to="/webmaintenance" onClick={closeMobileMenu}>Web Maintenance</Link></li>
                      <li className="dropdown-submenu">
                        <a className="dropdown-item dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">Web Application</a>
                        <ul className="dropdown-menu">
                          <li><Link className={`dropdown-item ${isActive('/customweb')}`} to="/customweb" onClick={closeMobileMenu}>Custom Web Applications</Link></li>
                          <li><Link className={`dropdown-item ${isActive('/ecommerceweb')}`} to="/ecommerceweb" onClick={closeMobileMenu}>E-Commerce Web Solutions</Link></li>
                          <li><Link className={`dropdown-item ${isActive('/matrimonyweb')}`} to="/matrimonyweb" onClick={closeMobileMenu}>Matrimony Web Solutions</Link></li>
                        </ul>
                      </li>
                      <li><Link className={`dropdown-item ${isActive('/mobileapp')}`} to="/mobileapp" onClick={closeMobileMenu}>Mobile Application</Link></li>
                    </ul>
                  </li>
                  <li className="dropdown-submenu">
                    <a className="dropdown-item dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">Business Solutions</a>
                    <ul className="dropdown-menu">
                      <li><Link className={`dropdown-item ${isActive('/domains')}`} to="/domains" onClick={closeMobileMenu}>Domains, Hosting and Cloud Solutions</Link></li>
                      <li><Link className={`dropdown-item ${isActive('/personalemail')}`} to="/personalemail" onClick={closeMobileMenu}>Personal and Enterprise Email Solutions</Link></li>
                      <li><Link className={`dropdown-item ${isActive('/googlework')}`} to="/googlework" onClick={closeMobileMenu}>Google Work Partner</Link></li>
                      <li><Link className={`dropdown-item ${isActive('/emailcampaign')}`} to="/emailcampaign" onClick={closeMobileMenu}>Email Campaign Management Solutions</Link></li>
                      <li><Link className={`dropdown-item ${isActive('/awsimpl')}`} to="/awsimpl" onClick={closeMobileMenu}>AWS Services Implementations</Link></li>
                      <li><Link className={`dropdown-item ${isActive('/designbranding')}`} to="/designbranding" onClick={closeMobileMenu}>Design and Branding Solutions</Link></li>
                      <li><Link className={`dropdown-item ${isActive('/digitalmarketing')}`} to="/digitalmarketing" onClick={closeMobileMenu}>Digital Marketing & Social Media Solutions</Link></li>
                      <li><Link className={`dropdown-item ${isActive('/marketting')}`} to="/marketting" onClick={closeMobileMenu}>Marketing Support Services</Link></li>
                      <li><Link className={`dropdown-item ${isActive('/webaudit')}`} to="/webaudit" onClick={closeMobileMenu}>Website Auditing Consulting Services</Link></li>
                    </ul>
                  </li>
                  <li className="dropdown-submenu">
                    <a className="dropdown-item dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">Networking Solutions</a>
                    <ul className="dropdown-menu">
                      <li><Link className={`dropdown-item ${isActive('/systemintegration')}`} to="/systemintegration" onClick={closeMobileMenu}>System Integration & Maintenance</Link></li>
                      <li><Link className={`dropdown-item ${isActive('/infrastructure')}`} to="/infrastructure" onClick={closeMobileMenu}>Infrastructure Management</Link></li>
                      <li><Link className={`dropdown-item ${isActive('/serverstorage')}`} to="/serverstorage" onClick={closeMobileMenu}>Server & Storage</Link></li>
                      <li><Link className={`dropdown-item ${isActive('/networksecurity')}`} to="/networksecurity" onClick={closeMobileMenu}>Network Security</Link></li>
                      <li><Link className={`dropdown-item ${isActive('/structuredcabling')}`} to="/structuredcabling" onClick={closeMobileMenu}>Structured Cabling</Link></li>
                      <li><Link className={`dropdown-item ${isActive('/cloudnative')}`} to="/cloudnative" onClick={closeMobileMenu}>Cloud Native Solutions</Link></li>
                      <li><Link className={`dropdown-item ${isActive('/workplace')}`} to="/workplace" onClick={closeMobileMenu}>Workplace Surveillance</Link></li>
                    </ul>
                  </li>
                  <li className="dropdown-submenu">
                    <a className="dropdown-item dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">Cybersecurity</a>
                    <ul className="dropdown-menu">
                      <li><Link className={`dropdown-item ${isActive('/ciam')}`} to="/ciam" onClick={closeMobileMenu}>CIAM</Link></li>
                      <li><Link className={`dropdown-item ${isActive('/workforceidentity')}`} to="/workforceidentity" onClick={closeMobileMenu}>Workforce Identity</Link></li>
                      <li><Link className={`dropdown-item ${isActive('/securityengineering')}`} to="/securityengineering" onClick={closeMobileMenu}>Security Engineering</Link></li>
                      <li><Link className={`dropdown-item ${isActive('/zerotrustarchitecture')}`} to="/zerotrustarchitecture" onClick={closeMobileMenu}>Zero Trust Architecture</Link></li>
                      <li><Link className={`dropdown-item ${isActive('/governanceriskmanagementcompliance')}`} to="/governanceriskmanagementcompliance" onClick={closeMobileMenu}>Governance Risk Management & Compliance</Link></li>
                      <li><Link className={`dropdown-item ${isActive('/cyberdefenseinvestigation')}`} to="/cyberdefenseinvestigation" onClick={closeMobileMenu}>Cyber Defense & Investigation</Link></li>
                      <li><Link className={`dropdown-item ${isActive('/cyberadvisory')}`} to="/cyberadvisory" onClick={closeMobileMenu}>Cyber Advisory</Link></li>
                      <li><Link className={`dropdown-item ${isActive('/cyberresilience')}`} to="/cyberresilience" onClick={closeMobileMenu}>Cyber Resilience</Link></li>
                    </ul>
                  </li>
                  <li className="dropdown-submenu">
                    <a className="dropdown-item dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">Blockchain</a>
                    <ul className="dropdown-menu">
                      <li><Link className={`dropdown-item ${isActive('/distributedtrust')}`} to="/distributedtrust" onClick={closeMobileMenu}>Distributed Trust</Link></li>
                      <li><Link className={`dropdown-item ${isActive('/ethereum')}`} to="/ethereum" onClick={closeMobileMenu}>Ethereum</Link></li>
                      <li><Link className={`dropdown-item ${isActive('/hyperledger')}`} to="/hyperledger" onClick={closeMobileMenu}>Hyperledger</Link></li>
                      <li><Link className={`dropdown-item ${isActive('/dapps')}`} to="/dapps" onClick={closeMobileMenu}>dApps</Link></li>
                      <li><Link className={`dropdown-item ${isActive('/nft')}`} to="/nft" onClick={closeMobileMenu}>NFT</Link></li>
                      <li><Link className={`dropdown-item ${isActive('/ipfs')}`} to="/ipfs" onClick={closeMobileMenu}>IPFS</Link></li>
                    </ul>
                  </li>
                  <li><Link className={`dropdown-item ${isActive('/enterprise')}`} to="/enterprise" onClick={closeMobileMenu}>Enterprise</Link></li>
                  <li className="dropdown-submenu">
                    <a className="dropdown-item dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">Managed Services</a>
                    <ul className="dropdown-menu">
                      <li><Link className={`dropdown-item ${isActive('/securitymanagement')}`} to="/securitymanagement" onClick={closeMobileMenu}>Security Management</Link></li>
                      <li><Link className={`dropdown-item ${isActive('/sitereliability')}`} to="/sitereliability" onClick={closeMobileMenu}>Site Reliability</Link></li>
                      <li><Link className={`dropdown-item ${isActive('/monitoringmaintenance')}`} to="/monitoringmaintenance" onClick={closeMobileMenu}>Monitoring & Maintenance</Link></li>
                      <li><Link className={`dropdown-item ${isActive('/helpdesk')}`} to="/helpdesk" onClick={closeMobileMenu}>Help Desk / End User Compute</Link></li>
                      <li><Link className={`dropdown-item ${isActive('/vendormanagement')}`} to="/vendormanagement" onClick={closeMobileMenu}>Vendor Management</Link></li>
                    </ul>
                  </li>
                  <li className="dropdown-submenu">
                    <a className="dropdown-item dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">AI & ML</a>
                    <ul className="dropdown-menu">
                      <li><Link className={`dropdown-item ${isActive('/internetofthings')}`} to="/internetofthings" onClick={closeMobileMenu}>internet of things(iot)</Link></li>
                      <li><Link className={`dropdown-item ${isActive('/ai_nlp')}`} to="/ai_nlp" onClick={closeMobileMenu}>Ai & Nlp</Link></li>
                      <li><Link className={`dropdown-item ${isActive('/computervision')}`} to="/computervision" onClick={closeMobileMenu}>computer vision</Link></li>
                      <li><Link className={`dropdown-item ${isActive('/ml_mlops')}`} to="/ml_mlops" onClick={closeMobileMenu}>ML,ML Ops</Link></li>
                      <li><Link className={`dropdown-item ${isActive('/datascience')}`} to="/datascience" onClick={closeMobileMenu}>Data Science</Link></li>
                      <li><Link className={`dropdown-item ${isActive('/analytics')}`} to="/analytics" onClick={closeMobileMenu}>Analytics</Link></li>
                      <li><Link className={`dropdown-item ${isActive('/reports')}`} to="/reports" onClick={closeMobileMenu}>Reports</Link></li>
                      <li><Link className={`dropdown-item ${isActive('/bigdata_datalake')}`} to="/bigdata_datalake" onClick={closeMobileMenu}>Big Data ,Data Lake</Link></li>
                      <li><Link className={`dropdown-item ${isActive('/datafabric')}`} to="/datafabric" onClick={closeMobileMenu}>Data Fabric</Link></li>
                    </ul>
                  </li>
                  <li className="dropdown-submenu">
                    <a className="dropdown-item dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">Quality Engineering</a>
                    <ul className="dropdown-menu">
                      <li><Link className={`dropdown-item ${isActive('/qa_consulting_strategy')}`} to="/qa_consulting_strategy" onClick={closeMobileMenu}>QA Consulting & Strategy</Link></li>
                      <li><Link className={`dropdown-item ${isActive('/agile_testing')}`} to="/agile_testing" onClick={closeMobileMenu}>Agile Testing</Link></li>
                      <li><Link className={`dropdown-item ${isActive('/independent_certification')}`} to="/independent_certification" onClick={closeMobileMenu}>Independent Certification</Link></li>
                      <li><Link className={`dropdown-item ${isActive('/managed_testing_services')}`} to="/managed_testing_services" onClick={closeMobileMenu}>Managed Testing Services</Link></li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Products
                </a>
                <ul className="dropdown-menu">
                  {menuData.products.map((item) => (
                    <li key={item.to}>
                      <Link className={`dropdown-item ${isActive(item.to)}`} to={item.to} onClick={closeMobileMenu}>
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Careers
                </a>
                <ul className="dropdown-menu">
                  {menuData.careers.map((item) => (
                    <li key={item.to}>
                      <Link className={`dropdown-item ${isActive(item.to)}`} to={item.to} onClick={closeMobileMenu}>
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
              <li className="nav-item">
                <Link className="btn btn-primary contact-btn" to="/contact" onClick={closeMobileMenu}>Contact Us</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className={`mobile-menu-overlay ${isMobileMenuOpen ? 'active' : ''}`} onClick={closeMobileMenu}>
        <div className="mobile-menu" onClick={(e) => e.stopPropagation()}>
          <button className="close-btn" onClick={closeMobileMenu} aria-label="Close menu">&times;</button>
          <ul className="mobile-nav">
            <li><Link className={isActive('/')} to="/" onClick={closeMobileMenu}>Home</Link></li>
            <li><Link className={isActive('/about')} to="/about" onClick={closeMobileMenu}>About</Link></li>
            <li className="nav-item dropdown">
              <a 
                className="nav-link dropdown-toggle" 
                href="#" 
                role="button" 
                data-bs-toggle="dropdown" 
                aria-expanded="false"
              >
                Services
              </a>
              <div className="dropdown-menu mega-menu">  {/* Replaces services-dropdown + all dropdown-submenu */}
                <div className="container">
                  <div className="row g-4">
                    {menuData.services.map((group, idx) => (
                      <div key={idx} className="col-lg-3 col-md-6">
                        <h6 className="dropdown-header">{group.category}</h6>
                        <ul className="list-unstyled">
                          {group.items.map((item) => (
                            <li key={item.to}>
                              <Link 
                                className={`dropdown-item ${isActive(item.to)}`} 
                                to={item.to} 
                                onClick={closeMobileMenu}
                              >
                                {item.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </li>
            <li className={`mobile-dropdown ${expandedMobileItems.includes('products') ? 'active' : ''}`}>
              <button
                className="mobile-toggle"
                onClick={() => toggleMobileDropdown('products')}
                onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') toggleMobileDropdown('products'); }}
                role="button"
                tabIndex={0}
                aria-expanded={expandedMobileItems.includes('products')}
                aria-controls="products-submenu"
              >
                Products
              </button>
              <ul className="mobile-submenu" id="products-submenu">
                {menuData.products.map((item) => (
                  <li key={item.to}>
                    <Link className={isActive(item.to)} to={item.to} onClick={closeMobileMenu}>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
            <li className={`mobile-dropdown ${expandedMobileItems.includes('careers') ? 'active' : ''}`}>
              <button
                className="mobile-toggle"
                onClick={() => toggleMobileDropdown('careers')}
                onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') toggleMobileDropdown('careers'); }}
                role="button"
                tabIndex={0}
                aria-expanded={expandedMobileItems.includes('careers')}
                aria-controls="careers-submenu"
              >
                Careers
              </button>
              <ul className="mobile-submenu" id="careers-submenu">
                {menuData.careers.map((item) => (
                  <li key={item.to}>
                    <Link className={isActive(item.to)} to={item.to} onClick={closeMobileMenu}>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
            <li><Link className={isActive('/contact')} to="/contact" onClick={closeMobileMenu}>Contact Us</Link></li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
