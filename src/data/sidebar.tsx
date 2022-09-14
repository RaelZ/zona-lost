import {
  House,
  BarChartOutlined,
  FeedOutlined,
  ContactPage,
} from "@mui/icons-material"

export const sidebar = [
  {
    id: 1,
    label: "Resumo",
    icon: <House />,
    path: "/home",
  },
  {
    id: 2,
    label: "Anúncios",
    icon: <BarChartOutlined />,
    path: "/news",
  },
  {
    id: 3,
    label: "Qode Journal",
    icon: <FeedOutlined />,
    path: "/qode-journal",
  },
  {
    id: 4,
    label: "Ubuntus",
    icon: <ContactPage />,
    path: "/ubuntos",
  },
]
