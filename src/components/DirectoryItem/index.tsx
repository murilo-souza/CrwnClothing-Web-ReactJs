import './styles.scss'

export interface DirectoryItemProps {
  id: number
  title: string
  imageUrl: string
}

interface DirectoryItemPropsData {
  category: DirectoryItemProps
}

export function DirectoryItem({ category }: DirectoryItemPropsData) {
  return (
    <div className="directory-item-container">
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${category.imageUrl})`,
        }}
      />
      {/* <img src="" alt="" /> */}
      <div className="directory-item-body-container">
        <h2>{category.title}</h2>
        <p>Shop now</p>
      </div>
    </div>
  )
}
