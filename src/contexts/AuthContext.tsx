import React, { createContext, ReactNode, useState } from 'react';

export interface AuthContextType {
	token: string;
	setToken: (token: string) => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
	children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
	const [token, setToken] = useState<string>('');
	return <AuthContext.Provider value={{ token, setToken }}>{children}</AuthContext.Provider>;
};
