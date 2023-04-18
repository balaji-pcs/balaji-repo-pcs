import slack from "../images/slack.png";
import dropbox from "../images/dropbox.png";
import github from "../images/github.png";
import lyft from "../images/lyft.jpg";
import medium from "../images/Medium.png";

export const products = [
  {
    icon: <img src={dropbox} width="30px" height="30px" />,
    lable: "DropBox",
    update: 2,
  },
  {
    icon: <img src={medium} width="30px" height="30px" />,
    lable: "Medium Corporation",
    update: 2,
  },
  {
    icon: <img src={slack} width="30px" height="30px" />,
    lable: "slack",
    update: 3,
  },
  {
    icon: <img src={lyft} width="30px" height="30px" />,
    lable: "lyft",
    update: 5,
  },
  {
    icon: <img src={github} width="30px" height="30px" />,
    lable: "GitHub",
    update: 9,
  },
];
export const orders = [
  { orderRef: "CDD1049", customer: "", date: "12/04/2019", status: "PENDING" },
  {
    orderRef: "CDD1048",
    customer: "B",
    date: "12/04/2019",
    status: "DELEVERED",
  },
  {
    orderRef: "CDD1047",
    customer: "C",
    date: "11/04/2019",
    status: "REFUNDED",
  },
  { orderRef: "CDD1046", customer: "D", date: "09/04/2019", status: "PENDING" },
  {
    orderRef: "CDD1045",
    customer: "E",
    date: "08/04/2019",
    status: "DELEVERED",
  },
  {
    orderRef: "CDD1044",
    customer: "F",
    date: "08/04/2019",
    status: "DELEVERED",
  },
];
