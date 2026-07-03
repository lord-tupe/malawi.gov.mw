/**
 * Modal Content - Services, Government, and Business Information
 */

// Service modal content
const serviceContent = {
    passport: {
        title: 'Passports & Travel Documents',
        body: `
            <p>Apply for a new passport, renew an existing one, or obtain emergency travel documents through the Department of National Registration.</p>
            <h3 style="font-size:16px; font-weight:600; margin:16px 0 8px;">What you need:</h3>
            <ul>
                <li>National ID card or birth certificate</li>
                <li>Two passport-size photographs</li>
                <li>Proof of payment of the applicable fee</li>
                <li>Completed application form (available at any passport office)</li>
            </ul>
            <h3 style="font-size:16px; font-weight:600; margin:16px 0 8px;">Processing time:</h3>
            <p>Standard processing takes 4 to 6 weeks. Expedited service is available for an additional fee.</p>
            <a href="https://evisa.gov.mw" class="btn btn-green" target="_blank">Visit e-Visa Portal</a>
        `
    },
    tax: {
        title: 'Tax Services',
        body: `
            <p>Access tax filing, payment, and compliance services through the Malawi Revenue Authority (MRA).</p>
            <h3 style="font-size:16px; font-weight:600; margin:16px 0 8px;">Available services:</h3>
            <ul>
                <li>Register for a TPIN (Tax Payer Identification Number)</li>
                <li>File your income tax return online</li>
                <li>Pay taxes through mobile money or bank transfer</li>
                <li>Check your tax compliance status</li>
                <li>Download tax forms and guides</li>
            </ul>
            <a href="#" class="btn btn-green">Access MRA Portal</a>
        `
    },
    business: {
        title: 'Register a Business',
        body: `
            <p>Start your business journey by registering your company with the Registrar General's Department.</p>
            <h3 style="font-size:16px; font-weight:600; margin:16px 0 8px;">Steps to register:</h3>
            <ul>
                <li>Reserve your business name online</li>
                <li>Prepare your Memorandum and Articles of Association</li>
                <li>Submit registration forms with required documents</li>
                <li>Pay the registration fee</li>
                <li>Receive your Certificate of Incorporation</li>
            </ul>
            <a href="#" class="btn btn-green">Start Registration</a>
        `
    },
    visa: {
        title: 'Visas & Immigration',
        body: `
            <p>Apply for entry visas, work permits, and residency permits to visit or work in Malawi.</p>
            <h3 style="font-size:16px; font-weight:600; margin:16px 0 8px;">Visa types:</h3>
            <ul>
                <li>Ordinary Visa (tourism, business visits)</li>
                <li>Transit Visa</li>
                <li>Work Permit</li>
                <li>Student Visa</li>
                <li>Residency Permit</li>
            </ul>
            <p>Most visitors can apply online through the e-Visa system. Processing typically takes 5 to 10 business days.</p>
            <a href="https://evisa.gov.mw" class="btn btn-green" target="_blank">Apply on e-Visa Portal</a>
        `
    },
    health: {
        title: 'Health Services',
        body: `
            <p>Access public health services, find health facilities, and stay informed about health alerts in Malawi.</p>
            <h3 style="font-size:16px; font-weight:600; margin:16px 0 8px;">Key services:</h3>
            <ul>
                <li>Find a health facility near you</li>
                <li>Current health alerts and advisories</li>
                <li>Maternal and child health programs</li>
                <li>Vaccination schedules and information</li>
                <li>Malaria prevention resources</li>
            </ul>
            <a href="https://health.gov.mw" class="btn btn-green" target="_blank">Visit Ministry of Health</a>
        `
    },
    education: {
        title: 'Education & Scholarships',
        body: `
            <p>Access educational resources, scholarship opportunities, and examination results.</p>
            <h3 style="font-size:16px; font-weight:600; margin:16px 0 8px;">Available resources:</h3>
            <ul>
                <li>Government scholarship applications</li>
                <li>MSCE and other examination results</li>
                <li>School enrollment information</li>
                <li>Higher education institutions directory</li>
                <li>Teacher training programs</li>
            </ul>
            <a href="#" class="btn btn-green">Explore Opportunities</a>
        `
    },
    welfare: {
        title: 'Social Welfare & Pensions',
        body: `
            <p>Access social protection programs, pension services, and welfare benefits for eligible citizens.</p>
            <h3 style="font-size:16px; font-weight:600; margin:16px 0 8px;">Programs available:</h3>
            <ul>
                <li>Social Cash Transfer Programme</li>
                <li>Public Service Pension</li>
                <li>Disability support services</li>
                <li>Elderly care programs</li>
                <li>Child protection services</li>
            </ul>
            <a href="#" class="btn btn-green">Check Eligibility</a>
        `
    },
    documents: {
        title: 'Documents & Forms',
        body: `
            <p>Download official government forms, access laws and policies, and find publications.</p>
            <h3 style="font-size:16px; font-weight:600; margin:16px 0 8px;">Categories:</h3>
            <ul>
                <li>Laws and Legislation</li>
                <li>Government Policies</li>
                <li>Annual Reports</li>
                <li>Application Forms</li>
                <li>Public Notices</li>
            </ul>
            <a href="#" class="btn btn-green">Browse Documents</a>
        `
    },
    employment: {
        title: 'Employment & Labour',
        body: `
            <p>Access job seeker resources, learn about labour laws, and understand your worker rights.</p>
            <h3 style="font-size:16px; font-weight:600; margin:16px 0 8px;">Resources:</h3>
            <ul>
                <li>Government job vacancies</li>
                <li>Labour laws and regulations</li>
                <li>Worker rights and protections</li>
                <li>Skills development programs</li>
                <li>Employment dispute resolution</li>
            </ul>
            <a href="#" class="btn btn-green">View Opportunities</a>
        `
    },
    help: {
        title: 'Report a Problem',
        body: `
            <p>We want to hear from you. If you are experiencing issues with government services or this portal, please let us know.</p>
            <h3 style="font-size:16px; font-weight:600; margin:16px 0 8px;">How to report:</h3>
            <ul>
                <li>Use the contact form on this page</li>
                <li>Call our helpline: +265 1 771 222</li>
                <li>Email: support@government.mw</li>
                <li>Visit your nearest government office</li>
            </ul>
            <p>We aim to respond to all inquiries within 3 business days.</p>
            <a href="#contact" class="btn btn-green" onclick="closeOverlay()">Go to Contact Form</a>
        `
    }
};

// Government modal content
const govContent = {
    president: {
        title: 'The Presidency',
        body: `
            <p>The President of the Republic of Malawi is the Head of State, Head of Government, and Commander-in-Chief of the Armed Forces.</p>
            <h3 style="font-size:16px; font-weight:600; margin:16px 0 8px;">Office of the President:</h3>
            <ul>
                <li>Official biography and background</li>
                <li>Presidential speeches and statements</li>
                <li>Official directives and announcements</li>
                <li>Presidential outreach programs</li>
            </ul>
            <a href="#" class="btn btn-green">Learn More</a>
        `
    },
    cabinet: {
        title: 'Cabinet & Ministers',
        body: `
            <p>The Cabinet is composed of the President, Vice President, and Ministers appointed to lead various government portfolios.</p>
            <h3 style="font-size:16px; font-weight:600; margin:16px 0 8px;">Key responsibilities:</h3>
            <ul>
                <li>Advise the President on policy matters</li>
                <li>Oversee implementation of government programs</li>
                <li>Present legislation to Parliament</li>
                <li>Manage government budgets and resources</li>
            </ul>
            <a href="#" class="btn btn-green">View Cabinet Members</a>
        `
    },
    parliament: {
        title: 'Parliament of Malawi',
        body: `
            <p>The National Assembly of Malawi is the supreme legislative body, representing the people in lawmaking and governance oversight.</p>
            <ul>
                <li>Current parliamentary sessions and proceedings</li>
                <li>Members of Parliament directory</li>
                <li>Bills and legislation tracker</li>
                <li>Committee reports</li>
                <li>Hansard (official records)</li>
            </ul>
            <a href="#" class="btn btn-green">Visit Parliament</a>
        `
    },
    ministries: {
        title: 'Ministries & Departments',
        body: `
            <p>Access the complete directory of government ministries, departments, and agencies serving the people of Malawi.</p>
            <ul>
                <li>Ministry of Finance</li>
                <li>Ministry of Health</li>
                <li>Ministry of Education</li>
                <li>Ministry of Justice</li>
                <li>Ministry of Agriculture</li>
                <li>Ministry of Foreign Affairs</li>
                <li>And 22 more ministries...</li>
            </ul>
            <a href="#" class="btn btn-green">View All Ministries</a>
        `
    },
    constitution: {
        title: 'Constitution & Laws',
        body: `
            <p>Access the Constitution of the Republic of Malawi and key pieces of legislation governing the nation.</p>
            <ul>
                <li>The Constitution of Malawi (full text)</li>
                <li>Acts of Parliament</li>
                <li>Statutory Instruments</li>
                <li>Legal notices and gazettes</li>
                <li>Amendments and updates</li>
            </ul>
            <a href="#" class="btn btn-green">Read the Constitution</a>
        `
    },
    symbols: {
        title: 'National Symbols',
        body: `
            <p>Learn about the national symbols that represent the identity and heritage of the Republic of Malawi.</p>
            <ul>
                <li>The National Flag (Black, Red, Green)</li>
                <li>The Coat of Arms</li>
                <li>The National Anthem ("Mlungu dalitsani Malawi")</li>
                <li>The Rising Sun emblem</li>
                <li>National animal and bird</li>
            </ul>
            <a href="#" class="btn btn-green">Explore Symbols</a>
        `
    }
};

// Business modal content
const bizContent = {
    start: {
        title: 'Starting a Business in Malawi',
        body: `
            <p>Malawi offers a supportive environment for entrepreneurs. Here is what you need to know to start your business.</p>
            <h3 style="font-size:16px; font-weight:600; margin:16px 0 8px;">Key steps:</h3>
            <ul>
                <li>Choose your business structure (sole proprietor, partnership, limited company)</li>
                <li>Register your business name with the Registrar General</li>
                <li>Obtain your TPIN from the Malawi Revenue Authority</li>
                <li>Apply for relevant trade licenses</li>
                <li>Register with the National Social Security Fund</li>
            </ul>
            <a href="#" class="btn btn-green">Start the Process</a>
        `
    },
    invest: {
        title: 'Investment Opportunities',
        body: `
            <p>Malawi presents compelling investment opportunities across agriculture, tourism, mining, manufacturing, and technology.</p>
            <ul>
                <li>Investment incentives and tax breaks</li>
                <li>Free economic zones</li>
                <li>Sector-specific opportunities</li>
                <li>Public-private partnership opportunities</li>
                <li>Investor support services</li>
            </ul>
            <a href="#" class="btn btn-green">Explore Opportunities</a>
        `
    },
    tenders: {
        title: 'Tenders & Procurement',
        body: `
            <p>Access government procurement opportunities and tender notices from ministries and departments.</p>
            <ul>
                <li>Current open tenders</li>
                <li>Procurement guidelines and regulations</li>
                <li>Bid submission procedures</li>
                <li>Awarded contracts</li>
                <li>Supplier registration</li>
            </ul>
            <a href="#" class="btn btn-green">View Tenders</a>
        `
    },
    trade: {
        title: 'Trade & Export',
        body: `
            <p>Resources for businesses engaged in international trade, including export guides and market access information.</p>
            <ul>
                <li>Export procedures and documentation</li>
                <li>Trade agreements and protocols</li>
                <li>Market intelligence and statistics</li>
                <li>Trade facilitation services</li>
                <li>Quality standards and certification</li>
            </ul>
            <a href="https://portal.trade.gov.mw" class="btn btn-green" target="_blank">Visit Trade Portal</a>
        `
    },
    'open-data': {
        title: 'Open Data',
        body: `
            <p>Access government datasets, statistics, and transparency reports to support research, innovation, and informed decision-making.</p>
            <ul>
                <li>Population and demographic data</li>
                <li>Economic indicators and statistics</li>
                <li>Budget and expenditure data</li>
                <li>Health and education statistics</li>
                <li>Agricultural and environmental data</li>
            </ul>
            <a href="https://ogp.gov.mw" class="btn btn-green" target="_blank">Explore Open Data</a>
        `
    }
};
