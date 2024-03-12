import './category-item.styles.scss'

interface CategoryItemProps {
  title: string
  imageUrl: string
}

export function CategoryItem({ title, imageUrl }: CategoryItemProps) {
  return (
    <div className="category-container">
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      {/* <img src="" alt="" /> */}
      <div className="category-body-container">
        <h2>{title}</h2>
        <p>Shop now</p>
      </div>
    </div>
  )
}
