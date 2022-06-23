import { AuthProvider } from "./auth"
import { AppRouter } from "./router/AppRouter"

export const EmployeesApp = () => {
  return (
    <AuthProvider>
      <AppRouter/>
    </AuthProvider>
  )
}
