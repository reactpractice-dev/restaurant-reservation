import { createRoot } from "react-dom/client";
import RestaurantReservation from "./restaurant-reservation";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<RestaurantReservation />);
