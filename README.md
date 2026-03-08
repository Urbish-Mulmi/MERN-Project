# MomoCuisine

**Live Demo:** https://momocuisine.vercel.app

MomoCuisine is a web application for ordering momos and other food items. Users can browse the menu, add items to the cart and place orders. 
Only **authenticated users** can complete orders through **eSewa payment integration**.

---

## 🛠 Tech Stack

- **Frontend:** React + Tailwind CSS  
- **Routing:** React Router v6 (SPA navigation)  
- **Authentication:** Auth0  
- **Payment:** eSewa  
- **Deployment:** Vercel  

> Note: No Express or MongoDB backend is used. The project focuses on frontend architecture and third-party integrations.

---

## 📌 Domain Configuration

If the **deployment domain changes**, the **Auth0 Application URI must be updated** to prevent login/signup failures.

Current domain:  
`https://momocuisine.vercel.app`

---

## ⚙️ Technical Notes

- **SPA Architecture:** Client-side navigation without full page reloads.

- **Routing:** Implemented using **React Router v6**
  - `<Routes>` + `<Route>` for page mapping
  - `<Outlet>` for nested layout rendering
  - **Layout Wrapper:** `<PublicLayout>` manages shared page layout
  - **Protected Routes:** `Menu`, `Profile` wrapped with `<ProtectedRoutes>` (Auth0 required)
  - **Dynamic Routes:** `/product-details/:id` rendered using `useParams()`

- **Component Structure:** Pages organized into reusable React components.

- **Payment Flow:** eSewa integration for order checkout.

---
