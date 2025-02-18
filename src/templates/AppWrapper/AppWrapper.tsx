'use client'

import {AwaitMount} from '@components/AwaitMount'
import {ColorSchemeProvider} from '@contexts/ColorScheme'
import {useColorScheme} from '@hooks/use-color-scheme'
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'
import type {NextPage} from 'next'
import type {ReactNode} from 'react'

interface Props {
	children: ReactNode,
}

const queryClient = new QueryClient( )

const AppWrapper: NextPage<Props> = ({children}) => {
	// Set up global state in the global context.
	const colorSchemeHook = useColorScheme( )

	return (
		<ColorSchemeProvider value = {colorSchemeHook}>
			<QueryClientProvider client = {queryClient}>
				<AwaitMount>
					{children}
				</AwaitMount>
			</QueryClientProvider>
		</ColorSchemeProvider>
	)
}

export {AppWrapper}
