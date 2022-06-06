import { UseDisclosureReturn, useDisclosure } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import { createContext, ReactNode } from "react";

interface SidebarDrawerProviderProps {
    children: ReactNode
}


type SudebarDrawerContextData = UseDisclosureReturn

const SidebarDrawerContext = createContext({} as SudebarDrawerContextData)


export function SidebarDrawerProvider( { children }: SidebarDrawerProviderProps) {
    const disclosure = useDisclosure()
    const router = useRouter()

    useEffect(() => {
        disclosure.onClose()
    }, [router.asPath])

    return (
        <SidebarDrawerContext.Provider value={disclosure}>
            {children}
        </SidebarDrawerContext.Provider>
    )
}

export const useSidebarDrawer = () => useContext(SidebarDrawerContext)