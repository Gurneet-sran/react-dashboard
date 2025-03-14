import { createRootRoute, createRoute } from '@tanstack/react-router'
import { DashboardLayout } from '@Layouts/DashboardLayout'
import { routes } from './routes.config'

// Root layout route
const rootRoute = createRootRoute({
  component: DashboardLayout,
})

// Create routes from configuration
const routeConfigs = Object.values(routes).map(config => 
  createRoute({
    getParentRoute: () => rootRoute,
    path: config.path,
    component: config.component,
  })
)

// Combine all routes
export const routeTree = rootRoute.addChildren(routeConfigs) 