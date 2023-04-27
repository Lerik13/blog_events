import Link from 'next/link'
import React from 'react'

const CategoryLabel = ({children}) => {
	const colorKey = {
		JavaScript: 'bg-orange-600',
		Python: 'bg-red-600',
		PHP: 'bg-amber-600',
		CSS: 'bg-lime-600',
	  }
	return (
		<div className={`px-2 py-1 text-gray-100 font-bold rounded ${colorKey[children]}`}>
			<Link href={`/blog/category/${children.toLowerCase()}`}>
				{children}
			</Link>
		</div>
	)
}

export default CategoryLabel