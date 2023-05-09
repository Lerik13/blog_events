import Link from 'next/link'
import React from 'react'

const CategoryList = ({ categories }) => {
	return (
		<div className="w-full p-5 bg-white rounded-lg shadow-md mt-6">
			<h3 className="text-2xl bg-gray-800 text-white p-3 rounded">
				Blog Categories
			</h3>
			<ul className="grid grid-cols-1 divide-y divide-gray-400">
				{categories.map((category, index) => (
					<Link key={index} href={`/blog/category/${category.toLowerCase()}`}>
						<li className="p-4 cursor-pointer hover:bg-gray-50">{category}</li>
					</Link>
				))}
			</ul>
		</div>
	)
}

export default CategoryList