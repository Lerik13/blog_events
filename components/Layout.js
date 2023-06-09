import React from 'react'
import Head from 'next/head'
import Header from './Header'
import Search from './Search'

const Layout = ({ title, keywords, description, children }) => {
	return (
		<div>
			<Head>
				<title>{title}</title>
				<meta name='keywords' content={keywords} />
				<meta name='description' content={description} />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			
			<Header />
			<Search />
			<main className='container mx-auto my-7'>
				{children}
			</main>
		</div>
	)
}

export default Layout

Layout.defaultProps = {
	title: 'Welcome to MyBlog about events',
	keywords: 'event, party, entertainment',
	description: 'Good info about kids parties',
}