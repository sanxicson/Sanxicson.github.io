import { Server, Shield, Network, Terminal, Database, Ticket } from "lucide-react";

export const skills = [
  {
    category: "Systems & Administration",
    items: [
      "Active Directory",
      "Group Policy Management",
      "Windows Server",
      "Linux (Ubuntu)",
      "LAMP Stack Deployment",
      "Virtualization (VMs)",
      "Dual Boot Configuration",
    ],
  },
  {
    category: "Networking & Security",
    items: [
      "Network Infrastructure",
      "Firewall Management",
      "VLAN Segmentation",
      "VPN Remote Access",
      "OPNsense",
      "DHCP",
    ],
  },
  {
    category: "IT Service Operations",
    items: [
      "IT Asset Management (Snipe-IT)",
      "Helpdesk Administration (osTicket)",
      "ITIL Incident Workflows",
      "Ticketing Systems",
      "Lifecycle Workflows",
    ],
  },
  {
    category: "Soft Skills & Methodologies",
    items: [
      "Troubleshooting",
      "Customer Communication",
      "Detail-Oriented",
      "Problem-Solving",
    ],
  },
];

export const projects = [
  {
    category: "Enterprise Infrastructure Lab",
    title: "Active Directory & GPO",
    description: "Deployed Windows Server DC to manage identities/security; implemented GPOs for automated software distribution, restricted system settings, and enforced password complexity.",
    icon: Shield,
  },
  {
    category: "Enterprise Infrastructure Lab",
    title: "Network Segmentation",
    description: "Engineered a virtualized network using OPNsense with VLAN-based segmentation to isolate server/client traffic, implementing DHCP services and secure VPN remote access.",
    icon: Network,
  },
  {
    category: "Enterprise Infrastructure Lab",
    title: "Systems Administration",
    description: "Provisioned and maintained Ubuntu Linux VMs; deployed a full LAMP stack to support internal tools, optimizing memory allocation and dependency management (Composer/CLI).",
    icon: Terminal,
  },
  {
    category: "IT Service Operations Lab",
    title: "IT Asset Management (Snipe-IT)",
    description: "Designed inventory databases and lifecycle workflows for hardware tracking; mapped check-in/check-out procedures to employee profiles for audit-ready chain-of-custody records.",
    icon: Database,
  },
  {
    category: "IT Service Operations Lab",
    title: "Helpdesk Administration (osTicket)",
    description: "Administered an open-source ticketing system to simulate ITIL-compliant incident workflows, bridging the gap between support requests and physical hardware deployment.",
    icon: Ticket,
  },
];
