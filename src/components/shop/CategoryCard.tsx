import Image from 'next/image'
import Link from 'next/link'
import { Category } from '@/types/product'

interface Props {
  category: Category
}

const CategoryCard = ({ category }: Props) => {
  return (
    <Link href={`/shop/${category.slug}`}>
      <div className="rounded-xl overflow-hidden border group">
        <Image
          src={category.banner}
          alt={category.title}
          width={500}
          height={300}
          className="w-full h-52 object-cover group-hover:scale-105 duration-300"
        />

        <div className="p-4">
          <h2 className="text-2xl font-bold">{category.title}</h2>

          <p className="text-gray-500 mt-2">{category.description}</p>
        </div>
      </div>
    </Link>
  )
}

export default CategoryCard
