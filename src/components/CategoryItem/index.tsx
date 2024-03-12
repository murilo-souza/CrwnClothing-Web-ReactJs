import './styles.scss'

export interface CategoryItemProps {
  id: number
  title: string
  imageUrl: string
}

interface CategoryItemPropsData {
  category: CategoryItemProps
}

export function CategoryItem({ category }: CategoryItemPropsData) {
  return (
    <div className="category-container">
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${category.imageUrl})`,
        }}
      />
      {/* <img src="" alt="" /> */}
      <div className="category-body-container">
        <h2>{category.title}</h2>
        <p>Shop now</p>
      </div>
    </div>
  )
}
