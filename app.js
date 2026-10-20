const QUESTIONS = [
  {
    "id": "c1",
    "topic": "Cloud concepts",
    "q": "What is cloud computing?",
    "context": "A company wants to use computing resources without buying physical servers.",
    "options": [
      "Using remote computing resources delivered over a network",
      "Buying and maintaining all hardware locally",
      "Using only desktop applications",
      "Replacing all databases with spreadsheets"
    ],
    "answer": 0,
    "why": "Cloud computing delivers computing services such as storage, networking, and processing over a network, typically the internet.",
    "example": "A company hosts its website on Azure instead of buying a physical server."
  },
  {
    "id": "c2",
    "topic": "Cloud concepts",
    "q": "Which cloud benefit allows resources to be increased or decreased as demand changes?",
    "context": "An online shop receives heavy traffic during a sale.",
    "options": [
      "Governance",
      "Scalability",
      "Compliance",
      "Capital expenditure"
    ],
    "answer": 1,
    "why": "Scalability means adjusting resources to meet changing workload requirements.",
    "example": "Increase application capacity during a major sale."
  },
  {
    "id": "c3",
    "topic": "Cloud concepts",
    "q": "What is elasticity in cloud computing?",
    "context": "A workload automatically responds to changing demand.",
    "options": [
      "Buying hardware once a year",
      "Keeping capacity permanently fixed",
      "Automatically adding or removing resources as demand changes",
      "Moving all data to a laptop"
    ],
    "answer": 2,
    "why": "Elasticity is the ability to automatically match resource capacity to demand.",
    "example": "An application adds instances during a traffic spike and removes them afterward."
  },
  {
    "id": "c4",
    "topic": "Cloud concepts",
    "q": "Which expenditure model is commonly associated with purchasing physical servers upfront?",
    "context": "A business buys servers for its own data center.",
    "options": [
      "Operational expenditure",
      "Consumption-based billing",
      "Subscription billing",
      "Capital expenditure"
    ],
    "answer": 3,
    "why": "Capital expenditure, or CapEx, involves upfront investment in physical assets.",
    "example": "Buying servers and networking equipment for an office."
  },
  {
    "id": "c5",
    "topic": "Cloud concepts",
    "q": "Which expenditure model commonly describes paying for cloud services as they are used?",
    "context": "A company pays a monthly bill based on its Azure usage.",
    "options": [
      "Operational expenditure",
      "Capital expenditure only",
      "Hardware depreciation",
      "One-time equipment purchase"
    ],
    "answer": 0,
    "why": "Operational expenditure, or OpEx, covers ongoing costs such as cloud usage and subscriptions.",
    "example": "Pay for virtual machines while they are running."
  },
  {
    "id": "c6",
    "topic": "Cloud concepts",
    "q": "Which cloud model uses infrastructure dedicated to a single organization?",
    "context": "A regulated company requires dedicated cloud infrastructure.",
    "options": [
      "Public cloud",
      "Private cloud",
      "Community website",
      "Shared public hosting only"
    ],
    "answer": 1,
    "why": "A private cloud is dedicated to one organization, although it may be hosted on-premises or by a provider.",
    "example": "An organization operates a private cloud for internal workloads."
  },
  {
    "id": "c7",
    "topic": "Cloud concepts",
    "q": "Which cloud model combines on-premises infrastructure with public cloud services?",
    "context": "A company keeps some systems locally and runs others in Azure.",
    "options": [
      "Public cloud only",
      "Private cloud only",
      "Hybrid cloud",
      "SaaS only"
    ],
    "answer": 2,
    "why": "Hybrid cloud combines private or on-premises environments with public cloud resources.",
    "example": "Keep a legacy database on-premises while hosting a web app in Azure."
  },
  {
    "id": "c8",
    "topic": "Cloud concepts",
    "q": "What is a public cloud?",
    "context": "A provider delivers computing resources to customers over the internet.",
    "options": [
      "A cloud owned exclusively by one customer",
      "A local network with no provider",
      "A single computer used by a team",
      "Cloud services offered by a provider to multiple customers"
    ],
    "answer": 3,
    "why": "Public cloud services use provider-managed infrastructure shared securely among customers.",
    "example": "Create a virtual machine in Microsoft Azure."
  },
  {
    "id": "c9",
    "topic": "Cloud concepts",
    "q": "Which service model provides virtual machines, storage, and networking while customers manage the operating system?",
    "context": "A team needs control over its VM operating systems.",
    "options": [
      "Infrastructure as a Service (IaaS)",
      "Software as a Service (SaaS)",
      "Platform as a Service (PaaS)",
      "Function as a Service only"
    ],
    "answer": 0,
    "why": "IaaS gives customers control over virtualized infrastructure and responsibility for managing the guest operating system.",
    "example": "Deploy a Linux VM and install the required software."
  },
  {
    "id": "c10",
    "topic": "Cloud concepts",
    "q": "Which service model lets developers deploy applications without managing the underlying operating system?",
    "context": "Developers want to focus on application code.",
    "options": [
      "IaaS",
      "Platform as a Service (PaaS)",
      "On-premises hosting",
      "Physical colocation only"
    ],
    "answer": 1,
    "why": "PaaS provides a managed platform so customers can focus on applications and data.",
    "example": "Deploy a web application using Azure App Service."
  },
  {
    "id": "c11",
    "topic": "Cloud concepts",
    "q": "Which service model provides a complete application managed by the provider?",
    "context": "Employees use an online email application.",
    "options": [
      "IaaS",
      "PaaS",
      "Software as a Service (SaaS)",
      "A bare virtual machine"
    ],
    "answer": 2,
    "why": "SaaS delivers ready-to-use software, with the provider managing most of the application stack.",
    "example": "Use a cloud-hosted email service through a browser."
  },
  {
    "id": "c12",
    "topic": "Cloud concepts",
    "q": "Under the shared responsibility model, who is generally responsible for information and data classification?",
    "context": "A company stores confidential business records in the cloud.",
    "options": [
      "Only the internet provider",
      "Only the hardware manufacturer",
      "Always the cloud provider",
      "The customer, with responsibilities varying by service"
    ],
    "answer": 3,
    "why": "Customers generally remain responsible for their data and how they classify, protect, and use it.",
    "example": "The company decides which employees may access confidential files."
  },
  {
    "id": "c13",
    "topic": "Cloud concepts",
    "q": "Which service type is commonly associated with event-driven code that runs without managing servers?",
    "context": "A function runs when a file is uploaded.",
    "options": [
      "Serverless computing",
      "Dedicated desktop computing",
      "Manual hardware provisioning",
      "A private physical network only"
    ],
    "answer": 0,
    "why": "Serverless lets developers run code or services without directly provisioning and managing the underlying servers.",
    "example": "An Azure Function processes a newly uploaded image."
  },
  {
    "id": "c14",
    "topic": "Cloud concepts",
    "q": "What does high availability aim to provide?",
    "context": "A business wants its application to remain accessible.",
    "options": [
      "The lowest possible storage capacity",
      "Continuous service with minimal downtime",
      "Manual scaling only",
      "A guaranteed zero-cost service"
    ],
    "answer": 1,
    "why": "High availability reduces service interruption through redundancy and resilient design.",
    "example": "Deploy application instances across availability zones."
  },
  {
    "id": "c15",
    "topic": "Cloud concepts",
    "q": "What does fault tolerance mean?",
    "context": "A system should continue operating when a component fails.",
    "options": [
      "Every failure requires a complete rebuild",
      "Only one server can run",
      "The system continues functioning despite certain component failures",
      "Backups are never needed"
    ],
    "answer": 2,
    "why": "Fault-tolerant designs keep functioning when specified components fail.",
    "example": "A redundant component takes over after another component fails."
  },
  {
    "id": "c16",
    "topic": "Cloud concepts",
    "q": "What is disaster recovery?",
    "context": "A regional incident makes an application unavailable.",
    "options": [
      "Changing the application theme",
      "Increasing screen resolution",
      "Removing all backups",
      "Restoring systems and data after a major disruption"
    ],
    "answer": 3,
    "why": "Disaster recovery is the process and capability of restoring IT services after a disruptive event.",
    "example": "Recover an application in another region after a regional outage."
  },
  {
    "id": "c17",
    "topic": "Cloud concepts",
    "q": "What does a cloud service-level agreement (SLA) generally describe?",
    "context": "A customer wants to understand a service availability commitment.",
    "options": [
      "The provider's service commitment and applicable terms",
      "The customer's employee vacation policy",
      "The source code of every application",
      "A guarantee that no incident can ever happen"
    ],
    "answer": 0,
    "why": "An SLA defines specific service commitments and remedies or credits where applicable.",
    "example": "Review the availability commitment for a supported service."
  },
  {
    "id": "c18",
    "topic": "Cloud concepts",
    "q": "What is the consumption-based pricing model?",
    "context": "A customer wants costs to reflect resource usage.",
    "options": [
      "Paying the same fixed amount for unlimited resources",
      "Paying according to measured usage",
      "Buying every server before using a service",
      "Avoiding all usage tracking"
    ],
    "answer": 1,
    "why": "Consumption-based pricing charges according to the resources or services consumed.",
    "example": "Pay for storage capacity and transactions used."
  },
  {
    "id": "c19",
    "topic": "Cloud concepts",
    "q": "What is an economy of scale in cloud computing?",
    "context": "A large provider spreads infrastructure costs across many customers.",
    "options": [
      "Every customer must own a data center",
      "Costs always increase with each user",
      "Large-scale operations can reduce per-unit costs",
      "Cloud services cannot share infrastructure"
    ],
    "answer": 2,
    "why": "Providers can achieve efficiencies by operating large-scale infrastructure and purchasing resources in bulk.",
    "example": "A provider serves many customers from large data centers."
  },
  {
    "id": "c20",
    "topic": "Cloud concepts",
    "q": "Which cloud benefit allows resources to be provisioned quickly?",
    "context": "A development team needs a test environment today.",
    "options": [
      "Hardware must always be shipped first",
      "Every request requires a physical server purchase",
      "Provisioning must be done manually on-site",
      "On-demand resources can be created in minutes"
    ],
    "answer": 3,
    "why": "Cloud self-service and automation enable rapid provisioning compared with many traditional hardware processes.",
    "example": "Create a test VM from the Azure portal."
  },
  {
    "id": "c21",
    "topic": "Cloud concepts",
    "q": "What does agility mean in cloud computing?",
    "context": "A business needs to experiment with new services quickly.",
    "options": [
      "The ability to adapt and deploy changes quickly",
      "A requirement to use old hardware",
      "The removal of all testing",
      "A fixed capacity that cannot change"
    ],
    "answer": 0,
    "why": "Cloud agility helps organizations respond quickly to business needs and technical changes.",
    "example": "Create and remove a development environment as needed."
  },
  {
    "id": "c22",
    "topic": "Cloud concepts",
    "q": "Which cloud concept means that resources can be accessed over a network from different locations?",
    "context": "Remote staff need access to a hosted business application.",
    "options": [
      "Local-only computing",
      "Broad network access",
      "Capital depreciation",
      "Physical server replacement"
    ],
    "answer": 1,
    "why": "Broad network access enables cloud services to be accessed through standard networks and supported client devices.",
    "example": "Staff access a cloud app from an office or home."
  },
  {
    "id": "c23",
    "topic": "Cloud concepts",
    "q": "Which cloud characteristic allows a provider to serve multiple customers using shared infrastructure?",
    "context": "A provider serves many organizations on the same cloud platform.",
    "options": [
      "Single-user hardware",
      "Manual procurement",
      "Resource pooling",
      "Offline-only storage"
    ],
    "answer": 2,
    "why": "Resource pooling lets providers dynamically allocate shared infrastructure resources to multiple customers with logical separation.",
    "example": "Multiple customers use isolated resources on the same cloud platform."
  },
  {
    "id": "c24",
    "topic": "Cloud concepts",
    "q": "Which statement best describes scalability?",
    "context": "A business anticipates that its workload will grow.",
    "options": [
      "It prevents every possible outage",
      "It eliminates all operational costs",
      "It guarantees unlimited performance",
      "It allows capacity to grow or shrink to meet workload needs"
    ],
    "answer": 3,
    "why": "Scalability is the ability to adjust capacity as workload requirements change.",
    "example": "Increase compute capacity when the user base grows."
  },
  {
    "id": "c25",
    "topic": "Cloud concepts",
    "q": "What is a benefit of using cloud backups?",
    "context": "A company wants another copy of important business data.",
    "options": [
      "Copies can help restore data after accidental deletion or failure",
      "Backups make access controls unnecessary",
      "Backups prevent every cyberattack",
      "Backups guarantee that data never becomes corrupted"
    ],
    "answer": 0,
    "why": "Backups provide recoverable copies of data, subject to retention, configuration, and restoration testing.",
    "example": "Restore a file from a retained backup."
  },
  {
    "id": "c26",
    "topic": "Cloud concepts",
    "q": "What does a consumption-based model help customers avoid?",
    "context": "A small company has unpredictable demand.",
    "options": [
      "Monitoring resource usage",
      "Paying upfront for all future peak capacity",
      "Setting access controls",
      "Planning for data protection"
    ],
    "answer": 1,
    "why": "Customers can avoid purchasing all infrastructure upfront and instead pay for measured usage, though costs still require management.",
    "example": "Scale cloud resources to demand instead of buying peak-sized servers."
  },
  {
    "id": "c27",
    "topic": "Cloud concepts",
    "q": "Which statement about cloud security is most accurate?",
    "context": "An organization is migrating sensitive workloads.",
    "options": [
      "The provider handles every security task in every service",
      "Customers have no security responsibilities",
      "Security responsibilities are shared and vary by service model",
      "Using the cloud automatically makes every workload compliant"
    ],
    "answer": 2,
    "why": "Cloud security is a shared responsibility; the exact division depends on the service and configuration.",
    "example": "The provider secures physical facilities while the customer manages user access."
  },
  {
    "id": "c28",
    "topic": "Cloud concepts",
    "q": "What is a public cloud advantage for a new startup?",
    "context": "The startup has limited initial capital.",
    "options": [
      "It must buy hardware before testing ideas",
      "It cannot change capacity",
      "It must build a physical data center",
      "It can start small and scale as needed"
    ],
    "answer": 3,
    "why": "Cloud services can reduce initial infrastructure investment and allow capacity to grow with demand.",
    "example": "Launch a small application and add resources as usage increases."
  },
  {
    "id": "c29",
    "topic": "Cloud concepts",
    "q": "What does a cloud region represent?",
    "context": "A company needs to choose where to deploy resources.",
    "options": [
      "A geographic area containing one or more Azure data centers",
      "A user account password",
      "A billing invoice",
      "A virtual machine disk format"
    ],
    "answer": 0,
    "why": "A region is a geographic area that contains Azure data centers and provides services in that location.",
    "example": "Choose an Azure region close to users or required for data residency."
  },
  {
    "id": "c30",
    "topic": "Cloud concepts",
    "q": "Why might an organization use multiple regions?",
    "context": "It wants to improve recovery options for a regional outage.",
    "options": [
      "To eliminate the need for backups",
      "To support geographic resiliency and disaster recovery",
      "To make every service free",
      "To remove all network latency"
    ],
    "answer": 1,
    "why": "Multi-region designs can improve resilience to regional failures when properly architected.",
    "example": "Replicate critical data to a recovery region."
  },
  {
    "id": "c31",
    "topic": "Cloud concepts",
    "q": "What is the purpose of a cloud migration assessment?",
    "context": "A company is planning to move an on-premises application.",
    "options": [
      "To delete all system documentation",
      "To guarantee that migration has no cost",
      "To evaluate workloads, dependencies, risks, and readiness",
      "To disable monitoring before moving"
    ],
    "answer": 2,
    "why": "An assessment helps determine suitability, dependencies, cost, and migration strategy before workloads are moved.",
    "example": "Inventory servers and application dependencies before migration."
  },
  {
    "id": "c32",
    "topic": "Cloud concepts",
    "q": "What does reliability mean for a cloud workload?",
    "context": "A service must perform consistently over time.",
    "options": [
      "The application always uses the smallest VM",
      "The service never needs monitoring",
      "Every workload uses the same architecture",
      "The system can operate correctly and recover from disruptions"
    ],
    "answer": 3,
    "why": "Reliability concerns a system's ability to perform as intended and recover from failures.",
    "example": "Use health checks, redundancy, and tested recovery procedures."
  },
  {
    "id": "c33",
    "topic": "Cloud concepts",
    "q": "Which activity can help control cloud spending?",
    "context": "A team has unused resources and rising monthly costs.",
    "options": [
      "Review usage, remove waste, and right-size resources",
      "Provision extra resources without review",
      "Disable billing alerts",
      "Keep every test environment running indefinitely"
    ],
    "answer": 0,
    "why": "Cost optimization includes monitoring usage, eliminating waste, and choosing suitable resource sizes.",
    "example": "Stop idle development VMs outside working hours."
  },
  {
    "id": "c34",
    "topic": "Cloud concepts",
    "q": "What is one reason organizations choose cloud services for global applications?",
    "context": "Users live in several countries.",
    "options": [
      "Every user must connect to one local office server",
      "Cloud infrastructure can support deployment in multiple geographic locations",
      "Cloud applications cannot use networks",
      "All data must be stored on employee laptops"
    ],
    "answer": 1,
    "why": "Cloud providers offer infrastructure in multiple regions, helping organizations deploy closer to users when appropriate.",
    "example": "Deploy application components in regions near major user populations."
  },
  {
    "id": "a1",
    "topic": "Azure architecture and services",
    "q": "What is an Azure region?",
    "context": "You must select a location for an application.",
    "options": [
      "A billing role",
      "A geographic area containing Azure data centers",
      "A user password",
      "A storage access key"
    ],
    "answer": 1,
    "why": "Azure regions are geographic areas that contain data centers and host Azure services.",
    "example": "Choose a region near users or required for data residency."
  },
  {
    "id": "a2",
    "topic": "Azure architecture and services",
    "q": "What is an availability zone?",
    "context": "An application needs protection against a data-center-level failure.",
    "options": [
      "A subscription invoice",
      "A management group",
      "A physically separate location within an Azure region",
      "A DNS record"
    ],
    "answer": 2,
    "why": "Availability zones are separated groups of data centers within a region with independent power, cooling, and networking.",
    "example": "Deploy supported resources across multiple zones."
  },
  {
    "id": "a3",
    "topic": "Azure architecture and services",
    "q": "What is an Azure resource group?",
    "context": "A team wants to manage related resources together.",
    "options": [
      "A logical container for Azure resources",
      "A physical rack of servers",
      "A user authentication method",
      "A global network protocol"
    ],
    "answer": 0,
    "why": "Resource groups logically organize resources that are deployed and managed together.",
    "example": "Place a web app, database, and related resources in a project resource group."
  },
  {
    "id": "a4",
    "topic": "Azure architecture and services",
    "q": "What is an Azure subscription used for?",
    "context": "An organization needs to organize deployments and billing.",
    "options": [
      "Only storing passwords",
      "Only configuring DNS",
      "Only managing browser bookmarks",
      "A boundary for resource deployment, access, and billing"
    ],
    "answer": 3,
    "why": "Subscriptions provide a scope for deploying and managing resources, access control, and billing.",
    "example": "Create separate subscriptions for development and production."
  },
  {
    "id": "a5",
    "topic": "Azure architecture and services",
    "q": "What is an Azure management group?",
    "context": "An enterprise needs to apply governance across several subscriptions.",
    "options": [
      "A single virtual machine",
      "A container for organizing subscriptions under a hierarchy",
      "A storage account key",
      "A network packet"
    ],
    "answer": 1,
    "why": "Management groups let organizations apply governance and access policies across multiple subscriptions.",
    "example": "Apply a policy to all subscriptions in a business unit."
  },
  {
    "id": "a6",
    "topic": "Azure architecture and services",
    "q": "Which Azure service provides scalable virtual machines?",
    "context": "A team needs control over its guest operating system.",
    "options": [
      "Azure DNS",
      "Azure Advisor",
      "Azure Virtual Machines",
      "Azure Policy"
    ],
    "answer": 2,
    "why": "Azure Virtual Machines provides on-demand virtualized compute with customer control over the operating system.",
    "example": "Run a Linux server on an Azure VM."
  },
  {
    "id": "a7",
    "topic": "Azure architecture and services",
    "q": "Which Azure service hosts web applications without requiring customers to manage the underlying servers?",
    "context": "Developers want a managed web hosting platform.",
    "options": [
      "Azure App Service",
      "Azure Data Box",
      "Azure DNS",
      "Azure Resource Graph only"
    ],
    "answer": 0,
    "why": "Azure App Service is a managed platform for hosting web apps and APIs.",
    "example": "Deploy a Node.js website to App Service."
  },
  {
    "id": "a8",
    "topic": "Azure architecture and services",
    "q": "Which Azure service runs event-triggered code without requiring you to manage servers?",
    "context": "Code must run when a queue message arrives.",
    "options": [
      "Azure Virtual Network",
      "Azure Files",
      "Azure Functions",
      "Azure ExpressRoute"
    ],
    "answer": 2,
    "why": "Azure Functions supports event-driven, serverless code execution.",
    "example": "Run a function when a storage event occurs."
  },
  {
    "id": "a9",
    "topic": "Azure architecture and services",
    "q": "Which Azure service manages Kubernetes clusters?",
    "context": "A company deploys containerized microservices.",
    "options": [
      "Azure DNS",
      "Azure Kubernetes Service (AKS)",
      "Azure Advisor",
      "Azure Cost Management"
    ],
    "answer": 1,
    "why": "AKS provides a managed Kubernetes service for deploying and operating containerized applications.",
    "example": "Run microservices in a Kubernetes cluster."
  },
  {
    "id": "a10",
    "topic": "Azure architecture and services",
    "q": "What is an Azure Virtual Network (VNet)?",
    "context": "Virtual machines need private network communication.",
    "options": [
      "A billing report",
      "A database query",
      "A backup schedule",
      "A logically isolated network in Azure"
    ],
    "answer": 3,
    "why": "A VNet enables private network communication among Azure resources and supported connected networks.",
    "example": "Place application VMs on a private subnet."
  },
  {
    "id": "a11",
    "topic": "Azure architecture and services",
    "q": "What is the purpose of a subnet in an Azure VNet?",
    "context": "An administrator wants to segment network resources.",
    "options": [
      "Divide a VNet into smaller address ranges",
      "Create a new billing account",
      "Replace all identity services",
      "Store application documents"
    ],
    "answer": 0,
    "why": "Subnets divide a virtual network address space into segments for organization and control.",
    "example": "Place web servers and database servers in separate subnets."
  },
  {
    "id": "a12",
    "topic": "Azure architecture and services",
    "q": "What does a Network Security Group (NSG) do?",
    "context": "A team needs to allow HTTPS and restrict unwanted traffic.",
    "options": [
      "Create user identities",
      "Estimate monthly cloud costs",
      "Filter network traffic using security rules",
      "Synchronize file shares"
    ],
    "answer": 2,
    "why": "NSGs contain inbound and outbound rules that allow or deny network traffic.",
    "example": "Allow inbound TCP port 443 to a web subnet."
  },
  {
    "id": "a13",
    "topic": "Azure architecture and services",
    "q": "Which service provides encrypted connectivity between an on-premises network and an Azure VNet over the public internet?",
    "context": "A company needs a site-to-site connection without a dedicated private circuit.",
    "options": [
      "Azure DNS",
      "Azure VPN Gateway",
      "Azure Advisor",
      "Azure Blob Storage"
    ],
    "answer": 1,
    "why": "VPN Gateway can establish encrypted VPN connections over the public internet.",
    "example": "Connect a company network to Azure using a site-to-site VPN."
  },
  {
    "id": "a14",
    "topic": "Azure architecture and services",
    "q": "Which service provides a private dedicated network connection from an organization to Microsoft cloud services?",
    "context": "A company requires connectivity that does not traverse the public internet.",
    "options": [
      "Azure Load Balancer",
      "Azure Queue Storage",
      "Azure Functions",
      "Azure ExpressRoute"
    ],
    "answer": 3,
    "why": "ExpressRoute provides private connectivity between an organization's network and Microsoft cloud services through a connectivity provider.",
    "example": "Connect a data center to Azure through an ExpressRoute provider."
  },
  {
    "id": "a15",
    "topic": "Azure architecture and services",
    "q": "Which Azure service translates domain names into IP addresses?",
    "context": "A custom domain must resolve to a service endpoint.",
    "options": [
      "Azure DNS",
      "Azure Bastion",
      "Azure Files",
      "Azure Policy"
    ],
    "answer": 0,
    "why": "Azure DNS hosts DNS domains and resolves name records.",
    "example": "Create a DNS record for a website."
  },
  {
    "id": "a16",
    "topic": "Azure architecture and services",
    "q": "Which service distributes network traffic across backend virtual machines at Layer 4?",
    "context": "A TCP application needs traffic distributed among healthy VMs.",
    "options": [
      "Azure Data Factory",
      "Azure Advisor",
      "Azure Load Balancer",
      "Azure File Sync"
    ],
    "answer": 2,
    "why": "Azure Load Balancer distributes TCP and UDP traffic based on configured rules and health probes.",
    "example": "Balance TCP traffic across several application VMs."
  },
  {
    "id": "a17",
    "topic": "Azure architecture and services",
    "q": "Which service provides web traffic load balancing with features such as web application firewall support?",
    "context": "A public website needs HTTP routing and web attack protection.",
    "options": [
      "Azure Queue Storage",
      "Azure Application Gateway",
      "Azure Data Box",
      "Azure Virtual Desktop"
    ],
    "answer": 1,
    "why": "Application Gateway is a web traffic load balancer that supports HTTP routing and optional WAF capabilities.",
    "example": "Route requests to web backends and apply WAF rules."
  },
  {
    "id": "a18",
    "topic": "Azure architecture and services",
    "q": "Which Azure service supports secure browser-based access to VMs without exposing their RDP or SSH ports directly to the internet?",
    "context": "An administrator needs to connect to a VM privately.",
    "options": [
      "Azure DNS",
      "Azure Data Box",
      "Azure Advisor",
      "Azure Bastion"
    ],
    "answer": 3,
    "why": "Azure Bastion provides browser-based RDP and SSH access over TLS without requiring public IP addresses on the target VMs.",
    "example": "Connect to a VM through the Azure portal using Bastion."
  },
  {
    "id": "a19",
    "topic": "Azure architecture and services",
    "q": "Which Azure storage service is designed for large amounts of unstructured object data?",
    "context": "An application stores images, documents, and media files.",
    "options": [
      "Azure Blob Storage",
      "Azure VPN Gateway",
      "Azure DNS",
      "Azure Policy"
    ],
    "answer": 0,
    "why": "Blob Storage is optimized for storing unstructured object data such as files and media.",
    "example": "Store uploaded images in a blob container."
  },
  {
    "id": "a20",
    "topic": "Azure architecture and services",
    "q": "Which Azure service provides managed SMB file shares?",
    "context": "Several servers and users need shared files.",
    "options": [
      "Azure Functions",
      "Azure Queue Storage",
      "Azure Files",
      "Azure Advisor"
    ],
    "answer": 2,
    "why": "Azure Files offers managed file shares accessible through supported protocols such as SMB.",
    "example": "Mount an Azure file share for shared documents."
  },
  {
    "id": "a21",
    "topic": "Azure architecture and services",
    "q": "Which service provides durable message queues for simple asynchronous processing?",
    "context": "A web app must pass work to a background worker.",
    "options": [
      "Azure DNS",
      "Azure Queue Storage",
      "Azure Bastion",
      "Azure Virtual Network"
    ],
    "answer": 1,
    "why": "Azure Queue Storage stores messages so application components can process work asynchronously.",
    "example": "Queue order messages for a background processor."
  },
  {
    "id": "a22",
    "topic": "Azure architecture and services",
    "q": "Which Azure storage option provides persistent disks for virtual machines?",
    "context": "A VM needs an operating system disk and data disk.",
    "options": [
      "Azure DNS",
      "Azure Data Factory",
      "Azure Front Door",
      "Azure Managed Disks"
    ],
    "answer": 3,
    "why": "Managed Disks provide persistent block storage for Azure virtual machines.",
    "example": "Attach a managed data disk to a VM."
  },
  {
    "id": "a23",
    "topic": "Azure architecture and services",
    "q": "Which service helps transfer large volumes of data to Azure when network transfer is impractical?",
    "context": "A company must move many terabytes from a remote site.",
    "options": [
      "Azure Data Box",
      "Azure Functions",
      "Azure DNS",
      "Azure Advisor"
    ],
    "answer": 0,
    "why": "Azure Data Box uses physical devices to transfer large datasets to and from Azure.",
    "example": "Copy a large dataset to a Data Box device and ship it to Azure."
  },
  {
    "id": "a24",
    "topic": "Azure architecture and services",
    "q": "Which service provides a managed relational database based on Microsoft SQL Server?",
    "context": "An application needs a relational database without managing database servers.",
    "options": [
      "Azure Blob Storage",
      "Azure Queue Storage",
      "Azure SQL Database",
      "Azure Virtual Network"
    ],
    "answer": 2,
    "why": "Azure SQL Database is a managed relational database service based on SQL Server technology.",
    "example": "Store application records in a managed SQL database."
  },
  {
    "id": "a25",
    "topic": "Azure architecture and services",
    "q": "Which Azure database service is designed for globally distributed NoSQL workloads?",
    "context": "An application needs low-latency access to flexible data structures worldwide.",
    "options": [
      "Azure Files",
      "Azure Cosmos DB",
      "Azure VPN Gateway",
      "Azure Bastion"
    ],
    "answer": 1,
    "why": "Azure Cosmos DB is a globally distributed database service supporting multiple data models and APIs.",
    "example": "Store globally distributed application profile data."
  },
  {
    "id": "a26",
    "topic": "Azure architecture and services",
    "q": "Which service supports large-scale analytics and data warehousing workloads in Azure?",
    "context": "Analysts need to query large volumes of business data.",
    "options": [
      "Azure DNS",
      "Azure Bastion",
      "Azure Queue Storage",
      "Azure Synapse Analytics"
    ],
    "answer": 3,
    "why": "Azure Synapse Analytics integrates analytics and data warehousing capabilities for large-scale data workloads.",
    "example": "Analyze enterprise datasets in a data warehouse."
  },
  {
    "id": "a27",
    "topic": "Azure architecture and services",
    "q": "Which service can orchestrate data movement and transformation workflows?",
    "context": "A data team needs scheduled data pipelines.",
    "options": [
      "Azure Data Factory",
      "Azure DNS",
      "Azure Bastion",
      "Azure Data Box only"
    ],
    "answer": 0,
    "why": "Azure Data Factory creates and orchestrates data integration pipelines.",
    "example": "Schedule a pipeline that copies data into Azure storage."
  },
  {
    "id": "a28",
    "topic": "Azure architecture and services",
    "q": "Which service can help deliver web content to users through a global edge network?",
    "context": "A global website needs improved content delivery.",
    "options": [
      "Azure Resource Groups",
      "Azure Policy",
      "Azure Content Delivery Network (CDN)",
      "Azure Bastion"
    ],
    "answer": 2,
    "why": "A CDN caches supported content at edge locations to reduce latency for users.",
    "example": "Deliver static images from an edge location near the user."
  },
  {
    "id": "a29",
    "topic": "Azure architecture and services",
    "q": "Which Azure service can provide a global entry point for web applications with routing and acceleration features?",
    "context": "A company wants a global service in front of web endpoints.",
    "options": [
      "Azure Files",
      "Azure Front Door",
      "Azure Data Box",
      "Azure VPN Gateway"
    ],
    "answer": 1,
    "why": "Azure Front Door provides global application delivery, routing, acceleration, and supported security features.",
    "example": "Route users to an available web endpoint."
  },
  {
    "id": "a30",
    "topic": "Azure architecture and services",
    "q": "Which Azure service provides managed application container instances without requiring Kubernetes cluster management?",
    "context": "A team needs to run containers with minimal orchestration overhead.",
    "options": [
      "Azure DNS",
      "Azure ExpressRoute",
      "Azure Policy",
      "Azure Container Instances"
    ],
    "answer": 3,
    "why": "Azure Container Instances runs containers without requiring customers to manage virtual machines or a Kubernetes cluster.",
    "example": "Run a short-lived containerized task."
  },
  {
    "id": "a31",
    "topic": "Azure architecture and services",
    "q": "Which service provides cloud file synchronization between supported Windows Server file servers and Azure Files?",
    "context": "A company wants central storage while retaining local caching.",
    "options": [
      "Azure File Sync",
      "Azure DNS",
      "Azure Advisor",
      "Azure Functions"
    ],
    "answer": 0,
    "why": "Azure File Sync synchronizes files between supported Windows Server file servers and an Azure file share.",
    "example": "A branch office keeps frequently used files cached on its local server."
  },
  {
    "id": "a32",
    "topic": "Azure architecture and services",
    "q": "Which service is designed to host and manage a Windows desktop experience in Azure for users?",
    "context": "Staff need virtual desktops accessible remotely.",
    "options": [
      "Azure DNS",
      "Azure Data Box",
      "Azure Virtual Desktop",
      "Azure Queue Storage"
    ],
    "answer": 2,
    "why": "Azure Virtual Desktop delivers virtual desktops and remote applications from Azure.",
    "example": "Provide employees with hosted Windows desktops."
  },
  {
    "id": "a33",
    "topic": "Azure architecture and services",
    "q": "Which service provides an identity platform for managing users and access to resources?",
    "context": "Employees need to sign in to cloud applications.",
    "options": [
      "Azure Load Balancer",
      "Microsoft Entra ID",
      "Azure Data Factory",
      "Azure Files"
    ],
    "answer": 1,
    "why": "Microsoft Entra ID is Microsoft's cloud identity and access management service.",
    "example": "Require users to authenticate before accessing an application."
  },
  {
    "id": "a34",
    "topic": "Azure architecture and services",
    "q": "Which service helps monitor the performance and availability of Azure resources and applications?",
    "context": "An operations team needs metrics, logs, and alerts.",
    "options": [
      "Azure Data Box",
      "Azure DNS only",
      "Azure Queue Storage",
      "Azure Monitor"
    ],
    "answer": 3,
    "why": "Azure Monitor collects and analyzes monitoring data from Azure resources and applications.",
    "example": "Create an alert when a VM metric crosses a threshold."
  },
  {
    "id": "g1",
    "topic": "Management and governance",
    "q": "Which Azure service provides recommendations for improving cost, security, reliability, and performance?",
    "context": "An administrator wants guidance on optimizing Azure resources.",
    "options": [
      "Azure Advisor",
      "Azure DNS",
      "Azure Bastion",
      "Azure Queue Storage"
    ],
    "answer": 0,
    "why": "Azure Advisor analyzes deployments and provides recommendations across supported optimization categories.",
    "example": "Review Advisor recommendations for underused virtual machines."
  },
  {
    "id": "g2",
    "topic": "Management and governance",
    "q": "Which service provides personalized information about Azure service incidents and planned maintenance affecting your resources?",
    "context": "An administrator wants alerts about outages in a region used by the company.",
    "options": [
      "Azure Pricing Calculator",
      "Azure Service Health",
      "Azure Data Factory",
      "Azure Files"
    ],
    "answer": 1,
    "why": "Azure Service Health provides information about Azure service issues, planned maintenance, and other health events relevant to your services.",
    "example": "Configure a Service Health alert for a subscribed region."
  },
  {
    "id": "g3",
    "topic": "Management and governance",
    "q": "Which service collects metrics and logs to help monitor Azure resources?",
    "context": "An operations team needs monitoring data and alerts.",
    "options": [
      "Azure Bastion",
      "Azure Data Box",
      "Azure Monitor",
      "Azure DNS"
    ],
    "answer": 2,
    "why": "Azure Monitor collects and analyzes metrics and logs from supported resources and applications.",
    "example": "Alert when CPU usage exceeds a defined threshold."
  },
  {
    "id": "g4",
    "topic": "Management and governance",
    "q": "Which service helps estimate the cost of Azure products before deployment?",
    "context": "A project manager is planning a new workload.",
    "options": [
      "Azure Service Health",
      "Azure Policy",
      "Azure Advisor",
      "Azure Pricing Calculator"
    ],
    "answer": 3,
    "why": "The Azure Pricing Calculator estimates costs based on selected services, regions, and expected usage.",
    "example": "Estimate monthly costs for VMs, storage, and networking."
  },
  {
    "id": "g5",
    "topic": "Management and governance",
    "q": "Which tool compares the costs of running workloads on-premises versus in Azure?",
    "context": "A company is evaluating migration financial benefits.",
    "options": [
      "Azure Total Cost of Ownership (TCO) Calculator",
      "Azure DNS",
      "Azure Bastion",
      "Azure Queue Storage"
    ],
    "answer": 0,
    "why": "The TCO Calculator helps compare estimated on-premises costs with Azure costs.",
    "example": "Compare data-center expenses with a proposed Azure deployment."
  },
  {
    "id": "g6",
    "topic": "Management and governance",
    "q": "Which Azure feature restricts what resources can be deployed or how they must be configured?",
    "context": "An organization wants to prevent deployments in unapproved regions.",
    "options": [
      "Azure Monitor workbooks only",
      "Azure Policy",
      "Azure Data Box",
      "Azure Load Balancer"
    ],
    "answer": 1,
    "why": "Azure Policy evaluates resources against organizational rules and can audit or deny noncompliant configurations.",
    "example": "Deny creation of resources in regions outside an approved list."
  },
  {
    "id": "g7",
    "topic": "Management and governance",
    "q": "What is Azure role-based access control (RBAC) used for?",
    "context": "A developer should manage an application but not administer the entire subscription.",
    "options": [
      "Estimating monthly costs",
      "Transferring data using a physical device",
      "Granting permissions to users and identities at defined scopes",
      "Hosting a public website"
    ],
    "answer": 2,
    "why": "Azure RBAC assigns roles to identities at scopes such as management groups, subscriptions, resource groups, and resources.",
    "example": "Give a developer the Contributor role on one resource group."
  },
  {
    "id": "g8",
    "topic": "Management and governance",
    "q": "What does multifactor authentication (MFA) require?",
    "context": "A company wants stronger protection for user sign-ins.",
    "options": [
      "Only a longer username",
      "Only a public IP address",
      "Only a browser bookmark",
      "Two or more forms of verification"
    ],
    "answer": 3,
    "why": "MFA requires multiple verification factors, making a stolen password less sufficient for account access.",
    "example": "Use a password and an authenticator approval."
  },
  {
    "id": "g9",
    "topic": "Management and governance",
    "q": "Which Microsoft Entra capability can apply sign-in controls based on conditions such as user, location, or risk?",
    "context": "A company wants to require stronger authentication for risky sign-ins.",
    "options": [
      "Conditional Access",
      "Azure Data Box",
      "Azure Files",
      "Azure DNS"
    ],
    "answer": 0,
    "why": "Conditional Access evaluates signals and applies access policies, such as requiring MFA or blocking access.",
    "example": "Require MFA when a sign-in meets a defined risk condition."
  },
  {
    "id": "g10",
    "topic": "Management and governance",
    "q": "Which feature can prevent an Azure resource from being accidentally deleted?",
    "context": "A production resource must be protected from deletion.",
    "options": [
      "A cost alert",
      "A resource lock",
      "A DNS record",
      "A dashboard chart"
    ],
    "answer": 1,
    "why": "Resource locks help protect resources against accidental deletion or modification.",
    "example": "Apply a CanNotDelete lock to a production resource group."
  },
  {
    "id": "g11",
    "topic": "Management and governance",
    "q": "What are Azure resource tags commonly used for?",
    "context": "A finance team needs to report costs by department.",
    "options": [
      "Encrypting every network packet",
      "Replacing identity permissions",
      "Organizing resources with metadata",
      "Automatically deleting every unused resource"
    ],
    "answer": 2,
    "why": "Tags are name-value pairs used to categorize resources for organization, reporting, and cost analysis.",
    "example": "Tag resources with Department=Finance."
  },
  {
    "id": "g12",
    "topic": "Management and governance",
    "q": "Which tool helps analyze Azure spending and identify costs by service or resource?",
    "context": "A team wants to understand its current cloud bill.",
    "options": [
      "Azure Bastion",
      "Azure DNS",
      "Azure File Sync",
      "Microsoft Cost Management"
    ],
    "answer": 3,
    "why": "Cost Management provides tools for analyzing, monitoring, and optimizing Azure spending.",
    "example": "Review costs by subscription and resource group."
  },
  {
    "id": "g13",
    "topic": "Management and governance",
    "q": "What does an Azure budget help you do?",
    "context": "A team wants to be notified when spending approaches a target.",
    "options": [
      "Track spending against a defined cost threshold",
      "Guarantee that no costs can occur",
      "Replace all service-level agreements",
      "Create a private network automatically"
    ],
    "answer": 0,
    "why": "Budgets track spending against defined thresholds and can trigger notifications or supported actions.",
    "example": "Set a monthly budget and alert at 80 percent of the amount."
  },
  {
    "id": "g14",
    "topic": "Management and governance",
    "q": "Which Azure service helps assess security posture and provides security recommendations?",
    "context": "A security team wants to identify misconfigurations and threats.",
    "options": [
      "Azure Pricing Calculator",
      "Microsoft Defender for Cloud",
      "Azure Data Box",
      "Azure DNS"
    ],
    "answer": 1,
    "why": "Microsoft Defender for Cloud helps assess security posture and provides security recommendations and supported threat protection.",
    "example": "Review recommendations for a VM with an exposed management port."
  },
  {
    "id": "g15",
    "topic": "Management and governance",
    "q": "What is the purpose of a read-only resource lock?",
    "context": "A critical resource must not be modified by users.",
    "options": [
      "It deletes the resource after one day",
      "It automatically grants Owner permissions",
      "It prevents supported write operations on the locked scope",
      "It disables all billing records"
    ],
    "answer": 2,
    "why": "A ReadOnly lock prevents modification operations at the locked scope, subject to Azure's lock behavior and exceptions.",
    "example": "Protect a critical resource from configuration changes."
  },
  {
    "id": "g16",
    "topic": "Management and governance",
    "q": "Which tool provides a browser-based command-line environment for managing Azure?",
    "context": "An administrator wants to run Azure CLI commands without installing them locally.",
    "options": [
      "Azure Pricing Calculator",
      "Azure Service Health",
      "Azure Advisor",
      "Azure Cloud Shell"
    ],
    "answer": 3,
    "why": "Azure Cloud Shell is a browser-accessible shell with Azure management tools available.",
    "example": "Open Cloud Shell in the portal and run an Azure CLI command."
  },
  {
    "id": "g17",
    "topic": "Management and governance",
    "q": "Which command-line tool uses commands such as `az group list` to manage Azure?",
    "context": "An engineer prefers command-line automation.",
    "options": [
      "Azure CLI",
      "Azure DNS",
      "Azure Advisor",
      "Azure Policy only"
    ],
    "answer": 0,
    "why": "Azure CLI is a cross-platform command-line tool for creating and managing Azure resources.",
    "example": "Run `az group list` to list accessible resource groups."
  },
  {
    "id": "g18",
    "topic": "Management and governance",
    "q": "Which scripting environment provides Azure PowerShell cmdlets such as `Get-AzResource`?",
    "context": "An administrator automates tasks with PowerShell.",
    "options": [
      "Azure Front Door",
      "Azure PowerShell",
      "Azure Queue Storage",
      "Azure Data Box"
    ],
    "answer": 1,
    "why": "Azure PowerShell provides cmdlets for administering Azure resources through PowerShell.",
    "example": "Use `Get-AzResource` to retrieve resources."
  },
  {
    "id": "g19",
    "topic": "Management and governance",
    "q": "What is an Azure Resource Manager (ARM) template used for?",
    "context": "A team wants repeatable infrastructure deployments.",
    "options": [
      "Monitoring CPU temperature on a laptop",
      "Replacing all network security rules",
      "Defining Azure infrastructure declaratively for deployment",
      "Storing only application images"
    ],
    "answer": 2,
    "why": "ARM templates describe infrastructure and configuration as code for repeatable Azure deployments.",
    "example": "Deploy a resource group with a template."
  },
  {
    "id": "g20",
    "topic": "Management and governance",
    "q": "What is Bicep used for?",
    "context": "A team wants a more concise language for Azure infrastructure as code.",
    "options": [
      "Email filtering",
      "Manual cost approval only",
      "Domain registration only",
      "Declaratively defining and deploying Azure resources"
    ],
    "answer": 3,
    "why": "Bicep is a domain-specific language that simplifies authoring Azure infrastructure as code and compiles to ARM templates.",
    "example": "Define a storage account in a Bicep file."
  },
  {
    "id": "g21",
    "topic": "Management and governance",
    "q": "Which service provides a centralized inventory and query capability for Azure resources?",
    "context": "An administrator needs to find resources across subscriptions.",
    "options": [
      "Azure Resource Graph",
      "Azure Bastion",
      "Azure Data Box",
      "Azure Queue Storage"
    ],
    "answer": 0,
    "why": "Azure Resource Graph enables querying resource metadata across large Azure environments.",
    "example": "Query resources by type or tag across subscriptions."
  },
  {
    "id": "g22",
    "topic": "Management and governance",
    "q": "Which Azure service helps manage servers running outside Azure, including on-premises and other-cloud environments?",
    "context": "A company wants centralized management across hybrid infrastructure.",
    "options": [
      "Azure Pricing Calculator",
      "Azure Arc",
      "Azure DNS",
      "Azure Files"
    ],
    "answer": 1,
    "why": "Azure Arc extends supported Azure management capabilities to resources outside Azure.",
    "example": "Connect an on-premises server to Azure Arc."
  },
  {
    "id": "g23",
    "topic": "Management and governance",
    "q": "What is Microsoft Purview primarily used for?",
    "context": "An organization needs to understand and govern its data estate.",
    "options": [
      "Deploying virtual machines",
      "Balancing TCP traffic",
      "Data governance, discovery, and related data management capabilities",
      "Creating VPN tunnels only"
    ],
    "answer": 2,
    "why": "Microsoft Purview provides data governance and related capabilities to help discover, understand, and manage data.",
    "example": "Catalog datasets and track data lineage."
  },
  {
    "id": "g24",
    "topic": "Management and governance",
    "q": "Which portal area helps customers review trust, compliance, and audit-related documentation for Microsoft cloud services?",
    "context": "A compliance officer needs provider documentation.",
    "options": [
      "Azure Bastion",
      "Azure Queue Storage",
      "Azure DNS",
      "Service Trust Portal"
    ],
    "answer": 3,
    "why": "The Service Trust Portal provides access to Microsoft's trust, compliance, and audit documentation for supported services.",
    "example": "Review relevant compliance reports for a cloud service."
  },
  {
    "id": "g25",
    "topic": "Management and governance",
    "q": "What does least privilege mean?",
    "context": "A user needs permission to perform one specific task.",
    "options": [
      "Grant only the permissions required for the task",
      "Grant every user Owner access",
      "Share administrator credentials",
      "Disable authentication"
    ],
    "answer": 0,
    "why": "Least privilege limits access to the minimum permissions needed to perform assigned responsibilities.",
    "example": "Give a support worker Reader access instead of Owner."
  },
  {
    "id": "g26",
    "topic": "Management and governance",
    "q": "Which Microsoft Entra feature can provide time-limited privileged access with approval or other controls?",
    "context": "Administrators should not have permanent elevated access.",
    "options": [
      "Azure DNS",
      "Privileged Identity Management (PIM)",
      "Azure Data Factory",
      "Azure Files"
    ],
    "answer": 1,
    "why": "PIM helps manage, control, and monitor privileged role assignments, including eligible and time-limited activation.",
    "example": "An administrator activates an eligible role only when needed."
  },
  {
    "id": "g27",
    "topic": "Management and governance",
    "q": "What is the purpose of an Azure Monitor alert rule?",
    "context": "Operations staff must be notified when a condition occurs.",
    "options": [
      "Create a new Azure region",
      "Replace all access policies",
      "Notify or trigger an action when a monitored condition is met",
      "Automatically guarantee that an outage cannot occur"
    ],
    "answer": 2,
    "why": "Alert rules evaluate signals and can notify people or invoke supported action groups when conditions are met.",
    "example": "Send a notification when application response time rises above a threshold."
  },
  {
    "id": "g28",
    "topic": "Management and governance",
    "q": "Which Azure Monitor capability helps analyze and query log data?",
    "context": "An engineer needs to investigate failed requests.",
    "options": [
      "Azure Bastion",
      "Azure Pricing Calculator",
      "Azure DNS",
      "Log Analytics"
    ],
    "answer": 3,
    "why": "Log Analytics supports querying and analyzing collected log data using Kusto Query Language (KQL).",
    "example": "Query application logs to find failed requests."
  },
  {
    "id": "g29",
    "topic": "Management and governance",
    "q": "Which practice can help reduce cloud costs for nonproduction virtual machines?",
    "context": "Development VMs are used only during business hours.",
    "options": [
      "Stop or deallocate VMs when they are not needed",
      "Increase every VM size",
      "Disable cost monitoring",
      "Keep all unused resources running"
    ],
    "answer": 0,
    "why": "Stopping or deallocating suitable resources when they are not needed can reduce compute costs, though some storage and other charges may remain.",
    "example": "Schedule development VMs to stop overnight."
  },
  {
    "id": "g30",
    "topic": "Management and governance",
    "q": "Which Azure feature can help enforce required metadata across resources?",
    "context": "Every resource must include a department tag.",
    "options": [
      "Azure Bastion",
      "Azure Policy",
      "Azure Data Box",
      "Azure Load Balancer"
    ],
    "answer": 1,
    "why": "Azure Policy can audit or deny resources that do not meet requirements, including required tags.",
    "example": "Audit or deny resources missing a Department tag."
  },
  {
    "id": "g31",
    "topic": "Management and governance",
    "q": "What is the purpose of Microsoft Entra ID?",
    "context": "An organization needs centralized identity and authentication for cloud apps.",
    "options": [
      "Manage virtual machine disks only",
      "Estimate resource costs only",
      "Manage identities and access to applications and resources",
      "Transfer physical storage devices"
    ],
    "answer": 2,
    "why": "Microsoft Entra ID provides cloud identity and access management, including authentication and access controls.",
    "example": "Allow employees to sign in to Microsoft 365 and connected apps."
  },
  {
    "id": "g32",
    "topic": "Management and governance",
    "q": "Which Azure tool helps track planned maintenance and service issues that may affect a customer's resources?",
    "context": "An administrator wants service-impact information relevant to the subscription.",
    "options": [
      "Azure Data Factory",
      "Azure Pricing Calculator",
      "Azure Files",
      "Azure Service Health"
    ],
    "answer": 3,
    "why": "Azure Service Health provides tailored information about service incidents, planned maintenance, and health advisories.",
    "example": "Create an alert for service issues affecting a deployed region."
  },
  {
    "id": "g33",
    "topic": "Management and governance",
    "q": "Which feature helps identify unused or underutilized Azure resources and offers optimization advice?",
    "context": "A company wants to improve resource efficiency.",
    "options": [
      "Azure Advisor",
      "Azure DNS",
      "Azure Bastion",
      "Azure Queue Storage"
    ],
    "answer": 0,
    "why": "Azure Advisor provides optimization recommendations, including cost and performance guidance.",
    "example": "Review recommendations for an underutilized VM."
  },
  {
    "id": "g34",
    "topic": "Management and governance",
    "q": "Why should organizations review and test backups regularly?",
    "context": "A business needs confidence that it can recover important information.",
    "options": [
      "A backup always restores itself without configuration",
      "To confirm that retained data can be recovered when required",
      "Backups remove the need for identity controls",
      "Testing backups guarantees that no outage will occur"
    ],
    "answer": 1,
    "why": "Backup testing validates that recovery procedures work and that required data can be restored.",
    "example": "Perform a test restore and document the recovery results."
  }
];
const FLASHCARDS=[
{front:"What does scalability mean in cloud computing?",hint:"Think about changing workload demand.",back:"The ability to increase or decrease resources to meet workload demand. Scaling can be vertical (larger capacity) or horizontal (more instances), depending on the service.",topic:"Cloud concepts"},
{front:"What is the shared responsibility model?",hint:"Who manages which parts of a cloud solution?",back:"A model that divides security and operational responsibilities between the cloud provider and customer. The division changes across IaaS, PaaS, and SaaS.",topic:"Cloud concepts"},
{front:"How do IaaS, PaaS, and SaaS differ?",hint:"Compare how much of the stack the customer manages.",back:"IaaS provides infrastructure; the customer manages more of the software stack. PaaS provides a managed platform for building/deploying apps. SaaS delivers a ready-to-use application.",topic:"Cloud concepts"},
{front:"What is a hybrid cloud?",hint:"Think public cloud plus another environment.",back:"An arrangement that combines private infrastructure or on-premises systems with public cloud services.",topic:"Cloud concepts"},
{front:"What is an Azure region?",hint:"A geographic area with Azure datacentres.",back:"A geographic area containing one or more datacentres connected through a low-latency network. Service availability varies by region.",topic:"Azure architecture and services"},
{front:"What are availability zones?",hint:"Think separate locations within one region.",back:"Physically separate locations within an Azure region, designed with independent infrastructure to support resiliency for supported services.",topic:"Azure architecture and services"},
{front:"What is an Azure resource group?",hint:"A logical container, not a physical location.",back:"A logical container for Azure resources that can be managed together. Resource groups sit within subscriptions.",topic:"Azure architecture and services"},
{front:"What does Azure RBAC do?",hint:"Identity, role, scope.",back:"Role-based access control assigns permissions to identities through roles at a scope such as a management group, subscription, resource group, or resource.",topic:"Azure architecture and services"},
{front:"When would Azure Functions be useful?",hint:"Event-driven code without managing a VM.",back:"For running code in response to triggers or events, such as a queue message or timer, while the platform abstracts much of the server management.",topic:"Azure architecture and services"},
{front:"What is Azure Policy used for?",hint:"Organizational rules and compliance.",back:"It evaluates resources against policy definitions and can audit, deny, or otherwise manage compliance depending on the configured effect.",topic:"Management and governance"},
{front:"Azure Monitor vs Azure Service Health?",hint:"Telemetry vs service incidents and maintenance.",back:"Azure Monitor collects and analyzes metrics, logs, and telemetry. Azure Service Health communicates Azure service issues, planned maintenance, and advisories relevant to your services.",topic:"Management and governance"},
{front:"What are Azure resource tags?",hint:"Metadata in name-value pairs.",back:"Tags are name-value pairs applied to supported resources to help organize assets, report costs, and support operations. Tags alone do not enforce governance.",topic:"Management and governance"}
];
const TOPICS=["Cloud concepts","Azure architecture and services","Management and governance"];
const STORE="cloudready_az900_v1";
let state=loadState(), exam=null, examTimer=null, examSeconds=0, practice=null, flashIndex=0, flashRevealed=false, flashQueueMode=false, flashQueueIndex=0;
function emptyState(){return {attempts:[],sessions:[],flashKnown:[],flashReview:[]}}
function loadState(){try{const saved=JSON.parse(localStorage.getItem(STORE));if(!saved||typeof saved!=="object")return emptyState();return {attempts:Array.isArray(saved.attempts)?saved.attempts.filter(a=>a&&typeof a.topic==="string"&&typeof a.correct==="boolean"&&a.selected!==null):[],sessions:Array.isArray(saved.sessions)?saved.sessions.filter(x=>x&&Number.isFinite(x.score)&&Number.isFinite(x.total)):[],flashKnown:Array.isArray(saved.flashKnown)?saved.flashKnown.filter(x=>typeof x==="string"):[],flashReview:Array.isArray(saved.flashReview)?saved.flashReview.filter(x=>typeof x==="string"):[]}}catch(e){return emptyState()}}
function saveState(){try{localStorage.setItem(STORE,JSON.stringify(state))}catch(e){toast("Progress could not be saved in this browser. Your current session can continue.")}renderDashboard()}
function validateQuestionBank(bank){const ids=new Set();return bank.every(q=>q&&typeof q.id==="string"&&!ids.has(q.id)&&ids.add(q.id)&&TOPICS.includes(q.topic)&&Array.isArray(q.options)&&q.options.length===4&&Number.isInteger(q.answer)&&q.answer>=0&&q.answer<q.options.length&&q.options.every(o=>typeof o==="string"&&o.trim())&&typeof q.q==="string"&&q.q.trim()&&typeof q.context==="string"&&q.context.trim()&&typeof q.why==="string"&&q.why.trim()&&typeof q.example==="string"&&q.example.trim())}
function gradeAnswers(questions,answers){let correct=0,answered=0;for(const q of questions){if(Object.prototype.hasOwnProperty.call(answers,q.id)){answered++;if(answers[q.id]===q.answer)correct++}}return {correct,answered,total:questions.length,unanswered:questions.length-answered,score:questions.length?Math.round(correct/questions.length*100):0,accuracy:answered?Math.round(correct/answered*100):0}}
if(!validateQuestionBank(QUESTIONS)){console.error("CloudReady question bank validation failed. Check unique IDs, topics, options, answer indexes, and explanations.");document.body.insertAdjacentHTML("afterbegin",'<div role="alert" class="source-note">Question content failed validation. Please refresh or contact the project maintainer.</div>')}
function esc(s){return String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]))}
function shuffle(arr){let a=arr.slice();for(let i=a.length-1;i>0;i--){let j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a}
function selectExamQuestions(count,bank=QUESTIONS,randomize=shuffle){if(count==="all")return randomize(bank);const target=Math.max(0,Math.min(Number(count)||0,bank.length));const groups=TOPICS.map(topic=>({topic,items:randomize(bank.filter(q=>q.topic===topic))}));const selected=[];while(selected.length<target){let added=false;for(const group of groups){if(group.items.length&&selected.length<target){selected.push(group.items.pop());added=true}}if(!added)break}return randomize(selected)}
function toast(msg){let t=document.getElementById("toast");t.textContent=msg;t.classList.add("show");setTimeout(()=>t.classList.remove("show"),2400)}
function navigate(page){document.querySelectorAll(".page").forEach(p=>p.classList.toggle("active",p.id==="page-"+page));document.querySelectorAll(".nav-item").forEach(b=>b.classList.toggle("active",b.dataset.page===page));let titles={home:"Your learning cockpit",exam:"Exam simulation",practice:"Topic practice",flashcards:"Flashcard coach",planner:"Your study planner",progress:"Readiness report"};document.getElementById("top-title").textContent=titles[page]||"CloudReady";if(page==="progress")renderProgress();if(page==="flashcards")renderFlash();window.scrollTo({top:0,behavior:"smooth"})}
document.querySelectorAll("[data-page]").forEach(b=>b.addEventListener("click",()=>navigate(b.dataset.page)));
function allAttempts(){return state.attempts||[]}
function topicStats(topic){let a=allAttempts().filter(x=>x.topic===topic);return{total:a.length,correct:a.filter(x=>x.correct).length,accuracy:a.length?Math.round(a.filter(x=>x.correct).length/a.length*100):0}}
function renderDashboard(){let a=allAttempts(),correct=a.filter(x=>x.correct).length;document.getElementById("stat-answered").textContent=a.length;document.getElementById("stat-accuracy").textContent=a.length?Math.round(correct/a.length*100)+"%":"N/A";document.getElementById("stat-sessions").textContent=(state.sessions||[]).length;let weak=TOPICS.filter(t=>topicStats(t).total===0||topicStats(t).accuracy<70);document.getElementById("stat-weak").textContent=weak.length;document.getElementById("hero-answered").textContent=a.length+" question"+(a.length===1?"":"s")+" answered";let sorted=TOPICS.map(t=>({t,...topicStats(t)})).sort((x,y)=>x.accuracy-y.accuracy);document.getElementById("hero-next").textContent=sorted[0].total?sorted[0].t+" needs a revisit":"Discover your strongest topic"}
function startExam(){let n=document.getElementById("exam-count").value;let qs=selectExamQuestions(n);exam={qs,answers:{},flags:new Set(),index:0,start:Date.now()};document.getElementById("exam-setup").classList.add("hidden");document.getElementById("exam-results").classList.add("hidden");document.getElementById("exam-workspace").classList.remove("hidden");let mins=Number(document.getElementById("exam-time").value);examSeconds=mins*60;if(examTimer)clearInterval(examTimer);if(mins>0){updateTimer();examTimer=setInterval(()=>{examSeconds--;updateTimer();if(examSeconds<=0){clearInterval(examTimer);finishExam(true)}},1000)}else document.getElementById("exam-timer").textContent="No timer";renderExamQuestion()}
function updateTimer(){let el=document.getElementById("exam-timer");el.textContent=String(Math.floor(Math.max(0,examSeconds)/60)).padStart(2,"0")+":"+String(Math.max(0,examSeconds)%60).padStart(2,"0");el.classList.toggle("warning",examSeconds<180)}
function renderExamQuestion(){if(!exam)return;let q=exam.qs[exam.index],idx=exam.index;document.getElementById("exam-progress-label").textContent=`Question ${idx+1} of ${exam.qs.length}`;document.getElementById("exam-topic").textContent=q.topic;document.getElementById("exam-question").textContent=q.q;document.getElementById("exam-context").textContent=q.context;document.getElementById("exam-progress-bar").style.width=((idx+1)/exam.qs.length*100)+"%";document.getElementById("exam-options").innerHTML=q.options.map((o,i)=>`<button class="answer-option ${exam.answers[q.id]===i?"selected":""}" data-answer="${i}"><span class="letter">${"ABCD"[i]}</span><span>${esc(o)}</span></button>`).join("");document.querySelectorAll("[data-answer]").forEach(b=>b.addEventListener("click",()=>{exam.answers[q.id]=Number(b.dataset.answer);renderExamQuestion()}));let flag=document.getElementById("flag-question");flag.classList.toggle("flagged",exam.flags.has(q.id));flag.textContent=exam.flags.has(q.id)?"[!] Flagged for review":"[ ] Flag for review";document.getElementById("exam-prev").disabled=idx===0;document.getElementById("exam-next").textContent=idx===exam.qs.length-1?"Review answers ->":"Next question ->";document.getElementById("exam-answered-label").textContent=Object.keys(exam.answers).length+" answered";document.getElementById("exam-map").innerHTML=exam.qs.map((item,i)=>`<button class="number-btn ${exam.answers[item.id]!==undefined?"answered":""} ${exam.flags.has(item.id)?"flagged":""} ${i===idx?"current":""}" data-jump="${i}">${i+1}</button>`).join("");document.querySelectorAll("[data-jump]").forEach(b=>b.addEventListener("click",()=>{exam.index=Number(b.dataset.jump);renderExamQuestion()}))}
function finishExam(timeout=false){if(!exam||exam.finished)return;exam.finished=true;clearInterval(examTimer);const completed=exam,qs=completed.qs,grade=gradeAnswers(qs,completed.answers),stamp=Date.now();qs.forEach(q=>{if(!Object.prototype.hasOwnProperty.call(completed.answers,q.id))return;const ans=completed.answers[q.id];state.attempts.push({id:q.id,topic:q.topic,correct:ans===q.answer,selected:ans,at:stamp,mode:"Exam simulation"})});state.sessions.push({at:stamp,score:grade.score,correct:grade.correct,total:grade.total,answered:grade.answered,unanswered:grade.unanswered,mode:"Exam simulation"});saveState();document.getElementById("exam-workspace").classList.add("hidden");let r=document.getElementById("exam-results");r.classList.remove("hidden");r.innerHTML=`<div class="result-header"><div class="result-score">${grade.score}%</div><div><span class="pill">${timeout?"TIME EXPIRED":"SIMULATION COMPLETE"}</span><h2>${grade.correct===grade.total?"Excellent work!":grade.score>=70?"Good progress. Keep sharpening.":"A useful baseline to build from."}</h2><p>You answered ${grade.answered} of ${grade.total} questions. ${grade.correct} correct | ${grade.unanswered} unanswered | ${grade.total-grade.correct} to review. Score is calculated against all questions, with unanswered items counted as incorrect. Only questions you answered contribute to topic practice accuracy. This is practice feedback, not an official exam result.</p></div></div><div class="section-heading"><div><div class="eyebrow">LEARN FROM EVERY QUESTION</div><h2>Answer review</h2></div><button class="btn btn-ghost" id="back-to-setup">New simulation</button></div><div class="review-list">${qs.map((q,i)=>{let answered=Object.prototype.hasOwnProperty.call(completed.answers,q.id),ans=completed.answers[q.id],ok=answered&&ans===q.answer;return `<article class="review-item"><div class="review-status ${ok?"correct":"incorrect"}">${ok?"[OK] CORRECT":answered?"[!] REVIEW":"[ ] UNANSWERED"} | QUESTION ${i+1}</div><h3>${esc(q.q)}</h3><p><b>Your answer:</b> ${!answered?"Not answered":esc(q.options[ans])}</p><p><b>Best answer:</b> ${esc(q.options[q.answer])}</p><p>${esc(q.why)}</p><p><b>Real-world example:</b> ${esc(q.example)}</p></article>`}).join("")}</div>`;document.getElementById("back-to-setup").addEventListener("click",()=>{r.classList.add("hidden");document.getElementById("exam-setup").classList.remove("hidden");exam=null});toast("Simulation saved to your local progress")}
document.getElementById("start-exam").addEventListener("click",startExam);document.getElementById("flag-question").addEventListener("click",()=>{let id=exam.qs[exam.index].id;exam.flags.has(id)?exam.flags.delete(id):exam.flags.add(id);renderExamQuestion()});document.getElementById("exam-prev").addEventListener("click",()=>{if(exam.index>0){exam.index--;renderExamQuestion()}});document.getElementById("exam-next").addEventListener("click",()=>{if(exam.index<exam.qs.length-1){exam.index++;renderExamQuestion()}else toast("Review the question map, then submit when ready.")});document.getElementById("submit-exam").addEventListener("click",()=>{if(!exam)return;let unanswered=exam.qs.length-Object.keys(exam.answers).length;if(unanswered&&!confirm(`You have ${unanswered} unanswered question(s). Submit anyway?`))return;finishExam(false)});
function startPractice(){let topic=document.getElementById("practice-topic").value,order=document.getElementById("practice-order").value,qs;if(topic!=="all"){qs=QUESTIONS.filter(q=>q.topic===topic);qs=shuffle(qs)}else if(order==="weak"){const priority=TOPICS.map((name,index)=>({...topicStats(name),name,index})).sort((a,b)=>(a.total? a.accuracy:-1)-(b.total?b.accuracy:-1)||a.index-b.index);qs=priority.flatMap(t=>shuffle(QUESTIONS.filter(q=>q.topic===t.name)))}else qs=shuffle(QUESTIONS);practice={qs,index:0,answered:{}};renderPractice()}
function renderPractice(){let area=document.getElementById("practice-area");if(!practice||practice.index>=practice.qs.length){area.innerHTML=`<div class="empty-state"><span>[OK]</span><h2>Practice round complete</h2><p>Your answers have been added to your learning history.</p><button class="btn btn-primary" id="practice-again">Practise again -></button></div>`;document.getElementById("practice-again").onclick=startPractice;return}let q=practice.qs[practice.index],ans=practice.answered[q.id];area.innerHTML=`<div class="practice-topline"><span>${esc(q.topic)}</span><span>Question ${practice.index+1} of ${practice.qs.length}</span></div><h2>${esc(q.q)}</h2><p class="question-context">${esc(q.context)}</p><div class="answer-options">${q.options.map((o,i)=>`<button class="answer-option ${ans!==undefined&&i===ans?"selected":""}" data-panswer="${i}" ${ans!==undefined?"disabled":""}><span class="letter">${"ABCD"[i]}</span><span>${esc(o)}</span></button>`).join("")}</div>${ans!==undefined?`<div class="practice-feedback ${ans===q.answer?"":"bad"}"><b>${ans===q.answer?"[OK] That's right!":"[!] Not quite N/A let's learn it."}</b><p><b>Best answer: ${esc(q.options[q.answer])}.</b> ${esc(q.why)}</p><p><b>Real-world connection:</b> ${esc(q.example)}</p><button class="btn btn-primary" id="practice-next">${practice.index===practice.qs.length-1?"Finish round":"Next question ->"}</button></div>`:""}`;area.querySelectorAll("[data-panswer]").forEach(b=>b.addEventListener("click",()=>{let chosen=Number(b.dataset.panswer);practice.answered[q.id]=chosen;let ok=chosen===q.answer;state.attempts.push({id:q.id,topic:q.topic,correct:ok,selected:chosen,at:Date.now(),mode:"Topic practice"});saveState();renderPractice()}));let next=document.getElementById("practice-next");if(next)next.onclick=()=>{practice.index++;renderPractice()}}
document.getElementById("start-practice").addEventListener("click",startPractice);
function activeFlashCard(){if(flashQueueMode&&state.flashReview.length){const front=state.flashReview[Math.min(flashQueueIndex,state.flashReview.length-1)];const queued=FLASHCARDS.find(c=>c.front===front);if(queued)return queued}return FLASHCARDS[flashIndex]}
function renderFlash(){let c=activeFlashCard(),total=flashQueueMode?state.flashReview.length:FLASHCARDS.length,index=flashQueueMode?Math.min(flashQueueIndex,total-1):flashIndex;document.getElementById("flash-count").textContent=flashQueueMode?`REVIEW ${index+1} / ${total}`:`CARD ${index+1} / ${FLASHCARDS.length}`;document.getElementById("flash-front").textContent=c.front;document.getElementById("flash-hint").textContent=c.hint;document.getElementById("flash-back").textContent=c.back;document.getElementById("flash-back").classList.toggle("hidden",!flashRevealed);document.getElementById("flashcard").classList.toggle("revealed",flashRevealed);document.getElementById("flash-known").textContent=(state.flashKnown||[]).length;document.getElementById("flash-review").textContent=(state.flashReview||[]).length;document.getElementById("flash-review-queue").textContent=flashQueueMode?"Exit review queue":"Review saved cards ->"}
function flipFlash(){flashRevealed=!flashRevealed;renderFlash()}document.getElementById("flashcard").addEventListener("click",flipFlash);document.getElementById("flash-review-queue").addEventListener("click",()=>{if(!flashQueueMode&&!state.flashReview.length){toast("No saved cards to review yet");return}flashQueueMode=!flashQueueMode;flashQueueIndex=0;flashRevealed=false;renderFlash()});document.getElementById("flash-prev").addEventListener("click",()=>{if(flashQueueMode){flashQueueIndex=(flashQueueIndex+state.flashReview.length-1)%state.flashReview.length}else flashIndex=(flashIndex+FLASHCARDS.length-1)%FLASHCARDS.length;flashRevealed=false;renderFlash()});document.getElementById("flash-again").addEventListener("click",()=>{const front=activeFlashCard().front;if(!state.flashReview.includes(front))state.flashReview.push(front);state.flashKnown=state.flashKnown.filter(x=>x!==front);saveState();if(flashQueueMode){flashQueueIndex=state.flashReview.length?(flashQueueIndex+1)%state.flashReview.length:0}else flashIndex=(flashIndex+1)%FLASHCARDS.length;flashRevealed=false;renderFlash();toast("Card added to your review list")});document.getElementById("flash-know").addEventListener("click",()=>{if(!flashRevealed){toast("Reveal the answer before marking it known");return}const front=activeFlashCard().front;if(!state.flashKnown.includes(front))state.flashKnown.push(front);state.flashReview=state.flashReview.filter(x=>x!==front);saveState();if(flashQueueMode){if(!state.flashReview.length){flashQueueMode=false;flashQueueIndex=0;toast("Review queue complete")}else flashQueueIndex=flashQueueIndex>=state.flashReview.length?0:flashQueueIndex}else flashIndex=(flashIndex+1)%FLASHCARDS.length;flashRevealed=false;renderFlash()});
function generatePlan(){let date=document.getElementById("plan-date").value,hours=Number(document.getElementById("plan-hours").value),days=Number(document.getElementById("plan-days").value);if(!date){toast("Choose a target date first");return}let now=new Date();now.setHours(0,0,0,0);let target=new Date(date+"T00:00:00");let gap=Math.ceil((target-now)/86400000);if(gap<1){toast("Choose a date at least one day from today");return}const steps=[{title:"Cloud concepts",topic:TOPICS[0],desc:"Review cloud models, shared responsibility, consumption-based pricing, benefits, and IaaS/PaaS/SaaS."},{title:"Azure architecture & services",topic:TOPICS[1],desc:"Revise regions, availability zones, resource hierarchy, compute, networking, storage, identity, and security."},{title:"Management & governance",topic:TOPICS[2],desc:"Review costs, tags, Azure Policy, resource locks, management tools, infrastructure as code, and monitoring."},{title:"Mixed practice + error review",topic:null,desc:"Complete a mixed practice run. Revisit incorrect answers and explain the correct choice in your own words."}];const ordered=steps.slice(0,3).sort((a,b)=>{const sa=topicStats(a.topic),sb=topicStats(b.topic);return (sa.total?sa.accuracy:-1)-(sb.total?sb.accuracy:-1)}).concat(steps[3]);const dayPlan=[];let sessions=0,cursor=new Date(now);for(let day=0;cursor<target;day++,cursor.setDate(cursor.getDate()+1)){if(day%7<days){sessions++;if(dayPlan.length<14){const step=ordered[(sessions-1)%ordered.length];dayPlan.push({day:sessions,date:cursor.toLocaleDateString(undefined,{month:"short",day:"numeric"}),step,mins:Math.round(hours*60)})}}}document.getElementById("plan-output").innerHTML=`<span class="pill">PERSONAL STUDY PLAN</span><h2 style="margin-top:13px">${gap} day${gap===1?"":"s"} until your target date</h2><p class="plan-sub">${hours} hour${hours===1?"":"s"} per study day | up to ${days} days/week | about ${Math.round(sessions*hours*10)/10} planned study hours across ${sessions} sessions${sessions>dayPlan.length?` (showing the first ${dayPlan.length})`:""}</p>${dayPlan.map((d,i)=>`<div class="plan-day"><strong>SESSION ${String(d.day).padStart(2,"0")}<br><span style="font-weight:400;color:#8496b2">${esc(d.date)} | ${d.mins} min</span></strong><div><h3>${esc(d.step.title)}</h3><p>${esc(d.step.desc)}</p><span class="plan-badge">${i===dayPlan.length-1?"Finish with reflection":"Study + short practice"}</span></div></div>`).join("")}<p class="muted">Suggested plan only. Your available time and learning needs may change. Prioritize topics where your saved practice accuracy is lowest; topics with no attempts have no measured accuracy yet.</p>`}
document.getElementById("generate-plan").addEventListener("click",generatePlan);
function renderProgress(){let a=allAttempts(),correct=a.filter(x=>x.correct).length,acc=a.length?Math.round(correct/a.length*100):0;document.getElementById("report-accuracy").textContent=a.length?acc+"%":"N/A";document.getElementById("report-ring-value").textContent=acc+"%";document.getElementById("report-ring").style.background=`conic-gradient(from 0deg, #56d6e8 ${acc*3.6}deg, #2b3c55 ${acc*3.6}deg)`;document.getElementById("report-ring").style.border="0";document.getElementById("report-ring").style.position="relative";document.getElementById("report-ring").style.boxShadow="inset 0 0 0 8px #111a2d";document.getElementById("report-summary").textContent=a.length?`${correct} correct out of ${a.length} saved answers. Use topic-level results to guide your next revision session.`:"Answer questions in practice or simulation mode to start building your learning profile.";document.getElementById("topic-breakdown").innerHTML=TOPICS.map(t=>{let s=topicStats(t);return `<article class="topic-card"><h3>${esc(t)}</h3><div class="topic-score">${s.total?s.accuracy+"%":"N/A"}</div><div class="topic-detail">${s.correct} correct | ${s.total} attempted</div><div class="progress-track"><span style="width:${s.accuracy}%;background:${s.total&&s.accuracy<70?"#ffb86b":"#56d6e8"}"></span></div><button data-revise="${esc(t)}">Practise this topic -></button></article>`}).join("");document.querySelectorAll("[data-revise]").forEach(b=>b.onclick=()=>{navigate("practice");document.getElementById("practice-topic").value=b.dataset.revise;startPractice()});let sessions=(state.sessions||[]).slice().reverse().slice(0,8);document.getElementById("recent-activity").innerHTML=sessions.length?sessions.map(s=>`<div class="activity-row"><div><b>${esc(s.mode)}</b><br><span>${new Date(s.at).toLocaleString()}</span></div><div style="text-align:right"><b>${s.score}%</b><br><span>${s.correct}/${s.total} correct</span></div></div>`).join(""):`<p class="muted">No completed simulations yet. Your topic practice answers still count toward topic accuracy.</p>`}
document.getElementById("reset-progress").addEventListener("click",()=>{if(confirm("This clears all CloudReady progress saved in this browser. This cannot be undone.")){state={attempts:[],sessions:[],flashKnown:[],flashReview:[]};saveState();renderProgress();toast("Local progress reset")}})
document.getElementById("plan-date").min=new Date(Date.now()+86400000).toISOString().slice(0,10);
renderDashboard();renderFlash();