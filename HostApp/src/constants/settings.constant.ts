import Settings from "../interfaces/settings.interface";

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
          route:"/home"
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
          icon:"fa FaUserPlus",
          route:"/referir"
        }
      ],
    },
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
          route:"/home"
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
  },
};
