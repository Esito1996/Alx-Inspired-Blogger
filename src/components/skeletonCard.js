import Skeleton from 'react-loading-skeleton';

const SkeletonCard = () => {
  return (
    <div className="card">
        <p className="title">{<Skeleton />}</p>
        <p className="description"><Skeleton count={4} /></p>
        <p className="control">
          <Skeleton width="60px" />
        </p>
    </div>
  )
}
export default SkeletonCard;