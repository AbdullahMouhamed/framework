import { createBrowserRouter, RouterProvider } from "react-router-dom"
import About from "./pages/aboutPage/AboutPage"
import Portfolio from './pages/portfolio/Portfolio';
import Form from './pages/form/Form';
import Hero from './components/hero/Hero';
import Layout from './components/layout/Layout';
export default function App() {

  const router = createBrowserRouter([
    {
      path: "/", element: <Layout />, children: [
        { path: "aboutpage", element: <About /> },
        { path: "portfolio", element: <Portfolio /> },
        { path: "form", element: <Form /> },
        { index: true, element: <Hero /> },
      ]
    }
  ])


  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}
