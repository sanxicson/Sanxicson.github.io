import { Server, Shield, Network } from "lucide-react";

export const skills = [
  {
    category: "Systems & Administration",
    items: [
      "Active Directory",
      "Group Policy Management",
      "Windows Server",
      "Dual Boot Configuration",
    ],
  },
  {
    category: "Networking & Security",
    items: [
      "Network Infrastructure",
      "Firewall Management",
      "VLAN Segmentation",
      "VPN",
      "OPNsense",
      "DHCP",
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
    title: "Active Directory Administration",
    situation:
      "A simulated enterprise environment required centralized identity management and structural resource organization.",
    task: "Establish a robust domain infrastructure to securely manage user access and simplify client workstation onboarding.",
    action:
      "Deployed Windows Server as a Domain Controller, meticulously designing Organizational Units (OUs) and security groups to organize resources.",
    result:
      "Streamlined domain joining for client workstations and established a highly scalable, secure foundation for enterprise identity management.",
    icon: Server,
  },
  {
    title: "Group Policy Management",
    situation:
      "The organization needed to enforce strict security standards and automate system configurations across all network workstations.",
    task: "Implement automated policies to secure systems, distribute software, and manage user environment settings without manual intervention.",
    action:
      "Developed and deployed comprehensive GPOs covering automated software distribution, network drive mapping, system setting restrictions, and complex password enforcement.",
    result:
      "Significantly improved the organizational security posture and reduced administrative overhead through automated, domain-wide compliance.",
    icon: Shield,
  },
  {
    title: "Network Infrastructure & Security",
    situation:
      "A corporate network architecture lacked proper segmentation, secure remote access, and automated IP configuration.",
    task: "Engineer a secure, segmented, and fully functional virtualized network environment.",
    action:
      "Configured an OPNsense firewall with VLAN-based segmentation to isolate server and client traffic. Implemented DHCP services for automated IP management and established a secure VPN for remote access.",
    result:
      "Delivered a resilient, highly secure network architecture that protects critical assets while enabling flexible, secure remote connectivity.",
    icon: Network,
  },
];
