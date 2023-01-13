import Image from 'next/image'
import React from 'react'
import styles from './footer.module.scss'
import {combineClassNames} from '@utilities/combine-class-names'

type Props = Record<never, never>

const Footer: React.FC<Props> = ( ) => (
	<footer className={styles.footer}>
		<a
			className='reset'
			href='https://vercel.com/home'
			target='_blank'
			rel='noopener noreferrer'
		>
			Powered by
			<span className={combineClassNames([
				styles.logo,
				'invert-in-dark-mode',
			])}>
				<Image
					src='/vercel.svg'
					alt='Vercel Logo'
					width={72}
					height={16}
				/>
			</span>
		</a>
	</footer>
)

export {Footer}
