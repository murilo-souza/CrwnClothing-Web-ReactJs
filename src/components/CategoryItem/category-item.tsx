interface CategoryItemProps {
  title: string
}

export function CategoryItem({ title }: CategoryItemProps) {
  return (
    <div className="category-container">
      <div className="background-image" />
      {/* <img src="" alt="" /> */}
      <div className="category-body-container">
        <h2>{title}</h2>
        <p>Shop now</p>
      </div>
    </div>
  )
}
