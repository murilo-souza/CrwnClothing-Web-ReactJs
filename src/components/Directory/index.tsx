import { DirectoryItem, DirectoryItemProps } from '../DirectoryItem'
import './styles.scss'

interface DirectoryProps {
  categories: DirectoryItemProps[]
}

export function Directory({ categories }: DirectoryProps) {
  return (
    <div className="directory-container">
      {categories.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </div>
  )
}
