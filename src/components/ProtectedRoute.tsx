import type React from "react"
import { isLoggedIn } from "../auth"
import { Navigate } from "react-router"

interface ProtectedRouteProps {
    children: React.ReactNode
}
export const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
    if (!isLoggedIn()) {
        return <Navigate to="/login" replace />
    }
    return <> {children} </>
}