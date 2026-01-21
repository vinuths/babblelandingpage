import {
  AiOutlineAudit,
  AiOutlineFileProtect,
  AiOutlineTeam,
  AiOutlineSafetyCertificate,
} from "react-icons/ai";

export const servicesData = [
  {
    title: "Establishment Compliances",
    path: "/services/compliance-mgmt",
    description: "End-to-end statutory compliance management",
    icon: <AiOutlineFileProtect size={36} />,
  },
  {
    title: "Payroll Administration",
    path: "/services/payroll",
    description: "Accurate, compliant payroll processing",
    icon: <AiOutlineTeam size={36} />,
  },
  {
    title: "Audit Management",
    path: "/services/audits",
    description: "Internal & external audit readiness",
    icon: <AiOutlineAudit size={36} />,
  },
  {
    title: "Risk Management",
    path: "/services/risk-management",
    description: "Governance & risk control frameworks",
    icon: <AiOutlineSafetyCertificate size={36} />,
  },
];
