"use client"

import { getUserApi, signinApi, signupApi } from '@/services/authServices';
import { useRouter } from 'next/navigation';
import React, { createContext, useContext, useEffect, useReducer } from 'react'
import toast from 'react-hot-toast';
const AuthContext = createContext();
const initialState = {
    isLoading: true,
    isAuthenticate: false,
    user: null,
    error: null
}
const authReducer = (state, action) => {
    switch (action.type) {
        case 'loading':
            return {
                ...state,
                isLoading: true
            }
        case 'signin':
            return {
                ...state,
                isLoading: false,
                isAuthenticate: true,
                user: action.payload
            }

        case 'user/loaded':
            return {
                ...state,
                isLoading: false,
                user: action.payload
            }
        case 'rejected':
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
    }
}
function AuthProvider({ children }) {
    const [{ isLoading, isAuthenticate, user, error }, dispatch] = useReducer(authReducer, initialState)
    const router = useRouter()

    useEffect(() => {
        async function fetchData() {
            await getUser();
        }
        fetchData()
    }, [])

    async function signin(data) {
        dispatch({ type: 'loading' });
        try {
            const { user, message } = await signinApi(data);
            dispatch({ type: 'signin', payload: user });
            toast.success(message)
            router.push("/dashboard")
        } catch (error) {
            const errorMessage = error?.response?.data?.message
            dispatch({ type: 'rejected', payload: errorMessage });
            toast.error(errorMessage)
        }
    }

    async function signup(data) {
        dispatch({ type: 'loading' });
        try {
            const { user, message } = await signupApi(data)
            dispatch({ type: 'signup', payload: user });
            toast.success(message)
            router.push("/profile")
        } catch (error) {
            const errorMessage = error?.response?.data?.message
            dispatch({ type: 'rejected', payload: errorMessage });
            toast.error(errorMessage)
        }

    }

    async function getUser() {
        dispatch({ type: 'loading' });
        try {
            const { user } = await getUserApi()
            dispatch({ type: 'user/loaded', payload: user });
        } catch (error) {
            const errorMessage = error?.response?.data?.message
            dispatch({ type: 'rejected', payload: errorMessage });
            console.error(errorMessage);
        }
    }

    return (<AuthContext.Provider value={{ isLoading, isAuthenticate, user, signin, signup }}>{children}</AuthContext.Provider>)
}
export default AuthProvider

export function useAuth(params) {
    const context = useContext(AuthContext);
    if (context === undefined) throw new Error('Not found AuthContext...')
    return context
}