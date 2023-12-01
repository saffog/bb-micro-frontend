import Settings from "../interfaces/settings.interface";
import { companyDashboardAppPrefix, internetBankingMenuAppPrefix, personalDashboardAppPrefix } from "./routes.constant";

export const settings: Settings = {
  ENTERPRISE: {
    label: "Cuenta Empresarial",
    color: "#F9CB9C",
    icon: "FaLandmark",
    menu: {
      options: [
        {
          title:"Inicio",
          icon:"FaHome",
          route:`${internetBankingMenuAppPrefix}`
        },
        {
          title:"Inversiones",
          icon:"FaChartLine",
          route:"/inversiones"
        },
        {
          title:"Pagar",
          icon:"FaDollarSign",
          route:"/pagar"
        },
        {
          title:"Envios",
          icon:"FaTruck",
          route:"/envios"
        },
        {
          title:"Nuevos Productos",
          icon:"FaPlus",
          route:"/productos"
        },
        {
          title:"Notificaciones",
          icon:"FaBell",
          route:"/notificaciones"
        },
        {
          title:"Referir amigo",
          icon:"FaUserPlus",
          route:"/referir"
        }
      ],
    },
    contentFolder:"company",
    content:"CompanyDashboardBase"
  },
  PERSONAL: {
    label: "Cuenta Personal",
    color: "#9FC5F8",
    icon: "FaUser",
    menu: {
      options: [
        {
          title:"Inicio",
          icon:"FaHome",
          route:`${internetBankingMenuAppPrefix}`
        },
        {
          title:"Pagar",
          icon:"FaDollarSign",
          route:"/pagar"
        },
        {
          title:"Nuevos Productos",
          icon:"FaPlus",
          route:"/productos"
        },
        {
          title:"Notificaciones",
          icon:"FaBell",
          route:"/notificaciones"
        },
        {
          title:"Referir amigo",
          icon:"FaUserPlus",
          route:"/referir"
        }
      ],
    },
    contentFolder:"personal",
    content:"PersonalDashboardBase"

  },
};
